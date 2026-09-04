import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

const API_URL = 'https://cyberverse.fastapicloud.dev/api/v1'

function ProtectedRoute({ children }) {

  const [checking, setChecking] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {

    async function verifyToken() {

      const token = localStorage.getItem('access_token')

      // No token
      if (!token) {
        setAuthenticated(false)
        setChecking(false)
        return
      }

      try {

        const response = await fetch(
          `${API_URL}/auth/me`,
          {
            method: 'GET',

            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        if (!response.ok) {

          // Token is invalid or expired
          localStorage.removeItem('access_token')
          localStorage.removeItem('isLoggedIn')
          localStorage.removeItem('cyberverseUser')

          setAuthenticated(false)
          setChecking(false)

          return
        }

        const user = await response.json()

        // Keep user information updated
        localStorage.setItem(
          'cyberverseUser',
          JSON.stringify(user)
        )

        setAuthenticated(true)

      } catch (error) {

        console.error(
          'Authentication check failed:',
          error
        )

        setAuthenticated(false)

      } finally {

        setChecking(false)

      }
    }

    verifyToken()

  }, [])


  // While checking JWT
  if (checking) {

    return (
      <div style={{
        textAlign: 'center',
        marginTop: '100px'
      }}>
        Checking authentication...
      </div>
    )

  }


  // Not authenticated
  if (!authenticated) {

    return (
      <Navigate
        to="/login"
        replace
      />
    )

  }


  // Authenticated
  return children
}

export default ProtectedRoute
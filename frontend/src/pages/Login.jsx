import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Login.css'

const API_URL = 'https://cyberverse.fastapicloud.dev/api/v1'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)


  async function handleLogin(e) {

    e.preventDefault()

    setError('')
    setLoading(true)

    try {

      const response = await fetch(
        `${API_URL}/auth/login`,
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            email,
            password
          })
        }
      )


      const data = await response.json()


      if (!response.ok) {

        throw new Error(
          data.detail || 'Invalid email or password'
        )

      }


      // Save JWT token

      localStorage.setItem(
        'access_token',
        data.access_token
      )


      // Save user information

      localStorage.setItem(
        'cyberverseUser',
        JSON.stringify(data.user)
      )


      // Keep login state

      localStorage.setItem(
        'isLoggedIn',
        'true'
      )


      // Go to dashboard

      navigate('/dashboard')


    } catch (err) {

      console.error(err)

      setError(
        err.message ||
        'Login failed. Please try again.'
      )

    } finally {

      setLoading(false)

    }
  }


  return (
    <>
      <Navbar />

      <div className="auth-page">

        <form
          className="auth-box"
          onSubmit={handleLogin}
        >

          <h1>
            Welcome Back 🔐
          </h1>

          <p>
            Login to your CyberVerse account
          </p>


          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />


          <button
            type="submit"
            disabled={loading}
          >

            {loading
              ? 'Logging in...'
              : 'Login'}

          </button>


          {error && (

            <p style={{ color: 'red' }}>
              {error}
            </p>

          )}

        </form>

      </div>
    </>
  )
}

export default Login
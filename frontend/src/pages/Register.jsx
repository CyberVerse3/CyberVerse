import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Register.css'

const API_URL = 'http://127.0.0.1:8000/api/v1'

function Register() {

  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)


  async function handleRegister(e) {

    e.preventDefault()

    setError('')
    setLoading(true)

    try {

      const response = await fetch(
        `${API_URL}/auth/register`,
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify({
            username,
            email,
            password
          })
        }
      )


      const data = await response.json()


      if (!response.ok) {

        throw new Error(
          data.detail || 'Registration failed'
        )

      }


      // Registration successful
      alert('Account created successfully! 🎉')

      // Go to Login
      navigate('/login')


    } catch (err) {

      console.error(err)

      setError(
        err.message ||
        'Registration failed. Please try again.'
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
          onSubmit={handleRegister}
        >

          <h1>
            Create Account 🚀
          </h1>

          <p>
            Join CyberVerse Academy
          </p>


          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            required
          />


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
              ? 'Creating Account...'
              : 'Register'}

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

export default Register
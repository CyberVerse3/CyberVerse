import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './NewsDetails.css'

function NewsDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [news, setNews] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
   fetch(`https://cyberverse.fastapicloud.dev/api/v1/news`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch news')
        }

        return response.json()
      })
      .then((data) => {
        const selectedNews = data.find(
          (item) => item.id === Number(id)
        )

        if (!selectedNews) {
          throw new Error('News article not found')
        }

        setNews(selectedNews)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="news-details-message">
          <p>Loading news article...</p>
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <Navbar />

        <div className="news-details-message error">
          <h2>Unable to load article</h2>
          <p>{error}</p>

          <button onClick={() => navigate('/news')}>
            ← Back to News
          </button>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />

      <main className="news-details-page">

        <button
          className="back-button"
          onClick={() => navigate('/news')}
        >
          ← Back to News
        </button>

        <article className="news-details-card">

          <div className="news-details-top">

            <span
              className={`severity ${news.severity?.toLowerCase()}`}
            >
              {news.severity || 'Unknown'}
            </span>

            {news.is_featured && (
              <span className="featured">
                ⭐ Featured
              </span>
            )}

          </div>

          <div className="news-details-icon">
            🛡️
          </div>

          <h1>
            {news.title}
          </h1>

          <div className="news-meta">

            <span>
              📂 {news.category || 'General'}
            </span>

            <span>
              📰 {news.source || 'CyberVerse'}
            </span>

            <span>
              🕒{' '}
              {news.published_at
                ? new Date(
                    news.published_at
                  ).toLocaleDateString()
                : 'Recently'}
            </span>

          </div>

          <div className="news-summary">
            {news.summary}
          </div>

          <div className="news-content">
            <h2>Article Details</h2>

            <p>
              {news.content || news.summary}
            </p>
          </div>

        </article>

      </main>
    </>
  )
}

export default NewsDetails
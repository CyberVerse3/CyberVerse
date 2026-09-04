const API_URL = 'https://cyberverse.fastapicloud.dev/api/v1'

export async function getNews() {
  const response = await fetch(`${API_URL}/news`)

  if (!response.ok) {
    throw new Error('Failed to fetch news')
  }

  return response.json()
}
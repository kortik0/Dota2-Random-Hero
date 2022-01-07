export default async (req, res) => {
  const request = await fetch("https://api.opendota.com/api/heroes")
  const data = await request.json()
  res.json(data)
}

export default async (req, res) => {
    const response = await fetch('http://127.0.0.1:8090/api/collections/quotes/records')
    const data = await response.json()
    res.send(data)
}
export default async (req, res) => {
    const { id } = req.query 
    const response = await fetch('http://127.0.0.1:8090/api/collections/partners/records/' + id)
    const data = await response.json()
    res.send(data)
}
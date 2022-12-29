import PocketBase from 'pocketbase'
const pb = new PocketBase('http://127.0.0.1:8090')

export default async (req, res) => {
    const { id } = req.query
    console.log(id)
    /*const response = await fetch('http://127.0.0.1:8090/api/collections/repairs/records')
    const data = await response.json()
    res.send(data)*/

    const result = await pb.collection('repairs').getList(1, 20, {
        filter: 'company="7jebvwmcn3rbob"'
    })
    res.send(result)
}
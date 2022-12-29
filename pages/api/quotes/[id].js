import PocketBase from 'pocketbase'
const pb = new PocketBase('https://rms-cloud.pockethost.io')

export default async (req, res) => {
    const { id } = req.query

    const result = await pb.collection('quotes').getList(1, 20, {
        filter: `id= "${id}"`
    })

    res.send(result)
}
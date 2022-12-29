import PocketBase from 'pocketbase'
const pb = new PocketBase('https://rms-cloud.pockethost.io')

export default async (req, res) => {
    const result = await pb.collection('repairs').getList(1, 20)
    res.send(result)
}
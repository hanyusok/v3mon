import { MongoClient } from "mongodb";
const connString = process.env.MONGO_URI || ''
const client = new MongoClient(connString)
let conn

try {
    conn = await client.connect()
} catch (err) {
    console.error(err)
}

let db = conn.db("userDb")

export default db
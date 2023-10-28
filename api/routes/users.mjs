import express from 'express'
import db from '../db/conn.mjs'
import { ObjectId } from 'mongodb'

const router = express.Router()

//get a list of users
router.get("/", async(req, res) => {
    let collection = await db.collection("users")
    let results = await collection.find({}).limit(50).toArray()

    res.send(results).status(200)
})

//fetches the latest users
router.get("/latest", async(req, res) => {
    let collection = await db.collection("users")
    let results = await collection.aggregate([
        {"$project": {"name":1, "age":1}},
        {"$sort": {"age": -1}},
        {"$limit": 2}
    ]).toArray()

    res.send(results).status(200)
})


//get a single user
router.get("/:id", async(req, res) => {
    let collection = await db.collection("users")
    let query = {_id: ObjectId(req.params.id)}
    let result = await collection.findOne(query)

    if (!result) res.send("not found").status(404)
    else res.send(result).status(200)
})

//add a new user to the collection
router.post("/", async(req, res) => {
    let collection = await db.collection("users")
    let newDocument = req.body
    newDocument.date = new Date()
    let result = await collection.insertOne(newDocument)
    res.send(result).status(204)
})

//update the user with a new item(visit)
router.patch("/visit/:id", async (req, res) => {
    const query = { _id: ObjectId(req.params.id)}
    const updates = {
        $push: { visits: req.body}
    }
    let collection = await db.collection("users")
    let result = await collection.updateOne(query, updates)

    res.send(result).status(200)
})

//delete user
router.delete("/:id", async( req, res) => {
    const query = { _id: ObjectId(req.params.id)}
    const collection = db.collection("users")
    let result = await collection.deleteOne(query)

    res.send(result).status(200)
})


export default router
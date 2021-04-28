

const express = require('express')
const bodyParser = require('body-parser')
const cors=require('cors')
const { MongoClient,ObjectID } = require("mongodb");


const uri =
    "mongodb+srv://user1:user111@cluster0.socov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

app.use(cors())

app.get("/", (req, res) => {
    res.send("todos-api-server")
})

app.get("/todos", async (req, res) => {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db("todos-db");
        const todos = database.collection("todos");
        const cursor = await todos.find({})
        // print a message if no documents were found
        if ((await cursor.count()) === 0) {
            res.json({ message: 'No Todos' })
            return;
        }
        // replace console.dir with your callback to access individual elements
        let result = []
        await cursor.forEach(todo => {
            result.push(todo)
        });
        res.json(result)
    }
    catch (e) {
        res.status(5000).json(e)
    }
    finally {
        await client.close();
    }
})

app.post('/todos', bodyParser.json(), async (req, res) => {
    let { title } = req.body
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db("todos-db");
        const todos = database.collection("todos");
        const newTodo = {
            title,
            completed: false
        }
        const result = await todos.insertOne(newTodo)
        res.status(201).json({ id: result.insertedId })

    } catch (e) {
        res.status(5000).json(e)
    }
    finally {
        await client.close();
    }
})

app.delete("/todos/:todoId",async (req,res)=>{
    const todoId=req.params.todoId;
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const database = client.db("todos-db");
        const todos = database.collection("todos");
        const result=await todos.findOneAndDelete({_id:ObjectID(todoId)})
        res.json({message:'Todo deleted'})
    }
    catch (e) {
        res.status(5000).json(e)
    }
    finally {
        await client.close();
    }
})

app.listen(3000, () => {
    console.log("server up");
})
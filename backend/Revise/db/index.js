import express from 'express'
import connectDB from "./config.js";
import UserModel from './models/user/userSchema.js'


connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send(new Date().toLocaleString())
})

app.post('/users', async (req, res) => {
    const user = new UserModel(req.body)
    await user.save();
    res.status(201).send({
        status: 201,
        message: "Created Success"
    })
})

app.get('/users', async (req, res) => {
    const user = await UserModel.find()
    res.status(200).send(
        {
            status: 200,
            message: user
        }
    )
})


app.delete('/users/:id', async (req, res) => {
    const user = await UserModel.findByIdAndDelete(req.params.id)
    res.status(203).send(
        {
            status: 203,
            message: 'user deleted'
        }
    )
})


app.patch('/users/:id', async (req, res) => {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).send(
        {
            status: 200,
            message: 'user updated'
        }
    )
})

app.listen(5000, () => {
    console.log('Express Connected')
})

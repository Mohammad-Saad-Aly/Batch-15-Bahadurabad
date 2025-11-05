import express from 'express'
import connectDB from "./config.js";
import UserModel from './models/user/userSchema.js'
import bcrypt from 'bcrypt'

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send(new Date().toLocaleString())
})

app.post('/users', async (req, res) => {

    const { username, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new UserModel({
        username,
        email,
        password: hashedPassword
    })


    await user.save();
    res.status(201).send({
        status: 201,
        message: "Created Success"
    })
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body

    // 1. Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(404).send({
            status: 404,
            message: "User not found"
        });
    }

    console.log("password=> ", password)
    console.log("user.password=> ", user.password)
    console.log("user=> ", user)

    // 2. Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(401).send({
            status: 401,
            message: "Invalid password"
        });
    }

    // 3. If password correct
    res.status(200).send({
        status: 200,
        message: "Login successful",
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    });
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

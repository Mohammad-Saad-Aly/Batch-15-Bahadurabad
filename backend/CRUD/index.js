import express from 'express';

const app = express();
app.use(express.json())


let allUsers = []

app.get('/', (req, res) => {
    res.send(new Date().toString().slice(0, 24))
})

app.get('/users', (req, res) => {
    res.send(allUsers)
})

app.post('/users', (req, res) => {
    let newArray = req.body.map((value) => {
        value.id = Math.round(Math.random() * 999999)
        return value
    })
    allUsers.push(...newArray)
    console.log('allUsers=> ', allUsers)
    res.send('user added successfully.')
})

app.delete('/users/:id', (req, res) => {
    const { id } = req.params
    allUsers = allUsers.filter((value) => {
        return value.id != id
    })
    res.send('user deleted successfully...')
})


app.patch('/users/:id', (req, res) => {
    const { id } = req.params
    const user = req.body
    const UpdateUser = allUsers.find(data => {
        return data.id == id
    })
    Object.assign(UpdateUser, { ...user, id })
    res.send('user updated successfully')
})

app.listen(3001, () => {
    console.log("server is running.")
})
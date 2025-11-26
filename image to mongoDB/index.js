import express from 'express'
import { v2 as cloudinary } from 'cloudinary'
import 'dotenv/config'
import fs from 'fs'
import path from 'path'
import mongoose from 'mongoose'
import multer from 'multer'
import filesss from './models/files/file.js'

const app = express()


mongoose.connect(`${process.env.DB_URL}`)

mongoose.connection.on('open', () => {
    console.log('mongoose connected successfully')
})

mongoose.connection.on('error', () => {
    console.log('mongoose error successfully')
})


app.get('/', (req, res) => {
    res.send(new Date().toString().slice(0, 25))
})

cloudinary.config({
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    cloud_name: process.env.CLOUD_NAME
})



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'assets/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

const upload = multer({ storage })


app.post('/profile', upload.single('image'), async (req, res) => {

    
    const filePath = req.file.path
    const uploaded = await cloudinary.uploader.upload(filePath, {
        folder: 'myImages/'
    })
     await filesss.create({
        imageURL: uploaded.secure_url
    })
    
    console.log(uploaded)
    fs.unlinkSync(filePath)
    res.json({
        message: 'image added successfully',
        url : uploaded.secure_url
    })
})


app.listen(process.env.PORT, () => {
    console.log('server is running')
})
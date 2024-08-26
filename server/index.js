import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import productRouter from './routes/productRoute.js'
import userRouter from './routes/userRoute.js'
import bodyParser from 'body-parser'
import cors from 'cors'


const app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cors())

const PORT = process.env.PORT || 3000

app.use('/api/product', productRouter)

app.use('/user', userRouter)

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Database Connected")
    app.listen(PORT, () => {
        console.log(`Server is listening on PORT ${PORT}....`)
    })
}).catch((err) => {console.log(err)})
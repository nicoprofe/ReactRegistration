import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import AuthRoute from './routes/AuthRoute.js'

const app = express()

//Middleware
app.use(bodyParser.json({limit:'30mb', extended: true}))
app.use(bodyParser.urlencoded({limit:'30mb', extended: true}))
app.use(cors())
dotenv.config()


//MongoDB
mongoose.connect(process.env.MONGO_DB, 
{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(process.env.PORT, ()=>console.log(`Listening port ${process.env.PORT}`)))
.catch((error)=>console.log(error))

//Routes
app.use('/auth', AuthRoute)
                               
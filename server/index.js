import express from 'express'
import { ConnectDb } from './config/db.js'
import todoRoutes from './routes/todo.routes.js'
import cors from 'cors'


const app = express()

app.use(express.json())
app.use(cors())

ConnectDb()



app.use("/todo",todoRoutes)

app.listen(3000,()=>{
    console.log("running!!")
})
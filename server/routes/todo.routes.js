import express from 'express'
import { CreateTodo, EditTodo, GetTodo } from '../controller/todo.controller.js'


const router = express.Router()


router.post("/create",CreateTodo)
router.put("/edit/:id",EditTodo)
router.get("/get",GetTodo)




export default router
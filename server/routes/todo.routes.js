import express from 'express'
import { CreateTodo, DeleteTodo, EditTodo, GetTodo } from '../controller/todo.controller.js'


const router = express.Router()


router.post("/create",CreateTodo)
router.put("/edit/:id",EditTodo)
router.get("/get",GetTodo)
router.delete("/delete/:id",DeleteTodo)




export default router
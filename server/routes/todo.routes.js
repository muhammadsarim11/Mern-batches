import express from 'express'
import { CreateTodo, DeleteTodo, GetTodo } from '../controller/todo.controller.js'


const router = express.Router()


router.post("/create",CreateTodo)
router.get("/get",GetTodo)
router.delete("/delete/:id",DeleteTodo)



export default router
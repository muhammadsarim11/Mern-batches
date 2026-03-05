import { todo } from "../model/todo.js"




export const CreateTodo = async(req,res)=>{

    const {title,description} =  req.body

    if(!title || !description){
        return res.status(404).json({
            message:"fill all field!"
        })
    }

const todos = await todo.create({
    title:title,
    description:description
})


res.status(200).json({
    message:"success",
    todos
})

}
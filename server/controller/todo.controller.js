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

export const EditTodo = async (req,res)=>{

    const {id} = req.params
    const {title,description} = req.body

    if(!title || !description){
            return res.status(404).json({
                message:"fill all field!"
            })
        }
    const updatedTodo = await todo.findByIdAndUpdate(id, { title, description }, { new: true })

    res.status(200).json({
        message: "Todo updated successfully",
        todo: updatedTodo
    })
}




export const GetTodo = async(req,res)=>{

    const todos = await todo.find()

    res.status(200).json({
        message:"success",
        todos
    })
}



export const DeleteTodo = async(req,res)=>{
    const {id} = req.params
    const deletedTodo = await todo.findByIdAndDelete(id)
    res.status(200).json({
        message:"success",
        deletedTodo
    })
}
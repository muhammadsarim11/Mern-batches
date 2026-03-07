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


export const GetTodo = async (req,res) => {

    const todos = await todo.find()

res.status(200).json({
    todos
})

}

export const DeleteTodo = async(req,res)=>{
    const {id} = req.params

await todo.deleteOne({
    _id:id
})

res.status(200).json({
    "message":"deleted"
})
}
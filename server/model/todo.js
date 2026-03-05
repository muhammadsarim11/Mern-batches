import mongoose  from "mongoose";


const TodoSchema = mongoose.Schema({
    title:{
        type:String,
        require:["this feild is required",true]
    },
    description:{
             type:String,
        require:["this feild is required",true]
    }

},{
    timestamps:true
})

export const todo = mongoose.model("todo",TodoSchema)
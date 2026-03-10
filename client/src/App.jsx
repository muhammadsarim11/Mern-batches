import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

const App = () => {
    const [title,setTitle]= useState("")
    const [description,setDescription] = useState("")
    const [todos,setTodos] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editingId, setEditingId] = useState(null)


    const fetchTodos = async () => {
        const res = await axios.get("http://localhost:3000/todo/get")
        setTodos(res.data.todos)
    }
    
    useEffect(()=>{
        fetchTodos()
    },[])
    
    const HandleEdit = (item)=>{
            setIsEditing(true)
            setEditingId(item._id)
            setTitle(item.title)
            setDescription(item.description)
        }
    
    const HandleSubmit = async()=>{
        console.log(title,description)
        
        if (isEditing) {
            await axios.put(`http://localhost:3000/todo/edit/${editingId}`,{
                title,description
            })
            setIsEditing(false)
            setEditingId(null)
        } else {
            await axios.post("http://localhost:3000/todo/create",{
                title,description
            })
        }
        console.log("done!")
        setTitle("")
        setDescription("")
        fetchTodos()
    }




  return (
    <div>
      
<div >
    <h1>make your todo list</h1>

    <div className='data'>  
        <input type="text"value={title}  onChange={(e)=>{
setTitle(e.target.value)
        }} />
        <input type="text" value={description} onChange={(e)=>{
setDescription(e.target.value)
        }} />
        <button onClick={()=>{
            HandleSubmit()
        }}>{isEditing ? "Update" : "click to add"}</button>
        {isEditing && (
            <button onClick={() => {
                setIsEditing(false)
                setEditingId(null)
                setTitle("")
                setDescription("")
            }}>Cancel</button>
        )}
    </div>
</div>
{todos.map((item)=>{
    return(
        <div key={item._id}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button onClick={()=>{
                HandleEdit(item)
            }}>edit</button>
        </div>
    )   
})}
    </div>
  )
}


export default App

import { useState, useEffect } from "react"
import axios from "axios"

const App = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [todos, setTodos] = useState([])
    const [editingId, setEditingId] = useState(null)
    const [IsEditing, setIsEditing] = useState(false)

    // Fetch todos once on page load
    useEffect(() => {
    (async()=>{
            const res = await axios.get("http://localhost:3000/todo/get")
        setTodos(res.data.todos)
    })()
    }, [todos])



    // Clear form and reset editing
    const clearForm = () => {
        setIsEditing(false)
        setTitle("")
        setDescription("")
        setEditingId(null)
    }

    // When user clicks Edit - populate form with todo data
    const handleEdit = (item) => {
        setIsEditing(true)  
        setTitle(item.title)
        setDescription(item.description)
        setEditingId(item._id)
    }

    // Delete a todo
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/todo/delete/${id}`)
        
    }

    // Add new or update existing
    const handleSubmit = async () => {
        if (editingId) {
            // Update mode
            await axios.put(`http://localhost:3000/todo/edit/${editingId}`, {
                title,
                description
            })
        } else {
            // Create mode
            await axios.post("http://localhost:3000/todo/create", {
                title,
                description
            })
        }
    
        clearForm()
    }


    return (
        <div>
            <h1>Make Your Todo List</h1>

            <div className='data'>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={handleSubmit}>
                    {IsEditing ? "Update" : "Add Todo"}
                </button>

                {IsEditing && (
                    <button onClick={clearForm}>Cancel</button>
                )}
            </div>

            <div>
                {todos.map((item) => (
                    <div key={item._id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App

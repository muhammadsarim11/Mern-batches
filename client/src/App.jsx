import { useState } from "react"
import axios from "axios"

const App = () => {
    const [title,setTitle]= useState("")
    const [description,setDescription] = useState("")

    const HandleSubmit = async()=>{
        console.log(title,description)

        axios.post("http://localhost:3000/todo/create",{
            title,description

        })
        console.log("done!")

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
        }}>click to add</button>
    </div>
</div>

    </div>
  )
}


export default App

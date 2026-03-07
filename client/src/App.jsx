import { useState,useEffect } from "react"
import axios from "axios"

const App = () => {
    const [title,setTitle]= useState("")
    const [description,setDescription] = useState("")
    const [data,setData] = useState([])

    const HandleSubmit = async()=>{
        console.log(title,description)

        axios.post("http://localhost:3000/todo/create",{
            title,description

        })
        console.log("done!")

    }

    useEffect(()=>{

       axios.get("http://localhost:3000/todo/get").then((res)=>{
setData(res.data.todos)
        }).catch((err)=>{
console.log(err)    
        })
          
    }, [data])



    const HandleDelete =async(id)=>{
      await axios.delete(`http://localhost:3000/todo/delete/${id}`)
      

      const updatedData = data.filter((item)=>{
        return item._id !== id
      })
      setData(updatedData)
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
{
    data.map((item)=>{
        return(
            <div key={item._id}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button onClick={()=>HandleDelete(item._id)}>Delete</button>
            </div>
        )
    })
}
    </div>
  )
}


export default App

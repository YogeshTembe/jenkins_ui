import React,{useState} from "react";
import axios from 'axios'

export default ()=>{
    const TitlePost="Title Post"
    const [title,updatetitle]=useState("My First Post")
    const onSubmitHandler= async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:4001/api/v1/blog/post",{title}).catch(e=>console.log(e.message))
        updatetitle("")
    }
    

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-group">
                <label>{TitlePost}</label>
                <input type="text" className="form-control" value={title} onChange={(e)=>updatetitle(e.target.value)}/>
            </div>
            <button className="btn btn-primary">submit</button>
            <div>You entered: {title} </div>
        </form>
    )
}
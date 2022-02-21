import React,{useState,useEffect} from "react";
import axios from 'axios'
import CreateComments from "./CreateComments";
import DisplayComment from "./DisplayComment";



export default()=>{
    const[posts,updatePosts]=useState({})
    const loadPosts = async()=>{
        const resp = await axios.get("http://localhost:4003/api/v1/blog/post/query").catch(e=>console.log(e.message))
        updatePosts(resp.data)
    }

    useEffect(()=>{
        loadPosts();
    },[])

    const cardofpost=Object.values(posts).map(p=>{
        return (
            <div className="card" style={{width:"30%",marginBottom:"20%"}}>
                <div className="card-body" key={p.id}>
                    {p.title}
                </div>
                <div>
                    <CreateComments postid={p.id}></CreateComments>
                    <DisplayComment comments={p.comments}></DisplayComment>
                </div>
            </div>
        )
    })
    return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
        {cardofpost}
    </div>
    )

}




import React,{useState,useEffect} from "react";
import axios from 'axios'

export default ({comments})=>{
    //const [comments,updatecomments]=useState([])
    // const loadComments=async()=>{
    //     const resp=await axios.get(`http://localhost:4002/api/v1/blog/post/${postid}/comment`)
    //     updatecomments(resp.data)
    // }
    
    // useEffect(()=>{
    //     loadComments();
    // },[])
    console.log(comments)

    const listOfComments=comments.map(c=>{
        return (
            <li key={c.commentId}>
                {c.message}
            </li>
        )
    })

    return(
        <ol>
            {listOfComments}
        </ol>
    )
}
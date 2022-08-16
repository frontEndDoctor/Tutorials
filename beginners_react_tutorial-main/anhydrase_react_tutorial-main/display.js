// We begin by importing the required modules and dependencies
// axios : for getting data from a specified url
//  useParams from react-router-dom for displaying specified parameters 
// the css for the display is also imported

import axios  from "axios";
import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import "../show.css";


// Let's go over to displaying all the posts(20)


function DisplayPost () {
    const [posts,setPosts] = useState([])
    let { id } = useParams();
    console.log(id);
    // const [id,setId] = useState(1)
    // const [idButtonClick,setIdButtonClick]= useState(1)
    // const handleClick = () => {
    //     setIdButtonClick(id)
    // }

    
    

    useEffect( () => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`,
        {params:{_limit:20}})
        .then ((Response => {setPosts(Response.data)}))
        .catch(Error => {print('Error: $[err]')});
        
    }, 
    // [idButtonClick]
        

    )
    
     
    return(
            <div className="all-posts">
                <h4>Id :{posts.id}</h4>
                <h3>Title: {posts.title}</h3>
                <h4>Content: {posts.body}</h4>
            </div>
        );
    
}

export default DisplayPost;

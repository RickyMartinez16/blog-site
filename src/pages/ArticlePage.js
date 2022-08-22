import React from "react"
import {useParams} from "react-router-dom"

function ArticlePage(){
    const {name} = useParams();
    
    return (
        <div>
            <h1>This is the {name} article</h1>
            
        </div>
    )
}

export default ArticlePage
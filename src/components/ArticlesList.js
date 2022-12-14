import React from "react"
import { Link } from "react-router-dom"

function ArticlesList({articles}){
    return(
        <div>
        <h1>Articles List</h1>
        {articles.map((article, key) => (
            <Link key={key} to={`article/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
        
    </div>
    )
}

export default ArticlesList;
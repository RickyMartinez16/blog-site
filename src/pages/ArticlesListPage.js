import React from "react"
import articleContent from "./article-content"
import ArticlesList from "../components/ArticlesList"

function ArticlesListPage(){
    return (
        <div>
           <ArticlesList articles={articleContent}/> 
        </div>
    )
}

export default ArticlesListPage
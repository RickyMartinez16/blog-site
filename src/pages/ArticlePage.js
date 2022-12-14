import React from "react"
import {useParams} from "react-router-dom"
import articleContent from "./article-content"
import ArticlesList from "../components/ArticlesList";

function ArticlePage(){
    const {name} = useParams();
    const article = articleContent.find(article => article.name === name)

    if(!article){
        return (
            <h1>Article does not exist</h1>
        )
    }

    const otherArticles = articleContent.filter(article => article.name != name)
    
    return (
        <div>
            <h1>This is the {article.title} article</h1>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <h4>Other Articles</h4>
            <ArticlesList articles={otherArticles}/>
        </div>
    )
}

export default ArticlePage
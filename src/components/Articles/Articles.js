import React from "react";
import Card from "../Card";

const Articles = ({ articles }) => {
    const leftArticleCount = Math.ceil(articles.length / 5 )
    const leftArticles = articles.slice(0, leftArticleCount)
    const rightArticles = articles.slice(leftArticleCount, articles.length)
    
    return (
        <div>
            <div className="uk-child-width-1-2" data-uk-grid>
                <div>
                    {leftArticles.map( article => {
                        return <Card article={article} key={`article__${article.slug}`} />
                    })}
                </div>
                <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                    {rightArticles.map( article => {
                        return <Card article={article} key={`article__${article.slug}`} />
                    })}
                </div>
            </div>
            <Card />
        </div>
    )
}


export default Articles;
import React from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
// Component
import Query from "../Query";
// Fetch single article query
import SINGLE_ARTICLE_QUERY from "../Queries/Article/Article";
// Types
import { IArticle } from "../../Interfaces";

const Article: React.FC = () => {
    let { id } = useParams<{id: string}>()
    
    return (
        <Query query={SINGLE_ARTICLE_QUERY} slug={id}>
            {({ data: { articles } } : { data: IArticle }) => {
                // console.log(articles)
                if(articles.length) {
                    const imageUrl = 
                        process.env.NODE_ENV !== "development" 
                        ? articles[0].image.url : process.env.REACT_APP_BACKEND_URL + articles[0].image.url;
                    
                    return (
                        <div>
                            <div id="banner"
                                className="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
                                data-src={imageUrl}
                                data-srcset={imageUrl}
                                data-uk-img >
                                    
                                <h2>{ articles[0].title }</h2>
                            </div>
                            
                            <div className="uk-section">
                                <div className="uk-container uk-container-small">
                                    <span className="uk-text-uppercase uk-text-italic uk-text-light">WRITTEN BY: {articles[0].author.name}</span>
                                    <ReactMarkdown children={articles[0].content} />
                                    <p>
                                        <Moment format="MMM Do YYYY">{articles[0].published_at}</Moment>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }
            }}
        </Query>
    )
}

export default Article;


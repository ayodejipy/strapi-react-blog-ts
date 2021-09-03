import React from "react";
// Component
import Query from "../Query";
import Articles from "./Articles";
// Articles Fetch Query
import ARTICLES_QUERY from "../Queries/Articles/Articles";
import { IArticle, IArticles } from "../../Interfaces"

const ArticlesList: React.FC = () => {
    return (
        <>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <h2 className="uk-text-uppercase uk-text-lighter uk-margin-bottom">New Updates</h2>
                    <Query query={ARTICLES_QUERY}>
                        { ({ data: { articles }}: { data: IArticles } ) => (
                            <Articles articles={articles} />
                        )}
                    </Query>
                </div>
            </div>
        </>
    )
}

export default ArticlesList;
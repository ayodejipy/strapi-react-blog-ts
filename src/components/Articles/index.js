import React from "react";
// Component
import Query from "../Query";
import Articles from "./Articles";
// Articles Fetch Query
import ARTICLES_QUERY from "../Queries/Articles/Articles";

const ArticlesList = () => {
    return (
        <>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <h2>New Updates</h2>
                    <Query query={ARTICLES_QUERY}>
                    {({ data: { articles }}) => (
                        <Articles articles={articles} />
                    )}
                    </Query>
                </div>
            </div>
        </>
    )
}

export default ArticlesList;
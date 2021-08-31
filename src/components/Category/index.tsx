import React from "react"
import { useParams } from "react-router"
// Component
import Query from "../Query"
import Articles from "../Articles/Articles"
// Query
import CATEGORY_ARTICLES from "../Queries/Category/Category"
// types
type dataTypes = {
    categories: Array<any>;
}

const Category = () => {
    const { slug } : any  = useParams()
    
    return (
        <Query query={CATEGORY_ARTICLES} slug={slug}>
            { ({ data: { categories } }: { data: dataTypes} ) => {
                console.log("category: ", categories)
                
                if(categories.length) {
                    
                    return (
                        <div>
                            <div className="uk-section">
                                <div className="uk-container uk-container-large">
                                    <h1 className="uk-margin-bottom">{categories[0].name}</h1>
                                    <Articles articles={categories[0].articles} />
                                </div>
                            </div>
                        </div>
                    ) 
                }
            }}
        </Query>
    )
}

export default Category;
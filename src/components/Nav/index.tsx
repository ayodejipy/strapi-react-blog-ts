import React from "react";
import { Link } from "react-router-dom";
// Component
import Query from "../Query";
// Fetch Categories querie
import CATEGORIES_QUERY from "../Queries/Categories/Categories";
// Types
import { NavigationProps } from "../../Types";


const Nav: React.FC = () => {
    return (
        <Query query={CATEGORIES_QUERY} slug={null}>
            {({ data: { categories } }: any ) => {
                console.log("Navigation: ", categories )
                return (
                    <div>
                        <nav className="uk-navbar-container" data-uk-navbar>
                            <div className="uk-navbar-left">
                                <ul className="uk-navbar-nav">
                                    <li>
                                        <Link to="/">Strapi Blog</Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="uk-navbar-right">
                                <ul className="uk-navbar-nav">
                                    { categories.map((category: any, index: number) => {
                                        return (
                                            <li key={category.slug}>
                                                <Link to={`/category/${category.slug}`}> { category.name } </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </nav>
                    </div>
                )
            }}
        </Query>
    )
}

export default Nav;
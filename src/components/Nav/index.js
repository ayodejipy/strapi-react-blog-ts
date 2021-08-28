import React from "react";
import { Link } from "react-router-dom";
// Component
import Query from "../Query";
// Fetch Categories querie
import CATEGORIES_QUERY from "../Queries/Categories/Categories";

const Nav = () => {
    return (
        <Query query={CATEGORIES_QUERY} id={null}>
            {({ data: { categories } }) => {
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
                                    { categories.map((categories, index) => {
                                        return (
                                            <li key={categories.slug}>
                                                <Link to={`/category/${categories.slug}`}> { categories.name } </Link>
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
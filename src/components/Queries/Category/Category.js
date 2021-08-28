import gql from "graphql-tag";

const CATEGORY_ARTICLES = gql`
    query Category ($slug: String!) {
        categories(where: {slug: $slug }) {
            name
            
            articles {
                title
                slug
                content
                
                image {
                    url
                }
            }
        }
    }
`

export default CATEGORY_ARTICLES;   
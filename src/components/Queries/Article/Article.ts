import gql from "graphql-tag";

const SINGLE_ARTICLE_QUERY = gql`
    query Article( $slug: String! ){
        articles(where: { slug: $slug }) {
            slug
            title
            content
            category {
                slug
                name
            }
            author {
                name
                email
            }
            image {
                url
            }
        }
    }
`

export default SINGLE_ARTICLE_QUERY;
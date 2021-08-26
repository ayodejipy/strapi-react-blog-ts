import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
    query Articles = {
        articles {
           title
           slug
           description 
        }
    }
`

export default ARTICLES_QUERY;
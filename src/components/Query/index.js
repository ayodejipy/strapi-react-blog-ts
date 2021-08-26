import React from "react";
// Hook
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, slug }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { slug: slug }
    })
    
    if(loading) return <h5>Loading...</h5>
    if(error) return <h5>Error: {JSON.stringify(error)} </h5>
    return children({ data })
};

export default Query;
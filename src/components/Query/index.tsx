import React from "react";
// Hook
import { useQuery } from "@apollo/react-hooks";
// Type
import { queryType } from "../../Types";

const Query: React.FC<queryType> = ({ children, query, slug }) => {
    const { data, loading, error } = useQuery(query, {
        variables: { slug: slug }
    })
    
    if(loading) return <h5> Loading...</h5>
    if(error) return <h5>Error: {JSON.stringify(error)} </h5>
    
    return children({ data });
};

export default Query;
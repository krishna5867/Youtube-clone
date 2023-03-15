import { createContext, useState, useEffect } from "react";

import { fetchApi } from "../utils/Api";
export const Context = createContext();

export const ContextApp = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState("NEW");
    const [search, setSearch] = useState([]);
    const [mobile, setMobile] = useState(true)

    // console.log(search);

    const fetchCategory = (query) => {
        setLoading(true)
        fetchApi(`search/?q=${query}`).then(({contents})=>{
            setSearch(contents)
        setLoading(false)
        })
    }
    useEffect(()=>{
        fetchCategory(category)
    },[category])

    return(
        <Context.Provider value={{loading, setLoading,category,setCategory,search,setSearch,mobile, setMobile}}>
        {children}
    </Context.Provider>
    )
}
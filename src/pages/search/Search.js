import React from "react"
import { useLocation } from 'react-router-dom';
import { projectFirestore } from "../../firebase/config";
import { useState, useEffect } from "react";
import Items from "../items/Items";

export default function Search(){

    const queryString = useLocation().search
    const queryParams = new URLSearchParams(queryString)
    const query = queryParams.get('q')

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsPending(true)
        const unsubscribe = projectFirestore.collection("products").onSnapshot((snapshot) => {
            if(snapshot.empty){
                setError("No items found")
                setIsPending(false)
                setData(null)
            } else{
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({id: doc.id, ...doc.data()})
                })
                const filtered = results.filter(name => {
                    return name.product.toLowerCase() === query.toLowerCase()
                })
                setData(filtered)
                setIsPending(false)
            }
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })

        return () => unsubscribe()

    }, [query])

    return (
        <div>
            {isPending && <p className = "pending">Loading items...</p>}
            <h2 className = "item-title">Items including "{query}"</h2>
            {error && <p className = "error">{error}</p>}
            {data && 
            <Items items = {data}
            />}        
            </div>
    )
}
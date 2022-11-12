import React from "react";
import { projectFirestore } from "../../firebase/config"
import { useState, useEffect } from "react"
import Items from "../items/Items";

export default function Home(){
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
                setData(results)
                setIsPending(false)
            }
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })

        return () => unsubscribe()

    }, [])

    return (
        <div className = "home">
            {error && <p className = "error">{error}</p>}
            {isPending && <p className = "pending">Loading items...</p>}
            {data && 
            <Items items = {data}
            />}
        </div>
    )
}
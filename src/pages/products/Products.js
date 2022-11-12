import React from "react";
import { useState, useEffect } from "react";
import Item from "../items/Items";
import { useParams } from 'react-router-dom';
import { projectFirestore } from "../../firebase/config";

export default function Products (){

    const {id} = useParams()  


    const [product, setProduct] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsPending(true)
        const unsubscribe = projectFirestore.collection('products').doc(id).onSnapshot((doc) => {
            if(doc.exists){
                setIsPending(false)
                setProduct(doc.data())
            } else{
                setIsPending(false)
                setError("Could Not Find Product")
            }
        }) 

        return () => unsubscribe()

    },[])
    

    return (
        <div className = "home">
        {error && <p className = "error">{error}</p>}
        {isPending && <p className = "pending">Loading Product...</p>}
        {product && 
        <div className = "single-container"> 
            <p className = "s-product">{product.item}</p>
            <h2 className = "s-purchase">Purchased</h2>
            <h2 className = "s-renew">Renew/Return</h2>
            <h2 className = "s-cost">Cost</h2>
            <h2 className = "s-warranty">Warranty</h2>
            <h2 className = "s-notes">Notes</h2>
            <p className = "s-pdate">{product.purchase}</p>
            <p className = "s-rdate">{product.renew}</p>
            <p className = "s-item-cost">{product.cost}</p>
            <p className = "s-item-warranty">{product.warranty}</p>
            <p className = "s-item-notes">{product.notes}</p>
        </div>
        }
        </div> 
    )
}
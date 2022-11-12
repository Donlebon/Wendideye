import React from "react";
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { projectFirestore } from "../../firebase/config"

export default function Create(){

    const history = useHistory()

    const [product, setProduct] = useState("")
    const [purchase, setPurchase] = useState("")
    const [renew, setRenew] = useState("")
    const [cost, setCost] = useState("")
    const [warranty, setWarranty] = useState("")
    const [notes, setNotes] = useState("")

    const item = []

    const handleSubmit = async (e) => {
        e.preventDefault()
        const pieces = {product, purchase, renew, cost, warranty, notes}

        try {
            await projectFirestore.collection('products').add(pieces)
            history.push('/')
        } catch (err){
            console.log(err)
        }
    }
    


    return (
        <div className = "create">
            
            <form onSubmit = {(e) => handleSubmit(e)} className = "form">

                <label>
                    <span className = "productName">Product Name</span>
                    <input 
                    type = "text"
                    onChange = {(e) => setProduct(e.target.value)}
                    value = {product}
                    required
                    />
                </label>

                <label>
                    <span className = "c-pdate">Purchase Date</span>
                    <input 
                    type = "date"
                    value = {purchase}
                    onChange = {(e) => setPurchase(e.target.value)}
                    required
                    />
                </label>

                <label>
                    <span className = "c-rdate">Return/Renew Date</span>
                    <input 
                    type = "date"
                    value = {renew}
                    onChange = {(e) => setRenew(e.target.value)}
                    required
                    />
                </label>
                <label>
                    <span className = "c-cost">Cost</span>
                    <input 
                    type = "text"
                    value = {cost}
                    onChange = {(e) => setCost(e.target.value)}
                    required
                    />
                </label>

                <label>
                    <span className = "c-warranty">Warranty</span>
                    <input 
                    type = "text"
                    value = {warranty}
                    onChange = {(e) => setWarranty(e.target.value)}
                    />
                </label>

                <label>
                    <span className = "c-notes">Notes</span>
                    <input 
                    className = "c-note"
                    type = "text"
                    value = {notes}
                    onChange = {(e) => setNotes(e.target.value)}
                    />
                </label>

                <button className = "form-submit">Submit</button>

            </form>
        </div>
    )
}
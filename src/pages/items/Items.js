import { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import trashcan from "./delete.svg"
import { projectFirestore } from "../../firebase/config";


export default function Items(props){

    const handleClick = (id) => {
        console.log(projectFirestore.collection('products').doc(id).delete())
    }

    return (
        <div className = "product-container">
            {props.items.map(item => {
                return (
                    <div className = "item-container"key = {item.id}> 
                            <h2 className = "purchase">Purchased</h2>
                            <h2 className = "renew">Renew/Return</h2>
                            <h2 className = "cost">Cost</h2>
                            <h2 className = "warranty">Warranty</h2>
                            <h2 className = "notes">Notes</h2>
                            <Link to = {`/products/${item.id}`}>
                                <h2 className = "seemore">See More...</h2>
                            </Link>
                            <p className = "product">{item.product}</p>
                            <p className = "pdate">{item.purchase}</p>
                            <p className = "rdate">{item.renew}</p>
                            <p className = "item-cost">{item.cost}</p>
                            <p className = "item-warranty">{item.warranty}</p>
                            <p className = "item-notes">{item.notes}</p>
                            <img
                            className = "trash"
                            src = {trashcan}
                            onClick = {() => handleClick(item.id)}
                            />
                    </div>
                )
            })}
        </div>
    )
}
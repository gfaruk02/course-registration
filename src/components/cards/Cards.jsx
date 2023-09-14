import { useEffect } from "react";
import Cart from "../cart/Cart";
import Card from "./Card/Card";
import { useState } from "react";


const Cards = () => {
 const [allCourse, setAllCourse] = useState([])

    useEffect(()=>{
        fetch("./Data.json")
        .then(res => res.json())
        .then(data=>setAllCourse(data))

    });
        
    
    return (
        <div>
           <div className="container flex gap-5">
            <div className="card-container">
                <Card allCourse={allCourse}> </Card>
            </div>
            <div className="cart-container">
                <Cart> </Cart>
            </div>
           </div>
        </div>
    );
};

export default Cards;
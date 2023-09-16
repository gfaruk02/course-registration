import { useEffect } from "react";
import Cart from "../cart/Cart";
import Card from "./Card/Card";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cards = () => {
 const [allCourse, setAllCourse] = useState([])
 const [selectedCard, setSelectCard] = useState([])
 const [totalCredit, setTotalCredit] = useState(0);
 const [remaining, setRemaining] = useState(0);
 const [totalCost, setTotalCOst] = useState(0);

    useEffect(() => {
        fetch("./Data.json")
        .then(res => res.json())
        .then(data => setAllCourse(data))

    });
        const handleSelect = (card) => {

            const inExist = selectedCard.find(cardItem => cardItem.id == card.id);
            let newCredit = card.credit;
            let cost = card.price;
            if(inExist){
              return  toast("You've already selected in this course.");
            }
            else{
                selectedCard.forEach(item => {
                    newCredit += item.credit;
                    cost = cost + item.price;
                });
                const totalRemainng = 20 - newCredit;
               
                if(newCredit > 20){
                  return  toast('Your course credit limit has been reached.')
                }else{
                    
                    setTotalCredit(newCredit);
                    setRemaining(totalRemainng);
                    setTotalCOst(cost)
            
                    setSelectCard([...selectedCard, card]);
                }             
            }
        }
    
    return (
        <div>
           <div className="container flex flex-wrap-reverse gap-5">
            <div className="card-container">
                <Card 
                allCourse = {allCourse}
                handleSelect = {handleSelect}
                > </Card>
            </div>
            <div className="cart-container">
                <Cart selectedCard = {selectedCard}
                    totalCredit = {totalCredit}
                    remaining = {remaining}
                    totalCost = {totalCost}
                > </Cart>
            </div>
           </div>
           <ToastContainer />
        </div>
    );
};

export default Cards;
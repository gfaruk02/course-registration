import { useEffect } from "react";
import Cart from "../cart/Cart";
import Card from "./Card/Card";
import { useState } from "react";


const Cards = () => {
 const [allCourse, setAllCourse] = useState([])
 const [selectedCard, setSelectCard]=useState([])
 const [totalCredit, setTotalCredit] = useState([0]);


    useEffect(()=>{
        fetch("./Data.json")
        .then(res => res.json())
        .then(data=>setAllCourse(data))

    });
        const handleSelect = (card)=>{

            const inExist = selectedCard.find(cardItem => cardItem.id == card.id);
            let newCredit = card.credit;
            if(inExist){
              return  alert("This Card Already Selected");
            }
            else{
                selectedCard.forEach(item=>{
                    // count = count + item.salary;
                    newCredit += item.credit;
                });
                
               
                if(newCredit > 20){
                  return  alert('Your lemit is complete')
                }else{
                    setTotalCredit(newCredit);
                  
            
                    setSelectCard([...selectedCard, card]);
                }
               
            }
            // else{
            //     setSelectCard([...selectedCard, card]);
            // }
            
            // console.log(id);
        }
    
    return (
        <div>
           <div className="container flex gap-5">
            <div className="card-container">
                <Card 
                allCourse={allCourse}
                handleSelect={handleSelect}
                > </Card>
            </div>
            <div className="cart-container">
                <Cart selectedCard={selectedCard}
                    totalCredit={totalCredit}
                   
                > </Cart>
            </div>
           </div>
        </div>
    );
};

export default Cards;
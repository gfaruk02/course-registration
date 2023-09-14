import { useEffect } from "react";
import Cart from "../cart/Cart";
import Card from "./Card/Card";
import { useState } from "react";


const Cards = () => {
 const [allCourse, setAllCourse] = useState([])
 const [selectedCard, setSelectCard]=useState([])
 const [totalCredit, setTotalCredit] = useState(0);
 const [remaining, setRemaining] = useState(0);


    useEffect(()=>{
        fetch("./Data.json")
        .then(res => res.json())
        .then(data=>setAllCourse(data))

    });
        const handleSelect = (card)=>{

            const inExist = selectedCard.find(cardItem => cardItem.id == card.id);
            let newCredit = card.credit;
            if(inExist){
              return  alert("You've already selected in this course.");
            }
            else{
                selectedCard.forEach(item=>{
                    // count = count + item.salary;
                    newCredit += item.credit;
                });
                const totalRemainng = 20 - newCredit;
               
                if(newCredit > 20){
                  return  alert('Your course credit limit has been reached.')
                }else{
                    setTotalCredit(newCredit);
                    setRemaining(totalRemainng);
            
                    setSelectCard([...selectedCard, card]);
                //    if(totalRemainng < 0 && totalRemainng == 0){
                //     return  alert('Your totalRemainng is Zero')
                //    }else{
                //     setTotalCredit(newCredit);
                //     setRemaining(totalRemainng);
            
                //     setSelectCard([...selectedCard, card]);
                //    }
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
                    remaining={remaining}
                > </Cart>
            </div>
           </div>
        </div>
    );
};

export default Cards;
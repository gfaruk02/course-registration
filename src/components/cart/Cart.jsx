import PropTypes from 'prop-types';
const Cart = ({selectedCard, totalCredit, remaining, totalCost}) => {
    return (
        <div>
            <div className="right">
            <div  className="cart-content"> 
                    <h2>Credit Hour Remaining : {remaining} </h2>
                    <hr />
                    <h1>Course Name </h1>
                {   
                    selectedCard.map(( card, idx) => (
                    <div className='pl-3 ' key={idx}>
                        
                        <ol>
                        <li >{idx+1}. {card.course_name} </li>
                        </ol>
                     </div>  
                    )) 
                    
                }
                <hr />
                        <h3>Total Credit Hour : {totalCredit}</h3>
                        <hr />
                        <h3>Total Price : {totalCost} </h3>
                    </div>
                    
               
            </div>
            
        </div>
    );
};
Cart.propTypes = {
    selectedCard: PropTypes.array,
    totalCredit: PropTypes.number,
    remaining: PropTypes.number,
    totalCost: PropTypes.number
}
export default Cart;
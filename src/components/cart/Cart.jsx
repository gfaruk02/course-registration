import PropTypes from 'prop-types';
const Cart = ({selectedCard, totalCredit}) => {
    return (
        <div>
            <div className="right">
            <div  className="cart-content"> 
                    <h1>Credit Hour Remaining : </h1>
                    <hr />
                    <h1>Course Name : </h1>
                {   
                    selectedCard.map((card) => (
                        
                      
                    <div  key={card.id}>
                        
                        <ol className="order-last">
                        <li > {card.course_name} </li>
                        </ol>
                    </div>
                       
                        
                       
                       
                    )) 
                    
                }
                <hr />
                        <h3>Total Credit Hour :{totalCredit}</h3>
                        <hr />
                        <h3>Total Price : </h3>
                    </div>
                    
               
            </div>
            
        </div>
    );
};
Cart.propTypes = {
    selectedCard: PropTypes.array,
    totalCredit: PropTypes.number
}
export default Cart;
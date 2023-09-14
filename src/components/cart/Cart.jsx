import PropTypes from 'prop-types';
const Cart = ({cardSelect}) => {
    return (
        <div>
            <div className="right">
                <h1>Credit Hour Remaining : </h1>
                <hr />
                <h1>Course Name : </h1>
                <ol className="order-last">
                {
                    cardSelect.map((card) => (
                        <li key={card.id}> {card.course_name} </li>
                    )) 
                }
                    
                </ol>
                <hr />
                <h3>Total Credit Hour :</h3>
                <hr />
                <h3>Total Price : </h3>
            </div>
            
        </div>
    );
};
Cart.propTypes = {
    cardSelect: PropTypes.array,
}
export default Cart;
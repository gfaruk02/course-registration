import PropTypes from 'prop-types';
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';

const Card = ({allCourse, handleSelect}) => {
    return (
        <div className='cards grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                allCourse.map(card => (
                    <div key={card.id} className="card-items bg-white w-96 lg:w-72">
                        <div className="card-img">
                        <img className='w-full' src={card.image} alt="" />
                        </div>
                        <h3 className="course-name"> {card.course_name} </h3>
                        <p className='course-desc'>{card.course_description}</p>
                        <div className="card-info flex gap-4"> 
                        <div className='flex'><span className=' text-lg pr-1'><FaDollarSign /></span>  <p>Price : {card.price}</p></div>
                        <div className='flex'><span className=' text-lg pr-1'><FaBookOpen /></span>    <p> Credit :  {card.credit}hr</p></div>
                        </div>
                        <button onClick={() => handleSelect(card)} className='card-btn'>Select</button>
                    </div>
                ))
            };
        </div>
    );
};
Card.propTypes = {
    allCourse: PropTypes.array,
    handleSelect: PropTypes.func
}
export default Card;
import PropTypes from 'prop-types';
const Card = ({allCourse}) => {
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
                        <div className="card-info flex gap-2"> 
                            <p> Price : {card.price}</p>
                            <p> Credit :  {card.credit}hr</p>
                        </div>
                        <button className='card-btn'>Select</button>
                    </div>
                ))
            };
            {/* <h1>This is my First Card: {allCourse.length}</h1> */}
        </div>
    );
};
Card.propTypes = {
    allCourse: PropTypes.array  
}
export default Card;
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
const Service = ({service}) => {
    const {id, name, image, price, short_description} = service;
    return (
        <div>
            <div data-aos="zoom-in" className='p-2 md:h-[434px] lg:h-[495px] xl:h-[491px] 2xl:h-auto lg:p-4 shadow-md rounded-md flex flex-col justify-between flex-1'>
                <div className='p-1 2xl:p-2'>
                <img src={image} className='rounded-lg' alt={`image about ${name}`} />
                </div>
                <div className='text-center lg:space-y-2 mt-2 flex-1'>
                <h4 className='text-xl md:text-2xl lg:text-3xl font-semibold text-contrast'>{name}</h4>
                <p className='text-contrast font-medium text-base lg:text-xl'>Price Range: {price}</p>
                <p className='text-contrast font-medium text-base  lg:text-xl'>{short_description}</p>
                </div>
                <div className='text-center'>
                <Link to={`/services/${id}`}>
                <button className='my-2 px-3 py-2 rounded-md bg-secondery hover:bg-accent transition duration-200 font-semibold text-white hover:text-contrast text-base '>Show Detail</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object.isRequired
}

export default Service;
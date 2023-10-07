import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, image, price, short_description} = service;
    return (
        <div>
            <div className='p-2 md:h-[434px] lg:h-[456px] xl:h-[499px] 2xl:h-[665px] lg:p-4 shadow-md rounded-md flex flex-col justify-between flex-1'>
                <div className='p-3'>
                <img src={image} className='rounded-lg' alt={`image about ${name}`} />
                </div>
                <div className='text-center lg:space-y-2 mt-3 flex-1'>
                <h4 className='text-xl md:text-2xl lg:text-3xl font-semibold text-contrast'>{name}</h4>
                <p className='text-contrast font-medium text-base lg:text-xl'>Price Range: {price}</p>
                <p className='text-contrast font-medium text-base  lg:text-xl'>{short_description}</p>
                </div>
                <div className='text-center flex-1'>
                <Link to={`/services/${id}`}>
                <button className='my-2 px-3 py-2 rounded-md bg-secondery hover:bg-accent transition duration-200 font-semibold text-contrast    text-base xl:text-2xl'>Show Detail</button>
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
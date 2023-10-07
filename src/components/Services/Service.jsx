import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Service = ({service}) => {
    const {id, name, image, price, short_description} = service;
    console.log(service);
    return (
        <div>
            <div className='p-4 shadow-md rounded-md'>
                <div className='p-8'>
                <img src={image} className='rounded-lg' alt={`image about ${name}`} />
                </div>
                <div className='text-center space-y-2 mt-3'>
                <h4 className='text-3xl font-semibold text-contrast'>{name}</h4>
                <p className='text-contrast font-medium text-xl'>Price Range: {price}</p>
                <p className='text-contrast font-medium text-xl'>{short_description}</p>
                <Link to={`/services/${id}`}>
                <button className=' my-3 px-3 py-2 rounded-md bg-secondery hover:bg-accent transition duration-200 font-semibold text-contrast text-2xl'>Show Detail</button>
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
import PropTypes from 'prop-types';
const GalleryCard = ({card}) => {
    const {bride_name, groom_name, image, marriage_date} = card;
    return (
        <div className='group'>
            <div className='relative overflow-hidden'>
            <img src={image} className='w-full' alt={`weedding photo of ${bride_name} and ${groom_name}`} />
            <div className='absolute h-full w-full bg-black/20 flex flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200 text-white text-center'>
                <p className='text-xs font-thin md:text-base'>Wedding of</p>
                <h4 className='font-thin md:font-semibold text-xs md:text-lg'>{bride_name} & {groom_name}</h4>
                <p className='font-thin md:font-medium'>{marriage_date}</p>
            </div>
        </div>
        </div>
    );
};

GalleryCard.propTypes = {
    card: PropTypes.object
}

export default GalleryCard;
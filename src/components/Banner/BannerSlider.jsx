import PropTypes from 'prop-types';

const BannerSlider = ({ banner }) => {
    const {title, description, bg_image} = banner;
  return (
    <div>
      <div
        className="hero min-h-[93vh]"
        style={{
          backgroundImage:
            `url(${bg_image})`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold text-primary">{title}</h1>
            <p className="mb-5 text-base md:text-2xl">
              {description}
            </p>
            <button className="bg-primary text-contrast font-medium hover:bg-secondery py-2 px-4 rounded-md ">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerSlider.propTypes = {
    banner: PropTypes.object.isRequired
}

export default BannerSlider;

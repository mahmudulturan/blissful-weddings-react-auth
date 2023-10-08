import PropTypes from "prop-types";

const BlogCard = ({ blog }) => {
  const { id, title, description, author, publish_date, content } = blog;
  return (
    <div>
      <div data-aos="fade-left" className="bg-primary py-4 px-4 h-[316px] flex flex-col justify-between rounded-md space-y-4">
        <h4 className="text-2xl font-semibold text-secondery">{title}</h4>
        <p className="text-lg font-medium">{description}</p>
        <div className="flex justify-between">
          <p>
            Author: <span className="font-medium">{author}</span>
          </p>
          <p>
            Publish Date: <span className="font-medium">{publish_date}</span>
          </p>
        </div>
        <button
          className="py-2 px-3 rounded-md bg-accent font-semibold"
          onClick={() => document.getElementById(`my_modal_${id}`).showModal()}>
          Read this blog
        </button>
        <dialog id={`my_modal_${id}`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="py-4 font-medium">{content}</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogCard;

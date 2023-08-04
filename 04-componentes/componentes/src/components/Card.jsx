/* eslint-disable react/prop-types */

// Card recibe 3 props: title, description e image
// title y description son strings
// image es un string que representa una url
const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;

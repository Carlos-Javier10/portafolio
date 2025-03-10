const Card = ({ title, description, image }) => {
    return (
      <div className="border rounded-lg shadow-md overflow-hidden">
        {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
        <div className="p-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  
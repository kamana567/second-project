const Card = ({ image, title, description, price }) => {
  return (
    <div className="p-8 shadow-xl/30 text-justify mb-9 rounded-xl ">
      <img className=" mb-3 h-48 w-96 object-contain" src={image} />
      <h1 className="font-semibold mb-2">{title}</h1>
      <p>{description}</p>
      <h4 className="font-semibold text-orange-400">Rs. {price}</h4>
    </div>
  );
};
export default Card;

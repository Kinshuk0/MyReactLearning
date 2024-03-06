const Card = (props) => {
  return (
    <div className="w-60 h-100 mx-auto rounded overflow-hidden shadow-lg m-2 p-2 ">
      <img
        className="w-full h-40 rounded-xl hover:w-30 hover:h-50"
        alt="card-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          props?.info?.cloudinaryImageId
        }
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {props.info.name.split(" ")}
        </div>
        <p className="text-gray-700 text-sm">
          {props?.info?.cuisines.join(", ")}
        </p>
        <p className="text-gray-700 text-sm">{props?.info?.sla?.slaString}</p>
      </div>
    </div>
  );
};
export default Card;

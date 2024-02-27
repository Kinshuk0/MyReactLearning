const Card = (props) => {
  return (
    <div className="card">
      <img
        className="card-img"
        alt="card-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          props.info.cloudinaryImageId
        }
      />
      <div className="insidecardtext">
        <h5>{props.info.name}</h5>
        <h5>{props.info.cuisines.join(", ")}</h5>
        <h5>{props.info.sla.slaString}</h5>
      </div>
    </div>
  );
};
export default Card;

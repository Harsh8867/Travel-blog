import React from "react";
import "./index.css";

function Component(props) {
  return (
    <div className="component-travel">
      <img className="travel-image" src={props.image} alt="" />
      <p>{props.location}</p>
      <a href={props.googleMapsUrl}>View on Google Maps</a>
      <h3>{props.title}</h3>
      <p>
        {props.startDate} - {props.endDate}
      </p>
      <p>{props.description}</p>
    </div>
  );
}

export default Component;

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Tour = () => {
  const tours = useSelector((store) => store.tours);
  const plans = useSelector((store) => store.plans);
  const { id } = useParams();

  return (
    <div className="plans">
      {plans
        .filter((plan) => plan.tourId === parseInt(id))
        .map((plan) => (
          <div className="plan">
            <img src={plan.img}></img>
            <div className="planContent">
              <h1>{plan.name}</h1>
              <h3>{plan.price}£</h3>
              <p> {plan.desc}</p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Tour;

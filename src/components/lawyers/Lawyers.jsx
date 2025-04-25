import React from "react";

const Lawyers = ({ lawyers }) => {
  const {
    image,
    name,
    specialty,
    experience,
    licenseNumber,
    fee,
    availableDays,
  } = lawyers;
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todayDay = new Date();
  const getDay = todayDay.getDay();
  const isAvailable = daysOfWeek.map((today)=>today[getDay]);
  console.log(isAvailable);


  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img src={image} alt="lawyer image" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h3>{availableDays}</h3>
          <h3>{experience}</h3>
        </div>
        <h2 className="card-title">{name}</h2>
        <h6>{fee}</h6>
        <h5>{specialty}</h5>
        <p>{licenseNumber}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Lawyers;

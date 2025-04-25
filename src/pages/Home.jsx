import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Lawyers from "../components/lawyers/Lawyers";

const Home = () => {
  const dataLoad = useLoaderData();
  const [displayLawyers, setDisplayLawyers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayLawyers(dataLoad);
    } else {
      setDisplayLawyers(dataLoad.slice(0, 6));
    }
  }, [dataLoad, showAll]);

  const handleShowAll = () => {
    setShowAll(!showAll);
    if (showAll) {
      setDisplayLawyers(dataLoad.slice(0, 6));
    } else {
      setDisplayLawyers(dataLoad);
    }
  };

  return (
    <div>
      <h1 className="text-center">Our Lawyers</h1>
      <p className="text-center">
        Meet our experienced team of legal professionals dedicated to providing
        expert advice and personalized solutions to help you navigate every
        legal challenge with confidence.
      </p>

      <div className="grid grid-cols-3 gap-8">
        {displayLawyers.map((data) => (
          <Lawyers key={data.id} lawyers={data}></Lawyers>
        ))}
      </div>
      <div className="mx-auto w-full text-center">
        <button onClick={() => handleShowAll()} className="btn">
          Show All Lawyer
        </button>
      </div>
    </div>
  );
};

export default Home;

import React from "react";

import InfoItem from "./InfoItem";
import { useState } from "react";
import PaginationProgress from "./PaginationProgress";

const Info = () => {

  const [progress, setProgress] = useState(0);
  const [posit, setPosit] = useState(0);

  
  const decrementProgress = () => {
    if (progress === 0) return;
    setProgress((prevProg) => prevProg - 25);
    setPosit((prevPosit) => prevPosit + 43.3);
  };

  const incrementProgress = () => {
    if (progress === 100) return;
    setProgress((prevProg) => prevProg + 25);
    setPosit((prevPosit) => prevPosit - 43.3);
  };
  return (
    <div className="info">
       <div className="topic">
        <h1 className="heading">Корисні статті</h1>
        <h2 className="lookmore">Дивитись усі →</h2>
      </div>
      <div className="info__wrapper" style={{ marginLeft: `${posit}rem` }}>
        <InfoItem></InfoItem>
        <InfoItem></InfoItem>
        <InfoItem></InfoItem>
        <InfoItem></InfoItem>
        <InfoItem></InfoItem>
        <InfoItem></InfoItem>
        <InfoItem></InfoItem>
      </div>
      <PaginationProgress progress={progress} decrementProgress={decrementProgress} incrementProgress={incrementProgress}></PaginationProgress>
    </div>
  );
};

export default Info;

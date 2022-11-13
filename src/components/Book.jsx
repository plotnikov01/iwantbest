import React from "react";
import { useState } from "react";

import BookItem from "./BookItem";
import PaginationProgress from "./PaginationProgress";


const Book = () => {


  const [progress, setProgress] = useState(0);
  const [posit, setPosit] = useState(0);

  
  const decrementProgress = () => {
    if (progress === 0) return;
    setProgress((prevProg) => prevProg - 25);
    setPosit((prevPosit) => prevPosit + 65);
  };

  const incrementProgress = () => {
    if (progress === 100) return;
    setProgress((prevProg) => prevProg + 25);
    setPosit((prevPosit) => prevPosit - 65);
  };

  return (
    <div className="book__wrapper">
      <div className="topic">
        <h1 className="heading">Найпопулярніші категорії</h1>
        <h2 className="lookmore">Дивитись усі →</h2>
      </div>
        <div className="book__content" style={{ marginLeft: `${posit}rem` }}>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
      </div>
      <PaginationProgress progress={progress} decrementProgress={decrementProgress} incrementProgress={incrementProgress}></PaginationProgress>
    </div>
  );
};

export default Book;

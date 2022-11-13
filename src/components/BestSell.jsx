import React from "react";
import BestSellItem from "./BestSellItem";
import LoadMore from "./LoadMore";

const BestSell = () => {
  return (
    <section className="bestsell__wrapper">
      <div className="topic">
      <h1 className="heading">Топ продаж</h1>
      <h2 className="lookmore">Дивитись усі →</h2>
      </div>
      <div className="bestsell">
        <BestSellItem></BestSellItem>
        <BestSellItem></BestSellItem>
        <BestSellItem></BestSellItem>
        <BestSellItem></BestSellItem>
        <BestSellItem></BestSellItem>
        <BestSellItem></BestSellItem>
        <BestSellItem></BestSellItem>
        <LoadMore></LoadMore>
      </div>
    </section>
  );
};

export default BestSell;

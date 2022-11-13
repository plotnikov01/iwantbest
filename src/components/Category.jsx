import React from "react";

import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <section className="category__wrapper">
      <div className="topic">
        <h1 className="heading">Найпопулярніші категорії</h1>
        <h2 className="lookmore">Дивитись усі →</h2>
      </div>
      <div className="category">
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
        <CategoryItem></CategoryItem>
      </div>
    </section>
  );
};

export default Category;

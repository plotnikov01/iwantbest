import React from "react";

import logo from "../img/logoIwant.png";
import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as Cabinet } from "../icons/cabinet.svg";
import { ReactComponent as Favorite } from "../icons/favorite.svg";
import { ReactComponent as Cart } from "../icons/cart.svg";
import { ReactComponent as Catalog } from "../icons/catalog.svg";



function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__catalog">
        <Catalog className="topbar__btn--catalog"></Catalog>
        {/* <img src={catalog} alt="catalog" className="topbar__btn--catalog"></img> */}
        <h1 className="topbar__catalog--text">Каталог товарів</h1>
      </div>
      <form className="topbar__search">
        <Search className="topbar__btn--search"></Search>
        {/* <img src={search} alt="search" className="topbar__btn--search"></img> */}
        <input
          type="text"
          className="topbar__search--input"
          placeholder="Пошук"
        ></input>
      </form>
      <img src={logo} alt="logo" className="topbar__logo" />
      <div className="topbar__navbar">
        <div className="topbar__navbar--cabinet">
          <Cabinet className="topbar__nav--btn-cab"></Cabinet>
          {/* <img
              src={cabinet}
              alt="cabinet"
              className="topbar__nav--btn-cab"
            ></img> */}
          <h2 className="topbar__navbar--cabinet-text">Кабінет</h2>
        </div>
        <div className="topbar__navbar--favorite">
          <Favorite className="topbar__nav--btn-favorite"></Favorite>
          {/* <img
              src={favorite}
              alt="favorite"
              className="topbar__nav--btn-favorite"
            ></img> */}
          <p className="topbar__navbar--number">0</p>
        </div>
        <div className="topbar__navbar--cart">
          <Cart className="topbar__nav--btn-cart"></Cart>
          {/* <img src={cart} alt="cart" className="topbar__nav--btn-cart"></img> */}
          <p className="topbar__navbar--number">5</p>
        </div>
      </div>
    </div>
  );
}

export default TopBar;

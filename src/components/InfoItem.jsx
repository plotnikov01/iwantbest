import React from "react";

import info from "../img/info.png";

const InfoItem = () => {
  return (
    <div className="info__item">
      <img src={info} alt="info" className="info__item--image"></img>
      <h2 className="info__item--name">Як виробляют сумки Issahara</h2>
      <p className="info__item--description">
        Наприклад, офісні працівники надають перевагу сумкам класичним -
        портфельного типу, а ось домогосподарки, як правило, обирають великі та
        місткі.
      </p>
      <p className="info__item--link">Детальніше →</p>
    </div>
  );
};

export default InfoItem;

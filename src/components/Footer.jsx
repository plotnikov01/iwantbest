import React from "react";

import telegram from "../img/Telegram.svg";
import instagram from "../img/Instagram.svg";
import facebook from "../img/Facebook.svg";
import logo from "../img/logoIwant.png";
import visa from "../img/visa.png";
import mastercard from "../img/mastercard.png";
import liqpay from "../img/liqpay.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__wrapper">
                <div className="footer__info">
                    <div className="footer__info--section">
                       <h2 className="footer__topic">Допомога</h2>
                        <p className="footer__link">Доставка та оплата</p>
                        <p className="footer__link">Повернення товару</p>
                        <p className="footer__link">Питання та відповіді</p>
                        <p className="footer__link">Відстежити замовлення</p>
                    </div>
                    <div className="footer__info--section">
                       <h2 className="footer__topic">Інформація про компанію</h2>
                        <p className="footer__link">Про нас</p>
                        <p className="footer__link">Повернення товару</p>
                        <p className="footer__link">Умови користування сайту</p>
                        <p className="footer__link">Вакансії</p>
                        <p className="footer__link">Контакти</p>
                    </div>
                    <div className="footer__info--section">
                        <h2 className="footer__topic">Сервіси</h2>
                        <p className="footer__link">Бонусний рахунок</p>
                        <p className="footer__link">Подарункові сертифікати</p>
                    </div>
                    <div className="footer__info--section">
                        <h2 className="footer__topic">Партнерам</h2>
                        <p className="footer__link">Продавати на iWant</p>
                        <p className="footer__link">Співпраця з нами</p>
                    </div>
                    <div className="footer__info--section phone">
                    <div className="footer__header--container">
                    <h2 className="footer__topic">Call-центр</h2>
                    <h2 className="footer__phone">+380 50 520 46 00</h2>
                    </div>
                    <p className="footer__schedule">Графік роботи:<br />
                    У будні с 9:00 до 18:00<br />
                    Субота с 10:00 до 15:00<br />
                    Неділя вихідний</p>
                    <div className="footer__container">
                        <img className="footer__container--icon" src={telegram} alt="telegram"></img>
                        <img className="footer__container--icon" src={instagram} alt="instagram"></img>
                        <img className="footer__container--icon" src={facebook} alt="facebook"></img>
                    </div>
                    </div>
                    
                </div>
                <div className="footer__border"></div>
                <div className="footer__copyright">
                    <div className="footer__copyright--info">
                    <img src={logo} alt="logofooter"></img>
                    <p className="footer__copyright--info-text">Copyright © 2022 “iWant”. Усі права захищені.</p>
                    </div>
                    <div className="footer__copyright--payment">
                    <div className="footer__copyright--payment-visamastercard">
                    <img className="footer__copyright--payment-system" src={visa} alt="visa"></img>
                    <img className="footer__copyright--payment-system" src={mastercard} alt="mastercard"></img>
                    </div>
                    <img className="footer__copyright--payment-system" src={liqpay} alt="liqpay"></img>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
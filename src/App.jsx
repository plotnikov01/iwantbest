import "./css/main.css";
import TopBar from "./components/TopBar";
import Slider from "./components/Slider";
import Category from "./components/Category";
import BestSell from "./components/BestSell";
import Book from "./components/Book";
import Info from "./components/Info";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
    <div className="wrapper">
      <TopBar></TopBar>
      <Slider></Slider>
      <Category></Category>
      <BestSell></BestSell>
      <Book></Book>
      <BestSell></BestSell>
      <Info></Info>
    </div>
    <Footer></Footer>
    </>
  );
};

export default App;

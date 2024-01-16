import { Typewriter } from "react-simple-typewriter";
import "./styles.scss";

const App = () => {
  return (
    <main>
      <div className="app">
        <div className="boxContainer">
          <div className="imageProduct">
            <img
              src="./public/images/image-product-desktop.jpg"
              alt="image-product"
            />
          </div>
          <div className="contentProduct">
            <h5 className="category">Perfume</h5>
            <h1 className="nameProduct">Gabrielle Essence Eau De Parfum</h1>
            <div className="description">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </div>
            <div className="price">
              <h1 className="nowPrice">$149.99</h1>
              <div className="oldPrice">$169.99</div>
            </div>
            <button>
              <img src="./public/images/icon-cart.svg" alt="cartimg" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <footer className="credit">
        Challenge by Frontend Mentor. Coded by
        <span>
          <Typewriter
            words={["jenniferyusiaa", "arilhisyam"]}
            loop={0}
            delaySpeed={500}
            cursorStyle="_"
          />
        </span>
      </footer>
    </main>
  );
};

export default App;

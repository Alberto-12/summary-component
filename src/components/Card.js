import image from '../images/illustration-hero.svg';
import icon from '../images/icon-music.svg';

const Card = () => {

  return (
    <div id="card">
      <div id="mainImage"><img src={image} alt="Hero Illustration"/></div>
      <h1>Order Summary</h1>
      <p>
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div id="price-box">
        <div> <img src={icon} alt="Music icon"/> </div>
        <div id="prices">
          <h2>Annual Plan</h2>
          <div id="price">$59.99/year</div>
        </div>
        <a href="/">Change</a>
      </div>
      <div id="buttons-div">
        <button id="proceed-to-payment-button">
          Proceed to Payment
        </button>
        <button id="cancel-order-button">
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default Card;

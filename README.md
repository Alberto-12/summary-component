# Frontend Mentor - Order summary card solution

This is a solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover states for interactive elements

### Screenshot

coming soon
![](...../images/Screenshot%202023-01-13%20at%15-44-01%20Summary%20Component.png)

### Links


- Live Site URL: [Add live site URL here](https://summary-component-order.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

It was a really samll project just to test working with React. I'm really proud of the card component:

To see how you can add code snippets, see below:

```jsx
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
```

### Continued development

I'm looking forward to learn more about React using States and Props.

### Useful resources

- [Example resource 1](https://www.youtube.com/watch?v=w7ejDZ8SWv8&t=1561s) - This helped me to understand better how to work with React.

## Author

- Frontend Mentor - [@Alberto-12](https://www.frontendmentor.io/profile/Alberto-12)

## Acknowledgments

I'm very Thankfull for my mentor
[Treasure Kabareebe](https://github.com/trekab) that guided me through the process.




import { Component } from "react";
import "./App.css";
import data from "./data/productData"
import formatPrice from "./helpers/formatPrice";


class App extends Component {
  constructor() {
    super();
    this.state = {
      productsList: data,
      cart: [],
      totalPrice: 0,
      tax: 0,
      subtotal: 0,
      firstName: "",
      lastName: "",
      email: "",
      creditCardNumber: "",
      zipCode: ""
    }
  }

  handleAddToCart = (product) => {
    let newCartArr = [...this.state.cart, product]
    this.setState({
      cart: newCartArr,
      subtotal: this.state.subtotal + product.price,
      tax: this.state.subtotal * this.state.tax,
      totalPrice: this.state.subtotal + this.state.tax
    })
  }

  handleCheckoutSubmit = (e) => {
   e.preventDefault();
    if(this.state.creditCardNumber.length !== 16) {
      alert(`Input is not valid. Credit card number is not valid`)
    } else if(this.state.zipCode.length !== 5) {
      alert(`Input is not valid. Zip code is not valid.`)
    } else if(this.state.firstName.length === 0 || this.state.lastName === 0) {
      alert(`Input is not valid (Must enter name.)`)
    } else if(this.state.email.length === 0 ){
      alert(`Input is not valid. (Must enter email)`)
    } else {
      alert(`Purchase complete! You will be charged $${formatPrice(this.state.totalPrice)}`)
    }
  }

  
  handleFirstNameInput = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLasttNameInput = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  handleEmailInput = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleCreditCardInput = (e) => {
    this.setState({
      creditCardNumber: e.target.value
    })
  }

  handleZipCodeInput = (e) => {
    this.setState({
      zipCode: e.target.value
    })
  }

  render() {

    let productsArr = this.state.productsList.map((product) => {
      let { name, price, img, description} = product
      return(
        <div key={ product.name } className="product-info-container">
          <div>{ name }</div>
          <br />
          <div>{ formatPrice(price) }</div>
          <br />
          <button type="submit" onClick={()=>this.handleAddToCart(product)}>Add To Cart</button>
          <img src={ img } alt="product image"/>
          <br />
          <div>{ description }</div>
        </div>
      )
    })

    let checkoutCartArr = this.state.cart.map((product) => {
      return(
        <div key={ product.name }>
          <li>{product.name, product.price}</li>
        </div>
      )
    })

    return(
      <div>
        <h2>My Garage Sale</h2>

        <div id="product-list-container">{ productsArr }</div>

        <h2>Cart</h2>
        <ul>{checkoutCartArr}</ul>
        <h3>Subtotal: {formatPrice(this.state.subtotal)}</h3>
        <h3>Tax: {formatPrice(this.state.tax)}</h3>
        <h3>Total: {formatPrice((this.state.subtotal + this.state.totalPrice))}</h3>

        <h3>Checkout</h3>
        <form onSubmit={this.handleCheckoutSubmit} id="checkout">
          <label htmlFor="first-name">First Name: </label>
          <input 
          onInput={this.handleFirstNameInput}
          type="text"
          name="first-name"
          value={this.firstName}
          id="first-name"
        />
        <br />

        <label htmlFor="last-name">Last Name: </label>
          <input 
          onInput={this.handleLasttNameInput}
          type="text"
          name="last-name"
          value={this.lastName}
          id="last-name"
        />
        <br />

        <label htmlFor="email-address">Email: </label>
          <input 
          onInput={this.handleEmailInput}
          type="email"
          name="email-address"
          value={this.email}
          id="email-address"
        />
        <br />

        <label htmlFor="card-info">Credit Card: </label>
          <input 
          onInput={this.handleCreditCardInput}
          type="text"
          name="card-info"
          value={this.creditCardNumber}
          id="card-info"
        />
        <br />

        <label htmlFor="zip-code">Zip Code: </label>
          <input 
          onInput={this.handleZipCodeInput}
          type="text"
          name="zip-code"
          value={this.zipCode}
          id="zip-code"
        />
        <br />
        <button type="submit">Buy Now</button>
        </form>



      </div>
    )

  }
};

export default App;

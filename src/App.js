import { Component } from "react";
import "./App.css";
import data from "./data/productData"

class App extends Component {
  constructor() {
    super();
    this.state = {
      productsList: data,
      cart: [],
      totalPrice: 0,
      tax: 0,
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
      totalPrice: this.state.totalPrice + product.price
    })

  }

  handleCheckoutSubmit = () => {
    let cartCheckoutArr = this.state.cart.map((product) => {
      return(
        <div></div>
      )
    })
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
        <div className="product-info-container">
          <div>Name: { name }</div>
          <br />
          <div>Price: { price }</div>
          <br />
          <button onClick={()=>this.handleAddToCart(product)}>Add To Cart</button>
          <img src={ img } alt="product image"/>
          <br />
          <div>Description: { description }</div>
        </div>
      )
    })
    return(
      <div>
        <h2>My Garage Sale</h2>

        <div id="product-list-container">{ productsArr }</div>

        <h2>Cart</h2>
        <ul></ul>
        <h3>Subtotal: </h3>
        <h3>Tax: </h3>
        <h3>Total: </h3>

        <h3>Checkout</h3>
        <form onSubmit="">
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
          type="number"
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

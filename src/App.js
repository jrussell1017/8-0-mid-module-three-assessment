import { Component } from "react";
import "./App.css";
import data from "./data/productData"

class App extends Component {
  constructor() {
    super();
    this.state = {
      productsList: data
    }
  }

  handleButtonClick = (product) => {

  }

  render() {

    let productsArr = this.state.productsList.map((product) => {
      let { name, price, image, description} = product
      return(
        <div className="product-info-container" onClick={()=>this.handleButtonClick(product)}>
          <div>Name: { name }</div>
          <div>Price: { price }</div>
          <button>Add To Cart</button>
          <img src={image} alt="product image"/>
          <div>Description: { description }</div>
        </div>
      )
    })
    return(
      <div>
        <h2>My Garage Sale</h2>

        <div id="product-list-container">{ productsArr }</div>

      </div>
    )

  }
};

export default App;

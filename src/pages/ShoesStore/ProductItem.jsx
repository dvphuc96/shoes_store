import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { product, addToCart, viewDetailProduct } = this.props;
    return (
      <div className="card">
        <img
            src={product.image}
            alt="..."
            height={320}
            style={{ objectFit: "cover", cursor: "pointer" }}
            className="w-100"
            onClick={() => {
                viewDetailProduct(product);
              }}
          />
        <div className="card-body">
          <p>{product.name}</p>
          <p>{product.price.toLocaleString()}$</p>
          <button
            className="btn btn-dark"
            onClick={() => {
              addToCart(product);
            }}
          >
            add to carts
            <i className="fa fa-cart-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}

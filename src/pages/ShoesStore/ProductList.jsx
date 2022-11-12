import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderProduct = () => {
    const { dataShoes, addToCart, viewDetailProduct } = this.props;
    return dataShoes.map((item, index) => {
      return (
        <div className="col-4 mt-2" key={index}>
          <ProductItem product={item} viewDetailProduct={viewDetailProduct} addToCart={addToCart}/>
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderProduct()}</div>;
  }
}

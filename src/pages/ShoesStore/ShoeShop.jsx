import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ModalCart from "./ModalCart";
import ModalDetail from "./ModalDetail";
import ProductList from "./ProductList";

const dataShoes = [
  {
    id: 1,
    name: "Adidas Prophere",
    alias: "adidas-prophere",
    price: 350,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 995,
    image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
  },
  {
    id: 2,
    name: "Adidas Prophere Black White",
    alias: "adidas-prophere-black-white",
    price: 450,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 990,
    image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
  },
  {
    id: 3,
    name: "Adidas Prophere Customize",
    alias: "adidas-prophere-customize",
    price: 375,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 415,
    image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
  },
  {
    id: 4,
    name: "Adidas Super Star Red",
    alias: "adidas-super-star-red",
    price: 465,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 542,
    image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
  },
  {
    id: 5,
    name: "Adidas Swift Run",
    alias: "adidas-swift-run",
    price: 550,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 674,
    image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
  },
  {
    id: 6,
    name: "Adidas Tenisky Super Star",
    alias: "adidas-tenisky-super-star",
    price: 250,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 456,
    image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
  },
  {
    id: 7,
    name: "Adidas Ultraboost 4",
    alias: "adidas-ultraboost-4",
    price: 450,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 854,
    image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
  },
  {
    id: 8,
    name: "Adidas Yeezy 350",
    alias: "adidas-yeezy-350",
    price: 750,
    description:
      "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
    shortDescription:
      "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
    quantity: 524,
    image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
  },
  {
    id: 9,
    name: "Nike Adapt BB",
    alias: "nike-adapt-bb",
    price: 630,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 599,
    image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
  },
  {
    id: 10,
    name: "Nike Air Max 97",
    alias: "nike-air-max-97",
    price: 650,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 984,
    image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
  },
  {
    id: 11,
    name: "Nike Air Max 97 Blue",
    alias: "nike-air-max-97-blue",
    price: 450,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 875,
    image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
  },
  {
    id: 12,
    name: "Nike Air Max 270 React",
    alias: "nike-air-max-270-react",
    price: 750,
    description:
      "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
    shortDescription: "Paul George is the rare high-percentage shooter",
    quantity: 445,
    image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
  },
];

export default class ShoeShop extends Component {
  state = {
    show: false,
    showDetail: false,
    carts: [],
    productDetail: {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  };
  handleCloseModal = () => {
    this.setState({
      show: false,
      showDetail: false,
    });
  };
  addToCart = (product) => {
    product = { ...product, quantity: 1 };
    let carts = this.state.carts;
    let productCart = carts.find((item) => item.id === product.id);
    if (productCart) {
      productCart.quantity = productCart.quantity + 1;
    } else {
      carts.push(product);
    }
    this.setState({
      carts: carts,
      show: true,
    });
  };
  viewDetailProduct = (product) => {
    this.setState({
      productDetail: product,
      showDetail: true,
    });
  };
  removeCart = (id) => {
    let carts = this.state.carts.filter((product) => product.id !== id);
    this.setState({
      carts: carts,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div className="row mx-auto justify-content-center">
          <div className="w-25">
            <header style={{ marginTop: 300 }}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-dark border border-2 border-info border-start-0"
                    : "nav-link text-dark"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-dark border border-2 border-info border-start-0"
                    : "nav-link text-dark"
                }
              >
                Shop
              </NavLink>
            </header>
          </div>
          <div
            className="w-75 content border border-info border-2 border-bottom-0"
            style={{ minHeight: "75vh" }}
          >
            <div className="container">
              <ModalCart
                show={this.state.show}
                carts={this.state.carts}
                handleCloseModal={this.handleCloseModal}
                removeCart={this.removeCart}
              />
              <ModalDetail
                showDetail={this.state.showDetail}
                productDetail={this.state.productDetail}
                handleCloseModal={this.handleCloseModal}
              />
              <h3 className="text-center mt-2">Shoes shop</h3>
              <ProductList
                dataShoes={dataShoes}
                viewDetailProduct={this.viewDetailProduct}
                addToCart={this.addToCart}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
export default class ModalCart extends Component {
  checkDisable = (quantity) => {
    return quantity === 1 ? true : false;
  };
  render() {
    const {
      show,
      carts,
      handleCloseModal,
      removeCart,
      handleUpQuantity,
      handleDownQuantity,
    } = this.props;
    return (
      <>
        <Modal
          show={show}
          onHide={handleCloseModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title>Carts</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table className="table">
              <thead>
                <tr className="text-center">
                  <th>Id</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {carts.map((product, index) => {
                  return (
                    <tr key={index} className="text-center">
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>
                        <img
                          src={product.image}
                          width={50}
                          height={50}
                          alt="..."
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-primary mx-2"
                          onClick={() => {
                            handleUpQuantity(product.id);
                          }}
                        >
                          +
                        </button>
                        {product.quantity}
                        <button
                          className="btn btn-primary mx-2"
                          onClick={() => {
                            handleDownQuantity(product.id);
                          }}
                          disabled= {this.checkDisable(product.quantity)}
                        >
                          -
                        </button>
                      </td>
                      <td>{product.price}$</td>
                      <td>
                        {(product.quantity * product.price).toLocaleString()}$
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            removeCart(product.id);
                          }}
                        >
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

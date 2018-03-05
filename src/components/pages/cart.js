import React from "react";
import { connect } from "react-redux";
import { Panel, Col, Row, Well, Button,Label,ButtonGroup,Modal} from "react-bootstrap";
import{deleteCartItem,updateCart} from '../../actions/cartActions';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }
  open() {
    this.setState({show: true});
  }
  handleClose() {
    this.setState({show: false});
  }
  onDelete(_id) {
    const currentBookToDelete = this.props.cart;
    const indexToDelete = currentBookToDelete.findIndex((cart) => {
      return cart._id === _id;
    });
    let cartAfterDelete = [...currentBookToDelete.slice(0,indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]
    this.props.deleteCartItem(cartAfterDelete);
  }
  onIncrement(_id){
    this.props.updateCart(_id,1);
  }
  onDecrement(_id,quantity){
    if(quantity > 1) {
      this.props.updateCart(_id,-1);
    }
  }
  render() {
    if (this.props.cart[0]) {
      return this.renderCart();
    } else {
      return this.emptyCart();
    }
  }
  emptyCart() {
    return <div />;
  }
  renderCart() {
    const cartItemsList = this.props.cart.map(cart => {
      return (
        <Panel key={cart._id}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cart.title}</h6><span>    </span>
            </Col>
            <Col xs={12} sm={2}>
              <h6>usd.  {cart.price}</h6>
            </Col>
            <Col xs={12} sm={2}>
              <h6>qty. <Label bsStyle="success">{cart.quantity}</Label></h6>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{minWidth:'300px'}}>
                <Button onClick={this.onDecrement.bind(this,cart._id,cart.quantity)} bsStyle="default" bsSize="small">-</Button>
                <Button onClick={this.onIncrement.bind(this,cart._id)} bsStyle="default" bsSize="small">+</Button>
                <span>    </span>
                <Button onClick={this.onDelete.bind(this,cart._id)} bsStyle="danger" bsSize="small">DELETE</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>
      );
    });
    return (
      <Panel header="Cart" bsStyle="primary">
        {cartItemsList}
        <Row>
          <Col xs={12}>
            <h6>Total Amount:</h6>
            <Button onClick={this.open.bind(this)} bsStyle='success'>
              Proceed To Checkout
            </Button>
          </Col>
        </Row>
        <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Test</h4>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Panel>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  };
}
export default connect(mapStateToProps,{deleteCartItem,updateCart})(Cart);

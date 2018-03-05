import React from "react";
import {
  Well,
  Panel,
  FormControl,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";
import { connect } from "react-redux";
import { findDOMNode } from "react-dom";
import { postBooks } from "../../actions/booksActions";

class BooksForm extends React.Component {
  handleSubmit() {
    const book = [
      {
        title: findDOMNode(this.refs.title).value,
        price: findDOMNode(this.refs.price).value,
        description: findDOMNode(this.refs.description).value
      }
    ];
    this.props.postBooks(book);
  }
  render() {
    return (
      <Well>
        <Panel>
          <FormGroup style={{ marginLeft: "5px" }} controlId="title">
            <ControlLabel>Title</ControlLabel>
            <FormControl type="text" placeholder="Enter title" ref="title" />
          </FormGroup>
          <FormGroup style={{ marginLeft: "5px" }} controlId="description">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Description"
              ref="description"
            />
          </FormGroup>
          <FormGroup style={{ marginLeft: "5px" }} controlId="price">
            <ControlLabel>Price</ControlLabel>
            <FormControl type="text" placeholder="Enter Price" ref="price" />
          </FormGroup>
          <Button
            onClick={this.handleSubmit.bind(this)}
            style={{ marginLeft: "5px" }}
            bsStyle="primary"
          >
            Save Book
          </Button>
        </Panel>
      </Well>
    );
  }
}
export default connect(null, { postBooks })(BooksForm);

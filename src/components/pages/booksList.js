import React from "react";
import { connect } from "react-redux";
import { getBooks } from "../../actions/booksActions";
import { Grid, Col, Row, Button } from "react-bootstrap";
import BookItem from "./bookItem";
import BooksForm from "./booksForm";
import Cart from "./cart";

class BooksList extends React.Component {
  componentDidMount() {
    this.props.getBooks();
  }
  render() {
    const booksList = this.props.books.map(books => {
      return (
        <Col xs={12} sm={6} md={4} key={books.id}>
          <BookItem
            id={books.id}
            title={books.title}
            description={books.description}
            price={books.price}
          />
        </Col>
      );
    });
    return (
      <Grid>
        <Row style={{ marginTop: "15px" }}>
          <Cart />
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Col xs={12} sm={6}>
            <BooksForm />
          </Col>
          {booksList}
        </Row>
      </Grid>
    );
  }
}
function mapStateToProps(state) {
  return {
    books: state.books.books
  };
}
export default connect(mapStateToProps, { getBooks })(BooksList);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import reducers from "./reducers/index";
import { addToCart } from "./actions/cartActions";
import { postBooks, updateBooks, deleteBooks } from "./actions/booksActions";
import BooksList from "./components/pages/booksList";
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

//store.subscribe(() => {
//console.log("current state is: ", store.getState());
//});
ReactDOM.render(
  <Provider store={store}>
    <BooksList />
  </Provider>,
  document.getElementById("app")
);

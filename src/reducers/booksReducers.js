export function booksReducers(
  state = {
    books: [
      {
        _id: 1,
        title: "first book",
        description: "detail of first book",
        price: 33.33
      },
      {
        _id: 2,
        title: "second book",
        description: "detail of second book",
        price: 40.45
      }
    ]
  },
  action
) {
  switch (action.type) {
    case "GET_BOOKS":
      return { books: [...state.books] };
    case "POST_BOOK":
      return { books: [...state.books, ...action.payload] };

      break;
    case "DELETE_BOOK":
      const currentBookToDelete = [...state.books];
      const indexToDelete = currentBookToDelete.findIndex(function(book) {
        return book._id === action.payload._id;
      });
      return {
        books: [
          ...currentBookToDelete.slice(0, indexToDelete),
          ...currentBookToDelete.slice(indexToDelete + 1)
        ]
      };
      break;
    case "UPDATE_BOOK":
      const currentBookToUpdate = [...state.books];
      const indexToUpdate = currentBookToUpdate.findIndex(function(book) {
        return book._id === action.payload._id;
      });
      const newBookToUpdate = {
        ...currentBookToUpdate[indexToUpdate],
        title: action.payload.title
      };
      console.log("New book to update", newBookToUpdate);
      return {
        books: [
          ...currentBookToUpdate.slice(0, indexToUpdate),
          newBookToUpdate,
          ...currentBookToUpdate.slice(indexToUpdate + 1)
        ]
      };
      break;
    default:
      return state;
  }
}

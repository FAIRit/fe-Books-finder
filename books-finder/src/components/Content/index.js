import React, {Component} from "react";
import { Switch, Route } from "react-router-dom";
import Books from "../Books/Books";
import Clinics from "../Clinics";
import AboutUs from "../AboutUs";
import BooksDetails from "../Books/BooksDetails";
import Sign from "../Sign";
import UserPanel from "../UserPanel/UserPanel";
import Home from "../Home";


class Content extends Component {
  state = {
    books: [],
    // loading: true,
    error: null,
    favouriteBooks: []
  };

  componentDidMount() {
    fetch("books.json")
    // fetch("https://books-project-5acdb.firebaseio.com/books.json")
      .then(response => response.json())
      .then(response =>
        this.setState({
          ...this.state,
          books: response
        })
      )
      .catch(error => this.setState(...this.state, error));
  }
  
  onAddToFavourite = (book, isFavourite) => {
    const { favouriteBooks } = this.state;
    this.setState({
      ...this.state,
      favouriteBooks: isFavourite
        ? [
            ...favouriteBooks.filter(
              favouriteBook => favouriteBook.id !== book.id
            )
          ]
        : [...favouriteBooks, book]
    });
  };


  render() {
    const { books, favouriteBooks, error } = this.state;
    
    return (
        <Switch>
          <Route  path="/home">
          <Home />
        </Route>
          <Route path="/sign-up">
            <Sign isSignUp />
          </Route>
          <Route path="/sign-in">
            <Sign />
          </Route>
          <Route exact
            path="/books"
            component={() => (
              <Books
                books={books}
                favouriteBooks={favouriteBooks}
                // loading={loading}
                error={error}
                onAddToFavourite={this.onAddToFavourite}
              />
            )}
          />
          <Route  path="/clinics">
            <Clinics />
          </Route>
          <Route
                  path="/userpanel"
                  component={() => (
                    <UserPanel
                     favouriteBooks={favouriteBooks} />
                  )}
                />
          <Route  path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/books/:id" component={BooksDetails} />
        </Switch>
    );
  }
}

export default Content;

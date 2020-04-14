import React, { Component } from "react";
import BookCard from "./BookCard";
import Filters from "./Filters";
import style from "./Books.module.css";
import '../../App.css';
import { Grid } from "@material-ui/core";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // books: [],
      filter: {
        category: "all",
        title: "",
        keywords: "",
        author: "",
        publisher: "",
        remove: " "
      },
    //   error: null
    // };
  }
}
  // componentDidMount() {
  //   fetch("books.json")
  //     .then(response => response.json())
  //     .then(response =>
  //       this.setState({
  //         ...this.state,
  //         books: response
  //       })
  //     )
  //     .catch(error => this.setState(...this.state, error));
  // }
  handleCategoryButton = category => {
    console.log(category);
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
      category
    }
  })
}

  onTitleFilterChanged = title => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        title
      }
    });
  };

  onKeywordsFilterChanged = keywords => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        keywords
      }
    });
  };

  onAuthorFilterChanged = author => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        author
      }
    });
  };

  onPublisherFilterChanged = publisher => {
    this.setState({
      ...this.state,
      filter: {
        ...this.state.filter,
        publisher
      }
    });
  };

  filterByKeywords = (book) => {
    const matchedKeywords = book.keywords.filter(keyword => {
      return keyword.toLowerCase().includes(this.state.filter.keywords.toLowerCase())
    });
    console.log(matchedKeywords);
    return matchedKeywords.length > 0;
  };
  removeAllFilters = () => {
    this.setState({
      filter: {
        category: "all",
        title: "",
        keywords: "",
        author: "",
        publisher: ""
      }
  });
};
  
  getBooks = () => {
    return this.props.books.filter(book => {
      return (
        book.data.title
          .toLowerCase()
          .includes(this.state.filter.title.toLowerCase()) &&
        book.data.author
          .toLowerCase()
          .includes(this.state.filter.author.toLowerCase()) &&
        book.data.publisher
            .toLowerCase()
            .includes(this.state.filter.publisher.toLowerCase()) &&
          this.filterByKeywords(book) &&
          (this.state.filter.category === "all" ||
            book.category === this.state.filter.category)
      );
    });
  };

  checkFavourite = book=> this.props.favouriteBooks.some(favouriteBook => favouriteBook.id === book.id);

  render() {
    return (
      <>
      <div className = 'main-container'>
        <Filters
          handleCategoryButton={this.handleCategoryButton}
          onTitleFilterChanged={this.onTitleFilterChanged}
          onKeywordsFilterChanged={this.onKeywordsFilterChanged}
          onPublisherFilterChanged={this.onPublisherFilterChanged}
          onAuthorFilterChanged={this.onAuthorFilterChanged}
          removeAllFilters={this.removeAllFilters}
        />
           <Grid container spacing={2}>
        {this.getBooks().map((book, index, keywords ) => (
          <BookCard key={index} book={book} 
          isFavourite={this.checkFavourite(book)}
          onAddToFavourite={this.props.onAddToFavourite}
          keywords = {keywords}
          />
          ))}
           </Grid>
      </div>
      </>
        )
  }
}

export default Books;



import React, { Component } from "react";
import BookCard from "./BookCard";
import Filters from "./Filters";
import style from "./Books.module.css";


class List extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      filter: {
        category: "all",
        title: "",
        keywords: "",
        author: " ",
        publisher: " "
      },
      error: null
    };
  }

  componentDidMount() {
    fetch("books.json")
      .then(response => response.json())
      .then(response =>
        this.setState({
          ...this.state,
          books: response
        })
      )
      .catch(error => this.setState(...this.state, error));
  }

  handleCategoryButton = category => {
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

  getBooks = () => {
    return this.state.books.filter(book => {
      return (
        // book.data.title
        //   .toLowerCase()
        //   .includes(this.state.filter.title.toLowerCase()),
        // book.data.author
        //   .toLowerCase()
        //   .includes(this.state.filter.author.toLowerCase()),
        //   book.data.publisher
        //     .toLowerCase()
        //     .includes(this.state.filter.publisher.toLowerCase())
          // book.keywords
          //   .toLowerCase()
          //   .includes(this.state.filter.keywords.toLowerCase())
            //  && 
          (this.state.filter.category === "all" ||
            book.category === this.state.filter.category)
      );
    });
  };

  render() {
    return (
      <div>
        <Filters
          handleCategoryButton={this.handleCategoryButton}
          // onTitleFilterChanged={this.onTitleFilterChanged}
          // onKeywordsFilterChanged={this.onKeywordsFilterChanged}
          // onPublisherFilterChanged={this.onPublisherFilterChanged}
          // onAuthorFilterChanged={this.onAuthorFilterChanged}
        />
        {this.getBooks().map(({ id, data, descriptions }) => 
          <BookCard key={id} data={data} descriptions={descriptions} />)}
      </div>
        )
  }
}

export default List;

import React, { Component } from "react";
import { BOOKS } from "../../data/BOOKS";
import BookCardsChildren from "./BookCardsChildren";
import BookCardsTeachers from "./BookCardsTeachers";
import BookCardsParents from "./BookCardsParents";
import HomeButton from "../LandingPage/HomeButton";
import './BookCard.css';

class ChooseCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false};
  }
  categoryChildren = () => {
    const { show } = this.state;
    this.setState({ show: false});
    this.categoryChildren = this.categoryChildren.bind(this);
  };
  categoryParents = () => {
    const { show } = this.state;
    this.setState({ show: false});
    this.categoryParents = this.categoryParents.bind(this);
  };
  categoryTeachers = () => {
    const { show } = this.state;
    this.setState({ show: false});
    this.categoryTeachers = this.categoryTeachers.bind(this);
  };

  render() {
    return (
      <>
      <div className ="choose-category-container">
        <div className="home-button">
          <HomeButton />
        </div>
        <button className = "category-button" onClick={<BookCardsChildren />}>
          Książki dla dzieci </button>
        {this.state.show && <BookCardsChildren />}
        <button className = "category-button" onClick={this.categoryParents}>Książki dla rodziców </button>
        {this.state.show.categoryParents && <BookCardsParents />}
        <button className = "category-button" onClick={this.categoryTeachers}>
          Książki dla nauczycieli/
          terapeutów
        </button>
        {this.state.show.categoryTeachers && <BookCardsTeachers />}
        </div>
      </>
    );
  }
}

export default ChooseCategory;

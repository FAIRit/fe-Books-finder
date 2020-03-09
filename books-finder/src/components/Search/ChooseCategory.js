import React, { Component } from "react";
import { BOOKS } from "../../data/BOOKS";
import BookCardsChildren from "./BookCardsChildren";
import BookCardsTeachers from "./BookCardsTeachers";
import BookCardsParents from "./BookCardsParents";
import './BookCard.css';
import MultipleSelect from "./MultipleSelect";

class ChooseCategory extends Component {
  constructor(props) {
    super(props);
    this.state = { show: ' '};
  }
  categoryChildren = () => {
    this.setState({ show: "children"});

  };
  categoryParents = () => {
    this.setState({ show: "parents"});
    
  };
  categoryTeachers = () => {
    this.setState({ show: "teachers"});
   
  };

  render() {
    return (
      <>
      <div className ="choose-category-container">
        <button className = "category-button" onClick={this.categoryChildren}>
          Książki dla dzieci </button>
        
        <button className = "category-button" onClick={this.categoryParents}>Książki dla rodziców </button>
        
        <button className = "category-button" onClick={this.categoryTeachers}>
          Książki dla nauczycieli/
          terapeutów
        </button>
        <div>
        < MultipleSelect />
        </div>
        {this.state.show === 'parents' && <BookCardsParents />}
        {this.state.show === "children" && <BookCardsChildren />}
        {this.state.show ==="teachers"&& <BookCardsTeachers />}
        </div>
        
      </>
    );
  }
}

export default ChooseCategory;

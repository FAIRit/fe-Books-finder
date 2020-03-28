import React, { Component } from "react";
import { Input, Select, MenuItem, Button } from "@material-ui/core";
import style from "./Books.module.css";

class Filters extends Component {
  state = {
    category: "all",
    // title: " ",
    // author: " ",
    // publisher: " ",
    // keyword: " "
  };

  handleCategoryButton = event => {
    this.props.handleCategoryButton(event.target.value);
    this.setState({
      ...this.state,
      category: event.target.value,
    });
  };

  onTitleFilterChanged = event => {
    this.props.onTitleFilterChanged(event.target.value);
  };
  onKeywordsFilterChanged = event => {
    this.props.onKeywordsFilterChanged(event.target.value);
  };
  onAuthorFilterChanged = event => {
    this.props.onAuthorFilterChanged(event.target.value);
  };
  onPublisherFilterChanged = event => {
    this.props.onPublisherFilterChanged(event.target.value);
  };
  render() {
    const { category
      // , title, keywords, author, publisher
     } = this.state;

    return (
      <>
        <div className={style.categoryButtons}>
          <form onClick={this.handleCategoryButton} value={category}>
            <Button value="children">Książki dla dzieci</Button>
            <Button value="teachers">Książki dla pedagogów/terapeutów</Button>
            <Button value="parents">Książki dla rodziców</Button>
          </form>
        </div>
        <div className={style.filters}>
          TYTUŁ
          <Input onChange={this.onTitleFilterChanged} />
          AUTOR
          <Input onChange={this.onAuthorFilterChanged} />
          WYDAWNICTWO
          <Input onChange={this.onPublisherFilterChanged} />
          SŁOWO KLUCZOWE
          <Input onChange={this.onKeyWordsFilterChanged} />
        </div>
      </>
    );
  }
}

export default Filters;

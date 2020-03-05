import React from "react";
import {BOOKS} from '../../data/BOOKS';
import styles from "./BookCards.module.css";
import BookCard from "./BookCard";


const BookCardsChildren = () => {


  return (
    <>
      <h2>Book cards</h2>
      <div className={styles.cardsContainer}>
          {BOOKS.children.map(item => (
        <BookCard key ={BOOKS.children.id} card={item} />
          ))}
      </div>
    </>
  );
};

export default BookCardsChildren;


  
import React from "react";
import {BOOKS} from '../../data/BOOKS';
import styles from "./BookCards.module.css";
import BookCard from "./BookCard";


const BookCardsParents = () => {


  return (
    <>
      <h2>Book cards</h2>
      <div className={styles.cardsContainer}>
          {BOOKS.parents.map(item => (
        <BookCard key ={BOOKS.parents.id} card={item} />
          ))}
      </div>
    </>
  );
};

export default BookCardsParents;


  
import React from "react";
import {BOOKS} from '../../data/BOOKS';
import styles from "./BookCards.module.css";
import BookCard from "./BookCard";


const BookCardsTeachers = () => {
  return (
    <>
     
      <div className={styles.cardsContainer}>
          {BOOKS.teachers.map(item => (
        <BookCard key ={BOOKS.teachers.id} card={item} />
          ))}
      </div>
    </>
  );
};

export default BookCardsTeachers;


  
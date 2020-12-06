import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Card from './Card';
import styles from './Body.module.css';
const Body = () => {
  const cards = useSelector((state: RootState) => state.card.cards);
  return (
    <div className={styles.body}>
      {
        cards.map(card => <Card item={card} key={card.id}/>)
      }
    </div>
  );
};

export default Body;
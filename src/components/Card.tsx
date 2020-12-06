import React from 'react';
import styles from './Card.module.css';
import Button from './Button';
import { ICard } from '../types';
import notFound from '../notFound.jpeg';
import { useDispatch } from 'react-redux'
import { openModal, deleteCard } from '../store/actions';

interface Props {
  item: ICard
}
const Card = ({ item }: Props) => {
  const dispatch = useDispatch();
  const { id, title, description, img } = item;

  const defaultImg = (event: React.ChangeEvent<HTMLImageElement>) => {
    event.target.src = notFound
  };

  const editItem = () => {
    dispatch(openModal(item))
  };

  const deleteItem = () => {
    dispatch(deleteCard(id))
  }

  return (
    <div className={styles.container}>
      <div className={styles.page_content} >
      <img className={styles.img} src={img} alt='' onError={defaultImg} />
        <div className={styles.card} >
          <div className={styles.content} >
            <h2 className={styles.title} >{title}</h2>
            <div className={styles.button_group}>
              <Button text='Edit' onClick={editItem} />
              <Button text='Delete' onClick={deleteItem} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <p className={styles.text} >{description}</p>
      </div>
    </div>
  );
};

export default Card;
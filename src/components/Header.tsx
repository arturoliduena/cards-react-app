import React from 'react';
import styles from './Header.module.css';
import Button from './Button';
import { useDispatch } from 'react-redux'
import { openModal, sortCard } from '../store/actions';
import { OrderBy, Order } from '../types';

interface Props {
}
const Header = (props: Props) => {
  const dispatch = useDispatch();

  const onclick = () => {
    dispatch(openModal(null))
  }

  const sort = (orderBy: OrderBy, order: Order) => {
    dispatch(sortCard(orderBy, order))
  }

  return (
    <header className={styles.header}>
      <Button onClick={onclick} text='&#43;'/>
      <Button onClick={() => sort(OrderBy.created_at, Order.asc)} text='asc create date'/>
      <Button onClick={() => sort(OrderBy.created_at, Order.desc)}  text='desc create date'/>
      <Button onClick={() => sort(OrderBy.title, Order.asc)}  text='asc title'/>
      <Button onClick={() => sort(OrderBy.title, Order.desc)}  text='desc title'/>
    </header>
  )
};

export default Header;
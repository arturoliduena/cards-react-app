import React from 'react';
import styles from './Header.module.css';
import Button from './Button';
import { useDispatch } from 'react-redux'
import { openModal, sortCard } from '../store/actions';
import { OrderBy, Order } from '../types';
import Dropdown from './Dropdown';

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
      <Dropdown />
    </header>
  )
};

export default Header;
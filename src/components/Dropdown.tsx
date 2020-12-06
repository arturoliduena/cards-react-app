import React, { useState } from 'react';
import styles from './Dropdown.module.css';
import { useDispatch } from 'react-redux'
import { sortCard } from '../store/actions';
import { OrderBy, Order } from '../types';

const Dropdown = () => {
  const [orderName, setOrderName] = useState('');
  const dispatch = useDispatch();
  const sort = (orderBy: OrderBy, order: Order, name: string) => {
    setOrderName(name)
    dispatch(sortCard(orderBy, order))
  }
  return (
    <div className={styles.select_ctr}>
      <div className={styles.input_preview}>Order By: { orderName }</div>
      <div className={styles.options}>
        <div className={styles.input} onClick={() => sort(OrderBy.created_at, Order.asc, 'asc create date')}>asc create date</div>
        <div className={styles.input} onClick={() => sort(OrderBy.created_at, Order.desc, 'desc create date')}>desc create date</div>
        <div className={styles.input} onClick={() => sort(OrderBy.title, Order.asc, 'asc title')}>asc title</div>
        <div className={styles.input} onClick={() => sort(OrderBy.title, Order.desc, 'desc title')}>desc title</div>
      </div>
    </div>
  )
};

export default Dropdown;
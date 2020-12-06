import React, { useRef } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import Body from './components/Body';
import styles from './App.module.css';
import { useSelector } from 'react-redux'
import { RootState } from './store';

function App() {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const modalEl = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.App}>
      <Header />
      <Body />
      {
        isOpen ? <Modal modalEl={modalEl} /> : null
      }
    </div>
  );
}

export default App;

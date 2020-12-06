import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';
import Input from './Input';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../store';
import { addCard, editCard,closeModal } from '../store/actions';
import notFound from '../notFound.jpeg';
import { ICard } from '../types';

interface Props {
  modalEl: React.RefObject<HTMLDivElement>
}
const Modal = ({ modalEl }: Props) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [created_at, setICreatedAt] = useState(0);
  const [isNewItem, setIsNewItem] = useState(true);
  const [checkFields, setCheckFields] = useState(false);
  const dispatch = useDispatch();
  const itemToEdit = useSelector((state: RootState) => state.modal.itemToEdit);

  useEffect(() => {
    if(itemToEdit){
      setId(itemToEdit.id);
      setTitle(itemToEdit.title);
      setDescription(itemToEdit.description);
      setImg(itemToEdit.img);
      setICreatedAt(itemToEdit.created_at);
      setIsNewItem(false);
    }
  }, [])
  const validateFields = (fields: string[]) => !fields.some(field => !field);

  const defaultImg = (event: React.ChangeEvent<HTMLImageElement>) => {
    event.target.src = notFound
  };

  const onClose = () => {
    dispatch(closeModal())
  }

  const submit = () => { 
    const isValid = validateFields([title, description, img]);
    if(isValid){
      const item: ICard = {
        id,
        title,
        description,
        img,
        created_at,
      }
      dispatch(isNewItem ? addCard(item) : editCard(item));
      onClose();
    } else {
      setCheckFields(true);
    }
  }
  return (
    <div id="myModal" className={styles.modal} ref={modalEl}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <span className={styles.close} onClick={onClose}>&times;</span>
          <h2>New Card</h2>
        </div>
        <div className={styles.modal_body}>
          <form className={styles.container}>
            <Input label='Title' type='input' value={title} onChange={setTitle} checkFields={checkFields}/>
            <Input label='Description' type='textarea' value={description} onChange={setDescription} checkFields={checkFields}/>
            <Input label='Image (URL)' type='input' value={img} onChange={setImg} checkFields={checkFields}/>
      <img className={styles.img} src={img} alt='' onError={defaultImg} />

          </form>
            <Button onClick={submit} text={isNewItem ? 'add' : 'edit'} />
        </div>
      </div>

    </div>
  )
};

export default Modal;
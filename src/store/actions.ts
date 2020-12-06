import { v4 as uuidv4 } from 'uuid';
import { CardActionTypes, ADD_CARD, DELETE_CARD, EDIT_CARD, ModalActionTypes, OPEN_MODAL, CLOSE_MODAL, SORT_CARD } from './actionTypes';
import { ICard, OrderBy, Order } from '../types';

export const addCard = (card: ICard): CardActionTypes => ({
  type: ADD_CARD,
  payload: {
    ...card,
    id: uuidv4(),
    created_at: Date.now(),
  }
});

export const deleteCard = (id: string): CardActionTypes => ({
  type: DELETE_CARD,
  payload: id
});

export const editCard = (card: ICard): CardActionTypes => ({
  type: EDIT_CARD,
  payload: card
});

export const sortCard = (orderBy: OrderBy, order: Order): CardActionTypes => ({
  type: SORT_CARD,
  payload: {
    orderBy,
    order,
  }
});

export const openModal = (itemToEdit: ICard | null): ModalActionTypes => ({
  type: OPEN_MODAL,
  payload: itemToEdit,
});

export const closeModal = (): ModalActionTypes => ({
  type: CLOSE_MODAL
});
import { ICard, Order, OrderBy } from '../types';
export const INIT = 'INIT';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const SORT_CARD = "SORT_CARD";
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

interface initialStateAction {
  type: typeof INIT
}

interface addCardAction {
  type: typeof ADD_CARD
  payload: ICard
}

interface DeleteCardAction {
  type: typeof DELETE_CARD
  payload: string
}

interface EditCardAction {
  type: typeof EDIT_CARD
  payload: ICard
}

interface SortCardAction {
  type: typeof SORT_CARD
  payload: {
    orderBy: OrderBy,
    order: Order, 
  }
}

export type CardActionTypes = initialStateAction | addCardAction | DeleteCardAction | EditCardAction | SortCardAction;

interface OpenModalAction {
  type: typeof OPEN_MODAL
  payload: ICard | null
}

interface CloseModalAction {
  type: typeof CLOSE_MODAL
}

export type ModalActionTypes = OpenModalAction | CloseModalAction;
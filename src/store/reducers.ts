import { CardActionTypes, ADD_CARD, DELETE_CARD, EDIT_CARD, ModalActionTypes, OPEN_MODAL, CLOSE_MODAL, SORT_CARD } from './actionTypes';
import { ICard } from '../types';
import { editCard, deleteCard, sortCard } from './util';

const cards: ICard[] = []

interface CardState {
  cards: ICard[],
}
const initialCardState: CardState = {
  cards
}

export function cardReducer(state: CardState = initialCardState, action: CardActionTypes): CardState {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [
          ...state.cards,
          action.payload,
        ]
      };
    case EDIT_CARD:
      return {
        ...state,
        cards: editCard(action.payload, state.cards),
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: deleteCard(action.payload, state.cards)
      };
    case SORT_CARD:
      return {
        ...state,
        cards: sortCard(action.payload.orderBy, action.payload.order, state.cards)
      };
    default:
      return state
  }
};

interface ModalState {
  itemToEdit: ICard | null
  isOpen: boolean
}
const initialModalState: ModalState = {
  itemToEdit: null,
  isOpen: false,
}

export function modalReducer(state: ModalState = initialModalState, action: ModalActionTypes): ModalState {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        itemToEdit: action.payload,
        isOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        itemToEdit: null,
        isOpen: false,
      };
    default:
      return state
  }
};
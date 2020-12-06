import { ICard, OrderBy, Order } from '../types';

export const editCard = (card: ICard, cards: ICard[]): ICard[] => {
  const items = [...cards];
  let foundIndex = items.findIndex(c => c.id === card.id);
  if (foundIndex > -1) {
    items[foundIndex] = card;
  }
  return items;
};

export const deleteCard = (cardId: string, cards: ICard[]): ICard[] => {
  const items = [...cards];
  let foundIndex = items.findIndex(c => c.id === cardId);
  if (foundIndex > -1) {
    items.splice(foundIndex, 1);
  }
  return items;
};

export const sortCard = (orderBy: OrderBy, order: Order, cards: ICard[]): ICard[] => {
  const items = [...cards];
  items.sort((a, b) => {
    const A = a[orderBy].toString().toLowerCase();
    const B = b[orderBy].toString().toLowerCase();
    if (A > B) {
      return order === Order.asc ? 1 : -1;
    }
    if (A < B) {
      return order === Order.asc ? -1 : 1;
    }
    return 0;
  });
  return items;
};
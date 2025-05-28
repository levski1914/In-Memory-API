import { Item } from "../models/item";

export const items: Item[] = [];
let idCounter = 1;

export const addItem = (name: string): Item => {
  const newItem = { id: idCounter++, name };
  items.push(newItem);
  return newItem;
};

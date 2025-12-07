'use client';

import { Item } from '../code/item';
import ItemRow from './ItemRow';

interface Props {
  items: Item[];
  onUpdate: (item: Item) => void;
  onDelete: (id: string) => void;
}

export default function ItemList({ items, onUpdate, onDelete }: Props) {
  if (!items || items.length === 0) {
    return <p className="empty">*cricket cricket*</p>;
  }

  return (
    <ul className="item-list">
      {items.map((it) => (
        <ItemRow key={it.id} item={it} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </ul>
  );
}
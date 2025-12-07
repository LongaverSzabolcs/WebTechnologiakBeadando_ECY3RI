'use client';

import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList';
import { Item } from '../../code/item';
import { loadItems, saveItems } from '../../code/Storage';

export default function ListPage() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(loadItems());
  }, []);

  function onUpdate(updated: Item) {
    const next = items.map((it) => (it.id === updated.id ? updated : it));
    setItems(next);
    saveItems(next);
  }

  function onDelete(id: string) {
    const next = items.filter((it) => it.id !== id);
    setItems(next);
    saveItems(next);
  }

  return (
    <section>
      <h2>All entries</h2>
      <ItemList items={items} onUpdate={onUpdate} onDelete={onDelete} />
    </section>
  );
}
'use client';

import { useRouter } from 'next/navigation';
import ItemForm from '../../components/ItemForm';
import { Item } from '../../code/item';
import { loadItems, saveItems } from '../../code/Storage';

export default function AddPage() {
  const router = useRouter();

  function handleAdd(item: Item) {
    const current = loadItems();
    saveItems([item, ...current]);
    router.push('/list');
  }

  return (
    <section>
      <h2>Add new entry</h2>
      <p className="muted">Fill out the form with the personal information of the recently deceased.</p>

      <ItemForm onAdd={handleAdd} />
    </section>
  );
}

'use client';

import { useState, FormEvent } from 'react';
import { Item, ItemCategory } from '../code/item';

interface Props {
  onAdd: (item: Item) => void;
}

export default function ItemForm({ onAdd }: Props) {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [field4, setField4] = useState('');
  const [field5, setField5] = useState('');
  const [field6, setField6] = useState('');
  const [field7, setField7] = useState<number>(0);
  const [field8, setField8] = useState<ItemCategory>('A');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!field1 || !field2 || !field3 || !field4 || !field5 || !field6) {
        alert('Fill in every field!');
        return;
    }

    if (field7 < 0) {
        alert('Number of sins cannot be less than zero!');
        return;
    }

    const DateOfBirth = new Date(field2);
    const DateOfDeath = new Date(field6);

    if (DateOfDeath < DateOfBirth) {
        alert('The date of death cannot be before the date of birth!');
        return;
    }

    const item: Item = {
      field1,
      field2: new Date(field2).toISOString(),
      field3,
      field4,
      field5,
      field6: new Date(field6).toISOString(),
      field7: Math.floor(field7),
      field8,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };

    onAdd(item);

    setField1('');
    setField2('');
    setField3('');
    setField4('');
    setField5('');
    setField6('');
    setField7(0);
    setField8('A');
  }

  return (
    <form className="item-form-vertical" onSubmit={handleSubmit}>
      <label>
        Name:
        <input placeholder="Texas Red" value={field1} onChange={(e) => setField1(e.target.value)} />
      </label>

      <label>
        Date of birth:
        <input type="date" value={field2} onChange={(e) => setField2(e.target.value)} />
      </label>

      <label>
        Place of birth:
        <input placeholder="Las Vegas" value={field3} onChange={(e) => setField3(e.target.value)} />
      </label>

      <label>
        Place of death:
        <input placeholder="Agua Fria" value={field4} onChange={(e) => setField4(e.target.value)} />
      </label>

      <label>
        Cause of death:
        <input placeholder="Texas Red did not clear leather / 'Fore a bullet fairly ripped" value={field5} onChange={(e) => setField5(e.target.value)} />
      </label>

      <label>
        Date of death:
        <input type="date" value={field6} onChange={(e) => setField6(e.target.value)} />
      </label>

      <label>
        Total number of sins committed:
        <input type="number" value={String(field7)} onChange={(e) => setField7(Number(e.target.value))} />
      </label>

      <label>
        Fate:
        <select value={field8} onChange={(e) => setField8(e.target.value as ItemCategory)}>
          <option value="A">A - Sent to Heaven</option>
          <option value="B">B - Tenure in Hell (temporary)</option>
          <option value="C">C - Sent to Hell (permanent)</option>
          <option value="D">D - Kept in Limbo</option>
          <option value="E">E - Returned to Samsara (reincarnation)</option>
        </select>
      </label>

      <div style={{ marginTop: 8 }}>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
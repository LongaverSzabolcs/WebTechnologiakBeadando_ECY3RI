'use client';

import { useState } from 'react';
import { Item, ItemCategory } from '../code/item';

interface Props {
  item: Item;
  onUpdate: (item: Item) => void;
  onDelete: (id: string) => void;
}

export default function ItemRow({ item, onUpdate, onDelete }: Props) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<Item>({ ...item });

  function save() {
    onUpdate({
      ...draft,
      field7: Math.floor(draft.field7),
    });
    setEditing(false);
  }

  return (
    <li className="item">
      {editing ? (
        <div style={{ display: 'grid', gap: 6, width: '100%' }}>
          <input value={draft.field1} onChange={(e) => setDraft({ ...draft, field1: e.target.value })} />
          <input type="date" value={draft.field2.slice(0,10)} onChange={(e) => setDraft({ ...draft, field2: new Date(e.target.value).toISOString() })} />
          <input value={draft.field3} onChange={(e) => setDraft({ ...draft, field3: e.target.value })} />
          <input value={draft.field4} onChange={(e) => setDraft({ ...draft, field4: e.target.value })} />
          <input value={draft.field5} onChange={(e) => setDraft({ ...draft, field5: e.target.value })} />
          <input type="date" value={draft.field6.slice(0,10)} onChange={(e) => setDraft({ ...draft, field6: new Date(e.target.value).toISOString() })} />
          <input type="number" value={String(draft.field7)} onChange={(e) => setDraft({ ...draft, field7: Number(e.target.value) })} />

          <select value={draft.field8} onChange={(e) => setDraft({ ...draft, field8: e.target.value as ItemCategory })}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>

          <div className="controls">
            <button onClick={save}>Save!</button>
            <button onClick={() => { setEditing(false); setDraft({ ...item }); }}>Cancel</button>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <div>
            <strong>{item.field1}</strong>
            <div className="muted">
              {item.field3} | {item.field4} | {item.field5}
            </div>
            <div className="muted">
              {new Date(item.field2).toLocaleDateString()} → {new Date(item.field6).toLocaleDateString()} | {item.field7} | {item.field8}
            </div>
          </div>
          <div className="controls">
            <button onClick={() => { setEditing(true); setDraft({ ...item }); }}>Edit</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
}
'use client';

import { useEffect, useMemo, useState } from 'react';
import { loadItems } from '../code/Storage';
import { Item } from '../code/item';

export default function DashboardPage() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(loadItems());
  }, []);

  const stats = useMemo(() => {
    const count = items.length;
    const totalValue = items.reduce((s, it) => s + (it.field7 ?? 0), 0);
    const min = items.length ? Math.min(...items.map((i) => i.field7)) : 0;
    const max = items.length ? Math.max(...items.map((i) => i.field7)) : 0;
    const avg = items.length ? Math.round((totalValue / count) * 100) / 100 : 0;
    const latest = items.slice().sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))[0];
    return { count, totalValue, min, max, avg, latest };
  }, [items]);

  return (
    <section>
      <h2>Dashboard</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12, marginTop: 12 }}>
        <div className="card">
          <strong>{stats.count}</strong>
          <div className="muted">Total no. of deceased</div>
        </div>

        <div className="card">
          <strong>{stats.totalValue}</strong>
          <div className="muted">Total no. of all sins committed</div>
        </div>

        <div className="card">
          <strong>{stats.avg}</strong>
          <div className="muted">Average of sins committed</div>
        </div>

        <div className="card">
          <strong>{stats.min} — {stats.max}</strong>
          <div className="muted">Min — Max of sins committed</div>
        </div>
      </div>

      <section style={{ marginTop: 18 }}>
        <h3>Latest entry</h3>
        {stats.latest ? (
          <div className="card" style={{ padding: 12 }}>
            <div style={{ fontWeight: 600 }}>{stats.latest.field1}</div>
            <div className="muted">Date of birth: {new Date(stats.latest.field2).toLocaleString()}</div>
            <div className="muted">Date of death: {new Date(stats.latest.field6).toLocaleString()}</div>
            <div className="muted">Cause of death: {stats.latest.field5}</div>
            <div className="muted">Sins committed: {stats.latest.field7}</div>
            <div className="muted">Fate: {stats.latest.field8}</div>
            <div className="muted">Added: {new Date(stats.latest.createdAt).toLocaleString()}</div>
          </div>
        ) : (
          <p className="empty">No entries yet! Add some on the "Add new entry" page.</p>
        )}
      </section>
    </section>
  );
}
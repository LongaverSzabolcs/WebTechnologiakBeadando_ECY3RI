import { Item } from './item';

const STORAGE_KEY = 'StPeterStorage';

export function loadItems(): Item[] {
  try {
    if (typeof window === 'undefined') return [];
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Item[];
  } catch (err) {
    console.error('Failed to load items!', err);
    return [];
  }
}

export function saveItems(items: Item[]): void {
  try {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (err) {
    console.error('Failed to save items!', err);
  }
}
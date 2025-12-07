export type ItemCategory = 'A' | 'B' | 'C' | 'D' | 'E';

export interface Item {
  field1: string;        // NAME
  field2: string;        // DATE OF BIRTH (Date!)
  field3: string;        // PLACE OF BIRTH
  field4: string;        // PLACE OF DEATH
  field5: string;        // CAUSE OF DEATH
  field6: string;        // DATE OF DEATH (Date!)
  field7: number;        // SIN COUNTER
  field8: ItemCategory;  // DROPDOWN MENU (A–E)

  // metadata
  id: string;
  createdAt: string;
}
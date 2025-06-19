
export enum CompanyType {
  PRIVATE_LIMITED = "Private Limited Company",
  PUBLIC_LIMITED = "Public Limited Company",
  LLP = "LLP",
  PRODUCER = "Producer Company",
  SECTION_8 = "Section 8 Company",
  NIDHI = "Nidhi Company",
}

export interface ChecklistItem {
  id: string;
  text: string;
  subItems?: string[];
}

export interface ServiceChecklist {
  type: 'list';
  items: ChecklistItem[];
}

export interface ImageChecklist {
  type: 'image';
  src: string;
  alt: string;
}

export type ChecklistData = ServiceChecklist | ImageChecklist;

// Used to structure the checklist data in constants.ts
export type ChecklistsStructure = Record<CompanyType, Record<string, ChecklistData | undefined>>;
export type ServiceOptionsStructure = Record<CompanyType, string[]>;

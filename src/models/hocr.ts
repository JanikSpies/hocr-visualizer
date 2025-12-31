export interface HocrElement {
  id: string;
  text: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface PageSize {
  width: number;
  height: number;
}

export interface ParsedHocrData {
  elements: HocrElement[];
  pageSize: PageSize;
}
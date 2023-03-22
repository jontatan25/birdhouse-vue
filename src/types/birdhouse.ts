import { Residency } from "./residency";

export interface BirdHouse {
  id: string;
  ubid: string;
  birds: number;
  eggs: number;
  longitude: string;
  latitude: string;
  name: string;
  updatedAt: Date;
  residences: Residency[];
}

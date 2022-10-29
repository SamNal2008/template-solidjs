import { Company } from "./company";
import { ObjectEntity } from "./object-entity";

export interface Address extends ObjectEntity {
  city: string;
  country: string;
  fullAddress: string;
  postalCode: string;
  company?: Company;
}

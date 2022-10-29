import { Company } from "./company";
import { FileEntity } from "./file";
import { ObjectEntity } from "./object-entity";

export interface Offer extends ObjectEntity {
  name: string;
  expirationDate: Date;
  pointRequired: number;
  description: string;
  picture: FileEntity;
  company: Company;
}

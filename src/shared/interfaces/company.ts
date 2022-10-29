import { Address } from "./address";
import { Employee } from "./employee";
import { FileEntity } from "./file";
import { ObjectEntity } from "./object-entity";
import { Offer } from "./offer";

export interface Company extends ObjectEntity {
  name: string;
  phoneNumber: string;
  address: Address;
  logoName: string;
  logoColor: string;
  description: string;
  website: string;
  picture: FileEntity;
  employees: Employee[];
  offers: Offer[];
}

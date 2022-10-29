import { Company } from "./company";
import { ObjectEntity } from "./object-entity";
import { Transaction } from "./transaction";
import { User } from "./user";

export interface Card extends ObjectEntity {
  user: User;
  company: Company;
  points: number;
  transactions: Transaction[];
}

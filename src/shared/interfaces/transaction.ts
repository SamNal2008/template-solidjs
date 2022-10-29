import { ETransactionType } from "../enums/transaction";
import { Card } from "./card";
import { Company } from "./company";
import { Employee } from "./employee";
import { ObjectEntity } from "./object-entity";

export interface Transaction extends ObjectEntity {
  point: number;
  type: ETransactionType;
  customer: Card;
  employee: Employee;
  company: Company;
}

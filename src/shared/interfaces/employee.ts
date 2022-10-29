import { EmployeeRole } from "../enums/employee";
import { Company } from "./company";
import { ObjectEntity } from "./object-entity";
import { User } from "./user";

export interface Employee extends ObjectEntity {
  company: Company;
  user: User;
  role: EmployeeRole;
}

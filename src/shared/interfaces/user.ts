import { ClientType, UserTheme } from "../enums/user";
import { ObjectEntity } from "./object-entity";

export interface User extends ObjectEntity {
  userName: string;
  email: string;
  password: string;
  theme: UserTheme;
  isGoogleAuth: boolean;
  clientType: ClientType;
}

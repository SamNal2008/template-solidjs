import { UserTheme } from "../enums/user";
import { User } from "../interfaces/user";

export interface ScanCustomerDto {
  customerId: string;
  companyId: string;
}

export interface LoginDto {
  access_token: string;
  user: User;
}

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignUpFormDto {
  email: string;
  password: string;
  userName: string;
  theme: UserTheme;
}

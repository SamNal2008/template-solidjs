import { UserTheme } from "../enums/user";

export interface UpdatePasswordDto {
  oldPassword: string;
  newPassword: string;
}

export interface ProfileDto {
  userName?: string;
  email?: string;
  theme?: UserTheme;
  password?: string;
}

export type UpdateProfileDto = Partial<ProfileDto> & {
  isCompanyOwner?: boolean;
};

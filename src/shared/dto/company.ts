import { CreateAddressDto } from "./address";

export interface CreateCompanyDto {
  name: string;
  phoneNumber: string;
  address: CreateAddressDto;
  logoName: string;
  logoColor: string;
  description: string;
  website: string;
}

export type CreateCompanyWithPictureDto = CreateCompanyDto & {
  file: any; // FIXME
};

export type UpdateCompanyDto = Partial<CreateCompanyDto> & Omit<CreateCompanyDto, "address">;

export type UpdateCompanyAddressDto = Partial<Pick<CreateCompanyDto, "address">>;

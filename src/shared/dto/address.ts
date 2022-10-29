export interface CreateAddressDto {
  city: string;
  country: string;
  fullAddress: string;
  postalCode: string;
}

export const defaultAddressDto: CreateAddressDto = {
  city: "",
  country: "",
  fullAddress: "",
  postalCode: "",
};

export type UpdateAddressDto = Partial<CreateAddressDto>;

export interface CreateOfferDto {
  name: string;
  expirationDate: Date;
  pointRequired: number;
  description: string;
  companyId: string;
}

export interface CreateOfferDtoWithPictures {
  dto: CreateOfferDto;
  picture: any;
}

export interface UpdateOfferDto {
  offerDto?: Partial<Omit<CreateOfferDto, "companyId">>;
  companyId: string;
}

export interface UpdateOfferDtoWithPictures {
  dto: UpdateOfferDto;
  picture: any;
}

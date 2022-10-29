import { COMPANIES_KEY } from "src/shared/components/context/AuthenticationContext";
import { UpdateCompanyAddressDto, UpdateCompanyDto } from "src/shared/dto/company";
import { Company } from "src/shared/interfaces/company";
import { createResourceWrapper, Method, PaginateQuery, Prefix } from "src/shared/utils/request";
import { Persist } from "src/shared/utils/store";
import { ApiService } from "./api";
import { ResourceReturn } from "solid-js";
import { Paginated } from "src/shared/utils/paginated";

export abstract class CompaniesService extends ApiService {
  static readonly PREFIX = Prefix.COMPANIES;
  static readonly END_POINTS = {
    get: "",
    find: "/{id}",
    updateInfos: "/update/infos/{id}",
    updatePicture: "/update/picture/{id}",
    updateAddress: "/update/address/{id}",
    myCompanies: "myCompanies",
  };

  public static get(paginateQuery?: PaginateQuery): ResourceReturn<Paginated<Company>, unknown> {
    return createResourceWrapper<Paginated<Company>>({
      method: Method.GET,
      prefix: CompaniesService.PREFIX,
      endpoint: CompaniesService.END_POINTS.get,
      body: null,
      config: {
        params: paginateQuery,
      },
    });
  }

  @Persist(COMPANIES_KEY)
  public static myCompanies(): ResourceReturn<Company[], unknown> {
    return createResourceWrapper<Company[]>({
      method: Method.GET,
      endpoint: this.END_POINTS.myCompanies,
      prefix: this.PREFIX,
    });
  }

  public static find(companyId: string): ResourceReturn<Company, unknown> {
    return createResourceWrapper<Company>({
      method: Method.GET,
      prefix: CompaniesService.PREFIX,
      endpoint: `${CompaniesService.END_POINTS.find}/${companyId}`,
    });
  }

  public static updateInfos(companyId: string, updateCompanyInfo: UpdateCompanyDto): ResourceReturn<Company, unknown> {
    return createResourceWrapper<Company>({
      method: Method.PATCH,
      prefix: CompaniesService.PREFIX,
      endpoint: `${CompaniesService.END_POINTS.updateInfos}/${companyId}`,
      body: updateCompanyInfo,
    });
  }

  public static updateAddress(
    companyId: string,
    updateCompanyAddressDto: UpdateCompanyAddressDto
  ): ResourceReturn<Company, unknown> {
    return createResourceWrapper<Company>({
      method: Method.PATCH,
      prefix: CompaniesService.PREFIX,
      endpoint: `${CompaniesService.END_POINTS.updateAddress}/${companyId}`,
      body: updateCompanyAddressDto,
    });
  }

  public static updatePicture(
    companyId: string,
    updateCompanyAddressDto: UpdateCompanyAddressDto
  ): ResourceReturn<Company, unknown> {
    return createResourceWrapper<Company>({
      method: Method.PATCH,
      prefix: CompaniesService.PREFIX,
      endpoint: `${CompaniesService.END_POINTS.updateAddress}/${companyId}`,
      body: updateCompanyAddressDto,
    });
  }
}

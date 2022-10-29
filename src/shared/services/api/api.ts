import { Prefix } from "../../utils/request";
import { environment } from "../../utils/environment";

export abstract class ApiService {
  private readonly apiEndpoint = environment.apiUrl;
  static PREFIX: Prefix;
  static END_POINTS: { [endPoint: string]: any };
}

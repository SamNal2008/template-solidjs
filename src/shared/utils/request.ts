import axios, { AxiosRequestConfig } from "axios";
import { createResource, ResourceReturn } from "solid-js";
import { JWT_TOKEN_KEY } from "src/shared/components/context/AuthenticationContext";
import { environment } from "./environment";
import { Logger } from "./logger";
import { PersistentStoreUtils } from "./store";

axios.defaults.baseURL = environment.apiUrl;

axios.defaults.headers.common = {
  Authorization: `Bearer ${PersistentStoreUtils.getItem(JWT_TOKEN_KEY) as string}`,
};

export default axios;

export enum Method {
  GET = "get",
  POST = "post",
  PATCH = "patch",
  DELETE = "delete",
}

export enum Prefix {
  DEFAULT = "",
}

export interface AxiosCallParam {
  method: Method;
  prefix: Prefix;
  endpoint: string;
  body?: any;
  config?: AxiosRequestConfig;
}

export const createResourceWrapper = <ResultType>(
  axiosCallParam: AxiosCallParam
): ResourceReturn<ResultType, undefined> => {
  return createResource<ResultType>(async () => await axiosWrapper<ResultType>(axiosCallParam));
};

export const axiosWrapper = async <ResultType>({
  method,
  prefix,
  endpoint,
  body,
  config,
}: AxiosCallParam): Promise<ResultType> =>
  Method.GET === method
    ? await getAxiosWrapper<ResultType>(prefix, endpoint, config)
    : await defaultAxiosWrapper<ResultType>(method, prefix, endpoint, body, config);

const getAxiosWrapper = async <ResultType>(
  prefix: Prefix,
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<ResultType> => {
  try {
    const res = await axios.get<ResultType>(`${prefix}/${endpoint}`, config);
    return res.data;
  } catch (err) {
    Logger.error(err);
    return {} as unknown as ResultType;
  }
};

const defaultAxiosWrapper = async <ResultType>(
  method: Method,
  prefix: Prefix,
  endpoint: string,
  body?: any,
  config?: AxiosRequestConfig
): Promise<ResultType> => {
  try {
    const res = await axios[method]<ResultType>(`${prefix}/${endpoint}`, body, config);
    return res.data;
  } catch (err) {
    Logger.error(err);
    throw err;
  }
};

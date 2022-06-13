import { AxiosResponse } from "axios";
import { CountryApi } from "../api/countries";
import { City, Country, Result } from "../types";
import { Handler } from "./result";

export interface ICountryService {
  fetchAll(continent: string): Promise<Result<Array<Country>>>;
  fetchOne(country: string): Promise<Result<Country>>;
  fetchOneCity(city: string): Promise<Result<City>>;
}

export const CountryService: ICountryService = {
  async fetchAll(continent: string): Promise<Result<Array<Country>>> {
    return await CountryApi.fetchAll(continent)
      .then((resp) => Handler.SuccessResult(resp.data))
      .catch((reason) => Handler.ErrorResult(reason));
  },
  async fetchOne(country: string): Promise<Result<Country>> {
    return await CountryApi.fetchOne(country)
      .then((resp) => Handler.SuccessResult(resp.data))
      .catch((reason) => Handler.ErrorResult(reason));
  },
  async fetchOneCity(city: string): Promise<Result<City>> {
    return await CountryApi.fetchOneCity(city)
      .then((resp) => Handler.SuccessResult(resp.data))
      .catch((reason) => Handler.ErrorResult(reason));
  },
};

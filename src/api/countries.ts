import { AxiosResponse } from "axios";
import { City, Country } from "../types";
import { instance } from "./axios";

export interface ICountryApi{
    fetchAll(continent: string): Promise<AxiosResponse<Array<Country>>>;
    fetchOne(country : string) : Promise<AxiosResponse<Country>>;
    fetchOneCity(city : string) : Promise<AxiosResponse<City>>;
}

export const CountryApi: ICountryApi={
    async fetchAll(continent: string):Promise<AxiosResponse<Array<Country>>>{
        const route=`/countries/${continent}`;
        return await instance.get<Array<Country>>(route);
    },
    async fetchOne(country : string) : Promise<AxiosResponse<Country>>{
        const route = `/countries/country/${country}`;
        return await instance.get<Country>(route);
    },
    async fetchOneCity(city : string) : Promise<AxiosResponse<City>>{
        const route = `/countries/city/${city}`;
        return await instance.get<City>(route);
    }
}
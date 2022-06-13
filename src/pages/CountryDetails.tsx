import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { CountryService } from "../service/countries";
import { Country, Status } from "../types";

export const CountryDetails: React.FC = () => {
  const { name } = useParams();

  const [country, setCountry] = useState<Country>({} as Country);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    CountryService.fetchOne(name!).then((resp) => {
      if (resp.status === Status.SUCCESS) {
        setCountry(resp.value);
        setIsLoading(false);
      }
    });
  }, [name]);

  return (
    <>
      {!isLoading && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 flex justify-around">
            <h3 className="text-3xl leading-6 font-bold text-gray-900 my-auto">
              {country.name}
            </h3>
            <img
              className="mt-1 max-w-2xl text-sm text-gray-500 border-4 border-gray-200"
              src={country.thumbnail}
              alt=""
            />
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Capital City
                </dt>
                <dd className="mt-1 text-sm text-indigo-500 sm:mt-0 sm:col-span-2">
                  <Link to={`/cities/${country.capital_city}`}>
                    {country.capital_city}
                  </Link>
                </dd>
              </div>

              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Currency</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {country.currency}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {country.description}
                </dd>
              </div>
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  {country.name} cities
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                    {country.cities.map((city) => (
                      <Link to={`/cities/${city}`} className="text-indigo-500">
                        <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                          <div className="w-0 flex-1 flex items-center">
                            <span className="ml-2 flex-1 w-0 truncate">
                              {city}
                            </span>
                          </div>
                        </li>
                      </Link>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </>
  );
};

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountryService } from "../service/countries";
import { City, Status } from "../types";

export const CityDetails: React.FC = () => {
  const { name } = useParams();

  const [city, setCity] = useState<City>({} as City);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    CountryService.fetchOneCity(name!).then((resp) => {
      if (resp.status === Status.SUCCESS) {
        setCity(resp.value);
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
              {city.name}
            </h3>
            <img
              className="mt-1 max-w-2xl text-sm text-gray-500 border-4 border-gray-200"
              src={city.thumbnail}
              alt=""
            />
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {city.description}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </>
  );
};

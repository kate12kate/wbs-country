import { Link } from "react-router-dom";
import { Country } from "../types";

type Props = {
  countries: Array<Country>;
};

export const Continent: React.FC<Props> = ({ countries }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {countries
        .filter((v, i, a) => a.findIndex((v2) => v.name === v2.name) === i)
        .map((country) => (
          <li
            key={country.id}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto rounded-full border-gray-200 border-4"
                src={country.thumbnail}
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                {country.name}
              </h3>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="-ml-px w-0 flex-1 flex">
                  <Link
                    to={`/countries/${country.name}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    Детали
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

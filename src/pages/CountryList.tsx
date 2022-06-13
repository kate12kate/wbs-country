import { useEffect, useState } from "react";
import { Continent } from "../components/Continent";
import { CountryService } from "../service/countries";
import { Country, Status } from "../types";

export const CountryList: React.FC = () => {
  const [europe, setEurope] = useState<Array<Country>>([]);
  const [northAmerica, setNorthAmerica] = useState<Array<Country>>([]);
  const [southAmerica, setSouthAmerica] = useState<Array<Country>>([]);
  const [asia, setAsia] = useState<Array<Country>>([]);
  const [africa, setAfrica] = useState<Array<Country>>([]);
  const [oceania, setOceania] = useState<Array<Country>>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      CountryService.fetchAll("Europe"),
      CountryService.fetchAll("Asia"),
      CountryService.fetchAll("Africa"),
      CountryService.fetchAll("North America"),
      CountryService.fetchAll("South America"),
      CountryService.fetchAll("Oceania"),
    ]).then(([eu, as, af, na, sa, o]) => {
      if (eu.status === Status.SUCCESS) {
        setEurope(eu.value);
      }
      if (as.status === Status.SUCCESS) {
        setAsia(as.value);
      }
      if (af.status === Status.SUCCESS) {
        setAfrica(af.value);
      }
      if (na.status === Status.SUCCESS) {
        setNorthAmerica(na.value);
      }
      if (sa.status === Status.SUCCESS) {
        setSouthAmerica(sa.value);
      }
      if (o.status === Status.SUCCESS) {
        setOceania(o.value);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="mx-10">
          <div className="my-5">
            <h1 className="text-2xl text-center font-bold my-4">Europe</h1>
            <Continent countries={europe} />
          </div>
          <div className="my-5">
            <h1 className="text-2xl text-center font-bold my-4">
              North America
            </h1>
            <Continent countries={northAmerica} />
          </div>
          <div className="my-5">
            <h1 className="text-2xl text-center font-bold my-4">
              South America
            </h1>
            <Continent countries={southAmerica} />
          </div>
          <div className="my-5">
            <h1 className="text-2xl text-center font-bold my-4">Africa</h1>
            <Continent countries={africa} />
          </div>
          <div className="my-5">
            <h1 className="text-2xl text-center font-bold my-4">Oceania</h1>
            <Continent countries={oceania} />
          </div>
          <div className="my-5">
            <h1 className="text-2xl text-center font-bold my-4">Asia</h1>
            <Continent countries={asia} />
          </div>
        </div>
      )}
    </>
  );
};

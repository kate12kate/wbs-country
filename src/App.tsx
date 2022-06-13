import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CountryList } from "./pages/CountryList";
import { CountryDetails } from "./pages/CountryDetails";
import { CityDetails } from "./pages/CityDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/countries/:name" element={<CountryDetails />} />
        <Route path="/cities/:name" element={<CityDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

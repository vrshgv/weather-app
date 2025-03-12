import { SelectCityProps, Cities, CityType } from "../types/city";

const SelectCity = ({ city, setCity }: SelectCityProps) => (
  <select value={city} onChange={e => setCity(e.target.value as CityType)} >
    {Cities.map((c) => (
      <option key={c} value={c}>{c}</option>
    ))}
  </select>
);

export default SelectCity;

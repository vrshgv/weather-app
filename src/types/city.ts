export const Cities = [
  "Lisbon",
  "London",
  "New York"
] as const;

export type CityType = (typeof Cities)[number];

export interface SelectCityProps {
  city: CityType;
  setCity: (city: CityType) => void;
}

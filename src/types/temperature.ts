export const Unit = {
  metric: "metric",
  imperial: "imperial",
} as const;

export type UnitType = (typeof Unit)[keyof typeof Unit];

export interface TemperatureSwitchProps {
  unit: UnitType;
  setUnit: (unit: UnitType) => void;
}

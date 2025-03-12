import { TemperatureSwitchProps, Unit } from "../types/temperature";

const TemperatureSwitch = ({ unit, setUnit }: TemperatureSwitchProps) => {
  return (
    <label className="toggle-switch">
      <span>°C</span>
      <div className="switch">
        <input 
          type="checkbox" 
          checked={unit === Unit.imperial} 
          onChange={() => setUnit(unit === Unit.metric ? Unit.imperial : Unit.metric)}
        />
        <span className="slider"></span>
      </div>
      <span>°F</span>
    </label>
  );
};

export default TemperatureSwitch;

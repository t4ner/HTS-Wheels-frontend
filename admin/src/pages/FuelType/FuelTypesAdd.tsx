import { useState } from "react";
import FuelTypeService from "../../services/FuelTypeService/FuelTypeService";
import "./FuelTypeAdd.css";

export default function FuelTypesAdd() {
  const [fuelTypeData, setFuelTypeData] = useState({
    type: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFuelTypeData({
      ...fuelTypeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await FuelTypeService.addFuelType(fuelTypeData);

      setFuelTypeData({ type: "" });
    } catch (error) {
      console.error("Marka eklenirken bir hata oluştu:", error);
    }
  };

  return (
    <div className="fuelType-add-container">
      <div className="form-group">
        <label className="input-label">Yakıt tipi</label>
        <input
          type="text"
          name="type"
          value={fuelTypeData.type}
          onChange={handleChange}
        />
      </div>
      <button className="button" type="submit" onClick={handleSubmit}>
        Ekle
      </button>
    </div>
  );
}

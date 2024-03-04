import { useState } from "react";
import CarService from "../../services/CarService/CarService";
import "./CarsAdd.css";
import { Car } from "../../models/car/CarAddModel";
import { AxiosError } from "axios";

export default function CarsAdd() {
  const [carData, setCarData] = useState<Car>({
    kilometer: 0,
    year: 0,
    price: 0,
    gearType: "",
    plate: "",
    description: "",
    numberOfSeats: 0,
    modelId: 0,
    colorId: 0,
    fuelTypeId: 0,
    categoryId: 0,
    brandId: 0,
    available: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarData({
      ...carData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await CarService.addCar(carData);

      setCarData({
        kilometer: 0,
        year: 0,
        price: 0,
        gearType: "",
        plate: "",
        description: "",
        numberOfSeats: 0,
        modelId: 0,
        colorId: 0,
        fuelTypeId: 0,
        categoryId: 0,
        brandId: 0,
        available: true,
      });
    } catch (error: any) {
      console.error("Araç eklenirken bir hata oluştu:", error);
      console.log("Error details:", (error as AxiosError)?.response?.data);
    }
  };
  return (
    <div className="car-add-container">
      <div className="car-add-form">
        <label className="input-label">Brand ID</label>
        <input
          type="number"
          name="brandId"
          value={carData.brandId}
          onChange={handleChange}
        />
        <label className="input-label">Category ID</label>
        <input
          type="number"
          name="categoryId"
          value={carData.categoryId}
          onChange={handleChange}
        />
        <label className="input-label">Fueltype ID</label>
        <input
          type="number"
          name="fuelTypeId"
          value={carData.fuelTypeId}
          onChange={handleChange}
        />
        <label className="input-label">Color ID</label>
        <input
          type="number"
          name="colorId"
          value={carData.colorId}
          onChange={handleChange}
        />
        <label className="input-label">Model ID</label>
        <input
          type="number"
          name="modelId"
          value={carData.modelId}
          onChange={handleChange}
        />
        <label className="input-label">Kilometre</label>
        <input
          type="number"
          name="kilometer"
          value={carData.kilometer}
          onChange={handleChange}
        />
        <label className="input-label">Model Yılı</label>
        <input
          type="number"
          name="year"
          value={carData.year}
          onChange={handleChange}
        />
        <label className="input-label">Günlük Fiyat</label>
        <input
          type="text"
          name="price"
          value={carData.price}
          onChange={handleChange}
        />
        <label className="input-label">Koltuk Sayısı</label>
        <input
          type="number"
          name="numberOfSeats"
          value={carData.numberOfSeats}
          onChange={handleChange}
        />
        <label className="input-label">Vites Tipi</label>
        <input
          type="text"
          name="gearType"
          value={carData.gearType}
          onChange={handleChange}
        />

        <label className="input-label">Plaka</label>
        <input
          type="text"
          name="plate"
          value={carData.plate}
          onChange={handleChange}
        />
        <label className="input-label">Açıklama</label>
        <input
          type="text"
          name="description"
          value={carData.description}
          onChange={handleChange}
        />
        <label className="input-label">Uygunluk</label>
        <input
          type="boolean"
          name="available"
          checked={carData.available}
          onChange={(e) =>
            setCarData({ ...carData, available: e.target.checked })
          }
        />
      </div>
      <button className="button" type="submit" onClick={handleSubmit}>
        Ekle
      </button>
    </div>
  );
}

import { useState } from "react";
import CarService from "../../services/CarService/CarService";
import { AxiosError } from "axios";
import { CarUpdatedModel } from "../../models/car/CarUpdated";

export default function CarsAdd() {
  const [carUpdated, setCarUpdated] = useState<CarUpdatedModel>({
    id: 0,
    kilometer: 0,
    year: 0,
    price: 0,
    gearType: "",
    plate: "",
    description: "",
    numberOfSeats: 0,
    isAvailable: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarUpdated({
      ...carUpdated,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await CarService.updateCar(carUpdated);

      setCarUpdated({
        id: 0,
        kilometer: 0,
        year: 0,
        price: 0,
        gearType: "",
        plate: "",
        description: "",
        numberOfSeats: 0,
        isAvailable: true,
      });
    } catch (error: any) {
      console.error("Araç eklenirken bir hata oluştu:", error);
      console.log("Error details:", (error as AxiosError)?.response?.data);
    }
  };
  return (
    <div className="car-add-container">
      <div className="car-add-form">
        <label className="input-label">ID</label>
        <input
          type="number"
          name="id"
          value={carUpdated.id}
          onChange={handleChange}
        />
        <label className="input-label">Kilometer</label>
        <input
          type="number"
          name="kilometer"
          value={carUpdated.kilometer}
          onChange={handleChange}
        />
        <label className="input-label">Year</label>
        <input
          type="number"
          name="year"
          value={carUpdated.year}
          onChange={handleChange}
        />
        <label className="input-label">Price</label>
        <input
          type="number"
          name="price"
          value={carUpdated.price}
          onChange={handleChange}
        />
        <label className="input-label">Number Of Seats</label>
        <input
          type="number"
          name="numberOfSeats"
          value={carUpdated.numberOfSeats}
          onChange={handleChange}
        />
        <label className="input-label">Gear Type</label>
        <input
          type="text"
          name="gearType"
          value={carUpdated.gearType}
          onChange={handleChange}
        />
        <label className="input-label">Description</label>
        <input
          type="text"
          name="description"
          value={carUpdated.description}
          onChange={handleChange}
        />

        <label className="input-label">Plate</label>
        <input
          type="text"
          name="plate"
          value={carUpdated.plate}
          onChange={handleChange}
        />

        <label className="input-label">Uygunluk</label>
        <input
          type="boolean"
          name="isAvailable"
          checked={carUpdated.isAvailable}
          onChange={(e) =>
            setCarUpdated({ ...carUpdated, isAvailable: e.target.checked })
          }
        />
      </div>
      <button className="button mt-5" type="submit" onClick={handleSubmit}>
        Güncelle
      </button>
    </div>
  );
}

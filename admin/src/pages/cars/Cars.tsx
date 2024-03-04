import { useState, useEffect } from "react";
import CarService from "../../services/CarService/CarService";
import CarList from "./CarList";
import { CarResponses } from "../../models/car/CarResponses";

function Cars() {
  const [cars, setCars] = useState<CarResponses[]>([]);
  const fetchCars = async () => {
    try {
      const result = await CarService.getCars().then((result: any) => result.data.data);
      setCars(result);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };
  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className=" w-1/2 gap-10 mx-auto">
      <div className="form-group">
        {cars.map((car, index) => (
          <CarList car={car} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Cars;

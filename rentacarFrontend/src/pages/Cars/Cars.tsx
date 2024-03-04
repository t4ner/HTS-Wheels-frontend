import { useState, useEffect } from "react";
import CarList from "./components/CarList";
import FilterSidebar from "./components/FilterSidebar";
import { Car } from "../../models/responses/car/GetAllCarResponses";
import CarService from "../../services/CarService/CarService";

function Cars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [showAllCars, setShowAllCars] = useState(false);
  const fetchCars = async () => {
    try {
      const carService = new CarService();
      const result = await carService
        .getAllCars()
        .then((result: any) => result.data.data);
      setCars(result);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };
  useEffect(() => {
    fetchCars();
  }, []);

  const handleShowAllCars = () => {
    setShowAllCars(true);
  };

  console.log(cars);
  return (
    <div className="flex flex-col">
      <div className="flex-col md:flex md:flex-row justify-center md:gap-4 p-5">
        <FilterSidebar />
        <div className="basis-3/4 flex flex-wrap mt-5 md:mt-0 space-y-5 md:space-y-0">
          {cars.slice(0, showAllCars ? cars.length : 6).map((car, index) => (
            <CarList car={car} key={index} />
          ))}
        </div>
      </div>
      <div className="h-full ml-auto mb-10">
        {!showAllCars && cars.length > 6 && (
          <button
            className="text-blue-600 underline hover:no-underline transition duration-700 font-bold mr-5"
            onClick={handleShowAllCars}
          >
            MORE CAR
          </button>
        )}
      </div>
    </div>
  );
}

export default Cars;

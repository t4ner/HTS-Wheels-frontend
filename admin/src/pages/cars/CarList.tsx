import React from "react";
import {
  faCalendarDays,
  faDroplet,
  faGasPump,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { CarResponses } from "../../models/car/CarResponses";

interface CarListProps {
  car: CarResponses;
}

const CarList: React.FC<CarListProps> = ({ car }) => {
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/cars/delete?id=${id}`);
      alert("Araba başarıyla silindi");
    } catch (error) {
      console.error("Araba silinirken bir hata oluştu: ", error);

      if ((error as any).response) {
        console.error("Server Response Data:", (error as any).response.data);
        console.error(
          "Server Response Status:",
          (error as any).response.status
        );
        console.error(
          "Server Response Headers:",
          (error as any).response.headers
        );
      } else if ((error as any).request) {
        console.error(
          "No response received. Request details:",
          (error as any).request
        );
      } else {
        console.error("Error setting up the request:", (error as any).message);
      }

      alert("Araba silinirken bir hata oluştu.");
    }
  };

  return (
    <div className="border p-2 mb-5 rounded-lg ">
      <div className="space-y-2">
        <h4>ID : {car.id}</h4>
        <h4 className="font-bold">{car.brandName}</h4>
        <h4 className="font-bold">{car.modelName}</h4>
        <h4 className="font-bold">{car.plate}</h4>
      </div>

      <div className="flex justify-start space-x-10 mt-3">
        <div className="flex items-center">
          <FontAwesomeIcon className="mr-1 text-gray-400" icon={faGasPump} />
          <p className="text-sm text-gray-400">{car.fuelType}</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon className="mr-1  text-gray-400" icon={faDroplet} />
          <p className="text-sm text-gray-400">{car.colorName}</p>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon
            className="mr-1  text-gray-400"
            icon={faCalendarDays}
          />
          <p className="text-sm text-gray-400">{car.year}</p>
        </div>

        <button
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            handleDelete(car.id)
          }
          className=" ml-auto px-2 py-1 rounded-lg border-2 border-red-700 hover:bg-red-700 duration-300"
        >
          Sil
        </button>
      </div>
    </div>
  );
};

export default CarList;

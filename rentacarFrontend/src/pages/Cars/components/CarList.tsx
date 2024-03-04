// CarList.jsx
import React from "react";
import { Car } from "../../../models/responses/car/GetAllCarResponses";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faDroplet,
  faGasPump,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
interface CarListProps {
  car: Car;
}

const CarList: React.FC<CarListProps> = ({ car }) => {
  return (
    <div className="border bg-white w-full md:w-auto mx-auto md:mx-0 p-5 rounded-lg space-y-5">
      <div>
        <h4 className="font-bold">{car.brandName}</h4>
        <h4 className="font-bold">{car.modelName}</h4>
        <p className="text-gray-400">{car.categoryName}</p>
      </div>
      <div>
        {car.images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            className="h-40 w-60 object-contain"
            alt=""
          />
        ))}
      </div>
      <div className="flex justify-around">
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
      </div>
      <div className="flex justify-between items-center ">
        <p className="font-bold">
          {car.price}.00$/
          <span className="text-gray-400 font-bold text-sm">days</span>{" "}
        </p>
        <Link
          to={`/cardetail/${car.id}`}
          className="border px-4 py-2 rounded-lg bg-blue-600 text-white font-bold text-sm uppercase"
        >
          Rent now
        </Link>
      </div>
    </div>
  );
};

export default CarList;

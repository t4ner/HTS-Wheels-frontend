import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "/images/logo/logo.png";
import { Car } from "../../models/responses/car/GetAllCarResponses";
import CarService from "../../services/CarService/CarService";
function CarDetail() {
  const [carDetail, setCarDetail] = useState<Car>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchDetails = async () => {
      if (id) {
        try {
          let service = new CarService();
          let response = await service.getByIdCar(parseInt(id));
          setCarDetail(response.data.data);
        } catch (error) {
          console.error("Error fetching details:", error);
        }
      }
    };

    fetchDetails();
  }, []);
  return (
    <div className="container p-5">
      <div className="flex flex-col md:flex md:flex-row justify-center space-x-0 md:space-x-5 md:my-10">
        <div className=" basis-1/2 bg-slate-700 rounded-lg">
          <div className="flex flex-col justify-around h-full  space-y-6 p-5">
            <h3 className="font-bold text-white text-xl md:text-3xl w-full md:w-1/2">
              Where Elegance Meets Performance
            </h3>
            <p className="text-white text-sm  md:text-lg font-semibold">
              Are you ready to elevate your driving experience to new heights?
              Look no further than HTS-Wheels, where sophistication, speed, and
              safety converge in the world of luxury cars. Elevate your driving
              with HTS-Wheels and make every journey a memorable celebration of
              automotive excellence.
            </p>

            <img
              className="w-full object-cover h-[100px] rounded-lg"
              src={logo}
            />
          </div>
        </div>
        <div className="text-sm md:text-lg basis-1/2 bg-white rounded-lg p-5 space-y-5 mt-5 md:mt-0">
          <h3 className="font-extrabold text-xl md:text-2xl ">
            {carDetail?.modelName}
          </h3>
          <p className="leading-relaxed text-gray-400 font-semibold text-xs md:text-base">
            {carDetail?.description}
          </p>
          <div className="flex flex-col justify-start space-y-1 w-full md:w-2/3 font-semibold">
            <p className="flex justify-between">
              <span className="text-gray-400 ">Type Car</span>{" "}
              {carDetail?.categoryName}
            </p>
            <p className="flex justify-between">
              <span className="text-gray-400">Capacity</span>
              {carDetail?.numberOfSeats} Person
            </p>
            <p className="flex justify-between">
              <span className="text-gray-400 ">Steering</span> Manual
            </p>
            <p className="flex justify-between">
              <span className="text-gray-400 ">Kilometer</span>{" "}
              {carDetail?.kilometer} KM
            </p>
            <p className="flex justify-between">
              <span className="text-gray-400 ">Gasoline</span> 70L
            </p>
            <p className="flex justify-between">
              <span className="text-gray-400 ">Year</span> {carDetail?.year}
            </p>
            <p className="flex justify-between">
              <span className="text-gray-400 ">Color</span>{" "}
              {carDetail?.colorName}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-xl">
              ${carDetail?.price}/
              <span className="text-gray-400 text-sm">days</span>
            </h3>
            <Link
              className="bg-slate-500 font-bold text-lg text-white  px-2 py-1 rounded-lg hover:bg-slate-700 duration-500"
              to={"/rental"}
            >
              Rental Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;

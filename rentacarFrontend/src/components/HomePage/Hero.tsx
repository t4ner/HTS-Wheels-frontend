import { Link } from "react-router-dom";
import heroimage1 from "/images/heroImage/heroimage1.png";
import heroimage2 from "/images/heroImage/heroimage2.png";

function Hero() {
  return (
    <div className="px-3 lg:px-0 container mt-8">
      <div className=" flex-col lg:flex lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-0">
        <div className="flex flex-col justify-between flex-grow bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 p-3 lg:p-6 rounded-lg">
          <h3 className="text-xl md:text-3xl font-semibold text-white w-full md:w-1/2">
            The Best Platform for Car Rental
          </h3>

          <p className="w-full text-sm md:text-lg lg:w-1/2 my-4 text-white">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <Link
            to="/cars"
            className="text-white w-[86px] md:w-24 bg-blue-800 px-1 py-2 rounded-lg text-sm sm:text-base "
          >
            Rental Now
          </Link>

          <img
            className="mx-auto w-[250px] md:w-[350px] "
            src={heroimage1}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between flex-grow bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 p-3 lg:p-6 rounded-lg">
          <h3 className="text-xl md:text-3xl font-semibold text-white w-full md:w-1/2">
            Easy way to rent a car at a low price
          </h3>
          <p className="w-full text-sm md:text-lg lg:w-1/2 my-4 text-white">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <Link
            to="/cars"
            className="text-white w-[86px] md:w-24 bg-blue-400 px-1 py-2 rounded-lg text-sm sm:text-base"
          >
            Rental Now
          </Link>
          <img
            className="mx-auto w-[250px] md:w-[350px] "
            src={heroimage2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

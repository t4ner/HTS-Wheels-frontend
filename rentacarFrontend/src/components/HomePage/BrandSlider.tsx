import audi from "/images/brandsImage/audi.png";
import bmw from "/images/brandsImage/bmw.png";
import bugatti from "/images/brandsImage/bugatti.png";
import honda from "/images/brandsImage/honda.png";
import jaguar from "/images/brandsImage/jaguar.png";
import jeep from "/images/brandsImage/jeep.png";
import lamborghini from "/images/brandsImage/lamborghini.png";
import mitsubishi from "/images/brandsImage/mitsubishi.png";
import mercedes from "/images/brandsImage/mercedes.png";
import phidel from "/images/brandsImage/phidel.png";
import renault from "/images/brandsImage/renault.png";
import romeo from "/images/brandsImage/romeo.png";
import royce from "/images/brandsImage/royce.png";
import scania from "/images/brandsImage/scania.png";
import subaru from "/images/brandsImage/subaru.png";
import tesla from "/images/brandsImage/tesla.png";
import ferrari from "/images/brandsImage/ferrari.png";
import volkswagen from "/images/brandsImage/volkswagen.png";
import volvo from "/images/brandsImage/volvo.png";

const images = [
  audi,
  bmw,
  bugatti,
  honda,
  jaguar,
  ferrari,
  jeep,
  lamborghini,
  mitsubishi,
  mercedes,
  phidel,
  renault,
  romeo,
  royce,
  scania,
  subaru,
  bugatti,
  tesla,
  volkswagen,
  volvo,
  honda,
  jaguar,
  ferrari,
  jeep,
  lamborghini,
  mitsubishi,
  mitsubishi,
  jaguar,
];

function BrandSlider() {
  return (
    <div className="container my-8 px-3 lg:px-0 ">
      <div className="flex overflow-hidden whitespace-nowrap rounded-lg bg-blue-00 bg-white">
        <div className="flex items-center py-4 md:py-8 space-x-4 md:space-x-16 animate-translate">
          {images.map((image, index) => (
            <img
              key={index}
              className="h-10 md:h-20 "
              alt={image}
              src={image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrandSlider;

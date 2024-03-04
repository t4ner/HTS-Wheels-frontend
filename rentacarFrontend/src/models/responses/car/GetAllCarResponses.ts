export interface Car  {
  id: number;
  price: number;
  plate: string;
  gearType: string;
  kilometer: number;
  year: number;
  modelName: string;
  colorId: number;
  colorName: string;
  fuelType: string;
  categoryId: number;
  categoryName: string;
  brandId: number;
  brandName: string;
  amountOfFuel: string;
  description: string;
  isAvailable: boolean;
  numberOfSeats: number;
  images: Image[];
}
interface Image {
  id: number;
  url: string;
  publicId: string;
  width: number;
  height: number;
  format: string;
  bytes: number;
  carId: number;
}
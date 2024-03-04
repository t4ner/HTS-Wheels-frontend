import axios from "axios";

export default class FuelTypeService {
  getAllFuelTypes() {
    return axios.get("http://localhost:8080/api/v1/fuelTypes/getAll");
  }

  getByIdFuelType(id: number) {
    return axios.get(
      "http://localhost:8080/api/v1/fuelTypes/getById?id=" + id);
  }
}

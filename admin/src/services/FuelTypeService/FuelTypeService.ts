import axios from "axios";

export default class FuelTypeService {
  static async getFuelTypes() {
    return axios.get("http://localhost:8080/api/v1/fuelTypes/getAll");
  }

  static async addFuelType(fuelTypeData: { type: string }) {
    return axios.post("http://localhost:8080/api/v1/fuelTypes/add", fuelTypeData);
  }
}

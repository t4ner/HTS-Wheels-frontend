import axios from "axios";

export default class FuelTypeService {
  static async getModels() {
    return axios.get("http://localhost:8080/api/v1/models/getAll");
  }

  static async addModel(modelsData: { name: string }) {
    return axios.post("http://localhost:8080/api/v1/models/add", modelsData);
  }
}

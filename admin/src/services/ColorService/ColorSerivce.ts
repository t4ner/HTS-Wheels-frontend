import axios from "axios";

export default class ColorService {
  static async getColors() {
    return axios.get("http://localhost:8080/api/v1/colors/getAll");
  }

  static async addColors(colorData: { name: string }) {
    return axios.post("http://localhost:8080/api/v1/colors/add", colorData);
  }
}

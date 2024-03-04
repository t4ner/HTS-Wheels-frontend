import axios from "axios";

export default class ColorService {
  getAllColors() {
    return axios.get("http://localhost:8080/api/v1/colors/getAll");
  }

  getByIdColor(id: number) {
    return axios.get(
      "http://localhost:8080/api/v1/colors/getById?id=" + id);
  }
}
import axios from "axios";

export default class BrandService {
  static async getBrands() {
    return axios.get("http://localhost:8080/api/v1/brands/getAll");
  }

  static async addBrand(brandData: { name: string }) {
    return axios.post("http://localhost:8080/api/v1/brands/add", brandData);
  }
}

import axios from "axios";

export default class CategoryService {
  static async getCategories() {
    return axios.get("http://localhost:8080/api/v1/categories/getAll");
  }

  static async addCategory(categoryData: { name: string }) {
    return axios.post(
      "http://localhost:8080/api/v1/categories/add", categoryData);
  }
}

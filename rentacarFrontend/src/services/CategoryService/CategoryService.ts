import axios from "axios";

export default class CategoryService {
  getAllCategories() {
    return axios.get("http://localhost:8080/api/v1/categories/getAll");
  }

  getCategoryById(id: number) {
    return axios.get(
      "http://localhost:8080/api/v1/categories/getById?id=" + id
    );
  }
}

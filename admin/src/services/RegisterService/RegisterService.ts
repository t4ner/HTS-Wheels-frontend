import { RegisterCreate } from "./../../models/register/RegisterModel";
import axios from "axios";

export default class RegisterService {
  // static async getCars() {
  //     return axios.get("http://localhost:8080/api/v1/cars/getAll");
  // }

  static async register(register: RegisterCreate) {
    return axios.post("http://localhost:8080/api/v1/auths/register", register);
  }
}

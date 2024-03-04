import axios from "axios";
import { AxiosResponse } from "axios";
import { ImageModel } from "../../models/image/ImageModel";

export default class ImageService {
  static async addImage(file: File, carId: number): Promise<ImageModel> {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("carId", carId.toString());

      const response: AxiosResponse<ImageModel> = await axios.post(
        "http://localhost:8080/api/v1/images/save",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Image upload failed:", error);
      throw error;
    }
  }
}

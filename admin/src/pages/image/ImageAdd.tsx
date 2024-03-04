import { useState, ChangeEvent, FormEvent } from "react";
import ImageService from "../../services/ImageService/ImageService";
import "./ImageAdd.css";
import axios from "axios";

interface ImageAddProps {
  carId?: number;
}

interface ImageAddState {
  file: File | null;
  inputCarId: number; 
}

const ImageAdd: React.FC<ImageAddProps> = ({ carId = 0 }) => {
  const [imageData, setImageData] = useState<ImageAddState>({
    file: null,
    inputCarId: carId || 0, 
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "file" && e.target.files) {
      setImageData({
        ...imageData,
        file: e.target.files[0],
      });
    } else if (e.target.name === "carId") {
      setImageData({
        ...imageData,
        inputCarId: Number(e.target.value), 
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (imageData.file) {
        await ImageService.addImage(imageData.file, imageData.inputCarId);
      }

      setImageData({
        file: null,
        inputCarId: carId || 0, 
      });
    } catch (error) {
      console.error("Resim eklenirken bir hata oluştu:", error);

      if (axios.isAxiosError(error)) {
        console.error("AxiosError details:", error.response?.data);
      }
    }
  };

  return (
    <div className="image-add-container">
      <div className="form-group">
        <label className="input-label">Resim Yükle</label>
        <input type="file" name="file" onChange={handleChange} />
        <label className="input-label">Car ID</label>
        <input
          type="number"
          name="carId"
          value={imageData.inputCarId}
          onChange={handleChange}
        />
      </div>
      <button className="button" type="submit" onClick={handleSubmit}>
        Ekle
      </button>
    </div>
  );
};

export default ImageAdd;

import { useState } from "react";
import ModelService from "../../services/ModelService/ModelService";
import "./ModelsAdd.css";

export default function ModelsAdd() {
  const [modelsData, setModelsData] = useState({
    name: "",
    brandId: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModelsData({
      ...modelsData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await ModelService.addModel(modelsData);

      setModelsData({ name: "", brandId: ""});
    } catch (error) {
      console.error("Model eklenirken bir hata oluştu:", error);
    }
  };

  return (
    <div className="model-add-container">
      <div className="form-group">
        <label className="input-label">Model</label>
        <input
          type="text"
          name="name"
          value={modelsData.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label className="input-label">Brand ID</label>
        <input
          type="number"
          name="brandId"
          value={modelsData.brandId}
          onChange={handleChange}
        />
       </div>
      <button className="button" type="submit" onClick={handleSubmit}>
        Ekle
      </button>
    </div>
  );
}

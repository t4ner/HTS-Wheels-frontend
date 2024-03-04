import { useState } from "react";
import ColorsService from "../../services/ColorService/ColorSerivce";
import "./ColorsAdd.css";

export default function ColorAdd() {
  const [colorData, setColorData] = useState({
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorData({
      ...colorData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await ColorsService.addColors(colorData);

      setColorData({ name: "" });
    } catch (error) {
      console.error("Renk eklenirken bir hata oluştu:", error);
    }
  };

  return (
    <div className="color-add-container">
      <div className="form-group">
        <label className="input-label">Renk</label>
        <input
          type="text"
          name="name"
          value={colorData.name}
          onChange={handleChange}
        />
      </div>
      <button className="button" type="submit" onClick={handleSubmit}>
        Ekle
      </button>
    </div>
  );
}

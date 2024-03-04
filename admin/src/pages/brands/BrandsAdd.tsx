import { useState } from "react";
import BrandService from "../../services/BrandService/BrandService";
import "./BrandsAdd.css";

export default function BrandsAdd() {
  const [brandData, setBrandData] = useState({
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrandData({
      ...brandData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await BrandService.addBrand(brandData);

      setBrandData({ name: "" });
    } catch (error) {
      console.error("Marka eklenirken bir hata oluştu:", error);
    }
  };

  return (
    <div className="brand-add-container">
      <div className="form-group">
        <label className="input-label">Marka ekle</label>
        <input
          type="text"
          name="name"
          value={brandData.name}
          onChange={handleChange}
        />
      </div>
      <button className="button" type="submit" onClick={handleSubmit}>
        Ekle
      </button>
    </div>
  );
}

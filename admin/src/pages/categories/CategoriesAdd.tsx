import { useState } from "react";
import CategoryService from "../../services/CategoryService/CategoryService";
import "./CategoriesAdd.css";

export default function ModelsAdd() {
  const [categoryData, setCategoryData] = useState({
    name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryData({
      ...categoryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await CategoryService.addCategory(categoryData);

      setCategoryData({ name: "" });
    } catch (error) {
      console.error("Kategori eklenirken bir hata oluştu:", error);
    }
  };

  return (
    <div className="categories-add-container">
      <div className="form-group">
        <label className="input-label">Category</label>
        <input
          type="text"
          name="name"
          value={categoryData.name}
          onChange={handleChange}
        />
     </div>
      <button className="button" type="submit" onClick={handleSubmit}>
        Ekle
      </button>
    </div>
  );
}

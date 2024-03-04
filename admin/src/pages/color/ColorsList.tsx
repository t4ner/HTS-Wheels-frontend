import React, { useState, useEffect } from "react";
import axios from "axios";

interface Color {
  id: number;
  name: string;
}

const ColorList: React.FC = () => {
  const [colorList, setColorList] = useState<Color[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/colors/getAll"
      );
      setColorList(response.data.data); // response.data.data doğrudan diziye işaret ediyor
    } catch (error) {
      console.error("Veri çekme işleminde hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(colorList);
  return (
    <div>
      <h1>Renk Listesi</h1>
      <ul>
        {colorList.map((Color) => (
          <li key={Color.id}>
            {Color.id} - {Color.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;

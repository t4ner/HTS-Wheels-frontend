import React, { useState, useEffect } from "react";
import axios from "axios";

interface ModelsList {
  id: number;
  name: string;
}

const ModelsList: React.FC = () => {
  const [modelsList, setModelsList] = useState<ModelsList[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/models/getAll"
      );
      setModelsList(response.data.data); // response.data.data doğrudan diziye işaret ediyor
    } catch (error) {
      console.error("Veri çekme işleminde hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(modelsList);
  return (
    <div>
      <h1>Model Listesi</h1>
      <ul>
        {modelsList.map((model) => (
          <li key={model.id}>
            {model.id} - {model.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModelsList;

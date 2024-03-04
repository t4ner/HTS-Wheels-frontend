import React, { useState, useEffect } from "react";
import axios from "axios";

interface FuelType {
  id: number;
  type: string;
}

const FuelTypeList: React.FC = () => {
  const [fuelTypeList, setFuelTypeList] = useState<FuelType[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/fuelTypes/getAll"
      );
      setFuelTypeList(response.data.data); // response.data.data doğrudan diziye işaret ediyor
    } catch (error) {
      console.error("Veri çekme işleminde hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(fuelTypeList);
  return (
    <div>
      <h1>Yakıt tipi Listesi</h1>
      <ul>
        {fuelTypeList.map((fuelType) => (
          <li key={fuelType.id}>
            {fuelType.id} - {fuelType.type}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FuelTypeList;

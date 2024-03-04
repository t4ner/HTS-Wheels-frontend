import { useState } from "react";
import RegisterService from "../../services/RegisterService/RegisterService";
import "./Register.css";
import { RegisterCreate } from "../../models/register/RegisterModel";
import { AxiosError as AxiosErrorType } from "axios";

export default function Register() {
  const [register, setRegisterData] = useState<RegisterCreate>({
    firstName: "",
    lastName: "",
    email: "",
    gsm: "",
    username: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setRegisterData({
      ...register,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await RegisterService.register(register);

      setRegisterData({
        firstName: "",
        lastName: "",
        email: "",
        gsm: "",
        username: "",
        password: "",
      });
    } catch (error: any) {
      console.error("Personel eklenirken bir hata oluştu:", error);
      console.log("Error details:", (error as AxiosErrorType)?.response?.data);
    }
  };
  return (
    <div className="register-container">
      <div className="register-form">
        <label className="input-label">İsim</label>
        <input
          type="text"
          name="firstName"
          value={register.firstName}
          onChange={handleChange}
        />
        <label className="input-label">Soyisim</label>
        <input
          type="text"
          name="lastName"
          value={register.lastName}
          onChange={handleChange}
        />
        <label className="input-label">Email</label>
        <input
          type="email"
          name="email"
          value={register.email}
          onChange={handleChange}
        />
        <label className="input-label">Telefon Numarası</label>
        <input
          type="text"
          name="gsm"
          value={register.gsm}
          onChange={handleChange}
        />
        <label className="input-label">Kullanıcı Adı</label>
        <input
          type="text"
          name="username"
          value={register.username}
          onChange={handleChange}
        />
        <label className="input-label">Şifre</label>
        <input
          type="password"
          name="password"
          value={register.password}
          onChange={handleChange}
        />
      </div>
      <button className="button" type="submit" onClick={handleSubmit}>
        Ekle
      </button>
    </div>
  );
}

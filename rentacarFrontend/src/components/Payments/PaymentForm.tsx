import React, { useState, useEffect } from "react";
import axios from "axios";

interface PaymentInfo {
  cardNumber: string;
  expMonth: string;
  expYear: string;
  cvc: string;
  username: string;
}

const PaymentForm: React.FC = () => {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
    username: "",
  });

  // Formun temizlenmesi için bekleme süresi (milisaniye cinsinden)
  const CLEANUP_DELAY = 5000; // 5 saniye

  // Kullanıcının son etkileşim zamanı
  let lastInteractionTime = Date.now();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo({
      ...paymentInfo,
      [name]: value,
    });

    // Kullanıcı etkileşiminde bulunduğunda zamanı güncelle
    lastInteractionTime = Date.now();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/public/stripe/card/token",
        paymentInfo
      );
      console.log(response.data);
      // Form gönderildikten sonra inputların içeriğini temizle
      setPaymentInfo({
        cardNumber: "",
        expMonth: "",
        expYear: "",
        cvc: "",
        username: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Belirli bir süre boyunca kullanıcı etkileşiminde bulunmazsa formu temizle
    const intervalId = setInterval(() => {
      if (Date.now() - lastInteractionTime >= CLEANUP_DELAY) {
        setPaymentInfo({
          cardNumber: "",
          expMonth: "",
          expYear: "",
          cvc: "",
          username: "",
        });
      }
    }, 1000); // Her saniye kontrol et

    return () => clearInterval(intervalId);
  }, [paymentInfo]); // paymentInfo değiştiğinde etkinleştir

  return (
    <div className="bg-white rounded-lg p-5">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="font-bold" htmlFor="">
            Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            value={paymentInfo.cardNumber}
            onChange={handleChange}
            placeholder="Card Number"
            className="ml-4 border-2 rounded-lg p-1"
          />
        </div>
        <div>
          <label className="font-bold" htmlFor="">
            Expiration Month
          </label>
          <input
            type="text"
            name="expMonth"
            value={paymentInfo.expMonth}
            onChange={handleChange}
            placeholder="Expiration Month"
            className="ml-4 border-2 rounded-lg p-1"
          />
        </div>
        <div>
          {" "}
          <label className="font-bold" htmlFor="">
            Expiration Year
          </label>
          <input
            type="text"
            name="expYear"
            value={paymentInfo.expYear}
            onChange={handleChange}
            placeholder="Expiration Year"
            className="ml-4 border-2 rounded-lg p-1"
          />
        </div>
        <div>
          {" "}
          <label className="font-bold" htmlFor="">
            CVC
          </label>
          <input
            type="text"
            name="cvc"
            value={paymentInfo.cvc}
            onChange={handleChange}
            placeholder="CVC"
            className="ml-4 border-2 rounded-lg p-1"
          />
        </div>
        <div>
          <label className="font-bold" htmlFor="">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={paymentInfo.username}
            onChange={handleChange}
            placeholder="Username"
            className="ml-4 border-2 rounded-lg p-1"
          />
        </div>

        <button
          className="border py-2 px-4 bg-blue-600 rounded-lg text-white font-semibold mt-5"
          type="submit"
        >
          Rental Now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;

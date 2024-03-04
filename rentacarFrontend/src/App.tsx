import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cars from "./pages/Cars/Cars";
import CarDetails from "./pages/CarDetails/CarDetails";
import Rental from "./pages/Rental/Rental";
import Contact from "./pages/Contact/Contact";
import Login from "./components/Auth/Login";
import CategoryList from "./pages/Category/CategoryList";
import ColorList from "./pages/ColorList/ColorList";
import FuelTypeList from "./pages/FuelTypeList/FuelTypeList";
import Signup from "./components/Auth/Signup";
import CorporateCustomerSignup from "./components/Auth/CorporateCustomerSignUp";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cardetail/:id" element={<CarDetails />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} /> 
        <Route path='/profile' element={<ProfileCard />} /> 
        <Route path='/company-signup' element={<CorporateCustomerSignup />} /> 
        <Route path="/category-list/:id" element={<CategoryList />} />
        <Route path="/color-list/:id" element={<ColorList />} />
        <Route path="/fuel-type-list/:id" element={<FuelTypeList />} />
      </Routes>
      <Footer />
    </>
  );

  
}

export default App;

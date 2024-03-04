import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/main-layout/MainLayout.tsx";
import Cars from "./pages/cars/Cars.tsx";
import HomePage from "./pages/homepage/HomePage.tsx";
import CarsUpdated from "./pages/cars/CarsUpdated.tsx";
import CarsAdd from "./pages/cars/CarsAdd.tsx";
import BrandsAdd from "./pages/brands/BrandsAdd.tsx";
import FuelTypesAdd from "./pages/FuelType/FuelTypesAdd.tsx";
import ModelsAdd from "./pages/models/ModelsAdd.tsx";
import CategoriesAdd from "./pages/categories/CategoriesAdd.tsx";
import Register from "./pages/register/Register.tsx";
import ColorsAdd from "./pages/color/ColorsAdd.tsx";
import CategoriesList from "./pages/categories/CategoriesList.tsx";
import ColorList from "./pages/color/ColorsList.tsx";
import FuelTypeList from "./pages/FuelType/FuelTypeList.tsx";
import ModelsList from "./pages/models/ModelsLİst.tsx";
import RegisterList from "./pages/register/RegisterList.tsx";
import ImageAdd from "./pages/image/ImageAdd.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          element: <MainLayout />,
          children: [
            {
              path: "/",
              element: <HomePage />,
            },
            {
              path: "/cars",
              element: <Cars />,
            },

            {
              path: "/cars-add",
              element: <CarsAdd />,
            },
            {
              path: "/cars-update",
              element: <CarsUpdated />,
            },
            {
              path: "/brand-add",
              element: <BrandsAdd />,
            },
            {
              path: "/fuel-type-add",
              element: <FuelTypesAdd />,
            },
            {
              path: "/model-add",
              element: <ModelsAdd />,
            },
            {
              path: "/categories-add",
              element: <CategoriesAdd />,
            },
            {
              path: "/personals-add",
              element: <Register />,
            },
            {
              path: "/color-add",
              element: <ColorsAdd />,
            },
            {
              path: "categories-list",
              element: <CategoriesList />,
            },
            {
              path: "color-list",
              element: <ColorList />,
            },
            {
              path: "fuel-type-list",
              element: <FuelTypeList />,
            },
            {
              path: "models-list",
              element: <ModelsList />,
            },
            {
              path: "personals-list",
              element: <RegisterList />,
            },
            {
              path: "/image-add",
              element: <ImageAdd />,
            },
          ],
        },
      ])}
    />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./Components/Home/HomePage";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

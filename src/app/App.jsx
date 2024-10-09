/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { fetchWithToken } from "../config/apiConfig";

function App() {
  return (
    <>
      <Toaster />
      <Navigation />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;

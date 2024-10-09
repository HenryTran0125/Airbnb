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
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchWithToken(
          "https://api.example.com/your-endpoint"
        );
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData(); // Gọi hàm để lấy dữ liệu khi ứng dụng khởi động
  }, []);
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

/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function App() {
  return (
    <>
      <Navigation />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;

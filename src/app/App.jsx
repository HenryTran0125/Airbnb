/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

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

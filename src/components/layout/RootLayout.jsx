import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ScrollToHash from "../ScrollToHash/ScrollToHash";
import Footer from "../Footer/Footer";

const RootLayout = () => {
  return (
    <>
      <ScrollToHash />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;

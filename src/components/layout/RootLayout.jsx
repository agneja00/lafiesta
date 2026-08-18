import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import ScrollToHash from "../ScrollToHash/ScrollToHash";

const RootLayout = () => {
  return (
    <>
      <ScrollToHash />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;

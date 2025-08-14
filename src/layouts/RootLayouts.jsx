import { Outlet } from "react-router";
import Navbar from "../Pages/shared/Navbar";
import Footer from "../Pages/shared/Footer";
import useDynamicTitle from "../Pages/hooks/useDynamicTitle";

const RootLayouts = () => {
  useDynamicTitle();
  return (
    <div>
      <Navbar />

      <div className="w-11/12 mx-auto min-h-[calc(100vh-280px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayouts;

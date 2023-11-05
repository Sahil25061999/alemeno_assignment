import { Outlet } from "react-router-dom";
import { Navbar } from "../index.component";
export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

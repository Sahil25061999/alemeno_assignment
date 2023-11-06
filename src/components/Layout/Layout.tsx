import { Outlet } from "react-router-dom";
import { Navbar } from "../index.component";
export const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className=" py-4 text-left">
        <Outlet />
      </main>
    </div>
  );
};

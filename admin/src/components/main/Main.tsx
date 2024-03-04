import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="text-black p-8 ">
      <Outlet />
    </div>
  );
};

export default Main;

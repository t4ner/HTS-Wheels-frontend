import Main from "../../components/main/Main";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const MainLayout = () => {
  return (
    <div className="flex bg-white">
      <Sidebar />
      <div className="flex-grow">
        <Topbar />
        <Main />
      </div>
    </div>
  );
};

export default MainLayout;

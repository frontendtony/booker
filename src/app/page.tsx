import CentreLayoutPopulated from "@/components/CentreLayoutPopulated";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  return (
    <div className="grid min-h-screen grid-cols-[280px_1fr_1fr]">
      <div className="hide-scrollbar h-screen overflow-y-auto bg-white pt-4 pl-6">
        <Sidebar />
      </div>

      <div className="hide-scrollbar h-screen overflow-y-auto bg-[#FAFAFC] p-6">
        <CentreLayoutPopulated />
      </div>

      <div className="hide-scrollbar h-screen overflow-y-auto bg-white p-4">
        <h2 className="mb-2 font-bold">Main Content</h2>
      </div>
    </div>
  );
};

export default Home;

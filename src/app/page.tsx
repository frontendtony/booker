import CentreLayoutPopulated from "@/components/centreLayoutPopulated";
import LargeCalendarPopulated from "@/components/largeCalendarPopulated";
import Sidebar from "@/components/sidebar";

const Home = () => {
  return (
    <div className="grid h-screen grid-cols-[280px_1fr_1fr]">
      <div className="hide-scrollbar overflow-y-auto bg-white p-6">
        <Sidebar />
      </div>

      <div className="hide-scrollbar overflow-y-auto bg-[#FAFAFC] p-6">
        <CentreLayoutPopulated />
      </div>

      <div className="hide-scrollbar overflow-y-auto bg-white p-4">
        <LargeCalendarPopulated />
      </div>
    </div>
  );
};

export default Home;

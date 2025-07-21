import CalendarWithAppointments from "@/components/CalendarWithAppointments";
import Sidebar from "@/components/Sidebar";
import Appointments from "@/components/appointments";

const Home = () => {
  return (
    <div className="grid h-screen grid-cols-[280px_1fr_1fr]">
      <div className="hide-scrollbar overflow-y-auto bg-white p-6">
        <Sidebar />
      </div>

      <div className="hide-scrollbar overflow-y-auto bg-[#FAFAFC] p-6">
        <Appointments />
      </div>

      <div className="hide-scrollbar overflow-y-auto bg-white p-4">
        <CalendarWithAppointments />
      </div>
    </div>
  );
};

export default Home;

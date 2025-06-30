"use client";

import { useEffect, useState } from "react";
import AppointmentList from "./AppointmentList";

const CentreLayoutPopulated = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const todayDay = today.getDate();
  const todayMonth = today.toLocaleString("default", { month: "short" });
  const todayYear = today.getFullYear();

  const tomorrowDay = tomorrow.getDate();
  const tomorrowMonth = tomorrow.toLocaleString("default", { month: "short" });
  const tomorrowYear = tomorrow.getFullYear();

  const upcomingAppointments = [
    {
      id: 1,
      bgColor: "bg-[#FF3F14]",
      time: "10AM",
      name: "Hannah Wells Suit Making",
    },
    {
      id: 2,
      bgColor: "bg-[#9B51E0]",
      time: "11AM",
      name: "Sussanne Krotch Tailoring Reordering",
    },
    {
      id: 3,
      bgColor: "bg-[#F2994A]",
      time: "12PM",
      name: "Marcus Bamidele",
      description: "Untitled appointment",
    },
    {
      id: 4,
      bgColor: "bg-[#27AE60]",
      time: "12PM",
      name: "Desmond Zach Fur Coat cuttings",
    },
    {
      id: 5,
      bgColor: "bg-[#2F80ED]",
      time: "1PM",
      name: "Dele Bamidele",
      description: "Untitled appointment",
    },
    {
      id: 6,
      bgColor: "bg-[#E8EAF1]",
      time: "1PM",
      description: "Blocked out time",
      style: "line-through",
    },
    {
      id: 7,
      bgColor: "bg-[#E8EAF1]",
      time: "2PM",
      description: "Blocked out time",
      style: "line-through",
    },
    {
      id: 8,
      bgColor: "bg-[#F2C94C]",
      time: "3PM",
      name: "Zakari Goma",
      description: "Untitled appointment",
    },
    {
      id: 9,
      bgColor: "bg-[#BB6BD9]",
      time: "4PM",
      name: "Zakari Goma",
      description: "Untitled appointment",
    },
  ];

  const tomorrowAppointments = [
    {
      id: 10,
      bgColor: "bg-[#FF3F14]",
      time: "10AM",
      name: "Hannah Wells Suit Making",
    },
    {
      id: 11,
      bgColor: "bg-[#E8EAF1]",
      time: "1PM",
      description: "Blocked out time",
      style: "line-through",
    },
    {
      id: 12,
      bgColor: "bg-[#E8EAF1]",
      time: "2PM",
      description: "Blocked out time",
      style: "line-through",
    },
    {
      id: 13,
      bgColor: "bg-[#9B51E0]",
      time: "11AM",
      name: "Sussanne Krotch Tailoring Reordering",
    },
    {
      id: 14,
      bgColor: "bg-[#27AE60]",
      time: "12AM",
      name: "Desmond Zach Fur Coat cuttings",
    },
    {
      id: 15,
      bgColor: "bg-[#2F80ED]",
      time: "1PM",
      name: "Dele Bamidele",
      description: "Untitled appointment",
    },

    {
      id: 16,
      bgColor: "bg-[#F2C94C]",
      time: "3PM",
      name: "Zakari Goma",
      description: "Untitled appointment",
    },
    {
      id: 17,
      bgColor: "bg-[#BB6BD9]",
      time: "4PM",
      name: "Zakari Goma",
      description: "Untitled appointment",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-geist text-2xl leading-[100%] font-bold">
          Today {todayDay} {todayMonth}{" "}
          <span className="font-normal">{todayYear}</span>
        </h1>

        <span className="font-geist-momo rounded-xl bg-white p-1.5 text-xs leading-[100%] font-medium">
          {currentTime}
        </span>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <div className="font-geist flex h-[93px] w-[227px] flex-col justify-between rounded-xl bg-white px-3 py-2.5">
          <span className="text-2xl leading-[100%] font-bold">24</span>
          <p className="text-sm leading-[100%] font-medium">
            Scheduled appointments
          </p>
        </div>

        <div className="font-geist mr-10 flex flex-col gap-6">
          <div className="flex gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_36_20900)">
                <path
                  d="M9.99984 18.3333C5.39734 18.3333 1.6665 14.6025 1.6665 9.99996C1.6665 5.39746 5.39734 1.66663 9.99984 1.66663C14.6023 1.66663 18.3332 5.39746 18.3332 9.99996C18.3332 14.6025 14.6023 18.3333 9.99984 18.3333ZM9.99984 16.6666V3.33329C8.23173 3.33329 6.53604 4.03567 5.28579 5.28591C4.03555 6.53616 3.33317 8.23185 3.33317 9.99996C3.33317 11.7681 4.03555 13.4638 5.28579 14.714C6.53604 15.9642 8.23173 16.6666 9.99984 16.6666Z"
                  fill="#FF3F14"
                />
              </g>
              <defs>
                <clipPath id="clip0_36_20900">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="pt-1 text-sm leading-[100%] font-medium">
              <span className="text-[#AAACB8]">Ongoing...</span>
              <p className="mt-2">Hannah Wells Suit Making </p>
            </div>
          </div>

          <p className="pl-7 text-sm leading-[100%] font-medium text-[#FF3F14]">
            Ends in 24 mins
          </p>
        </div>
      </div>

      <div>
        <h2 className="font-geist mt-10 text-xl leading-[100%] font-bold">
          Upcoming
        </h2>
        {upcomingAppointments.map((appointment) => (
          <AppointmentList
            key={appointment.id}
            bgColor={appointment.bgColor}
            time={appointment.time}
            name={appointment.name}
            description={appointment.description}
            style={appointment.style}
          />
        ))}
      </div>

      <div>
        <h2 className="font-geist mt-10 text-xl leading-[100%] font-bold">
          Tomorrow{" "}
          <span className="ml-2 text-sm font-medium text-[#7C7E87]">
            {tomorrowDay} {tomorrowMonth}, {tomorrowYear}
          </span>
        </h2>
        {tomorrowAppointments.map((appointment) => (
          <AppointmentList
            key={appointment.id}
            bgColor={appointment.bgColor}
            time={appointment.time}
            name={appointment.name}
            description={appointment.description}
            style={appointment.style}
          />
        ))}
      </div>
    </div>
  );
};

export default CentreLayoutPopulated;

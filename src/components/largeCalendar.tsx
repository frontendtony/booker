import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import { Button } from "./ui/button";

const LargeCalendar = () => {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const hours = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
  ];

  return (
    <>
      <section className="font-geist flex justify-between">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-sm leading-[100%] font-bold">
            13 - 19 February <span className="font-medium">2025</span>{" "}
          </h1>
          <ChevronUp />
          <ChevronDown />
        </div>

        <div className="flex gap-[13px]">
          <div className="flex items-center gap-1 rounded-3xl border border-[#F3F3F7] px-4 py-2">
            <p className="text-xs leading-[100%] font-medium text-[#2B2C2F]">
              Week view
            </p>
            <ChevronDown size={18} />
          </div>

          <Button className="cursor-pointer rounded-3xl bg-[#F3F3F7] !px-4 text-xs leading-[100%] font-medium text-black hover:bg-[#F3F3F7]">
            <Plus /> Add new
          </Button>

          <Button className="cursor-pointer rounded-3xl bg-[#F3F3F7] !px-3 py-2 hover:bg-[#F3F3F7]">
            {" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.99992 1.99996V3.33329H2.66659V12.6666H13.3333V6.66663H14.6666V13.3333C14.6666 13.5101 14.5963 13.6797 14.4713 13.8047C14.3463 13.9297 14.1767 14 13.9999 14H1.99992C1.82311 14 1.65354 13.9297 1.52851 13.8047C1.40349 13.6797 1.33325 13.5101 1.33325 13.3333V2.66663C1.33325 2.48981 1.40349 2.32025 1.52851 2.19522C1.65354 2.0702 1.82311 1.99996 1.99992 1.99996H5.99992ZM10.6666 3.33329V0.666626L15.3333 4.66663H9.33325C8.97963 4.66663 8.64049 4.8071 8.39044 5.05715C8.14039 5.3072 7.99992 5.64634 7.99992 5.99996V9.99996H6.66659V5.99996C6.66659 5.29272 6.94754 4.61444 7.44763 4.11434C7.94773 3.61424 8.62601 3.33329 9.33325 3.33329H10.6666Z"
                fill="black"
              />
            </svg>
          </Button>
        </div>
      </section>

      <div className="font-geist pt-6">
        <div className="grid grid-cols-[48px_repeat(7,_1fr)]">
          <div></div>
          {days.map((day) => (
            <div
              key={day}
              className="text-center text-[10px] leading-[100%] font-medium text-[#BEC0CD]">
              {day}
            </div>
          ))}
        </div>

        <div className="relative">
          {hours.map((hour, hourIndex) => (
            <div
              key={hour}
              className="relative grid h-16 grid-cols-[48px_repeat(7,_1fr)]">
              <div className="pt-4 text-xs leading-[100%] font-medium text-[#BEC0CD]">
                {hourIndex !== hours.length - 1 && (
                  <div className="absolute right-0 -bottom-4 left-10 border-b border-[#DCDEE9]" />
                )}
                {hour}
              </div>

              {days.map((day, dayIndex) => (
                <div key={`${day}-${hour}`} className="relative">
                  {hourIndex === 0 && (
                    <div className="absolute top-10 right-0 bottom-0 left-0 border-t border-dashed border-[#DCDEE9]"></div>
                  )}

                  {dayIndex === 1 && hourIndex === 0 && (
                    <svg
                      className="absolute top-[37px] left-0 z-10"
                      width="80"
                      height="6"
                      viewBox="0 0 80 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="5"
                        y="2"
                        width="75"
                        height="2"
                        rx="1"
                        fill="#FF3F14"
                      />
                      <path d="M0 0H3.5L7 3L3.5 6H0V0Z" fill="#FF3F14" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LargeCalendar;
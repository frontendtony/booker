import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import { Button } from "./ui/button";

const LargeCalendarPopulated = () => {
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

  const events = [
    {
      title: "Ayomide Vulknar",
      day: "SUN",
      startHour: 9,
      duration: 1.1,
      color: "bg-[#FBEFF1] border-l-[#EB5757] text-[#D31313]",
    },
    {
      title: "Hannah Wells",
      day: "SUN",
      startHour: 10.1,
      duration: 1,
      color: "bg-[#EEFAF3] border-l-[#6FCF97] text-[#1D7F46]",
    },
    {
      title: "Blockout",
      day: "SUN",
      startHour: 11.1,
      duration: 0.7,
      color: "bg-[#FAFAFC] border-l-[#CED1DD] line-through text-[#9495A0]",
    },
    {
      title: "Hannah Wells",
      day: "SUN",
      startHour: 11.8,
      duration: 1,
      color: "bg-[#FCEFE8] border-l-[#F2994A] text-[#AB5500]",
    },
    {
      title: "Hannah Wells",
      day: "SUN",
      startHour: 12.8,
      duration: 1.8,
      color: "bg-[#FBEFF8] border-l-[#E051C2] text-[#CC1596]",
    },
    {
      title: "Hannah Wells",
      day: "SUN",
      startHour: 14.6,
      duration: 1.5,
      color: "bg-[#E3F8FC] border-l-[#56CCF2] text-[#00779E]",
    },
    {
      title: "Hannah Wells",
      day: "SUN",
      startHour: 16.1,
      duration: 1.5,
      color: "bg-[#FCEFE8] border-l-[#F2994A] text-[#AB5500]",
    },
    {
      title: "Hannah Wells",
      day: "SUN",
      startHour: 17.6,
      duration: 1.4,
      color: "bg-[#F5EFFB] border-l-[#9B51E0] text-[#811FDD]",
    },

    {
      title: "Hannah Wells",
      day: "MON",
      startHour: 9,
      duration: 0.7,
      color: "bg-[#E3F8FC] border-l-[#56CCF2] text-[#00779E]",
    },
    {
      title: "Blockout",
      day: "MON",
      startHour: 9.7,
      duration: 1.4,
      color: "bg-[#FAFAFC] border-l-[#CED1DD] line-through text-[#9495A0]",
    },
    {
      title: "Hannah Wells",
      day: "MON",
      startHour: 11.1,
      duration: 1.1,
      color: "bg-[#F5EFFB] border-l-[#9B51E0] text-[#811FDD]",
    },
    {
      title: "Blockout",
      day: "MON",
      startHour: 12.2,
      duration: 0.5,
      color: "bg-[#FAFAFC] border-l-[#CED1DD] line-through text-[#9495A0]",
    },
    {
      title: "James Madison",
      day: "MON",
      startHour: 12.7,
      duration: 1.5,
      color: "bg-[#F8F5E9] border-l-[#F2C94C] text-[#925C00]",
    },
    {
      title: "Ayomide Vulknar",
      day: "MON",
      startHour: 14.2,
      duration: 0.6,
      color: "bg-[#FBEFF1] border-l-[#EB5757] text-[#D31313]",
    },
    {
      title: "Blockout",
      day: "MON",
      startHour: 14.8,
      duration: 2.3,
      color: "bg-[#FAFAFC] border-l-[#CED1DD] line-through text-[#9495A0]",
    },
    {
      title: "Hannah Wells",
      day: "MON",
      startHour: 17.1,
      duration: 1.4,
      color: "bg-[#EEFAF3] border-l-[#6FCF97] text-[#1D7F46]",
    },

    {
      title: "Blockout",
      day: "TUE",
      startHour: 9,
      duration: 1.5,
      color: "bg-[#FAFAFC] border-l-[#CED1DD] line-through text-[#9495A0]",
    },
    {
      title: "Ayomide Vulknar",
      day: "TUE",
      startHour: 10.5,
      duration: 0.9,
      color: "bg-[#FBEFF1] border-l-[#EB5757] text-[#D31313]",
    },
    {
      title: "James Madison",
      day: "TUE",
      startHour: 11.4,
      duration: 1.1,
      color: "bg-[#F8F5E9] border-l-[#F2C94C] text-[#925C00]",
    },
    {
      title: "Hannah Wells",
      day: "TUE",
      startHour: 12.5,
      duration: 1.6,
      color: "bg-[#EEFAF3] border-l-[#6FCF97] text-[#1D7F46]",
    },
    {
      title: "Hannah Wells",
      day: "TUE",
      startHour: 14.1,
      duration: 1.6,
      color: "bg-[#FBEFF8] border-l-[#E051C2] text-[#CC1596]",
    },
    {
      title: "Ayomide Vulknar",
      day: "TUE",
      startHour: 15.7,
      duration: 2.5,
      color: "bg-[#FBEFF1] border-l-[#EB5757] text-[#D31313]",
    },
    {
      title: "Hannah Wells",
      day: "TUE",
      startHour: 18.2,
      duration: 0.8,
      color: "bg-[#E3F8FC] border-l-[#56CCF2] text-[#00779E]",
    },

    {
      title: "Ayomide Vulknar",
      day: "WED",
      startHour: 9,
      duration: 0.9,
      color: "bg-[#FBEFF1] border-l-[#EB5757] text-[#D31313]",
    },
    {
      title: "Hannah Wells",
      day: "WED",
      startHour: 9.9,
      duration: 1.8,
      color: "bg-[#FCEFE8] border-l-[#F2994A] text-[#AB5500]",
    },
    {
      title: "Hannah Wells",
      day: "WED",
      startHour: 11.7,
      duration: 0.6,
      color: "bg-[#F5EFFB] border-l-[#9B51E0] text-[#811FDD]",
    },
    {
      title: "Ayomide Vulknar",
      day: "WED",
      startHour: 12.3,
      duration: 2.3,
      color: "bg-[#FBEFF1] border-l-[#EB5757] text-[#D31313]",
    },
    {
      title: "Hannah Wells",
      day: "WED",
      startHour: 14.6,
      duration: 1.5,
      color: "bg-[#E3F8FC] border-l-[#56CCF2] text-[#00779E]",
    },
    {
      title: "Hannah Wells",
      day: "WED",
      startHour: 16.1,
      duration: 2,
      color: "bg-[#FBEFF8] border-l-[#E051C2] text-[#CC1596]",
    },
    {
      title: "Blockout",
      day: "WED",
      startHour: 18.1,
      duration: 0.5,
      color: "bg-[#FAFAFC] border-l-[#CED1DD] line-through text-[#9495A0]",
    },

    {
      title: "Hannah Wells",
      day: "THU",
      startHour: 9,
      duration: 0.5,
      color: "bg-[#EEFAF3] border-l-[#6FCF97] text-[#1D7F46]",
    },
    {
      title: "Hannah Wells",
      day: "THU",
      startHour: 9.5,
      duration: 1.4,
      color: "bg-[#E3F8FC] border-l-[#56CCF2] text-[#00779E]",
    },
    {
      title: "Hannah Wells",
      day: "THU",
      startHour: 10.9,
      duration: 0.5,
      color: "bg-[#F5EFFB] border-l-[#9B51E0] text-[#811FDD]",
    },
    {
      title: "Hannah Wells",
      day: "THU",
      startHour: 11.4,
      duration: 2.3,
      color: "bg-[#E3F8FC] border-l-[#56CCF2] text-[#00779E]",
    },
    {
      title: "Hannah Wells",
      day: "THU",
      startHour: 13.7,
      duration: 0.6,
      color: "bg-[#EEFAF3] border-l-[#6FCF97] text-[#1D7F46]",
    },
    {
      title: "Blockout",
      day: "THU",
      startHour: 14.3,
      duration: 1.8,
      color: "bg-[#FAFAFC] border-l-[#CED1DD] line-through text-[#9495A0]",
    },
    {
      title: "Hannah Wells",
      day: "THU",
      startHour: 16.1,
      duration: 1.6,
      color: "bg-[#EEFAF3] border-l-[#6FCF97] text-[#1D7F46]",
    },
    {
      title: "Blockout",
      day: "THU",
      startHour: 17.7,
      duration: 1.3,
      color: "bg-[#FAFAFC] border-l-[#CED1DD] line-through text-[#9495A0]",
    },

    {
      title: "Hannah Wells",
      day: "FRI",
      startHour: 9,
      duration: 1.3,
      color: "bg-[#FCEFE8] border-l-[#F2994A] text-[#AB5500]",
    },
    {
      title: "Hannah Wells",
      day: "FRI",
      startHour: 10.3,
      duration: 0.6,
      color: "bg-[#EEFAF3] border-l-[#6FCF97] text-[#1D7F46]",
    },
    {
      title: "Blockout",
      day: "FRI",
      startHour: 10.9,
      duration: 3.5,
      color: "bg-[#FAFAFC] border-l-[#CED1DD] line-through text-[#9495A0]",
    },
    {
      title: "Hannah Wells",
      day: "FRI",
      startHour: 14.4,
      duration: 0.6,
      color: "bg-[#FBEFF8] border-l-[#E051C2] text-[#CC1596]",
    },
    {
      title: "Hannah Wells",
      day: "FRI",
      startHour: 15,
      duration: 0.6,
      color: "bg-[#E3F8FC] border-l-[#56CCF2] text-[#00779E]",
    },
    {
      title: "Hannah Wells",
      day: "FRI",
      startHour: 15.6,
      duration: 1.8,
      color: "bg-[#F5EFFB] border-l-[#9B51E0] text-[#811FDD]",
    },
    {
      title: "Blockout",
      day: "FRI",
      startHour: 17.4,
      duration: 0.6,
      color: "bg-[#FAFAFC] border-l-[#CED1DD] line-through text-[#9495A0]",
    },
  ];

  return (
    <>
      <section className="font-geist flex justify-between">
        <div className="flex items-center justify-center gap-4">
          <h1 className="text-sm leading-[100%] font-bold">
            13 - 19 February <span className="font-medium">2025</span>
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
        <div className="mb-5 grid grid-cols-[48px_repeat(7,_1fr)]">
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
          {hours.map((hourLabel, hourIndex) => {
            const hourValue = 9 + hourIndex;
            return (
              <div
                key={hourLabel}
                className="relative grid h-16 grid-cols-[48px_repeat(7,_1fr)]">
                <div className="text-xs leading-[100%] font-medium text-[#BEC0CD]">
                  {hourIndex !== hours.length - 1 && (
                    <div className="absolute right-0 bottom-0 left-10 border-b border-[#DCDEE9]" />
                  )}
                  {hourLabel}
                </div>

                {days.map((day) => (
                  <div key={`${day}-${hourLabel}`} className="relative h-full">
                    {hourIndex === 0 && (
                      <div className="absolute top-7 right-0 bottom-0 -left-2 z-20 border-t border-dashed border-[#DCDEE9]"></div>
                    )}
                    {hourIndex === 0 && day === "MON" && (
                      <div className="absolute top-[25px] right-0 left-0 z-30 px-1">
                        <svg
                          className="h-1.5 w-full"
                          viewBox="0 0 80 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="none">
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
                      </div>
                    )}
                    {events.map((event, index) => {
                      const eventStartsInThisHour =
                        Math.floor(event.startHour) === hourValue;

                      if (event.day === day && eventStartsInThisHour) {
                        const minutesFromHourStart =
                          (event.startHour - Math.floor(event.startHour)) * 60;
                        const topOffset = (minutesFromHourStart / 60) * 4;
                        const height = event.duration * 4;

                        return (
                          <div
                            key={index}
                            className={`absolute right-1 left-1 z-10 truncate rounded border-l-4 p-1.5 text-[10px] leading-[100%] font-medium ${event.color}`}
                            style={{
                              top: `${topOffset}rem`,
                              height: `${height - 0.125}rem`,
                            }}>
                            {event.title}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default LargeCalendarPopulated;

import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

type CalendarView = "day" | "week" | "month-grid" | "month-agenda";

interface CustomHeaderProps {
  calendarControls: {
    setView: (view: string) => void;
    setDate: (date: string) => void;
  };
}

const CustomHeader = ({ calendarControls }: CustomHeaderProps) => {
  const [currentView, setCurrentView] = useState<CalendarView>("day");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showViewDropdown, setShowViewDropdown] = useState(false);

  useEffect(() => {
    if (calendarControls) {
      const updateDate = () => {
        setCurrentDate(new Date());
      };

      updateDate();
    }
  }, [calendarControls]);

  const handleViewChange = (view: CalendarView) => {
    if (calendarControls) {
      calendarControls.setView(view);
      setCurrentView(view);
      setShowViewDropdown(false);
    }
  };

  const handleDateNavigation = (direction: number) => {
    if (calendarControls) {
      const newDate = new Date(currentDate);

      if (currentView === "week") {
        newDate.setDate(newDate.getDate() + direction * 7);
      } else if (
        currentView === "month-grid" ||
        currentView === "month-agenda"
      ) {
        newDate.setMonth(newDate.getMonth() + direction);
      } else if (currentView === "day") {
        newDate.setDate(newDate.getDate() + direction);
      }

      setCurrentDate(newDate);
      calendarControls.setDate(newDate.toISOString().split("T")[0]);
    }
  };

  const formatDateRange = () => {
    if (currentView === "week") {
      const startOfWeek = new Date(currentDate);
      startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      return `${startOfWeek.getDate()} - ${endOfWeek.getDate()} ${startOfWeek.toLocaleDateString("en-US", { month: "long" })}`;
    } else if (currentView === "month-grid" || currentView === "month-agenda") {
      return currentDate.toLocaleDateString("en-US", {
        month: "long",
      });
    } else {
      return currentDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
      });
    }
  };

  const viewOptions: { value: CalendarView; label: string }[] = [
    { value: "day", label: "Day view" },
    { value: "week", label: "Week view" },
    { value: "month-grid", label: "Month view" },
    { value: "month-agenda", label: "Agenda view" },
  ] as const;

  return (
    <section className="font-geist flex w-full flex-col items-start justify-between gap-6 xl:flex-row">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-sm leading-[100%] font-bold">
          {formatDateRange()}{" "}
          <span className="font-medium">{currentDate.getFullYear()}</span>
        </h1>
        <button onClick={() => handleDateNavigation(-1)}>
          <ChevronUp className="cursor-pointer hover:text-gray-600" />
        </button>
        <button onClick={() => handleDateNavigation(1)}>
          <ChevronDown className="cursor-pointer hover:text-gray-600" />
        </button>
      </div>

      <div className="flex gap-[13px]">
        <div className="relative">
          <Button
            type="button"
            onClick={() => setShowViewDropdown(!showViewDropdown)}
            className="flex cursor-pointer items-center gap-1 rounded-3xl !border !border-[#F3F3F7] !bg-white px-4 py-2 text-xs leading-[100%] !font-medium !text-[#2B2C2F] transition-colors duration-200 hover:!bg-gray-50">
            {viewOptions.find((option) => option.value === currentView)
              ?.label || "Week view"}
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${showViewDropdown ? "rotate-180" : ""}`}
            />
          </Button>

          {showViewDropdown && (
            <div className="absolute top-full left-0 z-50 mt-1 min-w-full rounded-lg border border-[#F3F3F7] bg-white shadow-lg">
              {viewOptions.map((option) => (
                <button
                  key={option.value}
                  className="w-full px-2 py-2 text-left text-xs transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg hover:!bg-[#FF3F14] hover:!text-white"
                  onClick={() => handleViewChange(option.value)}>
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <Button className="cursor-pointer rounded-3xl !bg-[#F3F3F7] !px-4 text-xs leading-[100%] font-medium text-black">
          <Plus /> Add new
        </Button>

        <Button className="!hover:bg-[#F3F3F7] cursor-pointer rounded-3xl !bg-[#F3F3F7] !px-3 py-2">
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
  );
};

export default CustomHeader;

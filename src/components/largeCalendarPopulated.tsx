"use client";

import { useNextCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";

import "@schedule-x/theme-default/dist/index.css";
import { useState } from "react";

function LargeCalendarPopulated() {
  const eventsService = useState(() => createEventsServicePlugin())[0];

  const calendar = useNextCalendarApp({
    firstDayOfWeek: 0,
    weekOptions: {
      eventWidth: 95,
      gridHeight: 2500,
    },
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: [
      {
        id: "1",
        title: "Ayomide Vulknar",
        start: "2025-06-15 09:00",
        end: "2025-06-15 10:00",
        calendarId: "red",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "2",
        title: "Hannah Wells",
        start: "2025-06-15 10:00",
        end: "2025-06-15 11:00",
        calendarId: "green",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "3",
        title: "Blockout",
        start: "2025-06-15 11:00",
        end: "2025-06-15 11:30",
        calendarId: "gray",
        _options: {
          additionalClasses: ["custom-blockout"],
        },
      },
      {
        id: "4",
        title: "Hannah Wells",
        start: "2025-06-15 11:30",
        end: "2025-06-15 12:45",
        calendarId: "orange",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "5",
        title: "Hannah Wells",
        start: "2025-06-15 12:45",
        end: "2025-06-15 14:30",
        calendarId: "pink",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "6",
        title: "Hannah Wells",
        start: "2025-06-15 14:30",
        end: "2025-06-15 16:00",
        calendarId: "blue",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "7",
        title: "Hannah Wells",
        start: "2025-06-15 16:00",
        end: "2025-06-15 17:30",
        calendarId: "orange",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "8",
        title: "Hannah Wells",
        start: "2025-06-15 17:30",
        end: "2025-06-15 19:00",
        calendarId: "purple",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "9",
        title: "Hannah Wells",
        start: "2025-06-16 09:00",
        end: "2025-06-16 09:30",
        calendarId: "blue",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "10",
        title: "Blockout",
        start: "2025-06-16 09:30",
        end: "2025-06-16 11:00",
        calendarId: "gray",
        _options: {
          additionalClasses: ["custom-blockout"],
        },
      },
      {
        id: "11",
        title: "Hannah Wells",
        start: "2025-06-16 11:00",
        end: "2025-06-16 12:00",
        calendarId: "purple",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "12",
        title: "Blockout",
        start: "2025-06-16 12:00",
        end: "2025-06-16 12:30",
        calendarId: "gray",
        _options: {
          additionalClasses: ["custom-blockout"],
        },
      },
      {
        id: "13",
        title: "James Madison",
        start: "2025-06-16 12:30",
        end: "2025-06-16 14:00",
        calendarId: "yellow",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "14",
        title: "Ayomide Vulkna",
        start: "2025-06-16 14:00",
        end: "2025-06-16 14:30",
        calendarId: "red",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "15",
        title: "Blockout",
        start: "2025-06-16 14:30",
        end: "2025-06-16 16:30",
        calendarId: "gray",
        _options: {
          additionalClasses: ["custom-blockout"],
        },
      },
      {
        id: "16",
        title: "Hannah Wells",
        start: "2025-06-16 16:30",
        end: "2025-06-16 18:30",
        calendarId: "green",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "17",
        title: "Blockout",
        start: "2025-06-17 09:00",
        end: "2025-06-17 10:15",
        calendarId: "gray",
        _options: {
          additionalClasses: ["custom-blockout"],
        },
      },
      {
        id: "18",
        title: "Ayomide Vulkna",
        start: "2025-06-17 10:15",
        end: "2025-06-17 11:15",
        calendarId: "red",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "19",
        title: "James Madison",
        start: "2025-06-17 11:15",
        end: "2025-06-17 12:30",
        calendarId: "yellow",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "20",
        title: "Hannah Wells",
        start: "2025-06-17 12:30",
        end: "2025-06-17 14:00",
        calendarId: "green",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "21",
        title: "Hannah Wells",
        start: "2025-06-17 14:00",
        end: "2025-06-17 15:45",
        calendarId: "pink",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "22",
        title: "Ayomide Vulkna",
        start: "2025-06-17 15:45",
        end: "2025-06-17 18:00",
        calendarId: "red",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "23",
        title: "Hannah Wells",
        start: "2025-06-17 18:00",
        end: "2025-06-17 19:00",
        calendarId: "blue",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "24",
        title: "Ayomide Vulkna",
        start: "2025-06-18 09:00",
        end: "2025-06-18 09:45",
        calendarId: "red",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "23",
        title: "Hannah Wells",
        start: "2025-06-18 09:45",
        end: "2025-06-18 12:00",
        calendarId: "orange",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "24",
        title: "Hannah Wells",
        start: "2025-06-18 12:00",
        end: "2025-06-18 12:30",
        calendarId: "purple",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "25",
        title: "Ayomide Vulkna",
        start: "2025-06-18 12:30",
        end: "2025-06-18 14:10",
        calendarId: "red",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "26",
        title: "Hannah Wells",
        start: "2025-06-18 14:10",
        end: "2025-06-18 16:00",
        calendarId: "blue",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "27",
        title: "Hannah Wells",
        start: "2025-06-18 16:00",
        end: "2025-06-18 17:45",
        calendarId: "pink",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "28",
        title: "Blockout",
        start: "2025-06-18 17:45",
        end: "2025-06-18 18:15",
        calendarId: "gray",
        _options: {
          additionalClasses: ["custom-blockout"],
        },
      },
      {
        id: "29",
        title: "Hannah Wells",
        start: "2025-06-19 09:00",
        end: "2025-06-19 09:30",
        calendarId: "green",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "30",
        title: "Hannah Wells",
        start: "2025-06-19 09:30",
        end: "2025-06-19 11:00",
        calendarId: "blue",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "31",
        title: "Hannah Wells",
        start: "2025-06-19 11:00",
        end: "2025-06-19 11:30",
        calendarId: "purple",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "32",
        title: "Hannah Wells",
        start: "2025-06-19 11:30",
        end: "2025-06-19 13:45",
        calendarId: "blue",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "33",
        title: "Hannah Wells",
        start: "2025-06-19 13:45",
        end: "2025-06-19 14:15",
        calendarId: "green",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "34",
        title: "Blockout",
        start: "2025-06-19 14:15",
        end: "2025-06-19 16:00",
        calendarId: "gray",
        _options: {
          additionalClasses: ["custom-blockout"],
        },
      },
      {
        id: "35",
        title: "Hannah Wells",
        start: "2025-06-19 16:00",
        end: "2025-06-19 17:40",
        calendarId: "green",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "36",
        title: "Blockout",
        start: "2025-06-19 17:40",
        end: "2025-06-19 19:00",
        calendarId: "gray",
        _options: {
          additionalClasses: ["custom-blockout"],
        },
      },
      {
        id: "37",
        title: "Hannah Wells",
        start: "2025-06-20 09:00",
        end: "2025-06-20 10:10",
        calendarId: "orange",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "38",
        title: "Hannah Wells",
        start: "2025-06-20 10:10",
        end: "2025-06-20 10:50",
        calendarId: "green",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "39",
        title: "Blockout",
        start: "2025-06-20 10:50",
        end: "2025-06-20 14:45",
        calendarId: "gray",
        _options: {
          additionalClasses: ["custom-blockout"],
        },
      },
      {
        id: "39",
        title: "Hannah Wells",
        start: "2025-06-20 14:45",
        end: "2025-06-20 15:15",
        calendarId: "pink",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "40",
        title: "Hannah Wells",
        start: "2025-06-20 15:15",
        end: "2025-06-20 15:45",
        calendarId: "blue",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "41",
        title: "Hannah Wells",
        start: "2025-06-20 15:45",
        end: "2025-06-20 17:30",
        calendarId: "purple",
        _options: {
          additionalClasses: ["custom-class"],
        },
      },
      {
        id: "42",
        title: "Blockout",
        start: "2025-06-20 17:30",
        end: "2025-06-20 18:00",
        calendarId: "gray",
        _options: {
          additionalClasses: ["custom-blockout"],
        },
      },
    ],
    calendars: {
      red: {
        colorName: "red",
        lightColors: {
          main: "#EB5757",
          container: "#FBEFF1",
          onContainer: "#D31313",
        },
      },
      green: {
        colorName: "green",
        lightColors: {
          main: "#6FCF97",
          container: "#EEFAF3",
          onContainer: "#1D7F46",
        },
      },
      gray: {
        colorName: "gray",
        lightColors: {
          main: "#CED1DD",
          container: "#FAFAFC",
          onContainer: "#9495A0",
        },
      },
      orange: {
        colorName: "orange",
        lightColors: {
          main: "#F2994A",
          container: "#FCEFE8",
          onContainer: "#AB5500",
        },
      },
      pink: {
        colorName: "pink",
        lightColors: {
          main: "#E051C2",
          container: "#FBEFF8",
          onContainer: "#CC1596",
        },
      },
      blue: {
        colorName: "blue",
        lightColors: {
          main: "#56CCF2",
          container: "#E3F8FC",
          onContainer: "#00779E",
        },
      },
      purple: {
        colorName: "purple",
        lightColors: {
          main: "#9B51E0",
          container: "#F5EFFB",
          onContainer: "#811FDD",
        },
      },
      yellow: {
        colorName: "yellow",
        lightColors: {
          main: "#F2C94C",
          container: "#F8F5E9",
          onContainer: "#925C00",
        },
      },
    },
    plugins: [eventsService],
    callbacks: {
      onRender: () => {
        eventsService.getAll();
      },
    },
  });

  return (
    <div className="font-geist">
      <ScheduleXCalendar calendarApp={calendar} />
      
    </div>
  );
}

export default LargeCalendarPopulated;

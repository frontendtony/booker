"use client";

import * as React from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(className)}
      formatters={{
        formatWeekdayName: (date) =>
          date.toLocaleDateString("en-US", { weekday: "narrow" }),
      }}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-between pt-1 items-center w-full",
        caption_label: "text-sm font-bold",
        nav: "flex items-center",
        nav_button: cn(
          "size-7 bg-transparent p-0 text-black hover:text-black border-none hover:bg-transparent cursor-pointer",
        ),
        nav_button_previous: "left-1",
        nav_button_next: "right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell: "text-[#9495A0] rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-full",
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "size-8 p-0 font-medium aria-selected:opacity-100 rounded-full cursor-pointer",
        ),
        day_range_start:
          "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_range_end:
          "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground",
        day_selected:
          "bg-[#FF3F14] text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-[#FF3F14] focus:text-primary-foreground !rounded-full",
        day_today: "bg-[#FF3F14] text-primary-foreground !rounded-full",
        day_outside:
          "day-outside text-muted-foreground aria-selected:text-muted-foreground",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronUp className={cn("size-6", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronDown className={cn("size-6", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };

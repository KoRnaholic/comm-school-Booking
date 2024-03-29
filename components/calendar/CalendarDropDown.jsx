"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "../../lib/utils";
import { Button } from "../../@/components/ui/button";
import { Calendar } from "../../@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../@/components/ui/popover";

export default function CalendarDropDown({ className, children }) {
  const [date, setDate] = React.useState({
    from: new Date(2024, 2, 20),
    to: addDays(new Date(2024, 0, 20), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover className="mb-20">
        <PopoverTrigger
          aschildren="true"
          className=" data-[state=open]:bg-gray-200 rounded-full"
        >
          <div className="hidden lg:flex flex-col px-8 py-4  rounded-full hover:bg-gray-200 cursor-pointer border-l-2">
            {children}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 ml-[-200px]" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

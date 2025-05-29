"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import {
  Bolt,
  ChevronDown,
  CircleCheckBig,
  Copy,
  LogOut,
  Plus,
  ToggleLeft,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const link = "https://bookie.com/garment-markets";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex h-[1024px] flex-col justify-between">
      <div>
        <div className="flex items-center gap-4 pb-6">
          <Image src={assets.logo} alt="Placeholder logo" />
          <h2 className="text-sm font-medium text-[#7C7E87]">
            Garment Makers®
          </h2>
        </div>

        <Calendar mode="single" selected={date} onSelect={setDate} />

        <Button className="mt-6 cursor-pointer bg-[#FF3F14] text-xs font-medium hover:bg-[#FF3F14]/80">
          {" "}
          <Plus /> Add new appointment <ChevronDown />{" "}
        </Button>

        <div className="mt-10 mr-10 rounded-xl border border-[#E8EAF1]">
          <div className="mt-4 flex flex-col items-center gap-3">
            <h3 className="text-sm font-bold">Share link</h3>
            <Image src={assets.qr_code} alt="QR code" />
          </div>

          <div className="flex gap-4 border-t p-3">
            <div className="flex max-w-[220px] flex-col gap-1 overflow-hidden">
              <p className="text-xs font-medium text-[#2B2C2F]">
                Garment Makers®
              </p>
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="truncate text-xs font-medium text-[#FF3F14]">
                {link}
              </Link>
            </div>

            <button className="cursor-pointer" onClick={handleCopy}>
              {copied ? <CircleCheckBig color="green" /> : <Copy />}
            </button>
          </div>
        </div>

        {copied && (
          <div className="mt-4 mr-10 rounded-md bg-green-100 p-4">
            <p className="text-sm font-normal text-green-600">
              {" "}
              Link copied to clipboard!
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col">
        <Button
          variant="ghost"
          className="cursor-pointer justify-start text-sm font-medium text-[#2B2C2F] hover:bg-transparent [&_svg]:text-[#7C7E87]">
          <ToggleLeft /> Change availability
        </Button>
        <Button
          variant="ghost"
          className="cursor-pointer justify-start text-sm font-medium text-[#2B2C2F] hover:bg-transparent [&_svg]:text-[#7C7E87]">
          <Bolt /> Preferences
        </Button>
        <Button
          variant="ghost"
          className="cursor-pointer justify-start text-sm font-medium text-[#2B2C2F] hover:bg-transparent [&_svg]:text-[#7C7E87]">
          <LogOut /> Sign out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

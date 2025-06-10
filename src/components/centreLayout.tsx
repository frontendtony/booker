import Image from "next/image";
import porch from "../assets/porch.png";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

const CentreLayout = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-geist text-2xl leading-[100%] font-bold">
          Today 15 Feb <span className="font-normal"> 2025</span>
        </h1>

        <span className="font-geist-momo rounded-xl bg-white p-1.5 text-xs leading-[100%] font-medium">
          {"09:32 AM"}
        </span>
      </div>

      <div className="font-geist mt-10 flex h-[93px] w-[227px] flex-col justify-between rounded-xl bg-white px-3 py-2.5">
        <span className="text-2xl leading-[100%] font-bold">0</span>
        <p className="text-sm leading-[100%] font-medium">
          Scheduled appointments
        </p>
      </div>

      <h2 className="font-geist mt-10 text-xl leading-[100%] font-bold">
        Upcoming
      </h2>

      <div className="font-geist mt-24 flex flex-col items-center justify-center gap-7">
        <Image src={porch} alt="porch" />
        <p className="w-[203px] text-center text-sm leading-5 font-normal text-[#7C7E87]">
          You have no scheduled appointments at this time
        </p>
        <Button className="bg-white text-xs leading-[100%] rounded-3xl text-black hover:bg-white cursor-pointer">
          {" "}
          <Plus /> Add new
        </Button>
      </div>
    </div>
  );
};

export default CentreLayout;

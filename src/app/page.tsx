"use client";

import { CircleDollarSign } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-br from-[#90909279] to-[#abeee786]">
        <div className="bg-[#81d3cb88] w-fit p-5 rounded-full border border-[#81d3cb]">
          <CircleDollarSign className="text-[#299D91]" size={42} />
        </div>
        <h1 className="text-[20px] md:text-[30px] ml-3 mt-3">
          Financial
          <span className="pl-3 border-b-4 border-gray-500 pb-3">Ma</span>
          nagement
        </h1>

        <div
          className={`bg-white rounded-lg p-5 default-custom mt-14 ml-3 flex flex-col gap-5 text-center items-center`}
        >
          <div className="text-center flex flex-col gap-2.5">
            <p className="italic">{`"Do not save what is left after spending; instead spend what is left after saving."`}</p>
            <p className="font-semibold">- Warren Buffet</p>
          </div>
          <p className="leading-8">
            Welcome to FineBank, Take control of your financial future with
            smart budgeting, insightful analytics, and personalized guidance.
          </p>
          <button
            type="button"
            onClick={() => router.push("/sign-in")}
            className="bg-[#299D91] w-full py-3 text-white rounded-full text-sm hover:bg-white hover:text-gray-900 border-gray-700 hover:border cursor-pointer"
          >
            Start managing your finance
          </button>
        </div>
      </div>
    </>
  );
}

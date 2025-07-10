"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/finebank-logo.svg";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col gap-8 w-[90%] md:w-[45%] justify-center items-center">
          <Image src={Logo} alt="finebank logo" />
          <form className="w-[90%] md:w-[70%] flex flex-col gap-7 justify-center">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className=" text-[18px]">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-400 p-3 rounded-lg  outline-gray-600"
                placeholder="nexon@gmail.com"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="flex flex-row w-full justify-between items-center">
                <label htmlFor="password" className="text-[18px]">
                  Password
                </label>
                <Link href="/" className="text-sm text-[#299D91]">
                  Forget Password ?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                className="border border-gray-400 p-3 rounded-lg outline-gray-600"
                placeholder="**********"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row items-center gap-2 text-sm">
                <input type="checkbox" />
                <p>Keep me signed in</p>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-[#299D91] text-white text-sm rounded-md"
              >
                Login
              </button>
            </div>
          </form>
          <p className="text-sm">or sign in with</p>
          <button
            type="button"
            className="bg-[#D1D1D1] cursor-pointer flex flex-row gap-3 items-center py-3 rounded-md w-[90%] md:w-[70%] justify-center"
          >
            <FcGoogle size={28} />
            <span className="text-[15px]">Continue with Google</span>
          </button>
          <p className="flex flex-row gap-3">
            <span>Not a user ?</span>{" "}
            <Link
              href="/create-account"
              className="text-[#299D91] font-semibold"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

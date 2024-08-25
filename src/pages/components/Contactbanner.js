import Link from "next/link";
import React from "react";

function Contactbanner() {
  return (
    <div className="w-full bg-gradient-to-r from-zinc-800 to-cyan-900 h-[15rem]  p-10 flex items-center justify-evenly">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-white text-4xl">
          Book your <br /> Appointement Today
        </h2>
        <p className="bg-gradient-to-r from-purple-500 to-blue-300 w-fit m-2 p-3 rounded-xl shadow shadow-white text-white text-xl font-bold">
          <Link href={"/#form"}>Book Now!!</Link>
        </p>
      </div>
    </div>
  );
}

export default Contactbanner;

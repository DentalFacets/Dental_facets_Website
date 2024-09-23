import Link from "next/link";
import React from "react";

function Appointementbanner() {
  return (
    <>
      <div className="w-full bg-[#2d2d2d] h-[15rem] mb-10 p-10 flex items-center justify-evenly">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-[#ffce45] text-4xl">
            Book your <br /> Appointement Today
          </h2>
          <p className="bg-[#3e3e3e] w-fit m-2 p-3 rounded-xl shadow shadow-yellow-300 text-[#fff] text-xl font-bold">
            <Link href={"/Contact"}>Book Now!!</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Appointementbanner;

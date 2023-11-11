"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; // Changed "next/navigation" to "next/router"
import { useState } from "react";

const Home = () => {
  const [showInputs, setShowInputs] = useState(false);
  const router = useRouter();

  const showDiv = () => {
    setShowInputs(true);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="flex-1 w-full flex justify-center items-end">
        <Image src="/login.png" alt="login" width="247" height="187" />
      </div>
      {!showInputs ? (
        <div className="h-[50vh] w-full flex justify-center items-center py-10 px-9 min-h-[300px]">
          <button
            onClick={() => showDiv()}
            className="w-[247px] bg-black text-white h-10 border rounded"
          >
            ¡Hola! 👋🏻
          </button>
        </div>
      ) : (
        <div className="h-[50vh] w-full flex justify-center items-end animate__animated animate__fadeInUp min-h-[300px]">
          <div className="bg-blue-500 border-t rounded-t-lg text-white p-4 w-full h-[80%] animate__animated animate__fadeInUp flex justify-center items-center flex-col gap-4">
            <input
              type="text"
              className="w-[247px] bg-white text-black h-10 border rounded"
            />
            <input
              type="password"
              className="w-[247px] bg-white text-black h-10 border rounded"
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;

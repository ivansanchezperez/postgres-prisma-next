"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="flex-1 w-full flex justify-center items-end">
        <Image src="/login.png" alt="login" width="247" height="187" />
      </div>

      <div className="flex-1 w-full flex justify-center items-center py-10 px-9">
        <button
          onClick={() => router.push("/dashboard")}
          className="w-[247px] bg-black text-white h-10 border rounded"
        >
          ¡Hola! 👋🏻
        </button>
      </div>
    </main>
  );
};

export default Home;

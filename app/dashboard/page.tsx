"use client";

import { useUserContext } from "@/context/UserContext/UserContext";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Dashboard = () => {
  const { user } = useUserContext();

  const router = useRouter();

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/");
  //   }
  // }, [user]);

  return (
    <main className="relative flex flex-col">
      <nav className="fixed top-0 bg-[#797d80] h-[90px] flex items-center justify-center w-full">
        <section className="text-white text-2xl font-bold tracking-wider">
          Homespend
        </section>
      </nav>
      <section className="py-5 mt-[90px] flex w-full">
        <section className="mx-3 p-2 w-full bg-[#797d80] rounded-full flex items-end justify-between shadow-md">
          <section
            className="px-5 font-bold text-savingPink text-2xl"
            style={{ textShadow: "black 0.5px 0.5px 0.5px" }}
          >
            Ivan
            {user?.name}
          </section>
          <section
            className="px-5 font-bold text-white text-lg tracking-widest"
            style={{ textShadow: "pink 0.5px 0.5px 0.5px" }}
          >
            1500 €
          </section>
        </section>
      </section>
      <nav className="fixed bottom-0 bg-[#797d80] h-[50px] flex items-center justify-center w-full">
        <Button
          onClick={() => void 0}
          className="mt-[-50px] bg-savingPink text-[white] font-bold text-base tracking-wider shadow-md rounded-full p-0 min-w-0 w-12 h-12"
        ></Button>
      </nav>
    </main>
  );
};

export default Dashboard;

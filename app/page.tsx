"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

import useUser from "@/hooks/login";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useUserContext } from "@/context/UserContext/UserContext";

const Home = () => {
  const { fetchUser } = useUser();
  const { user } = useUserContext();
  const [showInputs, setShowInputs] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const router = useRouter();

  const showDiv = () => {
    setShowInputs(true);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  };

  const login = async () => {
    await fetchUser(form.email, form.password);

    if (user) {
      router.push("/dashboard");
    }
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
          <div className="bg-[#1c1c1c] border-t rounded-t-lg text-white p-4 w-full h-[80%] animate__animated animate__fadeInUp flex justify-center items-center flex-col gap-4">
            <Input
              type="email"
              variant={"faded"}
              label="Email"
              name="email"
              value={form.email}
              onChange={handleInput}
            />
            <Input
              type="password"
              variant={"faded"}
              label="Password"
              name="password"
              value={form.password}
              onChange={handleInput}
            />
            <Button fullWidth onClick={() => login()}>
              Entrar
            </Button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;

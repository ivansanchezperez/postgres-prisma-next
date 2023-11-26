"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

import useUser from "@/hooks/login";
import { Divider, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useUserContext } from "@/context/UserContext/UserContext";

const Home = () => {
  const { fetchUser } = useUser();
  const { user } = useUserContext();
  const [showInputs, setShowInputs] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  const showDiv = () => {
    setShowInputs(true);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
  };

  const login = async () => {
    await fetchUser(form.email, form.password);
  };

  return (
    <main className="relative flex flex-col items-center justify-center px-10 py-10">
      <div className="w-full flex justify-center">
        <Image src="/piggy.png" alt="login" width="130" height="130" />
      </div>
      <section className="mt-5 text-4xl font-bold">Login</section>
      <section className="flex flex-row w-full mt-5 items-center">
        <div className="w-5 h-5 bg-savingPink rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-[black] rounded-full ml-[1px]"></div>
        </div>
        <div className="w-full h-[1px] bg-[gray]"></div>
      </section>
      <section className="flex flex-col mt-5 w-full gap-3">
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
          label="Contraseña"
          name="password"
          value={form.password}
          onChange={handleInput}
        />
        <Button
          fullWidth
          onClick={() => login()}
          className="mt-5 bg-savingPink text-[white] font-bold text-base tracking-wider shadow-md"
        >
          Entrar
        </Button>
      </section>
    </main>
  );
};

export default Home;

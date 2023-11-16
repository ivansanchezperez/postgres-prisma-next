"use client";

import { useUserContext } from "@/context/UserContext/UserContext";

const Dashboard = () => {
  const { user } = useUserContext();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      {`¡Holaa ${user?.name}!`}
    </main>
  );
};

export default Dashboard;

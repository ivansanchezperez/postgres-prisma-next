import { useUserContext } from "@/context/UserContext/UserContext";

const useUser = () => {
  const { setUser } = useUserContext();

  const fetchUser = async (email: string, password: string) => {
    try {
      const response = await fetch(
        `/api/user?email=${encodeURIComponent(email)}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const user = await response.json();

      if (user && user.password === password) {
        setUser(user);

        return user;
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);

      return null;
    }
  };

  return { fetchUser };
};

export default useUser;

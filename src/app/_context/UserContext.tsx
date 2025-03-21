"use client";
import { User } from "@/utils/types";
import { useRouter } from "next/navigation";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type userContextType = {
  login: (user: string, password: string) => void;
  user: User | null;
};

const userContext = createContext<userContextType>({} as userContextType);

export const useUser = () => {
  return useContext(userContext);
};

const UsersProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      localStorage.setItem("email", email);

      const res = await fetch("http://localhost:5000/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      const jsonData = await res.json();
      localStorage.setItem("user", JSON.stringify(jsonData.data));

      if (!jsonData.error) {
        setUser(jsonData.data);
        localStorage.setItem("id", jsonData.data._id);
      }

      if (jsonData.error) {
        alert(jsonData.message);
        return;
      } else if (jsonData.data.role[0] == "ADMIN") {
        router.push("/foodmenu");
        return;
      }
      router.push("/");
    } catch (error) {
      console.log("Error", error);
      alert("Error in login function");
    }
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <userContext.Provider value={{ login, user }}>
      {children}
    </userContext.Provider>
  );
};

export default UsersProvider;

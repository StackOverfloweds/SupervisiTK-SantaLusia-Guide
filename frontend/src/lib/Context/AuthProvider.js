"use client";
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const AuthContext = createContext();

<<<<<<< HEAD
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const [authMessage, setAuthMessage] = useState(null);
  const router = useRouter();
  const [tokens, setTokens] = useState(null);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("Authentication");
    } else {
      setTokens(token);
      router.push("/admin-pages");
    }
  }, []);
=======
export function  AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);
    const [authMessage, setAuthMessage] = useState(null);
    const router = useRouter();
    const [token, setToken] = useState(null);

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if(!token) {
            router.push("/Authentication")
            return
        }
        router.push("/admin-pages");
        return
    },[])
>>>>>>> refs/remotes/origin/9-developtment-code-admin

  

  const Register = async (credentials) => {
    if (!credentials) {
      setAuthMessage("Harap masukkan credential");
      return;
    }
    if (credentials.password != credentials.confirm_password) {
      setAuthMessage("password dengan konfirmasi password berbeda");
      return;
    }
    try {
      const Reg = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/Auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: `${credentials.firstName} ${credentials.lastName}`,
            role: credentials?.role
              ? credentials.role
              : process.env.NEXT_PUBLIC_ROLE_USER,
            phone_number: credentials.phone_number,
            second_phone_number: credentials.second_phone_number,
            email: credentials.email,
            password: credentials.password,
            address: credentials.address,
          }),
        }
      );
      let reg = await Reg.json();
      return reg;
    } catch (e) {
      setAuthMessage(e);
      console.error(e);
    }
  };

  const login = async (credentials) => {
    console.log(credentials);

    console.log(tokens);

    if (!credentials) {
      setAuthMessage("Harap masukkan credential");
      return;
    }
    if (credentials.email == " " || credentials.password == " ") {
      setAuthMessage("email atau password masih kosong");
      return;
    }

<<<<<<< HEAD
    try {
      const Login = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/Auth/login/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokens}`,
          },
          method: "POST",
          body: JSON.stringify({
            name: credentials.firstName,
            password: credentials.password,
          }),
=======
    const Register = async(credentials) => {
        if(!credentials){
            setAuthMessage("Harap masukkan credential");
            return;
        }
        if(credentials.password != credentials.confirm_password){
            setAuthMessage("password dengan konfirmasi password berbeda");
            return;
        }
        try{
            const Reg = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/Auth/register`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    "name" : `${credentials.firstName} ${credentials.lastName}`,
                    "role": credentials?.role ? credentials.role : process.env.NEXT_PUBLIC_ROLE_USER,
                    "phone_number": credentials.phone_number,
                    "second_phone_number" : credentials.second_phone_number,
                    "email":credentials.email,
                    "password":credentials.password,
                    "address":credentials.address
                })
            })
            return Reg;
        }catch(e){
            setAuthMessage(e);
            console.error(e);
>>>>>>> refs/remotes/origin/9-developtment-code-admin
        }
      );
      const dat = await Login.json();
      setAuthMessage("Login Berhasil");
      setUserData(dat.user);
      Cookies.set("token", dat.token);
      return Login;
    } catch (e) {
      setAuthMessage(e);
      console.log(e);
      return;
    }
  };

<<<<<<< HEAD
  const logout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/Auth/logout`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
=======
    const login = async (credentials) => {
        console.log(credentials)

        if(!credentials){
            setAuthMessage("Harap masukkan credential")
            return;
        }
        if(credentials.email == " " || credentials.password == " "){
            setAuthMessage("email atau password masih kosong")
            return;
>>>>>>> refs/remotes/origin/9-developtment-code-admin
        }
      );

      if (!response.ok) {
        throw new Error("Logout failed");
      }
      const data = await response.json();
      console.log(data.message);

<<<<<<< HEAD
      // Remove the token and reset state
      Cookies.remove("token");
      setAuthMessage(null);
      setIsAuthenticated(false);
      setUserData(null);
    } catch (error) {
      console.error("Logout error:", error);
=======
            const Login = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/Auth/login`,{
                headers:{
                    "Content-Type":"application/json",
                    "Authorization" : `bearer ${token}`

                },
                method:"POST",
                body:JSON.stringify({
                    "name": credentials.firstName,
                    "password" : credentials.password
                })
            })
            if(Login.ok){
                const dat = await Login.json()
                setAuthMessage("Login Berhasil")
                setUserData(dat.user);
                sessionStorage.setItem("token",dat.token);
                setIsAuthenticated(true);
            }
            return Login;
        }catch(e){
            setAuthMessage(e);
            console.log(e)
            return;
        }
>>>>>>> refs/remotes/origin/9-developtment-code-admin
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userData,
        authMessage,
        login,
        logout,
        Register,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

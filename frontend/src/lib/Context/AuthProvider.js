"use client";
import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const AuthContext = createContext();

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
            return;
        }
        ValidateToken(token).then((resolve) => {
            if(!resolve.token_valid){
                sessionStorage.removeItem("token")
                router.refresh();
                return;
            }
            setUserData(resolve);
            router.push("/admin-pages");
        });
    },[token])

    const ValidateToken = async (token) => {
        try{
            const validate = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/users/validate-token/${token}`,{
             method:"GET",
             headers:{
                "Content-Type" : "application/json"
             }
            })
            const val = await validate.json();
            return val;
        }catch(e){
            console.log("error pada saat validasi token : ",e);
        }

    }

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
            let reg = await Reg.json();
            return reg;
        }catch(e){
            setAuthMessage(e);
            console.error(e);
        }
    }

    const login = async (credentials) => {
        if(!credentials){
            setAuthMessage("Harap masukkan credential")
            return;
        }
        if(credentials.email == " " || credentials.password == " "){
            setAuthMessage("email atau password masih kosong")
            return;
        }

        try{
            const Login = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/Auth/login/`,{
                headers:{
                    "Content-Type":"application/json",
                     "Authorization": `Bearer ${token}`
                },
                method:"POST",
                body:JSON.stringify({
                    "name": credentials.firstName,
                    "password" : credentials.password
                })
            })
            const dat = await Login.json()
            if(Login.ok){
            setAuthMessage("Login Berhasil")
                setUserData(dat);
                sessionStorage.setItem("token",dat.token);
                setToken(dat.token);
                setIsAuthenticated(true);
                return dat;
            }
            return dat;
        }catch(e){
            setAuthMessage(e);
            console.log(e)
            return;
        }
    }

    const logout = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/api/Auth/logout`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });
    
            if (!response.ok) {
                throw new Error('Logout failed');
            }
            const data = await response.json();
            // Remove the token and reset state
            sessionStorage.removeItem("token");
        setAuthMessage(null);
        setIsAuthenticated(false);
        setUserData(null);
        } catch (error) {
            console.error('Logout error:', error); 
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
    )

}

export default AuthContext;
"use client"
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from "js-cookie";

const AuthContext = createContext();

export function  AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userData, setUserData] = useState(null);
    const [authMessage, setAuthMessage] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("token");
        if(!token) return;
        const validation = validationToken();
        if(validation == null){
            router.push("/")
            return;
        }
        router.push("/admin");
    },[])

    const validationToken = async (token) => {
        if(!token){
            console.log("harap masukkan token")
            return null;
        }
        try{
            const validation = await fetch(`${process.env.BACKEND_API}/validation_Token`,{
                headers:"application/json",
                body:token
            })
            let val = await validation.json();
            setUserData(val.data)
        }catch(e) {
            setAuthMessage(e.message);
            return 
        }
        return val;
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
            const Login = await fetch(`${process.env.BACKEND_API}/api/Login`,{
                headers:"Application/json",
                method:"POST",
                body:{
                    email: credentials.email,
                    password : credentials.password
                }
            })
            const dat = await Login.json()
            setAuthMessage("Login Berhasil")
            setUserData(dat.data);
            Cookies.set("token",dat.data.token);
            return Login;
        }catch(e){
            setAuthMessage(e.message);
            return;
        }
    }

    const logout = () => {
        Cookies.remove("token")
        setAuthMessage(null);
        setIsAuthenticated(false);
        setUserData(null);
    }

    return(
        <AuthContext.Provider value={{ isAuthenticated, userData, authMessage, login, logout }}>
            {children}
        </AuthContext.Provider>
    )

}
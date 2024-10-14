"use client"
import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
            const validation = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/validation_Token`,{
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
        console.log(credentials)
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
                    "Content-Type":"application/json"
                },
                method:"POST",
                body:JSON.stringify({
                    "name": credentials.firstName,
                    "password" : credentials.password
                })
            })
            const dat = await Login.json()
            setAuthMessage("Login Berhasil")
            setUserData(dat.data);
            Cookies.set("token",dat.data.token);
            return Login;
        }catch(e){
            setAuthMessage(e);
            console.log(e)
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
        <AuthContext.Provider value={{ isAuthenticated, userData, authMessage, login, logout, Register }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;
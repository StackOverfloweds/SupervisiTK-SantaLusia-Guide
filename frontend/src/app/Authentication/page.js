"use client"
import { useState,useContext, useEffect } from "react";
import Image from "next/image";

import {Button} from "../../components/ui/button";
import Pembelajaran1 from "../../img/pembelajaran1.jpg"
import NavbarUser from "../../components/ui/NavbarUser";
import { ReloadIcon } from "@radix-ui/react-icons"
import { Toaster } from "../../components/ui/toaster"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "../../components/ui/popover"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs"

import AuthContext from "../../lib/Context/AuthProvider";
import { useToast } from "../../hooks/use-toast";
import Login from "./Login.js";

export default function Authentication() {
    const [inputs, setInputs] = useState({
        firstName:"",
        lastName:"",
        phone_number:"",
        second_phone_number:"",
        address:"",
        email:"",
        password:"",
        confirm_password: ""
    })
    const [LoadingStatus,setLoadingStatus] = useState(false);
    const { isAuthenticated, userData, login, logout, Register } = useContext(AuthContext);
    const {toast} = useToast();

    useEffect(() => {
        console.log(AuthContext);
        console.log("userData : " + userData);
    },[userData])


    return(
            <main className="relative  w-screen  mx-auto h-screen overflow-x-hidden">
                <div className="z-20 bg-white w-full sticky top-0">
                    <div className="container mx-auto p-2">
                        <NavbarUser/>
                    </div>
                </div>
                
                <div className="absolute  w-screen h-screen z-10 ">
                    <Image src={Pembelajaran1} alt="Pembelajaran1" fill={true} className="rounded-xl object-cover blur-sm"/>
                </div>
                <div className="relative flex justify-center items-center  p-2 w-full h-full  z-10 ">
                    {/* <SwitchButton />
                    <Regis inputs={inputs} setInputs={setInputs}/> */}
                    <div className="w-auto max-w-[500px] md:max-w-[800px] m-auto  rounded-xl bg-white p-5">
                        <Login inputs={inputs} setInputs={setInputs} login={login} setLoadStatus={setLoadingStatus} loadingStatus={LoadingStatus} toast={toast} usr={userData}/>
                    </div>
                </div>
                <Toaster/>
            </main>
    )
}







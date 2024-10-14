"use client"
import { useState,useContext } from "react";
import {useRouter} from "next/navigation"
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Pembelajaran1 from "@/img/pembelajaran1.jpg"
import NavbarUser from "@/components/ui/NavbarUser";
import { ReloadIcon } from "@radix-ui/react-icons"
import { Toaster } from "@/components/ui/toaster"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import AuthContext from "@/lib/Context/AuthProvider";
import { useToast } from "@/hooks/use-toast";

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
    const { isAuthenticated, user, login, logout, Register } = useContext(AuthContext);
    const {toast} = useToast();

    const submitLogin = (e) => {
        if(inputs.email == "" || inputs.password == "") {
            console.log("email atau password masih kosong")
        }
        
        clearSubmit();
    }

    

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
                    <Tabs defaultValue="Login" className="w-auto md:max-w-[800px] m-auto  rounded-xl ">
                        <TabsList className="w-[400px] mx-auto grid grid-cols-2 bg-white/80 rounded-xl  mb-5 shadow-2xl">
                            <TabsTrigger value="Login">Login</TabsTrigger>
                            <TabsTrigger value="Register">Register</TabsTrigger>
                        </TabsList>
                        <div className="w-full m-auto bg-white rounded-xl p-5">
                            <TabsContent value="Login" className="transition-all duration-100 "><Login inputs={inputs} setInputs={setInputs} login={login} setLoadStatus={setLoadingStatus} loadingStatus={LoadingStatus} toast={toast} usr={user}/></TabsContent>
                            <TabsContent value="Register" className="transition-all duration-100 "><Regis inputs={inputs} setInputs={setInputs} regis={Register} setLoadStatus={setLoadingStatus} loadingStatus={LoadingStatus} toast={toast} /></TabsContent>
                        </div>
                    </Tabs>
                </div>
                <Toaster/>
            </main>
    )
}

const clearSubmit = (setInputs) => {
    setInputs({
        email:"",
        password:""
    })
}

const Login = ({inputs,setInputs, login, toast, setLoadStatus, loadingStatus,usr}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoadStatus(true);
        login(inputs).then((resolve) => {
            console.log("resolve " + resolve)
            setLoadStatus(false);
            if(!resolve?.ok){
                toast({
                    variant:"destructive",
                    title:"Terjadi kesalahan",
                    description:"Terjadi kesalahan pada server"
                })
                return;
            }
            toast({
                variant:"success",
                title:"Login berhasil",
                description:`Selamat datang ${usr.user.name}`
            })
        });
    }
    return(
        <form className="" onSubmit={(e) => handleSubmit(e)} method="POST">
            <h1 className="font-poppinsBold text-center text-2xl md:text-3xl">Selamat Datang!!</h1>
            <p className="font-poppins text-center text-md pb-5 text-pretty text-md md:text-sm w-[300px] md:w-[250px] mx-auto">masuk untuk mulai menjelajahi website kami</p>
            <label className="block text-poppins text-md" htmlFor="nama">Email</label>
            <input type="text" placeholder="Nama" autoComplete="username" name="nama" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md focus:bg-blue-100" onChange={(e) => {
                setInputs({
                    ...inputs,
                    firstName:e.target.value
                })
            }} value={inputs.firstName} />
            <label className="block text-poppins text-md" htmlFor="password">Password</label>
            <input type="password" placeholder="Password" autoComplete="current-password" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md focus:bg-blue-100" onChange={(e)=>{
                setInputs({
                    ...inputs,
                    password:e.target.value
                })
            }} value={inputs.password}/>
            <Button className={`border border-black mx-auto w-full mt-5 ${loadingStatus? "hidden":"" }`}>Login</Button>
            <Button className={`border border-black mx-auto w-full mt-5 ${loadingStatus? "" : "hidden"}`} disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button>        
        </form>                                 
    )
}



const Regis = ({inputs, setInputs, regis, setLoadStatus, loadingStatus, toast}) => {
    const handleRegis = async (e) => {
        e.preventDefault();
        setLoadStatus(true);
        regis(inputs)
            .then((response) => {
                setLoadStatus(false);
                if(!response.ok){
                    toast({
                        variant:"destructive",
                        title:"Terjadi kesalahan pada server",
                        description:"terjadi permasalahan pada requestmu"
                    })
                    return;
                }
                toast({
                    variant:"success",
                    title:"Registrasi Berhasil",
                    description:"lakukan login untuk dapat mulai menjelajahi"
                })
                clearInputs(setInputs)
                return;
            })
        setTimeout(()=>{
            window.location.href = "/Authentication"
        },10000)
    }

    return (
        <form className="" onSubmit={(e) => handleRegis(e)} method="POST">
            <h1 className="font-poppinsBold text-center text-3xl ">Selamat Datang</h1>
            <p className="font-poppins text-center text-md pb-5">TK Santa Lusia</p>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <span className="grid grid-cols-2 gap-2">
                        <span>
                            <label className="block text-poppins text-md" htmlFor="firstname">firstname</label>
                            <input type="text" placeholder="firstname" autoComplete="firstname" name="firstname" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md focus:bg-blue-100" onChange={(e) => {
                                setInputs({
                                    ...inputs,
                                    firstName:e.target.value
                                })

                            }} value={inputs.firstName} required/>
                        </span>
                        <span>
                            <label className="block text-poppins text-md" htmlFor="lastname">lastname</label>
                            <input type="text" placeholder="lastname" autoComplete="lastname" name="lastname" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md focus:bg-blue-100" onChange={(e) => {
                                setInputs({
                                    ...inputs,
                                    lastName:e.target.value
                                })
                            }} value={inputs.lastName} required/>
                        </span>
                    </span>
                    <label className="block text-poppins text-md" htmlFor="address">Alamat</label>
                    <input type="text" placeholder="Alamat" autoComplete="address" name="address" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md focus:bg-blue-100" onChange={(e) => {
                        setInputs({
                            ...inputs,
                            address:e.target.value
                        })
                        console.log(inputs.address)
                    }} value={inputs.address} required/>                        
                    
                    <label className="block text-poppins text-md" htmlFor="notTelp">No.telpon</label>
                    <input type="number" placeholder="Nomor telepon" name="notTelp" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md focus:bg-blue-100" onChange={(e) => {
                        setInputs({
                            ...inputs,
                            phone_number:e.target.value
                        })
                    }} value={inputs.phone_number} minLength={10} required/>                           
                    <label className="block text-poppins text-md" htmlFor="notTelp2">No.telpon kedua</label>
                    <input type="number" placeholder="Nomor telepon" name="notTelp2" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md focus:bg-blue-100" onChange={(e) => {
                        setInputs({
                            ...inputs,
                            second_phone_number:e.target.value
                        })
                    }} value={inputs.second_phone_number} minLength={10} required/>                           
                </div>
                <div>
                    <label className="block text-poppins text-md" htmlFor="email">Email</label>
                    <input type="email" placeholder="Email" autoComplete="username" name="email" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md focus:bg-blue-100 " onChange={(e) => {
                        setInputs({
                            ...inputs,
                            email:e.target.value
                        })
                    }} value={inputs.email} required/>
                    <label className="block text-poppins text-md" htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" autoComplete="current-password" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md focus:bg-blue-100" onChange={(e)=>{
                        setInputs({
                            ...inputs,
                            password:e.target.value
                        })
                    }} value={inputs.password} required/>
                    <label className="block text-poppins text-md" htmlFor="password">Konfirmasi Password</label>
                    <input type="password" placeholder="Password" autoComplete="current-password" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md focus:bg-blue-100" onChange={(e)=>{
                        setInputs({
                            ...inputs,
                            confirm_password:e.target.value
                        })
                    }} value={inputs.confirm_password} required/>
                    <Button type="submit" className={`border border-black mx-auto w-full mt-5 ${loadingStatus? "hidden" : ""}`} >Daftar</Button>
                    <Button className={`border border-black mx-auto w-full mt-5 ${loadingStatus? "" : "hidden"}`} disabled>
                        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                    </Button>
                </div>
            </div>
        </form>        
    )
}

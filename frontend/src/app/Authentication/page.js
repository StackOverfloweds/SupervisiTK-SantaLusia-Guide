"use client"
import { useState } from "react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Pembelajaran1 from "@/img/pembelajaran1.jpg"
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

export default function Authentication() {
    const [inputs, setInputs] = useState({
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:"",
        password:""
    })

    const submitLogin = (e) => {
        if(inputs.email == "" || inputs.password == "") {
            console.log("email atau password masih kosong")
        }
        
        clearSubmit();
    }

    const clearSubmit = () => {
        setInputs({
            email:"",
            password:""
        })
    }

    return(
        <>
            {/* grid grid-cols-5 */}
            <section className=" w-screen  mx-auto h-screen ">
                <div className="col-span-3 absolute  w-screen h-screen z-10 border-2 border-blue-500 ">
                    <Image src={Pembelajaran1} alt="Pembelajaran1" fill={true} className="rounded-xl object-cover blur-sm"/>
                </div>
                <form className="relative flex justify-center items-center  m-auto my-auto w-[400px] h-full  shadow-xl  transition-all duration-100 z-20 " onSubmit={() => submitLogin()} method="POST">
                    {/* <SwitchButton />
                    <Regis inputs={inputs} setInputs={setInputs}/> */}
                    <Tabs defaultValue="Login" className="w-full m-auto  rounded-xl">
                        <TabsList className=" grid grid-cols-2 bg-white/80 rounded-xl  mb-5">
                            <TabsTrigger value="Login">Login</TabsTrigger>
                            <TabsTrigger value="Register">Register</TabsTrigger>
                        </TabsList>
                        <div className="w-full m-auto bg-white rounded-xl p-5">
                            <TabsContent value="Login"><Login inputs={inputs} setInputs={setInputs}/></TabsContent>
                            <TabsContent value="Register"><Regis inputs={inputs} setInputs={setInputs}/></TabsContent>
                        </div>
                    </Tabs>
                </form>
            </section>
        </>
    )
}

const Login = ({inputs,setInputs}) => {
    return(
        <div >
            <h1 className="font-poppinsBold text-center text-3xl">Selamat Datang!!</h1>
            <p className="font-poppins text-center text-md pb-5 text-pretty text-sm md:w-[250px] md:mx-auto">masuk untuk mulai menjelajahi website kami</p>
            <label className="block text-poppins text-md" htmlFor="email">Email</label>
            <input type="email" placeholder="Email" autoComplete="username" name="email" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md" onChange={(e) => {
                setInputs({
                    ...inputs,
                    email:e.target.value
                })
            }} value={inputs.email} />
            <label className="block text-poppins text-md" htmlFor="password">Password</label>
            <input type="password" placeholder="Password" autoComplete="current-password" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md" onChange={(e)=>{
                setInputs({
                    ...inputs,
                    password:e.target.value
                })
            }} value={inputs.password}/>
            <Button className="border border-black mx-auto w-full mt-5">Login</Button>
        </div>                                 
    )
}


const Regis = ({inputs, setInputs}) => {
    return (
        <div className="">
            <h1 className="font-poppinsBold text-center text-3xl">Selamat Datang</h1>
            <p className="font-poppins text-center text-md pb-5">TK Santa Lusia</p>
            <span className="grid grid-cols-2 gap-2">
                <span>
                    <label className="block text-poppins text-md" htmlFor="firstname">firstname</label>
                    <input type="text" placeholder="firstname" autoComplete="firstname" name="firstname" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md focus:bg-blue-100" onChange={(e) => {
                        setInputs({
                            ...inputs,
                            firstName:e.target.value
                        })
                    }} value={inputs.firstName} />
                </span>
                <span>
                    <label className="block text-poppins text-md" htmlFor="lastname">lastname</label>
                    <input type="text" placeholder="lastname" autoComplete="lastname" name="lastname" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md focus:bg-blue-100" onChange={(e) => {
                        setInputs({
                            ...inputs,
                            lastName:e.target.value
                        })
                    }} value={inputs.lastName} />
                </span>
            </span>
            <label className="block text-poppins text-md" htmlFor="notTelp">No. telpon</label>
            <input type="text" placeholder="Nomor telepon" name="notTelp" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md focus:bg-blue-100" onChange={(e) => {
                setInputs({
                    ...inputs,
                    phoneNumber:e.target.value
                })
            }} value={inputs.phoneNumber} />
            <label className="block text-poppins text-md" htmlFor="email">Email</label>
            <input type="email" placeholder="Email" autoComplete="username" name="email" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md focus:bg-blue-100" onChange={(e) => {
                setInputs({
                    ...inputs,
                    email:e.target.value
                })
            }} value={inputs.email} />
            <label className="block text-poppins text-md" htmlFor="password">Password</label>
            <input type="password" placeholder="Password" autoComplete="current-password" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md focus:bg-blue-100" onChange={(e)=>{
                setInputs({
                    ...inputs,
                    password:e.target.value
                })
            }} value={inputs.password}/>
            <Button className="border border-black mx-auto w-full mt-5">Daftar</Button>
        </div>        
    )
}

const SwitchButton = () => {
    return(
        <Button></Button>
    )
}
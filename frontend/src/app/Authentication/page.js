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

export default function Authentication() {
    const [inputs, setInputs] = useState({
        email:"",
        password:""
    })

    const submitLogin = () => {
        if(inputs.email == "" || inputs.password == "") {
            
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
            <Popover>
                <PopoverTrigger id="trigerPopup" className="hidden">Open</PopoverTrigger>
                <PopoverContent>Place content for the popover here.</PopoverContent>
            </Popover>
            <section className="grid grid-cols-5 container mx-auto h-screen p-2">
                <div className="col-span-3 relative">
                    <Image src={Pembelajaran1} alt="Pembelajaran1" fill={true} className="rounded-xl"/>
                </div>
                <form className="m-auto col-span-2 w-[350px]">
                    <div >
                        <h1 className="font-poppinsBold text-center text-3xl">Selamat Datang</h1>
                        <p className="font-poppins text-center text-md pb-5">TK Santa Lusia</p>
                        <label className="block text-poppins text-md" for="email">Email</label>
                        <input type="email" placeholder="Email" name="email" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md" onChange={(e) => {
                            setInputs({
                                ...inputs,
                                email:e.value
                            })
                        }} value={inputs.email} />
                        <label className="block text-poppins text-md" for="password">Password</label>
                        <input type="password" placeholder="Password" className="block w-full text-lg border-2 px-3 py-1 my-2 focus:border-black rounded-md" onChange={(e)=>{
                            setInputs({
                                ...inputs,
                                password:e.value
                            })
                        }} value={inputs.password}/>
                        <Button onClick={() => submitLogin()} className="border border-black mx-auto w-full mt-5">Login</Button>
                    </div>
                </form>
            </section>
        </>
    )
}

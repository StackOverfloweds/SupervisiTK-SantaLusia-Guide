import {Button} from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons"

const Regis = ({inputs, setInputs, regis, setLoadStatus, loadingStatus, toast}) => {
    const handleRegis = async (e) => {
        e.preventDefault();
        setLoadStatus(true);
        regis(inputs)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                setLoadStatus(false);
                if(!response.ok){
                    toast({
                        variant:"destructive",
                        title:`${response.error}`,
                        description:`${response.message}`
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
            // window.location.href = "/Authentication"
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
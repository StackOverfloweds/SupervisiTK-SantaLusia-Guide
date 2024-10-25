import {Button} from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons"

const Login = ({inputs,setInputs, login, toast, setLoadStatus, loadingStatus}) => {
    const handleSubmit = async  (e) => {
        e.preventDefault();
        setLoadStatus(true);
        const user = await login(inputs);
        if(user?.error){
            setLoadStatus(false);
            toast({
                variant:"destructive",
                title:`${user.error}`,
                description:"username / password salah"
            })
            return;
        }
        setLoadStatus(false);
        toast({
            variant:"success",
            title:`Login Berhasil`,
            description:`selamat datang ${user.user.name}`
        })        
    }
    return(
        <form className="" onSubmit={(e) => handleSubmit(e)} method="POST">
            <h1 className="font-poppinsBold text-center text-2xl md:text-3xl">Selamat Datang!!</h1>
            <p className="font-poppins text-center text-md pb-5 text-pretty text-md md:text-sm w-[300px] md:w-[250px] mx-auto">masuk untuk mulai menjelajahi website kami</p>
            <label className="block text-poppins text-md" htmlFor="nama">Name</label>
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

export default Login;
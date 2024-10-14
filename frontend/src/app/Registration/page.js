import NavbarUser from "@/components/ui/NavbarUser";
import pendaftaran from "@/img/Pendaftaran/brosur-43.jpg";
import Credits from "../About/credits";
import Image from "next/image";

export default function Registration() {
    return(
        <>
            <div className="container mx-auto">
                <NavbarUser/>
            </div>

            <section className="flex items-center justify-center p-10">
                <Image src={pendaftaran} alt="brosur" className="" />
            </section>

            <Credits/>
        </>
    )
}
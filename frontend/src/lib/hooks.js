import { useState, useEffect} from "react";


const useCheckClientDimension = () => {
    const [clientDimension, setClientDimension] = useState({
        width:"",
        height:"",
    })

    useEffect(() => {
        function updateSize(){
            setClientDimension({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    },[])
    return clientDimension
};

export default useCheckClientDimension;
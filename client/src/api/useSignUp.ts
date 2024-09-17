import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setCurrentUser } from "../redux/userSlice";
import { toast } from "sonner";

interface signUpDataProps{
    username:string;
    email:string;
    password:string;
    confirmPassword:string;
}

const useSignUp = () => {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState<boolean>(false);

    const signUp = async(signUpData: signUpDataProps) => {
        try{
            setLoading(true);
            const res = await fetch(`auth/signin`,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(signUpData)
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }

            localStorage.setItem("app-user", JSON.stringify(data));
            dispatch(setCurrentUser(data));
            toast.success("Signed Up Successfully");
        }
        catch(error:unknown){
            if(error instanceof Error){
                toast.error(error.message);
            } else{
                throw new Error("An unknown error occured");
            }
        }finally{
            setLoading(false);
        }
    };

    return {loading,signUp};
}

export default useSignUp;

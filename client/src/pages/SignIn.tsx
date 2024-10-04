import { useState, ChangeEvent,FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { setCurrentUser } from "../redux/global";
import { useAppDispatch } from "../redux/Provider";
import { useSignInMutation } from "../api/auth";
import { AuthError } from "../types/auth";

import { toast } from "sonner";
import { Input } from "../reusables";
import { AuthNavbar, AuthFiller, AuthForm } from "../ui";
import { User,Key } from "@phosphor-icons/react";
import Sponsor from "../landingpage/Sponsor";


const SignIn = () => {
    // Hooks
    const [signIn, {isLoading}] = useSignInMutation(); 
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // Sign In State
    const [signInData, setSignInData] = useState({
      username:"",
      password:""
    });

    // Handling Form
    const handleSignInInput = (e:ChangeEvent<HTMLInputElement>) => {
      setSignInData({...signInData, [e.target.id]:e.target.value});
    }

    const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const res = await signIn(signInData).unwrap();
        
        if (res.user) {
          dispatch(setCurrentUser(res.user));
          toast.success(res.message || "Logged in successfully");
          navigate("/user");
        } else {
          throw new Error("User data not found in response");
        }
      } catch (error: unknown) {
        if (typeof error === 'object' && error !== null) {
          const apiError = error as AuthError;
          if (apiError.status === 400 && apiError.data?.error) {
            toast.error(apiError.data.error);
          } else {
            toast.error("Invalid username or password. Please try again.");
          }
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
        console.error("Sign up error:", error);
      }
    };

  // JSX Elements
  const header = (
    <h1 className="p-2 text-2xl font-semibold text-center">Welcome Back to EnviroTech</h1>
  );

  const adStatements = (
    <div className="px-4">
      <p className="text-base mb-2">Your trusted partner in sustainable solutions</p>
      <p className="text-justify"><span className="font-semibold text-secondary">Log in</span> to continue your journey towards a greener, more sustainable future.</p>
    </div>
  );

  const formHeader= (
    <>
    Login at <span className="text-secondary font-bold">EnviroTech</span>
    </>
  );

  const formBody = (
    <>
        <Input 
          id="username"
          value={signInData.username}  
          type="text" 
          label="Username"
          onChange={handleSignInInput}  
          icon={User}
          />

        <Input 
          id="password" 
          type="password"
          value={signInData.password}   
          label="Password"
          onChange={handleSignInInput} 
          icon={Key} 
          isPassword
        />
    </>
  )

  return (
    <section>
      {/* Nav Header */}
      <AuthNavbar/>
      {/* Sections */}
      <main className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:h-[70vh] justify-items-center items-center overflow-x-hidden">
      <AuthFiller
        header={header}
        firstImage="/images/signInImg1.png"
        secondImage="/images/signInImg2.png"
        contents={adStatements}
      />

      <AuthForm 
        formHeader={formHeader}
        formBody={formBody}
        isSignUp={false}
        onSubmit={handleSubmit}
        loading={isLoading}
      />
      </main>
      {/* Sponsor Footer */}
      <Sponsor
        header="Collaboration with Trusted Partners Towards Sustainability"
        backgroundClass="bg-secondary"
      />
    </section>
  )
}

export default SignIn;

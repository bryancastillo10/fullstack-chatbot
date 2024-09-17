import { useState, ChangeEvent, FormEvent } from "react";
import useSignUp from "../api/useSignUp";
import { AuthNavbar, AuthFiller, AuthForm } from "../ui";
import { Input } from "../reusables";
import Sponsor from "../landingpage/Sponsor";
import { User, Envelope,Key,ShieldCheck } from "@phosphor-icons/react";


const SignUp = () => {
  // Sign Up State
  const {loading, signUp} = useSignUp();
  const [signUpData, setSignUpData] = useState({
    username: "",
    email:"",
    password: "",
    confirmPassword: "",
  });

  // Handling Form
  const handleSignUpInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpData({...signUpData, [e.target.id]:e.target.value});
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp(signUpData);
  };

  // JSX Elements
  const header = (
    <h1 className="p-2 text-2xl font-semibold text-center">Why Do You Need to Create an Account?</h1>
  );

  const featureList = (  
      <ul className="text-center lg:text-left lg:list-disc space-y-2 text-sm xl:text-base">
        <li>Broaden your knowledge about the environment</li>
        <li>Consult with credible experts</li>
        <li>Access Exclusive Resources</li>
        <li>Join the community</li>
      </ul>
  );

    const formHeader= (
      <>
      Get Started at <span className="text-secondary font-bold">EnviroTech</span>
      </>
    );

    const formBody = (
      <>
        <Input 
          id="username"  
          type="text" 
          label="Username"
          disabled={loading}
          onChange={handleSignUpInput}  
          icon={User}
          validationMessage="Greater than 5 alphanumeric characters"
          />

        <Input 
          id="email" 
          type="email" 
          label="Email"
          disabled={loading}
          onChange={handleSignUpInput} 
          icon={Envelope}
          validationMessage="Valid email address (eg. envirotech@domain.com)"
        />

        <Input 
          id="password" 
          type="password" 
          label="Password"
          disabled={loading}
          onChange={handleSignUpInput}   
          icon={Key} 
          isPassword
          validationMessage="At least one uppercase, lowercase, and a numeric character"
        />

        <Input 
          id="confirmPassword" 
          type="password" 
          label="Confirm Password"
          disabled={loading}
          onChange={handleSignUpInput}  
          icon={ShieldCheck} 
          isPassword
          validationMessage="Retype password for validation"
        />
      </>
    );

  return (
    <section>
    {/* Nav Header */}
    <AuthNavbar/>


    <main className="mt-10 grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center overflow-x-hidden">
        <AuthFiller
          header={header}
          contents={featureList}
          firstImage="/images/signUpImg1.png"
          secondImage="/images/signUpImg2.png"
        />      
   
        <AuthForm
            formHeader={formHeader}
            formBody={formBody}
            onSubmit={handleSubmit}
            loading={loading}
            isSignUp
        />
    </main>

    {/* Sponsor Footer */}
    <Sponsor
      header="Trusted by World Class Organizations"
      backgroundClass="bg-secondary"
    />
    </section>
  )
}

export default SignUp;

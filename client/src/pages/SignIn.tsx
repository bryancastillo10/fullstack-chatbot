import { FormEvent } from "react";
import { Input } from "../reusables";
import { AuthNavbar, AuthFiller, AuthForm } from "../ui";
import { User,Key } from "@phosphor-icons/react";
import Sponsor from "../landingpage/Sponsor";


const SignIn = () => {
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
          type="text" 
          label="Username"
          onChange={()=>{}}  
          icon={User}
          />

        <Input 
          id="password" 
          type="password" 
          label="Password"
          onChange={()=>{}} 
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
      <main className="mt-10 grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center overflow-x-hidden">
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
        onSubmit={(e:FormEvent<HTMLFormElement>)=>{e.preventDefault()}}
        loading={false}
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

import AuthNavbar from "../ui/AuthNavbar";
import AuthFiller from "../ui/AuthFiller";
import { Input, Button } from "../reusables";
import { User, Envelope,Key,ShieldCheck } from "@phosphor-icons/react";


const SignUp = () => {
  const header = (
    <h1 className="p-2 text-2xl font-semibold text-center">Why Do You Need to Create an Account?</h1>
  )

  const featureList = (  
      <ul className="text-center lg:text-left lg:list-disc space-y-2 text-sm xl:text-base">
        <li>Broaden your knowledge about the environment</li>
        <li>Consult with credible experts</li>
        <li>Access Exclusive Resources</li>
        <li>Join the community</li>
      </ul>
  )
  return (
    <section>
    {/* Nav Header */}
    <AuthNavbar/>

    {/* Sections */}
    <main className="mt-10 grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center overflow-x-hidden">
        <AuthFiller
          header={header}
          contents={featureList}
          firstImage="/images/signUpImg1.png"
          secondImage="/images/signUpImg2.png"
        />      


      {/* Sign In Form */}
      <article className="w-fit">
        <h1 className="mt-10 xl:mt-0 mb-3 font-base text-3xl xl:text-4xl">Get Started at <span className="text-secondary font-bold">EnviroTech</span></h1>
        <form onSubmit={()=>{}} className="flex flex-col">
          <Input 
            id="username"  
            type="text" 
            label="Username" 
            icon={User}
            validationMessage="Greater than 5 alphanumeric characters"
            />

          <Input 
            id="email" 
            type="email" 
            label="Email" 
            icon={Envelope}
            validationMessage="Valid email address (eg. envirotech@domain.com)"
          />

          <Input 
            id="password" 
            type="password" 
            label="Password" 
            icon={Key} 
            isPassword
            validationMessage="At least one uppercase, lowercase, and a numeric character"
          />

          <Input 
            id="confirmPassword" 
            type="password" 
            label="Confirm Password" 
            icon={ShieldCheck} 
            isPassword
            validationMessage="Retype password for validation"
          />

          <p>Already have an account? <span className="text-secondary text-lg font-semibold">Login</span></p>
          <div className="my-4">
          <Button type="submit" width="w-[100%]" variant="primary">SignUp</Button>
          </div>
        </form>
      </article>
    </main>

    {/* Sponsor Footer */}
    </section>
  )
}

export default SignUp;

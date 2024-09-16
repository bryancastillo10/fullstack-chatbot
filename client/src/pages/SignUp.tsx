import AuthNavbar from "../ui/AuthNavbar";
import { Input, Button } from "../reusables";
import { User, Envelope,Key,ShieldCheck } from "@phosphor-icons/react";

const SignUp = () => {
  return (
    <section>
    {/* Nav Header */}
    <AuthNavbar/>

    {/* Sections */}
    <main className="mt-10 grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center overflow-x-hidden">
      {/* Images Bento */}
    <article className="grid grid-cols-2 gap-4 w-[90%] border border-black">
      <div className="col-span-2 order-2 lg:order-none lg:col-span-1 flex justify-center items-start lg:items-center">
        <h1 className="p-2 text-2xl font-semibold text-center xl:text-left">Why Do You Need to Create an Account?</h1>
      </div>
      {/* First Image */}
      <div className="flex md:justify-center lg:justify-end items-center">
        <img src="https://placehold.co/200x200" alt="Team Discussion" className="xl:ml-8 object-cover rounded" />
      </div>

      {/* Second Image */}
      <div className="flex xl:row-start-2 justify-center lg:justify-start items-center">
        <img src="https://placehold.co/260x185" alt="Environment" className="object-cover rounded" />
      </div>

      <div className="col-span-2 order-3 lg:order-none lg:col-span-1 flex justify-center items-start lg:items-center mb-4">
        <ul className="text-center lg:text-left lg:list-disc space-y-2 text-sm xl:text-base">
          <li>Broaden your knowledge about the environment</li>
          <li>Consult with credible experts</li>
          <li>Access Exclusive Resources</li>
          <li>Join the community</li>
        </ul>
      </div>
    </article>
      {/* Sign In Form */}
      <article className="w-fit">
        <h1 className="mt-10 xl:mt-0 mb-3 font-semibold text-3xl xl:text-4xl">Get Started at <span className="text-secondary">EnviroTech</span></h1>
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

import { ReactNode } from "react";
import { Button } from "../reusables";
import { Link } from "react-router-dom";

interface AuthFormProps{
    isSignUp:boolean;
    formHeader: ReactNode;
    formBody:ReactNode;
}

const AuthForm = ({formHeader,formBody, isSignUp}:AuthFormProps) => {
  return (
    <article className="w-fit">
    <h1 className="mt-10 xl:mt-0 mb-3 font-base text-3xl xl:text-4xl">
        {formHeader}
    </h1>
    <form onSubmit={()=>{}} className="flex flex-col">
     {formBody}

      { isSignUp ? 
        (<p>Already have an account? <Link to="/signin"><span className="text-secondary text-lg font-semibold hover:underline">
            Login</span></Link>
            </p>)
        :
        (<p>No account yet ? <Link to="/signup"><span className="text-secondary text-lg font-semibold hover:underline">
            Register Here</span></Link>
            </p>)
        }
      <div className="my-4">
      <Button type="submit" width="w-[100%]" variant="primary">SignUp</Button>
      </div>
    </form>
  </article>
  )
}

export default AuthForm;

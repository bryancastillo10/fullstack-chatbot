import { ReactNode,FormEvent } from "react";
import { Button } from "../reusables";
import { Link } from "react-router-dom";

interface AuthFormProps{
    isSignUp:boolean;
    loading:boolean;
    formHeader: ReactNode;
    formBody:ReactNode;
    onSubmit:(e: FormEvent<HTMLFormElement>) => void;
}

const AuthForm = ({formHeader,formBody, isSignUp,onSubmit, loading}:AuthFormProps) => {
  return (
    <article className="w-fit">
    <h1 className="mt-10 xl:mt-0 mb-3 font-base text-3xl xl:text-4xl">
        {formHeader}
    </h1>
    <form onSubmit={onSubmit} className="flex flex-col">
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
      {isSignUp ? 
        (<Button 
            type="submit" 
            width="w-[100%]" 
            variant="primary"
            loading={loading}
          >
            SignUp
          </Button>)
        : (<Button type="submit" width="w-[100%]" variant="primary">Log In</Button>)
        }
      </div>
    </form>
  </article>
  )
}

export default AuthForm;

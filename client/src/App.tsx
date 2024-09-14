import { Routes,Route } from "react-router-dom";
import { LandingPage, 
          AppLayout,
          PageNotFound, 
          SignIn, SignUp, 
          TechPage } from "./pages";

const App = () => {
  return (
        <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/tech" element={<TechPage/>}>
            <Route path=":id" />
        </Route>
        <Route path="user" element={<AppLayout/>}>
            <Route path="home" index element={<p>Home</p>}/>
        </Route>
        <Route path="*" element={<PageNotFound />} />     
      </Routes>

  )
}

export default App;

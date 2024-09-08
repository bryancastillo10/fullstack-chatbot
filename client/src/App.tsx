import { Routes,Route } from "react-router-dom";
import { Home, PageNotFound, SignIn, SignUp, TechPage } from "./pages";

const App = () => {
  return (
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/tech" element={<TechPage/>}>
            <Route path=":id" />
        </Route>
        <Route path="*" element={<PageNotFound />} />     
      </Routes>

  )
}

export default App;

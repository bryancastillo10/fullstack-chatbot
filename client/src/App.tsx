import { Routes,Route } from "react-router-dom";
import { LandingPage, 
          AppLayout,
          PageNotFound, 
          SignIn, SignUp, 
          TechPage } from "./pages";
import PrivateRoute from "./config/PrivateRoute";
const App = () => {
  return (
        <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/tech" element={<TechPage/>}>
            <Route path=":id" />
        </Route>
        <Route element={<PrivateRoute/>}>
          <Route path="user" element={<AppLayout/>}>
            <Route path="profile" index element={<p>Home Page</p>}/>
            <Route path="appointments" index element={<p>Appointment Page</p>}/>
            <Route path="consultants" index element={<p>Consultants Page</p>}/>
            <Route path="settings" index element={<p>Settings</p>}/>
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />     
      </Routes>

  )
}

export default App;

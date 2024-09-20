import { Routes,Route } from "react-router-dom";
// Main Pages
import { LandingPage, 
          AppLayout,
          PageNotFound, 
          SignIn, SignUp, 
          TechPage } from "./pages";
import PrivateRoute from "./config/PrivateRoute";

// App Pages
import HomePage from "./app/Home";
import Appointments from "./app/Appointments";
import Consultants from "./app/Consultants";
import Settings from "./app/Settings";

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
            <Route path="" index element={<HomePage/>}/>
            <Route path="appointments" index element={<Appointments/>}/>
            <Route path="consultants" index element={<Consultants/>}/>
            <Route path="settings" index element={<Settings/>}/>
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />     
      </Routes>

  )
}

export default App;

import { Routes,Route } from "react-router-dom";
import { Home, PageNotFound } from "./pages";

const App = () => {
  return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      
      </Routes>

  )
}

export default App;

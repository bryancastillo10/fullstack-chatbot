import { Routes,Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import { Home, PageNotFound } from "./pages";

const App = () => {
  return (
    <>
        <Routes>
        <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App;

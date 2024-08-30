import { Routes,Route } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import {Create, Home, Update, PageNotFound} from "./pages";

const App = () => {
  return (
    <>
        <Routes>
        <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="update" element={<Update />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App;

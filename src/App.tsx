import NotesPage from "@/pages/NotesPage";
import NotesProvider from "@/context/NoteContext";
import ToastProvider from "./context/CustomToastProvider";

const App = () => {
  return (
    <div id="app">
      <ToastProvider>
        <NotesProvider>
          <NotesPage />
        </NotesProvider>  
      </ToastProvider>
    </div>
  )
}

export default App;

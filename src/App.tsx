import NotesPage from "@/pages/NotesPage";
import NotesProvider from "@/context/NoteContext";

const App = () => {
  return (
    <div id="app">
      <NotesProvider>
        <NotesPage />
      </NotesProvider>  
    </div>
  )
}

export default App;

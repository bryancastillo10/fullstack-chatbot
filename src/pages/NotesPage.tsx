import { useContext } from "react";
// import { mockData as notesData } from "@/data/mockData";
import NoteCard from "@/components/NoteCard";
import Controls from "@/components/Controls";

import { NoteContext } from "@/context/NoteContext";

const NotesPage = () => {
  const { notes } = useContext(NoteContext);

  return (
    <div>
      {notes.map((note) => (
        <NoteCard
          key={note.$id}
          note={note}
        />
      ))}
      <Controls/>
    </div>
  )
}

export default NotesPage;

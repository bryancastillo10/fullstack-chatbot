import { useEffect, useState } from "react";
import db from "@/data/database";

// import { mockData as notesData } from "@/data/mockData";
import NoteCard from "@/components/NoteCard";
import type { INotesData } from "@/data/interface";

const NotesPage = () => {
  const [notes, setNotes] = useState<INotesData[]>([]);

  const init = async () => {
      const res = await db.notes?.list() || [];
      setNotes(res);
  };

  useEffect(() => {
    init();
  }, []);


  return (
    <div>
      {notes.map((note) => (
        <NoteCard
          key={note.$id}
          note={note}
          setNotes={setNotes}
        />
      ))}
    </div>
  )
}

export default NotesPage;

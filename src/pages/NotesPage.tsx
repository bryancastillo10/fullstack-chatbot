import { mockData as notesData } from "@/api/mockData";
import NoteCard from "@/components/NoteCard";

const NotesPage = () => {
  return (
    <div>
      {notesData.map((note) => (
        <NoteCard
          key={note.$id}
          note={note}
        />
      ))}
    </div>
  )
}

export default NotesPage;

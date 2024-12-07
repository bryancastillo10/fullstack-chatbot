import { useContext } from "react";
import { NoteContext } from "@/context/NoteContext";
import type { INotesData } from "@/data/interface";
import db from "@/data/database";

interface ColorShadeProps<T>{
    color: {
        id: T;
        colorHeader: T;
        colorBody: T;
        colorText:T
    }
}

const ColorShade = ({ color }: ColorShadeProps<string>) => {
    const { notes, setNotes, selectedNote } = useContext(NoteContext);

    const changeColor = async (selectedNote: INotesData | null) => {
        if (!selectedNote) {
            alert("Select a note first before changing colors");
            return;
          }
      
          try {
            const currentNoteIdx = notes.findIndex((note) => note.$id === selectedNote.$id);
      
            if (currentNoteIdx === -1) {
              console.error("Selected note not found in notes array");
              return;
            }
      
            const updatedNote = {
              ...notes[currentNoteIdx],
            colors: JSON.stringify(color),
            } as INotesData;
      
            const newNotes = [...notes];
              newNotes[currentNoteIdx]  = updatedNote;
              setNotes(newNotes);
      
            // Update note in database
            await db?.notes!.update(selectedNote.$id, {
              colors: JSON.stringify(color),
            });
          } catch (error) {
            console.error("Error updating note color:", error);
          }
        };

    return (
        <div
            onClick={()=>changeColor(selectedNote)}
            className="color"
            style={{ backgroundColor: color.colorHeader }}
        ></div>
    );
}

export default ColorShade

import { useContext } from "react";
import { NoteContext } from "@/context/NoteContext";
import TrashIcon from "@/assets/icons/TrashIcon";
import db from "@/data/database";


interface DeleteButtonProps {
  noteId: string;
  collectionName: string; 
}

const DeleteButton = ({ noteId, collectionName }: DeleteButtonProps) => {
  const { setNotes } = useContext(NoteContext);
  
  const handleDelete = async () => {
      try {
        const collection = db[collectionName];
        if (!collection) {
        throw new Error(`Collection "${collectionName}" is not defined in the database configuration`);
        }
      await collection.delete(noteId);

      setNotes((prev) => prev.filter((note) => note.$id !== noteId));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div onClick={handleDelete} className="cursor-pointer">
      <TrashIcon />
    </div>
  );
};

export default DeleteButton;

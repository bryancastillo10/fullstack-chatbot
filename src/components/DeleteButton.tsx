import React from "react";
import TrashIcon from "@/assets/icons/TrashIcon";
import db from "@/data/database";
import type { INotesData } from "@/data/interface";

interface DeleteButtonProps {
  noteId: string;
  setNotes: React.Dispatch<React.SetStateAction<INotesData[]>>; 
  collectionName: string; 
}

const DeleteButton = ({ noteId, setNotes, collectionName  }: DeleteButtonProps) => {
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

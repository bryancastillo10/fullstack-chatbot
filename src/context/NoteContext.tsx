import React, { createContext, useState, useEffect } from "react";
import db from "@/data/database";
import Spinner from "@/assets/icons/Spinner";

import type { INotesData } from "@/data/interface";

interface INoteState<T>  {
    notes: T;
    setNotes: React.Dispatch<React.SetStateAction<T>>
}

export const NoteContext = createContext<INoteState<INotesData[]>>({
    notes: [],
    setNotes: () => {}
});

const NotesProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [notes, setNotes] = useState<INotesData[]>([]);

    const init = async () => {
        const res = await db.notes?.list() || [];
        setNotes(res);
        setIsLoading(false);
    };
  
    useEffect(() => {
        init();
    }, []);
  
  
    const contextData = { notes, setNotes };

    return (
        <NoteContext.Provider value={contextData}>
            {isLoading ? (
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                    }}
                >
                    <Spinner
                        color = "#f4f3f2"
                        size="100" />
                </div>
            ) : (
                children
            )}
        </NoteContext.Provider>
    )

};

export default NotesProvider;
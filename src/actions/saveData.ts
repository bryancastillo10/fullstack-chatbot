import db from "@/data/database";
import type { INotesData } from "@/data/interface";

const saveData = async (
    key: keyof Omit<INotesData, '$id' | '$createdAt' | '$updatedAt' | '$permissions'>, 
    value: any, 
    noteId: string,
    setSaving: React.Dispatch<React.SetStateAction<boolean>>
) => {
    const payload = { [key]: JSON.stringify(value) };
    try {
        await db.notes?.update(noteId, payload);
        return true; 
    } catch (error) {
        console.error("Save failed:", error);
        return false; 
    } finally {
        setSaving(false);
    }
};


export default saveData;
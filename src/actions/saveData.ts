import db from "@/data/database";
import type { INotesData } from "@/data/interface";

const saveData = async (
    key: keyof Omit<INotesData, '$id' | '$createdAt' | '$updatedAt' | '$permissions'>, 
    value: any, 
    noteId: string,
    setSaving: React.Dispatch<React.SetStateAction<boolean>>
) => {
    const payload = { [key]: JSON.stringify(value) }
    try {
        await db.notes?.update(noteId, payload);
    } catch (error) {
        console.error(error);
    }
    setSaving(false);
};

export default saveData;
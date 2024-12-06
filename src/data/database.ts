import { databases, collections } from "@/lib/appwriteconfig";
import { ID, type Models } from "appwrite";
import type { INotesRepository, INotesData } from "./interface";

const db: Record<string, INotesRepository>  = {};

collections.forEach((coll) => {
    db[coll.name] = {
        create: async (payload: Omit<INotesData, keyof Models.Document>, id = ID.unique()) => {
            const result = await databases.createDocument<INotesData & Models.Document>(
                coll.dbId,
                coll.id,
                id,
                payload
            );
            return result;
        },
        get: async (id:string) => {
            return await databases.getDocument<INotesData & Models.Document>(
                coll.dbId,
                coll.id,
                id
            );
        },
        update: async (id: string, payload: Partial<Omit<INotesData, '$id'>>) => {
            return await databases.updateDocument<INotesData & Models.Document>(
                coll.dbId,
                coll.id,
                id,
                payload
            );
        },
        delete: async (id: string): Promise<void> => {
            await databases.deleteDocument(
                coll.dbId,
                coll.id,
                id
            )
        },
        list: async (queries?:string[]) => {
            const result = await databases.listDocuments<INotesData & Models.Document>(
                coll.dbId,
                coll.id,
                queries
            );
            return result.documents;
        }
    }
});

export default db;
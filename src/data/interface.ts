import type { Models } from "appwrite";
export interface ColorTypes<T>  {
    id: T;
    colorHeader: T;
    colorBody: T;
    colorText: T;
}

export interface CoordTypes  {
    x: number;
    y: number;
}


export interface INotesData extends Models.Document {
    body: string;
    colors: string;
    position: string;
}

export interface INotesRepository {
    create: (payload: Omit<INotesData, keyof Models.Document>, id?: string) => Promise<INotesData>;
    get: (id: string) => Promise<INotesData>;
    update: (id: string, payload: Partial<Omit<INotesData, keyof Models.Document>>) => Promise<INotesData>;
    delete: (id: string) => Promise<void>;
    list: (queries?: string[]) => Promise<INotesData[]>;
}
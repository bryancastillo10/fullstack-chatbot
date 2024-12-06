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


export interface INotesData {
    $id: number | string;
    body: string;
    colors: string;
    position: string;
}

export interface INotesRepository {
    create: (payload: INotesData, id?: string) => Promise<INotesData>;
    get: (id: string) => Promise<INotesData>;
    update: (id: string, payload: Partial<INotesData>) => Promise<INotesData>;
    delete: (id: string) => Promise<void>;
    list: (queries: string[]) => Promise<INotesData[]>;
}
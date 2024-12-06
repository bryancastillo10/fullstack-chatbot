
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


export interface INotesData{
    $id: number;
    body: string;
    colors: string;
    position: string;
}
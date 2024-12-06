import type { INotesData } from "@/api/interface";
import TrashIcon from "@/assets/icons/TrashIcon";

interface NoteCardProps{
    note: INotesData;
}

const NoteCard = ({ note }: NoteCardProps) => {
    let position = JSON.parse(note.position);

    const colors = JSON.parse(note.body);

    const body = JSON.parse(note.body);
 
    return (
        <div
            className="card"
            style={{ backgroundColor: colors.colorBody}}
        >
            <div
                className="card-header"
                style={{backgroundColor: colors.colorHeader}}
            >
                <TrashIcon/>
            </div>
            <div className="card-body">
                <textarea
                    style={{ color: colors.colorText }}
                    defaultValue={body}
                />    
           </div>
        </div>
    );
};

export default NoteCard;

interface NoteCardProps{
    note: any;
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
            {body}
        </div>
    );
};

export default NoteCard;
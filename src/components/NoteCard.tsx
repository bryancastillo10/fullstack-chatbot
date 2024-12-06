import React, { useRef, useEffect } from "react";
import type { INotesData } from "@/api/interface";

import TrashIcon from "@/assets/icons/TrashIcon";

interface NoteCardProps{
    note: INotesData;
}

const NoteCard = ({ note }: NoteCardProps) => {
    // Position Reference
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    let position = JSON.parse(note.position);

    const autoGrow = (textAreaRef: React.MutableRefObject<HTMLTextAreaElement | null>) => {
        const { current } = textAreaRef;
        if (current) {
            current.style.height = "auto";
            current.style.height = current.scrollHeight + "px";
        }
    }

    useEffect(() => {
        autoGrow(textAreaRef);
    },[])

    // Styling
    const colors = JSON.parse(note.body);

    const body = JSON.parse(note.body);
 
    return (
        <div
            className="card"
            style={{
                backgroundColor: colors.colorBody,
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <div
                className="card-header"
                style={{backgroundColor: colors.colorHeader}}
            >
                <TrashIcon/>
            </div>
            <div className="card-body">
                <textarea
                    ref={textAreaRef}
                    style={{ color: colors.colorText }}
                    onInput={() => autoGrow(textAreaRef)}
                    defaultValue={body}
                />    
           </div>
        </div>
    );
};

export default NoteCard;
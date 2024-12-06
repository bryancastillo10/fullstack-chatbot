import React, { useState, useRef, useEffect } from "react";
import type { INotesData } from "@/api/interface";

import TrashIcon from "@/assets/icons/TrashIcon";
import { setNewOffset } from "@/utils/setNewOffset";
import { autoGrow } from "@/utils/autoGrow";

interface NoteCardProps{
    note: INotesData;
}

const NoteCard = ({ note }: NoteCardProps) => {
    // Position Reference
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const cardRef = useRef<HTMLDivElement|null>(null);
    const [position, setPosition] = useState(JSON.parse(note.position));
    
    useEffect(() => {
        autoGrow(textAreaRef);
    }, []);

    // Mouse Movement
    let mouseStartPos = { x: 0, y: 0 };

        // Mouse Down
    const mouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        mouseStartPos.x = e.clientX;
        mouseStartPos.y = e.clientY;

        document.addEventListener("mousemove", mouseMove);
        document.addEventListener("mouseup", mouseUp);
    };


    const mouseMove = (e: MouseEvent) => {
        // 1 to calculate the movement direction
        let mouseMoveDirection = {
            x: mouseStartPos.x - e.clientX,
            y: mouseStartPos.y - e.clientY
        };

        // 2 to update the starting position on the next move
        mouseStartPos.x = e.clientX;
        mouseStartPos.y = e.clientY;

        mouseStartPos.x = e.clientX;
        mouseStartPos.y = e.clientY;

        const newPosition = setNewOffset({
            card: cardRef,
            mouseMoveDir: mouseMoveDirection
        });
        setPosition(newPosition);

        // 3 to update the actual card in reference to the change in the position coords
        if (cardRef.current) {
            setPosition({
                x: cardRef.current.offsetLeft - mouseMoveDirection.x,
                y: cardRef.current.offsetTop - mouseMoveDirection.y
            });
        }
    };

        // Mouse Up
    const mouseUp = () => {
        document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouseup", mouseUp);
    };

    // Styling
    const colors = JSON.parse(note.body);

    const body = JSON.parse(note.body);
 
    return (
        <div
            className="card"
            ref={cardRef}
            style={{
                backgroundColor: colors.colorBody,
                position:"absolute",
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <div
                className="card-header"
                style={{ backgroundColor: colors.colorHeader }}
                onMouseDown={mouseDown}
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
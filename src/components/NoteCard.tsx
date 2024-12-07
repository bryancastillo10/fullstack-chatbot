import { useState, useRef, useEffect, useContext } from "react";
import { NoteContext } from "@/context/NoteContext";
import type { INotesData } from "@/data/interface";


import Spinner from "@/assets/icons/Spinner";

import { autoGrow, bodyParser, handleZIndex, setNewOffset } from "@/utils";
import saveData from "@/actions/saveData";
import DeleteButton from "@/components/DeleteButton";


interface NoteCardProps{
    note: INotesData;
}

const NoteCard = ({ note }: NoteCardProps) => {
    // NoteContext 
    const { setSelectedNote } = useContext(NoteContext);

    // Position Reference
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const cardRef = useRef<HTMLDivElement|null>(null);
    const [position, setPosition] = useState(JSON.parse(note.position));

    // Auto-saving Reference
    const [saving, setSaving] = useState<boolean>(false);
    const keyUpTimer = useRef<number | null>(null);

    useEffect(() => {
        autoGrow(textAreaRef);
        handleZIndex(cardRef);
    }, []);

    // Mouse Movement
    let mouseStartPos = { x: 0, y: 0 };

        // Mouse Down
    const mouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target instanceof HTMLElement && e.target.className === "card-header") {
            setSelectedNote(note);
            mouseStartPos.x = e.clientX;
            mouseStartPos.y = e.clientY;
    
            handleZIndex(cardRef);
    
            document.addEventListener("mousemove", mouseMove);
            document.addEventListener("mouseup", mouseUp);
        }
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

        const newPosition = setNewOffset({card: cardRef}); 
        saveData("position", newPosition, note.$id, setSaving);
    };

    // Handle Auto-saving of input data
    const handleKeyUp = () => {
        setSaving(true);

        if (keyUpTimer.current) {
            clearTimeout(keyUpTimer.current);
        }

        keyUpTimer.current = window.setTimeout(() => {
            saveData("body", textAreaRef?.current!.value, note.$id, setSaving);
        }, 2500);
    }

    // Styling
    const colors = JSON.parse(note.colors);

    const body = bodyParser(note.body);
 
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
                <DeleteButton
                    noteId={note.$id}
                    collectionName="notes"
                />    
                {saving && (
                    <div className="card-saving">
                        <span style={{ color: colors.colorText }}>Saving</span>
                        <Spinner/>
                    </div>
                )}
            </div>
            <div className="card-body">
                <textarea
                    ref={textAreaRef}
                    style={{ color: colors.colorText }}
                    onInput={() => autoGrow(textAreaRef)}
                    onFocus={() => {handleZIndex(cardRef); setSelectedNote(note);}}
                    onKeyUp={handleKeyUp}
                    defaultValue={body}
                />    
           </div>
        </div>
    );
};

export default NoteCard;
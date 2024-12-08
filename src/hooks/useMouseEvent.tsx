import { useState, useEffect, useRef, useContext } from "react";
import { NoteContext } from "@/context/NoteContext";
import type { INotesData } from "@/data/interface";

import { autoGrow, bodyParser, handleZIndex, setNewOffset } from "@/utils";
import saveData from "@/actions/saveData";

const useMouseEvent = ({ note }: { note: INotesData }) => {
    // NoteContext 
    const { setSelectedNote } = useContext(NoteContext);

    
    // References
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const cardRef = useRef<HTMLDivElement|null>(null);
    const [position, setPosition] = useState(JSON.parse(note.position));

    // Auto-save feature
    const [saving, setSaving] = useState<boolean>(false);
    const [savedSuccess, setSavedSuccess] = useState<boolean>(false);
    const keyUpTimer = useRef<number | null>(null);
    const savedSuccessTimer = useRef<number | null>(null);

    useEffect(() => {
        autoGrow(textAreaRef);
        handleZIndex(cardRef);
    }, []);

    // Drag and drop feature
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
        
            const newPosition = setNewOffset({ card: cardRef });
            setSaving(true);
            saveData("position", newPosition, note.$id, setSaving)
                .then((success) => {
                    if (success) {
                        setSavedSuccess(true);
                        if (savedSuccessTimer.current) {
                            clearTimeout(savedSuccessTimer.current);
                        }
                        savedSuccessTimer.current = window.setTimeout(() => {
                            setSavedSuccess(false);
                        }, 1000); 
                    }
                });
        };

    // Handle Auto-saving of input data
    const handleKeyUp = () => {
        setSaving(true);
    
        if (keyUpTimer.current) {
            clearTimeout(keyUpTimer.current);
        }
    
        keyUpTimer.current = window.setTimeout(() => {
            saveData("body", textAreaRef?.current!.value, note.$id, setSaving)
                .then((success) => {
                    if (success) {
                        setSavedSuccess(true);
                        if (savedSuccessTimer.current) {
                            clearTimeout(savedSuccessTimer.current);
                        }
                        savedSuccessTimer.current = window.setTimeout(() => {
                            setSavedSuccess(false);
                        }, 1000);
                    }
                });
        }, 2000);
    }
    
    // Styles
    const colors = JSON.parse(note.colors);

    const body = bodyParser(note.body);

    return {
        textAreaRef,
        cardRef,
        position,
        saving,
        savedSuccess,
        colors,
        body,
        savedSuccessTimer,
        setPosition,
        setSaving,
        setSavedSuccess,
        setSelectedNote,
        mouseDown,
        handleKeyUp
    }
}

export default useMouseEvent;

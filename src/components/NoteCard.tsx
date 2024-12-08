import type { INotesData } from "@/data/interface";


import Spinner from "@/assets/icons/Spinner";
import CircleCheck from "@/assets/icons/CircleCheck";

import { autoGrow, handleZIndex, setNewOffset } from "@/utils";
import saveData from "@/actions/saveData";

import DeleteButton from "@/components/DeleteButton";
import useMouseEvent from "@/hooks/useMouseEvent";
import type React from "react";


interface NoteCardProps{
    note: INotesData;
}

const NoteCard = ({ note }: NoteCardProps) => {
    const {
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
    } = useMouseEvent({ note });

    let touchStartPos = { x: 0, y: 0 };

    const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.target instanceof HTMLElement && e.target.className === "card-header") {
            setSelectedNote(note);

            const touch = e.touches[0];
            touchStartPos.x = touch?.clientX!;
            touchStartPos.y = touch?.clientY!;

            handleZIndex(cardRef);

            document.addEventListener("touchmove", touchMove);
            document.addEventListener("touchend", touchEnd);
        }
    };

    // Touch Move
    const touchMove = (e: TouchEvent) => {
        const touch = e.touches[0];
        const touchMoveDirection = {
            x: touchStartPos.x - touch?.clientX!,
            y: touchStartPos.y - touch?.clientY!,
        };
    
        touchStartPos.x = touch?.clientX!;
        touchStartPos.y = touch?.clientY!;
    
        const newPosition = setNewOffset({
            card: cardRef,
            mouseMoveDir: touchMoveDirection,
        });
        setPosition(newPosition);

        if (cardRef.current) {
            setPosition({
                x: cardRef.current.offsetLeft - touchMoveDirection.x,
                y: cardRef.current.offsetTop - touchMoveDirection.y,
            });
        }
    };

    // Touch End
    const touchEnd = () => {
        document.removeEventListener("touchmove", touchMove);
        document.removeEventListener("touchend", touchEnd);

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
                onTouchStart={touchStart}
            >
                <DeleteButton
                    noteId={note.$id}
                    collectionName="notes"
                />    
              {saving ? (
                    <div className="card-saving">
                        <span style={{ color: colors.colorText }}>Saving</span>
                        <Spinner />
                    </div>
                ) : savedSuccess ? (
                    <div className="card-saving">
                        <span style={{ color: colors.colorText }}>Saved</span>
                        <CircleCheck />
                    </div>
                ) : null}
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
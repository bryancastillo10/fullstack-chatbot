import { useEffect, useState } from 'react';
import X from "@/assets/icons/X";
import type { ToastProps } from "@/context/CustomToastProvider";

const Toast = ({ status, message, isVisible, onClose }: ToastProps) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setShow(true);
            }, 200);
            return () => clearTimeout(timer);
        } else {
            setShow(false);
        }
        return;
    }, [isVisible]);

    const getStatusClass = (status: string) => {
        switch (status) {
            case "success":
                return "toast-success";
            case "error":
                return "toast-error";
            default:
                return "toast-warning";
        }
    };

    return (
        <div 
            className={`toast ${getStatusClass(status)} ${show ? 'show' : ''}`}
            aria-live="polite"
            role="alert"
        >
            {message}
            <div  onClick={onClose} className="toast-close-icon"> 
                <X aria-label="close-btn"/>
            </div>
        </div>
    );
};

export default Toast;
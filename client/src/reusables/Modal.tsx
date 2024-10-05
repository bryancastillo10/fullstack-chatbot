import { useState, useEffect, useCallback, ReactNode } from "react";
import Button from "./Button";
import { X } from "@phosphor-icons/react";

interface ModalProps {
  openModal?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: ReactNode;
  footer?: ReactNode;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}
const Modal = ({
  openModal,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(openModal);

  useEffect(() => {
    setShowModal(openModal);
  }, [openModal]);

  // Closing the modal
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  // Primary Action
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  // Secondary Action
  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!openModal) {
    return null;
  }
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none fcous:outline-none backdrop-blur-sm ">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full md:h-auto">
        {/* Content */}
        <div
          className={` translate duration-300 h-full ${
            showModal
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <div className="relative h-full translate md:h-auto border-0 rounded-lg shadow-lg flex flex-col w-full bg-cream outline-none focus:outline-none">
            {/* Header */}
            <div className="relative flex flex-col items-center px-4 py-2 justify-center rounded-t">
              <button
                onClick={handleClose}
                className="p-1 hover:opacity-70 transition absolute top-3 rounded-full border border-black  right-6 hover:bg-rose-500 hover:text-primary hover:border-primary"
              >
                <X size={18} />
              </button>

              <div className="text-xl font-semibold font-comfortaa">
                {title}
              </div>
              <hr className="border border-black mt-4 w-full" />
            </div>
            {/* Body */}
            <div className="relative p-6 flex-auto">{body}</div>
            {/* Footer */}
            <div className="flex flex-col gap-2 p-6">
              <div className="flex flex-row items-center gap-4 w-full">
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    type="button"
                    variant="outline"
                    action={handleSecondaryAction}
                  >
                    {secondaryActionLabel}
                  </Button>
                )}
                <Button type="button" variant="primary" action={handleSubmit}>
                  {actionLabel}
                </Button>
              </div>
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

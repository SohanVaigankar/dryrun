import React from "react";
// components
import { Dialog, DialogContent, DialogTrigger } from "../dialog/Dialog";

interface ModalProps {
  isOpen: boolean;
  extraClassName?: string;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal(props: ModalProps) {
  const { extraClassName, children, isOpen, onClose } = props;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <button className="hidden"></button>
      </DialogTrigger>
      <DialogContent
        className={`sm:max-w-[768px] ${extraClassName ? extraClassName : ""}`}
      >
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;

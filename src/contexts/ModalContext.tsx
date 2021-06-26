import { ReactNode, useState, createContext } from 'react';

type ModalContextType = {
  openConfirmModal: () => void;
  openEndedRoomModal: () => void;
  closeConfirmModal: () => void;
  confirmModalIsOpen: boolean;
  setIsConfirm: (confirm: boolean) => void;
  confirm: boolean;
  handleSetQuestionAndRoom: (questionId: string, roomId: string) => void;
  questionId: string;
  roomId: string;
  isRoom: boolean;
  handleSetRoom: (roomId: string) => void;
};

export const ModalContext = createContext({} as ModalContextType);

type ModalContextProviderProps = {
  children: ReactNode;
};

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState(false);
  const [confirm, setIsConfirm] = useState(false);
  const [questionId, setQuestionId] = useState('');
  const [roomId, setRoomId] = useState('');
  const [isRoom, setIsRoom] = useState(false);

  function openConfirmModal() {
    setConfirmModalIsOpen(true);
    setIsRoom(false);
  }

  function openEndedRoomModal() {
    setConfirmModalIsOpen(true);
    setIsRoom(true);
  }

  function closeConfirmModal() {
    setConfirmModalIsOpen(false);
  }

  function handleSetQuestionAndRoom(questionId: string, roomId: string) {
    setQuestionId(questionId);
    setRoomId(roomId);
  }

  function handleSetRoom(roomId: string) {
    setRoomId(roomId);
  }

  return (
    <ModalContext.Provider
      value={{
        confirmModalIsOpen,
        closeConfirmModal,
        openConfirmModal,
        openEndedRoomModal,
        setIsConfirm,
        confirm,
        handleSetQuestionAndRoom,
        questionId,
        roomId,
        isRoom,
        handleSetRoom,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

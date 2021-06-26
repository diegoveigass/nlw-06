import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import { useModal } from '../../hooks/useModal';

import { database } from '../../services/firebase';

import { Button } from '../Button';

import './styles.scss';

Modal.setAppElement('#root');

export function ModalConfirm() {
  const { confirmModalIsOpen, closeConfirmModal, questionId, roomId, isRoom } =
    useModal();
  const history = useHistory();

  async function handleDeleteQuestion() {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });
    history.push('/');
  }

  return (
    <Modal
      isOpen={confirmModalIsOpen}
      onRequestClose={closeConfirmModal}
      contentLabel="Confirm Modal"
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <div className="modal-container">
        {isRoom ? (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.6599 18.3398L18.3399 29.6598"
              stroke="#E73F5D"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29.6599 29.6598L18.3399 18.3398"
              stroke="#E73F5D"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 42V42C14.058 42 6 33.942 6 24V24C6 14.058 14.058 6 24 6V6C33.942 6 42 14.058 42 24V24C42 33.942 33.942 42 24 42Z"
              stroke="#E73F5D"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 5.99988H5H21"
              stroke="#e73f5d"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z"
              stroke="#e73f5d"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}

        <h2>{isRoom ? 'Encerrar sala' : 'Excluir pergunta'}</h2>
        {isRoom ? (
          <p>Tem certeza que deseja encerrar esta sala?</p>
        ) : (
          <p>Tem certeza que deseja excluir esta pergunta?</p>
        )}
        <div>
          <Button
            className="button cancel"
            onClick={() => {
              closeConfirmModal();
            }}
          >
            Cancelar
          </Button>
          <Button
            className="button confirm"
            onClick={() => {
              closeConfirmModal();
              isRoom ? handleEndRoom() : handleDeleteQuestion();
            }}
          >
            Sim, {isRoom ? 'encerrar' : 'excluir'}
          </Button>
        </div>
      </div>
    </Modal>
  );
}

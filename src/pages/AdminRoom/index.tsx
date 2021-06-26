import { useParams } from 'react-router-dom';

// import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { useModal } from '../../hooks/useModal';

import { Question } from '../../components/Question';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';

import './styles.scss';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  // const { user } = useAuth();
  const params = useParams<RoomParams>();
  const {
    openConfirmModal,
    handleSetQuestionAndRoom,
    openEndedRoomModal,
    handleSetRoom,
  } = useModal();

  const roomId = params.id;

  const { title, questions } = useRoom(roomId);
  return (
    <div id="page-admin-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button
              isOutlined
              onClick={() => {
                handleSetRoom(roomId);
                openEndedRoomModal();
              }}
            >
              Encerrar Sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map(question => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
            >
              <button
                type="button"
                onClick={() => {
                  handleSetQuestionAndRoom(question.id, roomId);
                  openConfirmModal();
                }}
              >
                <img src={deleteImg} alt="Remover pergunta" />
              </button>
            </Question>
          ))}
        </div>
      </main>
    </div>
  );
}

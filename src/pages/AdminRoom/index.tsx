import { useHistory, useParams } from 'react-router-dom';

import { useRoom } from '../../hooks/useRoom';
import { useModal } from '../../hooks/useModal';

import { Question } from '../../components/Question';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import './styles.scss';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const {
    openConfirmModal,
    handleSetQuestionAndRoom,
    openEndedRoomModal,
    handleSetRoom,
  } = useModal();

  const roomId = params.id;

  const history = useHistory();

  async function handleCheckQuestionAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  function goToHomePage() {
    history.push('/');
  }

  const { title, questions } = useRoom(roomId);
  return (
    <div id="page-admin-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" onClick={goToHomePage} />
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
              isHighlighted={question.isHighlighted}
              isAnswered={question.isAnswered}
            >
              {!question.isAnswered && (
                <>
                  <button
                    type="button"
                    onClick={() => handleCheckQuestionAnswered(question.id)}
                  >
                    <img
                      src={checkImg}
                      alt="Marcar pergunta coimo respondida"
                    />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleHighlightQuestion(question.id)}
                  >
                    <img src={answerImg} alt="Dar destaque a pergunta" />
                  </button>
                </>
              )}
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

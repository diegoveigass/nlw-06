import { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { useRoom } from '../../hooks/useRoom';
import { useModal } from '../../hooks/useModal';
import { useTheme } from '../../hooks/useTheme';

import { Question } from '../../components/Question';
import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import { database } from '../../services/firebase';

import logoImg from '../../assets/images/logo.svg';
import logoDarkImg from '../../assets/images/logo-dark.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import { Container } from './styles';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const { colors } = useContext(ThemeContext);
  const params = useParams<RoomParams>();
  const {
    openConfirmModal,
    handleSetQuestionAndRoom,
    openEndedRoomModal,
    handleSetRoom,
  } = useModal();

  const roomId = params.id;

  const history = useHistory();

  const { theme, toggleTheme } = useTheme();

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
    <Container id="page-admin-room">
      <header>
        <div className="content">
          <img
            src={theme.title === 'dark' ? logoDarkImg : logoImg}
            alt="letmeask"
            onClick={goToHomePage}
          />
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
            <Switch
              className="switcher"
              checked={theme.title === 'dark'}
              onChange={toggleTheme}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor="#835AFD"
              offHandleColor={'#e9e9e9'}
              onColor={colors.inputBorder}
              onHandleColor={colors.text}
            />
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
    </Container>
  );
}

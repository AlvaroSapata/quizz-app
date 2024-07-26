//import { IconButton, Stack } from "@mui/material"
import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useQuestionsStore } from "./store/questions";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { type Question as QuestionType } from "./types";

const getBackgroundColor = (info: QuestionType, index: number) => {
    const { userSelectedAnswer, correctAnswer } = info
    // usuario no ha seleccionado nada todavía
    if (userSelectedAnswer == null) return 'transparent'
    // si ya selecciono pero la solución es incorrecta
    if (index !== correctAnswer && index !== userSelectedAnswer) return 'transparent'
    // si esta es la solución correcta
    if (index === correctAnswer) return 'green'
    // si esta es la selección del usuario pero no es correcta
    if (index === userSelectedAnswer) return 'red'
    // si no es ninguna de las anteriores
    return 'transparent'
  }

const Question = ({ info }: { info: QuestionType }) => {
    const selectAnswer = useQuestionsStore(state => state.selectAnswer)
  
    const createHandleClick = (answerIndex: number) => () => {
      selectAnswer(info.id, answerIndex)
    }

  return (
    <Card
      variant="outlined"
      sx={{ bgcolor: "#282C34", p: 2, textAlign: "left", marginTop: 4 }}
    >
      <Typography variant="h5">{info.question}</Typography>

      <SyntaxHighlighter language="javascript" style={atomOneDarkReasonable}>
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: '#3c4047' }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              disabled={info.userSelectedAnswer != null}
              onClick={createHandleClick(index)}
              sx={{
                backgroundColor: getBackgroundColor(info, index)
              }}
            >
              <ListItemText primary={answer} sx={{ textAlign: "center" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};
export const Game = () => {
  const questions = useQuestionsStore((state) => state.questions);
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion);

  const questionInfo = questions[currentQuestion];
  return (
    <>
      <Question info={questionInfo} />
    </>
  );
};
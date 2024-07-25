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

const Question = ({ info }: { info: QuestionType }) => {
  return (
    <Card
      variant="outlined"
      sx={{ bgcolor: "#282C34", p: 2, textAlign: "left" }}
    >
      <Typography variant="h5">{info.question}</Typography>

      <SyntaxHighlighter language="javascript" style={atomOneDarkReasonable}>
        {info.code}
      </SyntaxHighlighter>

      <List sx={{ bgcolor: "#3c4047" }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton >
              <ListItemText primary={answer} />
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

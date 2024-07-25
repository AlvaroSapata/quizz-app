import "./App.css";
import { Container, Stack, Typography } from "@mui/material";
import { JavaScriptLogo } from "./JavaScriptLogo";
import { Start } from "./Start";
import { useQuestionsStore } from "./store/questions";

function App() {
  const questions = useQuestionsStore((state) => state.questions);
  console.log(questions, questions.length);
  
  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <JavaScriptLogo />
          <Typography variant="h2">JavaScript Quizz</Typography>
        </Stack>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <h1>Juego</h1>}
      </Container>
    </main>
  );
}

export default App;

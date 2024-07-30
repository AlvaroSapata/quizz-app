import "./App.css";
import { Container, Stack, Typography } from "@mui/material";
import { JavaScriptLogo } from "./components/JavaScriptLogo";
import { Html5Logo } from "./components/Html5Logo";
import { Css3Logo } from "./components/Css3Logo";
import { PythonLogo } from "./components/PythonLogo";
import { ReactLogo } from "./components/ReactLogo";
import { Start } from "./components/Start";
import { useQuestionsStore } from "./store/questions";
import { Game } from "./components/Game";

// Define el tipo de las categorías
type Category = "javascript" | "html5" | "css3" | "python" | "react";

function App() {
  const questions = useQuestionsStore((state) => state.questions);
  const category = useQuestionsStore((state) => state.category);

  // Define un mapeo de categoría a logo usando el tipo Category
  const categoryLogos: Record<Category, JSX.Element> = {
    javascript: <JavaScriptLogo />,
    html5: <Html5Logo />,
    css3: <Css3Logo />,
    python: <PythonLogo />,
    react: <ReactLogo />,
  };

  // Selecciona el logo basado en la categoría actual
  const CurrentLogo = categoryLogos[category as Category] || <JavaScriptLogo />;

  return (
    <main>
      <Container maxWidth="sm">
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          {CurrentLogo}
          <Typography variant="h2">{category.charAt(0).toUpperCase() + category.slice(1)} Quiz</Typography>
        </Stack>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
    </main>
  );
}

export default App;

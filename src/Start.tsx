import { Button, Stack, Typography } from '@mui/material';
import { useQuestionsStore } from './store/questions';
import CategorySelector from './CategorySelector';

export const Start = () => {
  const fetchQuestions = useQuestionsStore((state) => state.fetchQuestions);

  const handleStartClick = () => {
    fetchQuestions(10); // Ajusta el límite según tus necesidades
  };

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h4">Select a Category to Start</Typography>
      <CategorySelector />
      <Button variant="contained" color="primary" onClick={handleStartClick}>
        Start Quiz
      </Button>
    </Stack>
  );
};

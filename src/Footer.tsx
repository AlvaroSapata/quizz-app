// import { Button } from '@mui/material'
// import { useQuestionsData } from './hooks/useQuestionsData'
// import { useQuestionsStore } from './store/questions'

// export const Footer = () => {
//   const { correct, incorrect, unanswered } = useQuestionsData()
//   const reset = useQuestionsStore(state => state.reset)

//   return (
//     <footer style={{ marginTop: '16px' }}>
//       <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</strong>
//       <div style={{ marginTop: '16px' }}>
//         <Button onClick={() => reset()}>
//           Resetear juego
//         </Button>
//       </div>
//     </footer>
//   )
// }

import { useQuestionsStore } from "./store/questions";
export const Footer = () => {
  const questions = useQuestionsStore((state) => state.questions);

  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  questions.forEach((question) => {
    const { userSelectedAnswer, correctAnswer } = question;
    if (userSelectedAnswer === undefined) unanswered++;
    else if (userSelectedAnswer === correctAnswer) correct++;
    else incorrect++;
  });

  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered} sin responder`}</strong>
    </footer>
  );
};

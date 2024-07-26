import { create } from "zustand";
import { type Question } from "../types";

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
}

export const useQuestionsStore = create<State>((set, get) => {
  return {
    questions: [],
    currentQuestion: 0, // posicion array Questions

    fetchQuestions: async (limit: number) => {
      const res = await fetch("http://localhost:5174/data.json");
      const json = await res.json();

      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);
      set({ questions });
    },
    
    selectAnswer: (questionId: number, answerIndex: number) => {
      const {questions} = get();
      // Usar el structuredClone para clonar el objeto
      const newQuestions = structuredClone(questions);
      // Encontrar el indice de la pregunta
      const questionIndex = newQuestions.findIndex((q) => q.id === questionId);
      // Obtener la informacion de la pregunta
      const questionInfo = newQuestions[questionIndex];
      // Verificar si la respuesta es correcta
      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;
      // Actualizar la informacion en la copia de la pregunta
      newQuestions[questionIndex] = {
        ...questionInfo,
        userSelectedAnswer: answerIndex,
        isCorrectUserAnswer,
      };
      // Actualizar el estado
      set({ questions: newQuestions });
    },
  };
});

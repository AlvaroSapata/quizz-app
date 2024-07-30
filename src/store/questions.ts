import { create } from "zustand";
import { type Question } from "../types/types";
import confetti from "canvas-confetti";
import { persist } from "zustand/middleware";

interface State {
  questions: Question[];
  currentQuestion: number;
  category: string;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  goNextQuestion: () => void;
  goPrevQuestion: () => void;
  reset: () => void;
  setCategory: (category: string) => void;
}

export const useQuestionsStore = create<State>()(
  persist(
    (set, get) => {
      return {
        questions: [],
        currentQuestion: 0,
        category: "javascript", // Categoría predeterminada

        fetchQuestions: async (limit: number) => {
          const { category } = get();
          try {
            const res = await fetch(`/${category}.json`); // Ruta basada en la categoría
            if (!res.ok) {
              throw new Error(`Failed to fetch questions: ${res.statusText}`);
            }
            const json = await res.json();
            const questions = json
              .sort(() => Math.random() - 0.5)
              .slice(0, limit);
            set({ questions });
          } catch (error) {
            console.error("Error fetching questions:", error);
          }
        },

        selectAnswer: (questionId: number, answerIndex: number) => {
          const { questions } = get();
          const newQuestions = structuredClone(questions);
          const questionIndex = newQuestions.findIndex(
            (q) => q.id === questionId
          );
          const questionInfo = newQuestions[questionIndex];
          const isCorrectUserAnswer =
            questionInfo.correctAnswer === answerIndex;
          if (isCorrectUserAnswer) confetti();
          newQuestions[questionIndex] = {
            ...questionInfo,
            userSelectedAnswer: answerIndex,
            isCorrectUserAnswer,
          };
          set({ questions: newQuestions });
        },

        goNextQuestion: () => {
          const { currentQuestion, questions } = get();
          const nextQuestion = currentQuestion + 1;

          if (nextQuestion < questions.length) {
            set({ currentQuestion: nextQuestion });
          }
        },

        goPrevQuestion: () => {
          const { currentQuestion } = get();
          const prevQuestion = currentQuestion - 1;

          if (prevQuestion >= 0) {
            set({ currentQuestion: prevQuestion });
          }
        },

        reset: () => {
          set({ questions: [], currentQuestion: 0 });
        },

        setCategory: (category: string) => {
          set({ category });
        },
      };
    },
    {
      name: "questions",
    }
  )
);

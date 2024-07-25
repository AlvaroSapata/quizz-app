import { create } from "zustand";
import { type Question } from "../types";

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
}

export const useQuestionsStore = create<State>((set,get) => {
  return {
    questions: [],
    currentQuestion: 0, // posicion array Questions

    fetchQuestions: async (limit: number) => {
      const res = await fetch('http://localhost:5174/data.json');
      const json = await res.json();

      const questions = json.sort(() => Math.random() - 0.5).slice(0, limit);
      set({ questions });
    },
  };
});

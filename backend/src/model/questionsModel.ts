import questions from '../db/questions.json' with { type: "json" };

export interface Question {
  id: number;
  materia: string;
  pergunta: string;
  respostas: {
    correta: string;
    incorretas: string[];
  };
}

interface QuestionsType {
  [key: string]  : Question[]
}

export const getAllQuestions = (): QuestionsType => {
  if (!questions) {
    throw new Error('Failed to import questions data.');
  }
  return questions;
}


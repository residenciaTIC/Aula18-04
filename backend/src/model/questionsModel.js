import questions from '../db/questions.json' with { type: "json" };
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const QUESTION_FILE_PATH = path.resolve(__dirname, '../db/questions.json');

export const getAllQuestions = () => {
  const rawData = readFileSync(QUESTION_FILE_PATH, 'utf-8');
  const json = JSON.parse(rawData);

  console.log(json.questions);
  if (!Array.isArray(json.questions)) {
    throw new Error('Conteúdo do arquivo JSON não é um array');
  }
  return json.questions;
};

export const addQuestion = (newQuestion) => {
  try {
    const questions = getAllQuestions();
    const updatedQuestions = [...questions, newQuestion];
    writeFileSync(QUESTION_FILE_PATH, JSON.stringify({ questions: updatedQuestions }, null, 2), 'utf-8');
  } catch (error) {
    console.error('Erro ao adicionar pergunta:', error);
    throw error;
  }
};


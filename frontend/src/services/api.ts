import axios, { AxiosResponse } from 'axios';
import { Question } from '../types/interfaces';

const fetchQuestions = async (): Promise<Question[] | null> => {
  try {
    const response: AxiosResponse<Question[]> = await axios.get('http://localhost:3001/questoes');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar perguntas:', error);
    return null;
  }
};

export const postQuestion = async (newQuestion: { pergunta: string; materia: string }): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:3001/questoes/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newQuestion),
    });
    if (!response.ok) {
      throw new Error('Erro ao adicionar pergunta');
    }
  } catch (error) {
    console.error('Erro ao adicionar pergunta:', error);
    throw error;
  }
};

export default fetchQuestions;


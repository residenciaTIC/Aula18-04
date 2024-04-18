import { addQuestion } from '../model/questionsModel.js';
import { getAllQuestions } from '../model/questionsModel.js';

export const getQuestions = (_, res) => {
  try {
    const questions = getAllQuestions();
    res.status(200).json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred fetching questions.' });
  }
};

export const createQuestion = (req, res) => {
  try {
    const newQuestion = req.body;
    addQuestion(newQuestion);
    res.status(201).json({ message: 'Pergunta adicionada com sucesso' });
  } catch (error) {
    console.error('Erro ao adicionar pergunta:', error);
    res.status(500).json({ message: 'Erro ao adicionar pergunta' });
  }
};
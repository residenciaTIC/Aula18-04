import { Request, Response } from 'express';
// import { getAllQuestions } from '../model/questionsModel.ts';

export const getQuestions = (req: Request, res: Response) => {
  try {
    const questions = 'teste';
    res.status(200).json(questions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred fetching questions.' });
  }
};
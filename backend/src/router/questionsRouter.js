import express from 'express'
import { getQuestions } from '../controller/questionsController.js'
import { createQuestion } from '../controller/questionsController.js'


export const questionsRouter = express.Router()


questionsRouter
  .get('/', getQuestions)
  .post('/create', createQuestion)


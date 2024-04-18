import express from 'express'
import { getQuestions } from '../controller/questionsController.js'


const questionsRouter = express.Router()

console.log(getQuestions);


questionsRouter
  .get('/', getQuestions)

  export default questionsRouter

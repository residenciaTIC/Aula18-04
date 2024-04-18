 export interface QuestionType {
  id: number;
  materia: string;
  pergunta: string;
  respostas: {
    correta: string;
    incorretas: string[];
  };
}

export interface Question {
  [key: string]: QuestionType[]
}
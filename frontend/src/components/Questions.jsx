import { useEffect, useState } from 'react';
import fetchQuestions from '../services/api';
import { Link } from 'react-router-dom';

  export const Questions = () => {
    const [questions, setQuestions] = useState([]);
    const [visibleAnswerId, setVisibleAnswerId] = useState(null);

    useEffect(() => {
      const getQuestions = async () => {
        const fetchedQuestions = await fetchQuestions();
        if (fetchedQuestions) {
                
          setQuestions(fetchedQuestions);
        }
      };
      getQuestions();

    }, []);

    const toggleVisibleAnswer = (id) => {
      if (visibleAnswerId === id) {
        setVisibleAnswerId(null);
      } 
      return setVisibleAnswerId(id);
    };

  return (
    <div>
      <h1>Perguntas</h1>
      <ul>
        {questions
          ? questions.map((question) => (
            <li className="flex flex-col mb-4" key={question.id+'b'}>
              <span className="mb-2" key={question.id+'q'}>
                <strong>{question.materia}</strong>: {question.pergunta}
              </span>
              <span className="mb-2" key={question.id+'a'} onClick={() => toggleVisibleAnswer(question.id)}>
              Resposta correta: {visibleAnswerId === question.id ? question.resposta : 'Clique para ver'}
              </span>
            </li>
          ))
          : <p>Sem perguntas</p>
        }
      </ul>
      <Link to="/add">
        <button className="mb-4">Adicionar Nova Pergunta</button>
      </Link>
    </div>
  );
};

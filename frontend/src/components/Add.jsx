import { useState } from 'react';
import { postQuestion } from '../services/api';
import { Link } from 'react-router-dom';

export const Add = () => {
  const [novaPergunta, setNovaPergunta] = useState('');
  const [novaMateria, setNovaMateria] = useState('Biologia');
  const [novaResposta, setNovaResposta] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postQuestion({ materia: novaMateria, pergunta: novaPergunta, resposta: novaResposta });
      alert('Pergunta adicionada com sucesso!');
      setNovaPergunta('');
      setNovaMateria('Biologia');
      setNovaMateria('');
    } catch (error) {
      console.error('Erro ao adicionar pergunta:', error);
      alert('Erro ao adicionar pergunta');
    }
  };

  return (
    <div>
      <Link to="/">
        <button className="mb-4">Voltar</button>
      </Link>
      <h2>Adicionar nova Pergunta</h2>
      <form onSubmit={handleSubmit}>
        <select value={novaMateria} onChange={(e) => setNovaMateria(e.target.value)}>
          <option value="Biologia">Biologia</option>
          <option value="Química">Química</option>
          <option value="Física">Física</option>
        </select>
        <input type="text" value={novaPergunta} onChange={(e) => setNovaPergunta(e.target.value)} />
        <input type="text" value={novaResposta} onChange={(e) => setNovaResposta(e.target.value)} />
        <button type="submit">Adicionar Pergunta</button>
      </form>
    </div>
  );
};


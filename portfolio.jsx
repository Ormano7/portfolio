import { useState } from "react";

const projetos = [
  {
    titulo: 'Site candidata',
    descricao: 'Um site simples para uma candidata feito com HTML, CSS',
    link: 'https://site-ana-paula-gamma.vercel.app/'
  },
  {
    titulo: 'Gestão escolar',
    descricao: 'Aplicação para gestão escolar.',
    link: 'https://gestao-escolar-omega.vercel.app/'
  },
  {
    titulo: 'Portfólio',
    descricao: 'Site de portfólio pessoal com HTML, CSS e JavaScript.',
    link: 'https://github.com'
  }
];

function SecaoProjetos() {
  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="grade">
        {projetos.map((projeto, index) => (
          <article key={index} className="card">
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link}>Ver no GitHub</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function FormContato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [feedback, setFeedback] = useState('');
  const [sucesso, setSucesso] = useState(false);

  function handleSubmit(evento) {
    evento.preventDefault();

    if (nome === '' || email === '' || mensagem === '') {
      setSucesso(false);
      setFeedback('Por favor, preencha todos os campos.');
    } else {
      setSucesso(true);
      setFeedback('Mensagem enviada com sucesso!');
      setNome('');
      setEmail('');
      setMensagem('');
    }
  }

  return (
    <section id="contato">
      <h2>Contato</h2>

      <form onSubmit={handleSubmit}>

        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          id="mensagem"
          rows="5"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />

        <button type="submit">Enviar</button>

      </form>

      {feedback && (
        <p className={sucesso ? 'feedback-sucesso' : 'feedback-erro'}>
          {feedback}
        </p>
      )}

    </section>
  );
}

export default function App() {
  return (
    <div>

      <header>
        <h1>Paulo Ormano</h1>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <section id="sobre">
        <h2>Sobre Mim</h2>
        <img src="foto.jpg" alt="Foto de Paulo Ormano" />
        <p>Sou desenvolvedor em formação, apaixonado por tecnologia e programação. Estou aprendendo HTML, CSS e JavaScript para criar projetos incríveis.</p>
      </section>

      <SecaoProjetos />

      <FormContato />

      <footer>
        <p>2026 - Desenvolvido por Paulo Ormano</p>
      </footer>

    </div>
  );
}

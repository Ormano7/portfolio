const projetos = [
  {
    titulo: 'Calculadora',
    descricao: 'Uma calculadora simples feita com HTML, CSS e JavaScript.',
    link: 'https://github.com'
  },
  {
    titulo: 'Lista de Tarefas',
    descricao: 'Aplicação para adicionar e remover tarefas do dia a dia.',
    link: 'https://github.com'
  },
  {
    titulo: 'Portfólio',
    descricao: 'Site de portfólio pessoal com HTML, CSS e JavaScript.',
    link: 'https://github.com'
  }
];

const container = document.getElementById('container-projetos');

projetos.forEach(projeto => {
  container.innerHTML += `
    <article>
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a href="${projeto.link}">Ver no GitHub</a>
    </article>
  `;
});

const form = document.querySelector('#form-contato');
const feedback = document.getElementById('mensagem-feedback');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if (nome === '' || email === '' || mensagem === '') {
    feedback.style.color = 'red';
    feedback.textContent = 'Por favor, preencha todos os campos.';
  } else {
    feedback.style.color = 'green';
    feedback.textContent = 'Mensagem enviada com sucesso!';
    form.reset();
  }
});

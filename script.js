const projetos = [
  {
  titulo: 'Site candidata',
    descricao: 'Um site simples para uma candidata feito com HTML, CSS',
    link: 'https://site-ana-paula-gamma.vercel.app/'
  },
  {
    titulo: 'Gestão escolar',
    descricao: 'Aplicação para gestão escolar.',
    link: 'https://site-ana-paula-gamma.vercel.app/'
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

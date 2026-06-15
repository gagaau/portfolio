import "./index.css";

import githubFinderImage from "./imagens/githubfinder.png";
import multiStepImage from "./imagens/multistep.png";
import taskFlowImage from "./imagens/taskflow.png";
import gameShelfImage from "./imagens/gameshelf.png";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  deployUrl: string;
  imageUrl: string;
};

const projects: Project[] = [
  {
    name: "GitHub Finder",
    description:
      "Aplicação para buscar perfis do GitHub e exibir dados do usuário e repositórios.",
    technologies: ["React", "TypeScript", "CSS", "GitHub API"],
    githubUrl: "https://github.com/gagaau/github-finder",
    deployUrl: "https://github-finder-chi-hazel.vercel.app/",
    imageUrl: githubFinderImage,
  },
  {
    name: "Multi-step Profile",
    description:
      "Formulário multi-etapas com validação simples, revisão final, tema claro/escuro e localStorage.",
    technologies: ["React", "TypeScript", "CSS", "localStorage"],
    githubUrl: "https://github.com/gagaau/multi-step-profile",
    deployUrl: "https://multi-step-profile-seven.vercel.app/",
    imageUrl: multiStepImage,
  },
  {
    name: "TaskFlow",
    description:
      "Gerenciador de tarefas com CRUD, filtros, ordenação, dashboard e localStorage.",
    technologies: ["React", "TypeScript", "CSS", "localStorage"],
    githubUrl: "https://github.com/gagaau/taskflow",
    deployUrl: "https://taskflow-fawn-eight.vercel.app/",
    imageUrl: taskFlowImage,
  },
  {
    name: "GameShelf",
    description:
      "Aplicação para buscar jogos, ver detalhes, avaliar, comentar e salvar status na biblioteca.",
    technologies: ["React", "TypeScript", "CSS", "RAWG API"],
    githubUrl: "https://github.com/gagaau/gameshelf",
    deployUrl: "https://gameshelf-7bssg59qo-gagaaus-projects.vercel.app/",
    imageUrl: gameShelfImage,
  },
];

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="intro">Olá, eu sou José</p>
        <h1>Desenvolvedor Front-end em formação</h1>
        <p className="hero-text">
          Estou estudando desenvolvimento front-end com foco em React,
          TypeScript, JavaScript, HTML e CSS.
        </p>

        <div className="hero-links">
          <a href="https://github.com/gagaau" target="_blank">
            GitHub
          </a>
          <a href="mailto:galterwhite@gmail.com">Contato</a>
        </div>
      </section>

      <section className="section">
        <h2>Sobre mim</h2>
        <p>
          Estou criando projetos práticos para desenvolver minha base em
          front-end e me preparar para oportunidades futuras.
        </p>
      </section>

      <section className="section">
        <h2>Tecnologias</h2>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
      </section>

      <section className="section">
        <h2>Projetos</h2>

        <div className="projects">
          {projects.map((project) => {
            return (
              <article className="project-card" key={project.name}>
                <img
                  className="project-image"
                  src={project.imageUrl}
                  alt={`Imagem do projeto ${project.name}`}
                />

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => {
                    return <span key={technology}>{technology}</span>;
                  })}
                </div>

                <div className="project-links">
                  <a href={project.githubUrl} target="_blank">
                    Repositório
                  </a>
                  <a href={project.deployUrl} target="_blank">
                    Ver projeto
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
import Link from "next/link";

const COURSES_DATA = [
  {
    id: 1,
    title: "Tráfego Pago",
    description: "Campanhas digitais e análise de resultados voltadas para projetos educativos.",
    icon: "📣",
    bg: "#FDE68A",
    progress: "65%",
    badge: { text: "Disponível", type: "active" },
  },
  {
    id: 2,
    title: "Informática Básica",
    description: "Ferramentas essenciais para a rotina escolar: Office, navegação e gestão de arquivos.",
    icon: "💻",
    bg: "#A7F3D0",
    progress: "0%",
    badge: { text: "Novo", type: "new" },
  },
  {
    id: 3,
    title: "Informática Avançada",
    description: "Produtividade, automação e recursos digitais para professores e gestores.",
    icon: "⚙️",
    bg: "#BAE6FD",
    progress: "0%",
    badge: { text: "Em breve", type: "locked" },
  },
  {
    id: 4,
    title: "Marketing Digital",
    description: "Comunicação estratégica para escolas, projetos e ações de captação.",
    icon: "📱",
    bg: "#FCA5A5",
    progress: "0%",
    badge: { text: "Em breve", type: "locked" },
    isLocked: true,
  },
];

const ADVANTAGES_DATA = [
  {
    icon: "🎓",
    title: "Acesso a cursos e ferramentas",
    desc: "Conteúdos e assinaturas digitais para alunos e professores em um único lugar.",
  },
  {
    icon: "📅",
    title: "Planos mensais e anuais",
    desc: "Escolha entre flexibilidade ou economia com o melhor custo-benefício.",
  },
  {
    icon: "💰",
    title: "Economia para escolas",
    desc: "Melhore o investimento em aprendizagem com preços competitivos e planos claros.",
  },
  {
    icon: "🧑‍🏫",
    title: "Ambiente separado para papéis",
    desc: "Acesso dedicado para alunos e professores, com fluxos claros de uso.",
  },
  {
    icon: "🚀",
    title: "Desenvolvimento digital",
    desc: "Aprimore habilidades digitais com ferramentas criativas e cursos práticos.",
  },
  {
    icon: "🗂️",
    title: "Organização centralizada",
    desc: "Tudo gerenciado em uma plataforma única: planos, acessos e controle pedagógico.",
  },
];

export default function Home() {
  return (
    <div className="page-root">
      {/* Toggle sem JS */}
      <input id="bt-menu-toggle" type="checkbox" className="bt-menu-toggle" />

      {/* Header */}
      <header className="bt-header">
        <a href="#inicio" className="bt-logo">
          <span className="bt-logo-icon">🧠</span>
          <span className="bt-logo-text">
            Brain<span className="bt-logo-accent">Tech</span>
          </span>
        </a>

        {/* Botão hambúrguer (label) */}
        <label htmlFor="bt-menu-toggle" className="bt-hamburger" aria-label="Menu">
          <span className="bt-hamburger-line"></span>
        </label>
      </header>

      {/* Painel do menu */}
      {/* Painel do menu */}
      <div className="bt-menu-panel" id="menuHamburguer">
        <div className="bt-menu-content">
          <a className="bt-menu-link" href="#inicio">
            Início
          </a>

          <a className="bt-menu-link" href="#precos">
            Planos e Preços
          </a>

          <a className="bt-menu-link" href="#como-funciona">
            Como funciona
          </a>

          <Link href="/login" className="bt-menu-login">
            Login
          </Link>
        </div>
      </div>
      
      {/* Backdrop (clicar fora fecha) */}
      <label htmlFor="bt-menu-toggle" className="bt-menu-backdrop" aria-label="Fechar menu"></label>

      {/* HERO */}
      <section id="inicio" className="hero-section">
        <div className="hero-blob" style={{ width: "180px", height: "180px", top: "-40px", left: "-40px", animationDelay: "0s" }} />
        <div className="hero-blob" style={{ width: "120px", height: "120px", top: "60px", right: "10%", animationDelay: "1.5s" }} />
        <div className="hero-blob" style={{ width: "80px", height: "80px", bottom: "20px", left: "20%", animationDelay: "3s" }} />
        <div className="hero-blob" style={{ width: "200px", height: "200px", bottom: "-60px", right: "-50px", animationDelay: "0.8s" }} />
        <div className="hero-blob" style={{ width: "60px", height: "60px", top: "40%", left: "5%", animationDelay: "2s" }} />

        <div className="hero-content">
          <span className="hero-badge">Brain Tech: tecnologia, educação e desenvolvimento em um só lugar.</span>

          <h1 className="hero-title">
            A plataforma educacional digital para escolas, alunos e professores
          </h1>

          <p className="hero-description">
            A Brain Tech reúne cursos, ferramentas e assinaturas em um ambiente único para aprendizagem,
            organização e evolução pedagógica.
          </p>

          <div className="hero-button-group">
            <a href="#precos" className="hero-button-cta">
              Ver planos
            </a>
            <a href="#como-funciona" className="pricing-button-secondary">
              Como funciona
            </a>
            <a href="/login" className="hero-button-secondary">
              Acessar plataforma
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Soluções digitais</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5k+</div>
              <div className="stat-label">Alunos atendidos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfação</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">+100</div>
              <div className="stat-label">Escolas conectadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="cursos" className="courses-section">
        <h2 className="section-title">Portfólio de soluções Brain Tech</h2>
        <p className="section-subtitle">
          Cursos e recursos alinhados ao desenvolvimento digital da escola e à capacitação dos professores.
        </p>

        <div className="courses-wrapper">
          {COURSES_DATA.map((course, index) => (
            <div key={course.id} className="course-item-group">
              <div
                className="course-card"
                style={{
                  backgroundColor: course.bg,
                  opacity: course.isLocked ? 0.6 : 1,
                  filter: course.isLocked ? "grayscale(0.4)" : "none",
                }}
              >
                <div className="course-icon">{course.icon}</div>

                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>

                  <div className="course-progress">
                    <div className="course-progress-bar" style={{ width: course.progress }} />
                  </div>
                </div>

                <span className={`course-badge ${course.badge.type}`}>{course.badge.text}</span>
              </div>

              {index < COURSES_DATA.length - 1 && <div className="course-divider"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* ADVANTAGES */}
      <section id="como-funciona" className="advantages-section">
        <div className="section-headline">
          <h2 className="section-title">A Brain Tech em ação</h2>
          <p className="section-subtitle">
            Uma plataforma pensada para tornar a escola mais organizada, moderna e conectada.
          </p>
        </div>

        <div className="advantages-carousel-wrapper">
          <a href="#advantage-last" className="carousel-button carousel-button-left" aria-label="Voltar">
            ‹
          </a>

          <div className="advantages-carousel">
            {ADVANTAGES_DATA.map((adv, index) => (
              <div
                key={adv.title}
                id={
                  index === 0
                    ? "advantage-first"
                    : index === ADVANTAGES_DATA.length - 1
                      ? "advantage-last"
                      : undefined
                }
                className="advantage-card carousel-card"
              >
                <span className="advantage-icon">{adv.icon}</span>
                <h3 className="advantage-title">{adv.title}</h3>
                <p className="advantage-description">{adv.desc}</p>
              </div>
            ))}
          </div>

          <a href="#advantage-first" className="carousel-button carousel-button-right" aria-label="Avançar">
            ›
          </a>
        </div>

      </section>{/* CTA */}
      <section id="precos" className="cta-section">
        <h2 className="cta-title">Conheça nossos planos e escolha o melhor para sua escola</h2>
        <p className="cta-description">
          Planos mensais e anuais com foco em economia, acesso contínuo e controle pedagógico.
        </p>
        <a href="/precos" className="cta-button">
          Ver planos disponíveis
        </a>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>🧠 BrainTech Academy</h3>
            <p>
              Soluções digitais e educação integrada para escolas, professores e alunos.
              Organize turmas, cursos e assinaturas em um único ambiente.
            </p>
          </div>

          <div className="footer-column">
            <h4>Recursos</h4>
            <a href="#precos" className="footer-link">Planos e Preços</a>
            <a href="#como-funciona" className="footer-link">Como Funciona</a>
            <a href="#cursos" className="footer-link">Cursos</a>
          </div>

          <div className="footer-column">
            <h4>Empresa</h4>
            <a href="#" className="footer-link">Sobre nós</a>
            <a href="#" className="footer-link">Contato</a>
            <a href="#" className="footer-link">Política de Privacidade</a>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} BrainTech Academy · Todos os direitos reservados
        </div>
      </footer>
    </div >
  );
}
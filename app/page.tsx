const COURSES_DATA = [
  {
    id: 1,
    title: "Tráfego Pago",
    description: "Meta Ads, Google Ads e estratégias de performance",
    icon: "📣",
    bg: "#FDE68A",
    progress: "65%",
    badge: { text: "Iniciar", type: "active" },
  },
  {
    id: 2,
    title: "Informática Básica",
    description: "Windows, Office, internet e produtividade digital",
    icon: "💻",
    bg: "#A7F3D0",
    progress: "0%",
    badge: { text: "Novo", type: "new" },
  },
  {
    id: 3,
    title: "Informática Avançada",
    description: "Automação, IA no trabalho e ferramentas avançadas",
    icon: "⚙️",
    bg: "#BAE6FD",
    progress: "0%",
    badge: { text: "🔒 Bloqueado", type: "locked" },
  },
  {
    id: 4,
    title: "Marketing Digital",
    description: "Social media, copywriting e estratégia de conteúdo",
    icon: "📱",
    bg: "#FCA5A5",
    progress: "0%",
    badge: { text: "🔒 Bloqueado", type: "locked" },
    isLocked: true,
  },
];

const ADVANTAGES_DATA = [
  {
    icon: "🎮",
    title: "Método Gamificado",
    desc: "XP, conquistas e rankings que tornam estudar viciante",
  },
  {
    icon: "⚡",
    title: "100% Prático",
    desc: "Projetos reais desde a primeira aula. Zero teoria inútil.",
  },
  {
    icon: "🤝",
    title: "Comunidade Ativa",
    desc: "Mais de 5.000 alunos trocando experiências diariamente",
  },
  {
    icon: "📱",
    title: "Aprenda em qualquer lugar",
    desc: "App mobile para estudar no ônibus, intervalo ou sofá",
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
      <div className="bt-menu-panel" id="menuHamburguer">
        <nav className="bt-menu-content" aria-label="Menu principal">
          <a className="bt-menu-link" href="#cursos">
            Cursos
          </a>

          <a className="bt-menu-link" href="#como-funciona">
            Como funciona
          </a>

          <a className="bt-menu-link" href="#precos">
            Preços
          </a>

          <button type="button" className="bt-menu-login">
            Entrar
          </button>
        </nav>
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
          <span className="hero-badge">🚀 Mais de 5.000 alunos ativos</span>

          <h1 className="hero-title">
            Aprenda habilidades digitais de um{" "}
            <span className="hero-title-highlight">jeito novo</span>
          </h1>

          <p className="hero-description">
            Uma jornada gamificada que transforma o aprendizado em aventura.
            Desbloqueie fases, conquiste XP e evolua na carreira digital.
          </p>

          <button className="hero-button-cta" type="button">
            🎮 Começar minha jornada grátis
          </button>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <div className="stat-label">Cursos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5k+</div>
              <div className="stat-label">Alunos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfação</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Suporte</div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="cursos" className="courses-section">
        <h2 className="section-title">🗺️ Sua Trilha de Aprendizagem</h2>
        <p className="section-subtitle">
          Desbloqueie fases conforme você avança. Cada curso é uma nova conquista!
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
        <h2 className="section-title">✨ Por que a BrainTech?</h2>
        <p className="section-subtitle">Uma metodologia que torna o aprendizado irresistível</p>

        <div className="advantages-grid">
          {ADVANTAGES_DATA.map((adv) => (
            <div key={adv.title} className="advantage-card">
              <span className="advantage-icon">{adv.icon}</span>
              <h3 className="advantage-title">{adv.title}</h3>
              <p className="advantage-description">{adv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="precos" className="cta-section">
        <h2 className="cta-title">
          Pronto para desbloquear sua
          <br />
          primeira fase? 🧠
        </h2>
        <p className="cta-description">Comece gratuitamente. Sem cartão de crédito. Sem enrolação.</p>
        <button className="cta-button" type="button">
          🎯 Quero começar agora
        </button>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>🧠 BrainTech Academy</h3>
            <p>
              O playground de aprendizado digital que transforma habilidades em carreira.
              Aprenda, evolua e conquiste.
            </p>
          </div>

          <div className="footer-column">
            <h4>Cursos</h4>
            <a href="#cursos" className="footer-link">Tráfego Pago</a>
            <a href="#cursos" className="footer-link">Edição de Vídeo</a>
            <a href="#cursos" className="footer-link">Informática Básica</a>
            <a href="#cursos" className="footer-link">Marketing Digital</a>
          </div>

          <div className="footer-column">
            <h4>Empresa</h4>
            <a href="#" className="footer-link">Sobre nós</a>
            <a href="#" className="footer-link">Blog</a>
            <a href="#" className="footer-link">Contato</a>
            <a href="#" className="footer-link">Política de Privacidade</a>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} BrainTech Academy · Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}
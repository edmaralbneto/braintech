export default function Home() {
  return (
    <div className="page-root">
      {/* HEADER */}
      <header className="site-header">
        <a href="#" className="logo">
          <div className="logo-icon">🧠</div>
          <div className="logo-text">
            Brain<span className="logo-text-accent">Tech</span>
          </div>
        </a>

        <nav className="header-nav">
          <a href="#" className="header-link">Cursos</a>
          <a href="#" className="header-link">Como funciona</a>
          <a href="#" className="header-link">Preços</a>
        </nav>

        <button className="header-button">Entrar</button>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        {/* Background Blobs */}
        <div
          className="hero-blob"
          style={{
            width: "180px",
            height: "180px",
            top: "-40px",
            left: "-40px",
            animationDelay: "0s",
          }}
        ></div>
        <div
          className="hero-blob"
          style={{
            width: "120px",
            height: "120px",
            top: "60px",
            right: "10%",
            animationDelay: "1.5s",
          }}
        ></div>
        <div
          className="hero-blob"
          style={{
            width: "80px",
            height: "80px",
            bottom: "20px",
            left: "20%",
            animationDelay: "3s",
          }}
        ></div>
        <div
          className="hero-blob"
          style={{
            width: "200px",
            height: "200px",
            bottom: "-60px",
            right: "-50px",
            animationDelay: "0.8s",
          }}
        ></div>
        <div
          className="hero-blob"
          style={{
            width: "60px",
            height: "60px",
            top: "40%",
            left: "5%",
            animationDelay: "2s",
          }}
        ></div>

        {/* Content */}
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

          <button className="hero-button">
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

      {/* COURSES SECTION */}
      <section className="courses-section">
        <h2 className="section-title">🗺️ Sua Trilha de Aprendizagem</h2>
        <p className="section-subtitle">
          Desbloqueie fases conforme você avança. Cada curso é uma nova conquista!
        </p>

        <div className="courses-wrapper">
          {/* Course 1 */}
          <div className="course-card" style={{ background: "#FDE68A" }}>
            <div className="course-icon">📣</div>
            <div className="course-content">
              <h3 className="course-title">Tráfego Pago</h3>
              <p className="course-description">
                Meta Ads, Google Ads e estratégias de performance
              </p>
              <div className="course-progress">
                <div className="course-progress-bar" style={{ width: "65%" }}></div>
              </div>
            </div>
            <span className="course-badge active">Iniciar</span>
          </div>

          <div className="course-divider"></div>
          <div className="course-divider"></div>

          {/* Course 2 */}
          <div className="course-card" style={{ background: "#A7F3D0" }}>
            <div className="course-icon">💻</div>
            <div className="course-content">
              <h3 className="course-title">Informática Básica</h3>
              <p className="course-description">
                Windows, Office, internet e produtividade digital
              </p>
              <div className="course-progress">
                <div className="course-progress-bar" style={{ width: "0%" }}></div>
              </div>
            </div>
            <span className="course-badge new">Novo</span>
          </div>

          <div className="course-divider"></div>
          <div className="course-divider"></div>

          {/* Course 3 */}
          <div className="course-card" style={{ background: "#BAE6FD" }}>
            <div className="course-icon">⚙️</div>
            <div className="course-content">
              <h3 className="course-title">Informática Avançada</h3>
              <p className="course-description">
                Automação, IA no trabalho e ferramentas avançadas
              </p>
              <div className="course-progress">
                <div className="course-progress-bar" style={{ width: "0%" }}></div>
              </div>
            </div>
            <span className="course-badge locked">🔒 Bloqueado</span>
          </div>

          <div className="course-divider"></div>

          {/* Course 4 */}
          <div
            className="course-card"
            style={{ background: "#FCA5A5", opacity: 0.6, filter: "grayscale(0.4)" }}
          >
            <div className="course-icon">📱</div>
            <div className="course-content">
              <h3 className="course-title">Marketing Digital</h3>
              <p className="course-description">
                Social media, copywriting e estratégia de conteúdo
              </p>
              <div className="course-progress">
                <div className="course-progress-bar" style={{ width: "0%" }}></div>
              </div>
            </div>
            <span className="course-badge locked">🔒 Bloqueado</span>
          </div>
        </div>
      </section>

      {/* ADVANTAGES SECTION */}
      <section className="advantages-section">
        <h2 className="section-title">✨ Por que a BrainTech?</h2>
        <p className="section-subtitle">
          Uma metodologia que torna o aprendizado irresistível
        </p>

        <div className="advantages-grid">
          <div className="advantage-card">
            <span className="advantage-icon">🎮</span>
            <h3 className="advantage-title">Método Gamificado</h3>
            <p className="advantage-description">
              XP, conquistas e rankings que tornam estudar viciante
            </p>
          </div>

          <div className="advantage-card">
            <span className="advantage-icon">⚡</span>
            <h3 className="advantage-title">100% Prático</h3>
            <p className="advantage-description">
              Projetos reais desde a primeira aula. Zero teoria inútil.
            </p>
          </div>

          <div className="advantage-card">
            <span className="advantage-icon">🤝</span>
            <h3 className="advantage-title">Comunidade Ativa</h3>
            <p className="advantage-description">
              Mais de 5.000 alunos trocando experiências diariamente
            </p>
          </div>

          <div className="advantage-card">
            <span className="advantage-icon">📱</span>
            <h3 className="advantage-title">Aprenda em qualquer lugar</h3>
            <p className="advantage-description">
              App mobile para estudar no ônibus, intervalo ou sofá
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2 className="cta-title">
          Pronto para desbloquear sua
          <br />
          primeira fase? 🧠
        </h2>
        <p className="cta-description">
          Comece gratuitamente. Sem cartão de crédito. Sem enrolação.
        </p>
        <button className="cta-button">🎯 Quero começar agora</button>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>🧠 BrainTech Academy</h3>
            <p>
              O playground de aprendizado digital que transforma habilidades em
              carreira. Aprenda, evolua e conquiste.
            </p>
          </div>

          <div className="footer-column">
            <h4>Cursos</h4>
            <a href="#" className="footer-link">
              Tráfego Pago
            </a>
            <a href="#" className="footer-link">
              Edição de Vídeo
            </a>
            <a href="#" className="footer-link">
              Informática Básica
            </a>
            <a href="#" className="footer-link">
              Marketing Digital
            </a>
          </div>

          <div className="footer-column">
            <h4>Empresa</h4>
            <a href="#" className="footer-link">
              Sobre nós
            </a>
            <a href="#" className="footer-link">
              Blog
            </a>
            <a href="#" className="footer-link">
              Contato
            </a>
            <a href="#" className="footer-link">
              Política de Privacidade
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 BrainTech Academy · Feito com 🧠 e 💜 · Todos os direitos
          reservados
        </div>
      </footer>
    </div>
  );
}

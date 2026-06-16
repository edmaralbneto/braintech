import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="page-root">
      <header className="bt-header">
        <Link href="/" className="bt-logo">
          <span className="bt-logo-icon">🧠</span>
          <span className="bt-logo-text">
            Brain<span className="bt-logo-accent">Tech</span>
          </span>
        </Link>

        <Link href="/precos" className="bt-menu-login">
          Voltar aos preços
        </Link>
      </header>

      <main className="login-page">
        <section className="login-panel">
          <div className="login-card">
            <div className="login-tabs">
              <input id="tab-aluno" name="login-tab" type="radio" defaultChecked className="login-radio" />
              <input id="tab-professor" name="login-tab" type="radio" className="login-radio" />

              <div className="login-tabs-header">
                <label htmlFor="tab-aluno" className="login-tab-label">Login do Aluno</label>
                <label htmlFor="tab-professor" className="login-tab-label">Login do Professor</label>
              </div>

              <div className="login-tabs-body">
                <div className="login-tab-panel aluno-panel">
                  <span className="hero-badge">Acesso do aluno</span>
                  <h1 className="hero-title">Entre como aluno</h1>
                  <p className="hero-description">
                    Use seu e-mail ou matrícula e senha para acessar cursos, tutoriais e ferramentas.
                  </p>

                  <form className="login-form">
                    <label className="login-label" htmlFor="aluno-email">
                      E-mail ou matrícula
                    </label>
                    <input
                      id="aluno-email"
                      name="aluno-email"
                      type="text"
                      className="login-input"
                      placeholder="seu@email.com ou matrícula"
                    />

                    <label className="login-label" htmlFor="aluno-password">
                      Senha
                    </label>
                    <input
                      id="aluno-password"
                      name="aluno-password"
                      type="password"
                      className="login-input"
                      placeholder="••••••••"
                    />

                    <button className="hero-button-cta" type="submit">
                      Entrar
                    </button>
                    <a href="#" className="login-forgot">
                      Esqueci minha senha
                    </a>
                  </form>
                </div>

                <div className="login-tab-panel professor-panel">
                  <span className="hero-badge">Acesso do professor</span>
                  <h1 className="hero-title">Entre como professor</h1>
                  <p className="hero-description">
                    Use seu e-mail institucional para acessar turmas, conteúdos e recursos didáticos.
                  </p>

                  <form className="login-form">
                    <label className="login-label" htmlFor="professor-email">
                      E-mail institucional
                    </label>
                    <input
                      id="professor-email"
                      name="professor-email"
                      type="email"
                      className="login-input"
                      placeholder="seu@email.institucional"
                    />

                    <label className="login-label" htmlFor="professor-password">
                      Senha
                    </label>
                    <input
                      id="professor-password"
                      name="professor-password"
                      type="password"
                      className="login-input"
                      placeholder="••••••••"
                    />

                    <button className="hero-button-cta" type="submit">
                      Entrar
                    </button>
                    <a href="#" className="login-forgot">
                      Esqueci minha senha
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

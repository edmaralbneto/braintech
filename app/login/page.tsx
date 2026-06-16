import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="page-root">
      <header className="bt-auth-header">
        <Link href="/" className="bt-auth-logo" aria-label="Voltar para a página inicial">
          <span className="bt-auth-logo-icon">🧠</span>
          <span className="bt-auth-logo-text">
            Brain<span>Tech</span>
          </span>
        </Link>

        <Link href="/precos" className="bt-auth-header-button">
          Voltar aos preços
        </Link>
      </header>

      <main className="bt-auth-page">
        <section className="bt-auth-card" aria-labelledby="login-title">
          <div className="bt-auth-tabs">
            <input
              id="tab-aluno"
              name="login-tab"
              type="radio"
              defaultChecked
              className="bt-auth-radio"
            />

            <input
              id="tab-professor"
              name="login-tab"
              type="radio"
              className="bt-auth-radio"
            />

            <div className="bt-auth-tabs-header">
              <label htmlFor="tab-aluno" className="bt-auth-tab-label">
                Login do Aluno
              </label>

              <label htmlFor="tab-professor" className="bt-auth-tab-label">
                Login do Professor
              </label>
            </div>

            <div className="bt-auth-tabs-body">
              <div className="bt-auth-panel bt-auth-panel-aluno">
                <span className="bt-auth-badge">Acesso do aluno</span>

                <h1 id="login-title" className="bt-auth-title">
                  Entre como aluno
                </h1>

                <p className="bt-auth-description">
                  Use seu e-mail ou matrícula e senha para acessar cursos, tutoriais e ferramentas.
                </p>

                <form className="bt-auth-form">
                  <div className="bt-auth-field">
                    <label className="bt-auth-label" htmlFor="aluno-email">
                      E-mail ou matrícula
                    </label>

                    <input
                      id="aluno-email"
                      name="aluno-email"
                      type="text"
                      className="bt-auth-input"
                      placeholder="seu@email.com ou matrícula"
                      autoComplete="username"
                    />
                  </div>

                  <div className="bt-auth-field">
                    <label className="bt-auth-label" htmlFor="aluno-password">
                      Senha
                    </label>

                    <input
                      id="aluno-password"
                      name="aluno-password"
                      type="password"
                      className="bt-auth-input"
                      placeholder="••••••••"
                      autoComplete="current-password"
                    />
                  </div>

                  <button className="bt-auth-submit" type="submit">
                    Entrar
                  </button>

                  <a href="#" className="bt-auth-forgot">
                    Esqueci minha senha
                  </a>
                </form>
              </div>

              <div className="bt-auth-panel bt-auth-panel-professor">
                <span className="bt-auth-badge">Acesso do professor</span>

                <h1 className="bt-auth-title">
                  Entre como professor
                </h1>

                <p className="bt-auth-description">
                  Use seu e-mail institucional para acessar turmas, conteúdos e recursos didáticos.
                </p>

                <form className="bt-auth-form">
                  <div className="bt-auth-field">
                    <label className="bt-auth-label" htmlFor="professor-email">
                      E-mail institucional
                    </label>

                    <input
                      id="professor-email"
                      name="professor-email"
                      type="email"
                      className="bt-auth-input"
                      placeholder="seu@email.institucional"
                      autoComplete="email"
                    />
                  </div>

                  <div className="bt-auth-field">
                    <label className="bt-auth-label" htmlFor="professor-password">
                      Senha
                    </label>

                    <input
                      id="professor-password"
                      name="professor-password"
                      type="password"
                      className="bt-auth-input"
                      placeholder="••••••••"
                      autoComplete="current-password"
                    />
                  </div>

                  <button className="bt-auth-submit" type="submit">
                    Entrar
                  </button>

                  <a href="#" className="bt-auth-forgot">
                    Esqueci minha senha
                  </a>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
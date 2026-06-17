import Link from "next/link";

const PRICING_PLANS = [
  {
    name: "PicsArt",
    monthly: "R$ 14,90/mês",
    annual: "R$ 97,00",
    equivalent: "R$ 8,08/mês",
    savings: "ganha quase 5 meses grátis",
  },
  {
    name: "Canva",
    monthly: "R$ 24,90/mês",
    annual: "R$ 167,00",
    equivalent: "R$ 13,91/mês",
    savings: "ganha 5 meses grátis",
  },
  {
    name: "CapCut",
    monthly: "R$ 34,90/mês",
    annual: "R$ 247,00",
    equivalent: "R$ 20,58/mês",
    savings: "ganha 5 meses grátis",
  },
  {
    name: "Adobe Lightroom",
    monthly: "R$ 39,90/mês",
    annual: "R$ 297,00",
    equivalent: "R$ 24,75/mês",
    savings: "ganha 4 meses grátis",
  },
  {
    name: "Adobe Photoshop",
    monthly: "R$ 49,90/mês",
    annual: "R$ 397,00",
    equivalent: "R$ 33,08/mês",
    savings: "ganha 4 meses grátis",
  },
  {
    name: "Adobe Premiere",
    monthly: "R$ 59,90/mês",
    annual: "R$ 447,00",
    equivalent: "R$ 37,25/mês",
    savings: "ganha 4 meses grátis",
  },
];

const HOW_IT_WORKS = [
  "O aluno ou professor acessa a plataforma Brain Tech.",
  "Escolhe o tipo de acesso: aluno ou professor.",
  "Seleciona o plano mais adequado, mensal ou anual.",
  "Após a contratação ou liberação pela escola, o acesso é ativado.",
  "O usuário utiliza os recursos, cursos e ferramentas disponíveis para aprendizagem e desenvolvimento.",
];

export default function PricingPage() {
  return (
    <div className="page-root bt-pricing-page pricing-page">
      {/* Toggle sem JS */}
      <input id="bt-menu-toggle" type="checkbox" className="bt-menu-toggle" />

      {/* Header */}
      <header className="bt-header">
        <Link href="/" className="bt-logo" aria-label="Voltar para a página inicial">
          <span className="bt-logo-icon">🧠</span>
          <span className="bt-logo-text">
            Brain<span className="bt-logo-accent">Tech</span>
          </span>
        </Link>

        {/* Botão hambúrguer */}
        <label htmlFor="bt-menu-toggle" className="bt-hamburger" aria-label="Menu">
          <span className="bt-hamburger-line" />
        </label>
      </header>

      {/* Painel do menu */}
      <div className="bt-menu-panel" id="menuHamburguer">
        <div className="bt-menu-content">
          <a className="bt-menu-link" href="#inicio">
            Início
          </a>

          <a className="bt-menu-link" href="#planos">
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

      <main className="bt-pricing-main">
        <section id="inicio" className="bt-pricing-hero">
          <div className="bt-pricing-hero-copy">
            <span className="bt-pricing-badge">
              Economize mais escolhendo o plano anual.
            </span>

            <h1 className="bt-pricing-title">
              Escolha o melhor plano para sua jornada na Brain Tech
            </h1>

            <p className="bt-pricing-description">
              Compare valores mensais e anuais para escolher a opção mais econômica e
              apropriada ao perfil do aluno ou do professor. Brain Tech é tecnologia,
              educação e desenvolvimento em um só lugar.
            </p>

            <div className="bt-pricing-hero-actions">
              <a href="#planos" className="bt-pricing-button bt-pricing-button-primary">
                Ver Planos e Preços
              </a>

              <a href="#como-funciona" className="bt-pricing-button bt-pricing-button-secondary">
                Como Funciona
              </a>
            </div>
          </div>

          <div className="bt-pricing-hero-visual">
            <div className="bt-pricing-visual-card">
              <span className="bt-pricing-visual-tag">Melhor custo-benefício</span>

              <h2>Assinatura anual</h2>

              <p>
                Menor custo mensal equivalente e acesso contínuo a recursos e ferramentas.
              </p>
            </div>
          </div>
        </section>

        <section id="planos" className="bt-pricing-section">
          <div className="bt-pricing-section-headline">
            <p className="bt-pricing-eyebrow">Planos e Preços</p>

            <h2>Compare mensalidade e assinatura anual</h2>

            <p>
              Confira os valores por curso e escolha a melhor opção para sua escola ou jornada.
            </p>
          </div>

          <div className="bt-pricing-intro">
            <p>
              A Brain Tech apresenta dois formatos de contratação: mensal para máxima
              flexibilidade e anual para economia real. Os valores anuais já trazem o
              equivalente reduzido por mês.
            </p>
          </div>

          <div className="bt-pricing-cards-grid">
            {PRICING_PLANS.map((plan) => (
              <article key={plan.name} className="bt-pricing-card">
                <div className="bt-pricing-card-header">
                  <div>
                    <p className="bt-pricing-course-name">{plan.name}</p>
                    <p className="bt-pricing-course-tag">Melhor custo-benefício</p>
                  </div>

                  <span className="bt-pricing-course-highlight">Anual</span>
                </div>

                <div className="bt-pricing-values">
                  <div className="bt-pricing-price-row">
                    <span className="bt-pricing-label">Plano mensal</span>
                    <p className="bt-pricing-value">{plan.monthly}</p>
                  </div>

                  <div className="bt-pricing-price-row bt-pricing-price-row-annual">
                    <span className="bt-pricing-label">Plano anual</span>
                    <p className="bt-pricing-value">{plan.annual}</p>
                    <span className="bt-pricing-small">
                      equivalente a {plan.equivalent}
                    </span>
                  </div>
                </div>

                <p className="bt-pricing-savings">Economia real: {plan.savings}</p>

                <div className="bt-pricing-actions">
                  <Link href="/login" className="bt-pricing-button bt-pricing-button-tertiary">
                    Assinar Mensal
                  </Link>

                  <Link href="/login" className="bt-pricing-button bt-pricing-button-primary">
                    Assinar Anual
                  </Link>
                </div>

                <Link href="/login" className="bt-pricing-link-secondary">
                  Ver Melhor Opção
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="bt-pricing-section">
          <div className="bt-pricing-section-headline">
            <p className="bt-pricing-eyebrow">Varejo x Assinatura</p>

            <h2>Dois caminhos para aprender com Brain Tech</h2>
          </div>

          <div className="bt-pricing-compare-grid">
            <article className="bt-pricing-info-card">
              <span className="bt-pricing-info-label">Varejo / Mensal</span>

              <h3>Pagamento mês a mês</h3>

              <p>
                Ideal para quem quer flexibilidade sem vínculo anual. Pague apenas pelo mês
                usado e ajuste conforme o ritmo da escola.
              </p>
            </article>

            <article className="bt-pricing-info-card bt-pricing-info-card-highlighted">
              <span className="bt-pricing-info-label">Assinatura anual</span>

              <h3>Menor valor mensal equivalente</h3>

              <p>
                Perfeito para quem busca economia e acesso contínuo. Plano anual oferece o melhor
                custo-benefício para alunos e professores.
              </p>
            </article>
          </div>
        </section>

        <section id="como-funciona" className="bt-pricing-section">
          <div className="bt-pricing-section-headline">
            <p className="bt-pricing-eyebrow">Como Funciona</p>

            <h2>Entenda a plataforma Brain Tech</h2>

            <p>
              A Brain Tech organiza acessos, planos e recursos em um ambiente único para a escola.
              Alunos e professores escolhem ou recebem o plano ideal e avançam juntos na aprendizagem.
            </p>
          </div>

          <div className="bt-pricing-how-grid">
            {HOW_IT_WORKS.map((step, index) => (
              <article key={step} className="bt-pricing-how-card">
                <div className="bt-pricing-how-step">Passo {index + 1}</div>

                <p>{step}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="login-secao" className="bt-pricing-section">
          <div className="bt-pricing-section-headline">
            <p className="bt-pricing-eyebrow">Acesso separado</p>

            <h2>Login para aluno e professor</h2>

            <p>
              A Brain Tech oferece áreas dedicadas para alunos e professores acessarem seus planos,
              conteúdos e ferramentas com segurança.
            </p>
          </div>

          <div className="bt-pricing-access-grid">
            <article className="bt-pricing-access-card">
              <h3>Aluno</h3>

              <p>
                Entre com e-mail ou matrícula para acessar cursos, ferramentas criativas e recursos pedagógicos.
              </p>

              <Link href="/login" className="bt-pricing-button bt-pricing-button-primary">
                Entrar como aluno
              </Link>
            </article>

            <article className="bt-pricing-access-card">
              <h3>Professor</h3>

              <p>
                Use seu e-mail institucional para acompanhar turmas, organizar conteúdos e orientar alunos.
              </p>

              <Link href="/login" className="bt-pricing-button bt-pricing-button-primary">
                Entrar como professor
              </Link>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

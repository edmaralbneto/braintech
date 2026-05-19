export default function Home() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', background: '#EDE9FE', color: '#3B0764', overflowX: 'hidden', minHeight: '100vh' }}>
      {/* HEADER */}
      <header style={{ background: '#fff', borderBottom: '3px solid #DDD6FE', padding: '0 2rem', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 4px 0 #EDE9FE' }}>
        <a className="logo" href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #C4B5FD, #7C3AED)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', boxShadow: '0 4px 0 #5B21B6', transition: 'transform 0.15s' }}>
            🧠
          </div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#5B21B6', lineHeight: 1 }}>
            Brain<span style={{ color: '#F59E0B' }}>Tech</span>
          </div>
        </a>
        <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="#" style={{ textDecoration: 'none', fontWeight: 700, color: '#6D28D9', fontSize: '0.95rem', padding: '6px 14px', borderRadius: '9999px', transition: 'background 0.15s, transform 0.15s' }}>Cursos</a>
          <a href="#" style={{ textDecoration: 'none', fontWeight: 700, color: '#6D28D9', fontSize: '0.95rem', padding: '6px 14px', borderRadius: '9999px', transition: 'background 0.15s, transform 0.15s' }}>Como funciona</a>
          <a href="#" style={{ textDecoration: 'none', fontWeight: 700, color: '#6D28D9', fontSize: '0.95rem', padding: '6px 14px', borderRadius: '9999px', transition: 'background 0.15s, transform 0.15s' }}>Preços</a>
        </nav>
        <button style={{ background: '#FDE68A', color: '#78350F', border: 'none', padding: '10px 24px', borderRadius: '9999px', fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer', boxShadow: '0 4px 0 #F59E0B', transition: 'transform 0.1s, box-shadow 0.1s', fontFamily: 'var(--font-sans)' }}>Entrar</button>
      </header>

      {/* HERO */}
      <section style={{ background: '#7C3AED', padding: '5rem 2rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden', minHeight: '520px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', borderRadius: '50%', background: '#FDE68A', opacity: 0.25, animation: 'float 6s ease-in-out infinite', width: '180px', height: '180px', top: '-40px', left: '-40px', animationDelay: '0s' }}></div>
        <div style={{ position: 'absolute', borderRadius: '50%', background: '#FDE68A', opacity: 0.25, animation: 'float 6s ease-in-out infinite', width: '120px', height: '120px', top: '60px', right: '10%', animationDelay: '1.5s' }}></div>
        <div style={{ position: 'absolute', borderRadius: '50%', background: '#FDE68A', opacity: 0.25, animation: 'float 6s ease-in-out infinite', width: '80px', height: '80px', bottom: '20px', left: '20%', animationDelay: '3s' }}></div>
        <div style={{ position: 'absolute', borderRadius: '50%', background: '#FDE68A', opacity: 0.25, animation: 'float 6s ease-in-out infinite', width: '200px', height: '200px', bottom: '-60px', right: '-50px', animationDelay: '0.8s' }}></div>
        <div style={{ position: 'absolute', borderRadius: '50%', background: '#FDE68A', opacity: 0.25, animation: 'float 6s ease-in-out infinite', width: '60px', height: '60px', top: '40%', left: '5%', animationDelay: '2s' }}></div>

        <span style={{ background: '#FDE68A', color: '#78350F', padding: '6px 20px', borderRadius: '9999px', fontWeight: 800, fontSize: '0.85rem', display: 'inline-block', marginBottom: '1.5rem', position: 'relative', zIndex: 1, letterSpacing: '0.05em', textTransform: 'uppercase' }}>🚀 Mais de 5.000 alunos ativos</span>

        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FFFFFF', lineHeight: 1.15, maxWidth: '700px', position: 'relative', zIndex: 1, marginBottom: '1.25rem' }}>
          Aprenda habilidades digitais de um <span style={{ color: '#FDE68A' }}>jeito novo</span>
        </h1>

        <p style={{ color: '#DDD6FE', fontSize: '1.1rem', maxWidth: '480px', lineHeight: 1.7, position: 'relative', zIndex: 1, marginBottom: '2rem' }}>
          Uma jornada gamificada que transforma o aprendizado em aventura. Desbloqueie fases, conquiste XP e evolua na carreira digital.
        </p>

        <button style={{ background: '#FDE68A', color: '#78350F', border: 'none', padding: '16px 40px', borderRadius: '9999px', fontWeight: 900, fontSize: '1.15rem', cursor: 'pointer', boxShadow: '0 8px 0 #D97706', transition: 'transform 0.1s, box-shadow 0.1s', position: 'relative', zIndex: 1, fontFamily: 'var(--font-sans)', letterSpacing: '0.01em', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          🎮 Começar minha jornada grátis
        </button>

        <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', position: 'relative', zIndex: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#FDE68A' }}>12+</div>
            <div style={{ fontSize: '0.8rem', color: '#DDD6FE', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cursos</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#FDE68A' }}>5k+</div>
            <div style={{ fontSize: '0.8rem', color: '#DDD6FE', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Alunos</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#FDE68A' }}>98%</div>
            <div style={{ fontSize: '0.8rem', color: '#DDD6FE', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Satisfação</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#FDE68A' }}>24/7</div>
            <div style={{ fontSize: '0.8rem', color: '#DDD6FE', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Suporte</div>
          </div>
        </div>
      </section>

      {/* TRILHA DE CURSOS */}
      <section style={{ padding: '4rem 2rem', background: '#fff' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#5B21B6', textAlign: 'center', marginBottom: '0.5rem' }}>🗺️ Sua Trilha de Aprendizagem</h2>
        <p style={{ textAlign: 'center', color: '#7C3AED', fontSize: '1rem', marginBottom: '3rem', fontWeight: 600 }}>Desbloqueie fases conforme você avança. Cada curso é uma nova conquista!</p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0, maxWidth: '680px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#F5F3FF', border: '3px solid #DDD6FE', borderRadius: '32px', padding: '1.25rem 1.75rem', width: '100%', maxWidth: '520px', cursor: 'pointer', transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s', boxShadow: '0 8px 0 #C4B5FD', position: 'relative' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', flexShrink: 0, boxShadow: '0 4px 0 rgba(0,0,0,0.15)', background: '#FDE68A' }}>📣</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: '#3B0764', marginBottom: '4px' }}>Tráfego Pago</h3>
              <p style={{ fontSize: '0.85rem', color: '#7C3AED', fontWeight: 600 }}>Meta Ads, Google Ads e estratégias de performance</p>
              <div style={{ marginTop: '6px', background: '#DDD6FE', borderRadius: '99px', height: '8px', overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: '99px', background: 'linear-gradient(90deg, #7C3AED, #C4B5FD)', width: '65%' }}></div>
              </div>
            </div>
            <span style={{ padding: '5px 14px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0, background: '#FDE68A', color: '#78350F' }}>Iniciar</span>
          </div>

          <div style={{ width: '4px', height: '40px', background: 'repeating-linear-gradient(to bottom, #C4B5FD 0, #C4B5FD 8px, transparent 8px, transparent 16px)' }}></div>

          <div style={{ width: '4px', height: '40px', background: 'repeating-linear-gradient(to bottom, #C4B5FD 0, #C4B5FD 8px, transparent 8px, transparent 16px)' }}></div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#F5F3FF', border: '3px solid #DDD6FE', borderRadius: '32px', padding: '1.25rem 1.75rem', width: '100%', maxWidth: '520px', cursor: 'pointer', transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s', boxShadow: '0 8px 0 #C4B5FD', position: 'relative' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', flexShrink: 0, boxShadow: '0 4px 0 rgba(0,0,0,0.15)', background: '#A7F3D0' }}>💻</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: '#3B0764', marginBottom: '4px' }}>Informática Básica</h3>
              <p style={{ fontSize: '0.85rem', color: '#7C3AED', fontWeight: 600 }}>Windows, Office, internet e produtividade digital</p>
              <div style={{ marginTop: '6px', background: '#DDD6FE', borderRadius: '99px', height: '8px', overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: '99px', background: 'linear-gradient(90deg, #7C3AED, #C4B5FD)', width: '0%' }}></div>
              </div>
            </div>
            <span style={{ padding: '5px 14px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0, background: '#C4B5FD', color: '#3B0764' }}>Novo</span>
          </div>

          <div style={{ width: '4px', height: '40px', background: 'repeating-linear-gradient(to bottom, #C4B5FD 0, #C4B5FD 8px, transparent 8px, transparent 16px)' }}></div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#F5F3FF', border: '3px solid #DDD6FE', borderRadius: '32px', padding: '1.25rem 1.75rem', width: '100%', maxWidth: '520px', cursor: 'pointer', transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s', boxShadow: '0 8px 0 #C4B5FD', position: 'relative' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', flexShrink: 0, boxShadow: '0 4px 0 rgba(0,0,0,0.15)', background: '#BAE6FD' }}>⚙️</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: '#3B0764', marginBottom: '4px' }}>Informática Avançada</h3>
              <p style={{ fontSize: '0.85rem', color: '#7C3AED', fontWeight: 600 }}>Automação, IA no trabalho e ferramentas avançadas</p>
              <div style={{ marginTop: '6px', background: '#DDD6FE', borderRadius: '99px', height: '8px', overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: '99px', background: 'linear-gradient(90deg, #7C3AED, #C4B5FD)', width: '0%' }}></div>
              </div>
            </div>
            <span style={{ padding: '5px 14px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0, background: '#E5E7EB', color: '#6B7280' }}>🔒 Bloqueado</span>
          </div>

          <div style={{ width: '4px', height: '40px', background: 'repeating-linear-gradient(to bottom, #C4B5FD 0, #C4B5FD 8px, transparent 8px, transparent 16px)' }}></div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: '#F5F3FF', border: '3px solid #DDD6FE', borderRadius: '32px', padding: '1.25rem 1.75rem', width: '100%', maxWidth: '520px', cursor: 'pointer', transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s', boxShadow: '0 8px 0 #C4B5FD', position: 'relative', opacity: 0.6, filter: 'grayscale(0.4)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', flexShrink: 0, boxShadow: '0 4px 0 rgba(0,0,0,0.15)', background: '#FCA5A5' }}>📱</div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: 800, fontSize: '1.05rem', color: '#3B0764', marginBottom: '4px' }}>Marketing Digital</h3>
              <p style={{ fontSize: '0.85rem', color: '#7C3AED', fontWeight: 600 }}>Social media, copywriting e estratégia de conteúdo</p>
              <div style={{ marginTop: '6px', background: '#DDD6FE', borderRadius: '99px', height: '8px', overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: '99px', background: 'linear-gradient(90deg, #7C3AED, #C4B5FD)', width: '0%' }}></div>
              </div>
            </div>
            <span style={{ padding: '5px 14px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, flexShrink: 0, background: '#E5E7EB', color: '#6B7280' }}>🔒 Bloqueado</span>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section style={{ padding: '4rem 2rem', background: '#EDE9FE' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#5B21B6', textAlign: 'center', marginBottom: '0.5rem' }}>✨ Por que a BrainTech?</h2>
        <p style={{ textAlign: 'center', color: '#7C3AED', fontSize: '1rem', marginBottom: '3rem', fontWeight: 600 }}>Uma metodologia que torna o aprendizado irresistível</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ background: '#fff', borderRadius: '32px', padding: '2rem 1.5rem', textAlign: 'center', border: '3px solid #DDD6FE', boxShadow: '0 6px 0 #C4B5FD', transition: 'transform 0.15s, box-shadow 0.15s', cursor: 'default' }}>
            <span style={{ fontSize: '2.5rem', marginBottom: '0.75rem', display: 'block' }}>🎮</span>
            <h3 style={{ fontWeight: 800, color: '#5B21B6', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Método Gamificado</h3>
            <p style={{ fontSize: '0.875rem', color: '#7C3AED', lineHeight: 1.6, fontWeight: 600 }}>XP, conquistas e rankings que tornam estudar viciante</p>
          </div>
          <div style={{ background: '#fff', borderRadius: '32px', padding: '2rem 1.5rem', textAlign: 'center', border: '3px solid #DDD6FE', boxShadow: '0 6px 0 #C4B5FD', transition: 'transform 0.15s, box-shadow 0.15s', cursor: 'default' }}>
            <span style={{ fontSize: '2.5rem', marginBottom: '0.75rem', display: 'block' }}>⚡</span>
            <h3 style={{ fontWeight: 800, color: '#5B21B6', marginBottom: '0.5rem', fontSize: '1.05rem' }}>100% Prático</h3>
            <p style={{ fontSize: '0.875rem', color: '#7C3AED', lineHeight: 1.6, fontWeight: 600 }}>Projetos reais desde a primeira aula. Zero teoria inútil.</p>
          </div>
          <div style={{ background: '#fff', borderRadius: '32px', padding: '2rem 1.5rem', textAlign: 'center', border: '3px solid #DDD6FE', boxShadow: '0 6px 0 #C4B5FD', transition: 'transform 0.15s, box-shadow 0.15s', cursor: 'default' }}>
            <span style={{ fontSize: '2.5rem', marginBottom: '0.75rem', display: 'block' }}>🤝</span>
            <h3 style={{ fontWeight: 800, color: '#5B21B6', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Comunidade Ativa</h3>
            <p style={{ fontSize: '0.875rem', color: '#7C3AED', lineHeight: 1.6, fontWeight: 600 }}>Mais de 5.000 alunos trocando experiências diariamente</p>
          </div>
          <div style={{ background: '#fff', borderRadius: '32px', padding: '2rem 1.5rem', textAlign: 'center', border: '3px solid #DDD6FE', boxShadow: '0 6px 0 #C4B5FD', transition: 'transform 0.15s, box-shadow 0.15s', cursor: 'default' }}>
            <span style={{ fontSize: '2.5rem', marginBottom: '0.75rem', display: 'block' }}>📱</span>
            <h3 style={{ fontWeight: 800, color: '#5B21B6', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Aprenda em qualquer lugar</h3>
            <p style={{ fontSize: '0.875rem', color: '#7C3AED', lineHeight: 1.6, fontWeight: 600 }}>App mobile para estudar no ônibus, intervalo ou sofá</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: '#7C3AED', textAlign: 'center', padding: '4rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#fff', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>Pronto para desbloquear sua<br />primeira fase? 🧠</h2>
        <p style={{ color: '#DDD6FE', marginBottom: '2rem', fontSize: '1.05rem', fontWeight: 600, position: 'relative', zIndex: 1 }}>Comece gratuitamente. Sem cartão de crédito. Sem enrolação.</p>
        <button style={{ background: '#FDE68A', color: '#78350F', border: 'none', padding: '16px 40px', borderRadius: '9999px', fontWeight: 900, fontSize: '1.15rem', cursor: 'pointer', boxShadow: '0 8px 0 #D97706', transition: 'transform 0.1s, box-shadow 0.1s', position: 'relative', zIndex: 1, fontFamily: 'var(--font-sans)', letterSpacing: '0.01em', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          🎯 Quero começar agora
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#3B0764', color: '#DDD6FE', padding: '3rem 2rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto 2rem' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#FDE68A', marginBottom: '0.75rem' }}>🧠 BrainTech Academy</h3>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: '#C4B5FD' }}>O playground de aprendizado digital que transforma habilidades em carreira. Aprenda, evolua e conquiste.</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 800, color: '#EDE9FE', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cursos</h4>
            <a href="#" style={{ display: 'block', textDecoration: 'none', color: '#C4B5FD', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600 }}>Tráfego Pago</a>
            <a href="#" style={{ display: 'block', textDecoration: 'none', color: '#C4B5FD', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600 }}>Edição de Vídeo</a>
            <a href="#" style={{ display: 'block', textDecoration: 'none', color: '#C4B5FD', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600 }}>Informática Básica</a>
            <a href="#" style={{ display: 'block', textDecoration: 'none', color: '#C4B5FD', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600 }}>Marketing Digital</a>
          </div>
          <div>
            <h4 style={{ fontWeight: 800, color: '#EDE9FE', marginBottom: '1rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Empresa</h4>
            <a href="#" style={{ display: 'block', textDecoration: 'none', color: '#C4B5FD', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600 }}>Sobre nós</a>
            <a href="#" style={{ display: 'block', textDecoration: 'none', color: '#C4B5FD', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600 }}>Blog</a>
            <a href="#" style={{ display: 'block', textDecoration: 'none', color: '#C4B5FD', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600 }}>Contato</a>
            <a href="#" style={{ display: 'block', textDecoration: 'none', color: '#C4B5FD', fontSize: '0.875rem', marginBottom: '0.5rem', fontWeight: 600 }}>Política de Privacidade</a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #5B21B6', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.8rem', color: '#7C3AED' }}>
          © 2025 BrainTech Academy · Feito com 🧠 e 💜 · Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
}

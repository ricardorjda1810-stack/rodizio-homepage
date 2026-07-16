import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const APP_STORE_URL =
  "https://apps.apple.com/br/app/rodizio-brinquedos/id6759603735";
const ANDROID_OPEN_TEST_URL =
  import.meta.env.VITE_ANDROID_OPEN_TEST_URL ||
  "https://play.google.com/store/apps/details?id=com.rodiziobrinquedos.v3";
const PRIVACY_URL =
  "https://first-lime-7b2.notion.site/Pol-tica-de-Privacidade-Rod-zio-de-Brinquedos-d40b83abf35f4d089e1ae5f46423b4ca?pvs=143";
const TERMS_URL =
  "https://first-lime-7b2.notion.site/Termos-de-Uso-Rod-zio-de-Brinquedos-34c496b60a598015ba29cb3322ebfbc6?pvs=143";

const ageOptions = [
  { label: "0–6 meses", count: 4 },
  { label: "6–12 meses", count: 5 },
  { label: "1–2 anos", count: 6 },
  { label: "2–3 anos", count: 7 },
  { label: "3–4 anos", count: 7 },
  { label: "4–7 anos", count: 8 },
];

const sampleToys = [
  { emoji: "⚽", name: "Bola macia", category: "Corpo e Respiração", color: "#FFE1D6" },
  { emoji: "🔎", name: "Lupa infantil", category: "Sentidos e Exploração", color: "#DDEBFF" },
  { emoji: "🧱", name: "Blocos", category: "Mãos e Construção", color: "#FFF0C7" },
  { emoji: "🎭", name: "Fantasias", category: "Imaginação e Criatividade", color: "#EDE2FF" },
  { emoji: "📚", name: "Livro cartonado", category: "Comunicação e Histórias", color: "#DDEBFF" },
  { emoji: "🎵", name: "Instrumentos", category: "Sentidos e Exploração", color: "#FFE1D6" },
  { emoji: "🧩", name: "Quebra-cabeça", category: "Mãos e Construção", color: "#FFF0C7" },
  { emoji: "🛝", name: "Túnel infantil", category: "Corpo e Respiração", color: "#EDE2FF" },
  { emoji: "🫖", name: "Cozinha", category: "Imaginação e Criatividade", color: "#FFE1D6" },
  { emoji: "🃏", name: "Cartões", category: "Comunicação e Histórias", color: "#DDEBFF" },
  { emoji: "🎨", name: "Pintura", category: "Imaginação e Criatividade", color: "#EDE2FF" },
  { emoji: "🪇", name: "Chocalho", category: "Sentidos e Exploração", color: "#FFF0C7" },
];

const categories = [
  ["Corpo e Respiração", "#FF7448"],
  ["Sentidos e Exploração", "#3974D9"],
  ["Mãos e Construção", "#B36B00"],
  ["Imaginação e Criatividade", "#7B51C8"],
  ["Comunicação e Histórias", "#C94F78"],
];

const appViews = [
  {
    id: "hoje",
    label: "Rodada de hoje",
    eyebrow: "Hoje",
    title: "A seleção certa, sem começar do zero.",
    text: "Veja quantos brinquedos entram na rodada e prepare tudo com um checklist simples.",
    image: "/screenshots/home-nova.png",
  },
  {
    id: "sugestao",
    label: "Sugestão",
    eyebrow: "Sugestão equilibrada",
    title: "O aplicativo combina variedade e redescoberta.",
    text: "Ele respeita as categorias definidas e prioriza brinquedos menos usados.",
    image: "/screenshots/sugerir-rodada.png",
  },
  {
    id: "semana",
    label: "Semana",
    eyebrow: "Hoje + 6 dias",
    title: "A rotina fica previsível sem ficar rígida.",
    text: "Visualize a semana inteira e ajuste a quantidade de cada dia quando precisar.",
    image: "/screenshots/planejamento-semanal-novo.png",
  },
  {
    id: "catalogo",
    label: "Catálogo",
    eyebrow: "Tudo localizado",
    title: "Você sabe o que tem e onde encontrar.",
    text: "Fotos, categorias, caixas e locais deixam o acervo fácil de revisar.",
    image: "/screenshots/catalogo-novo.png",
  },
];

function trackEvent(event, params = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

function trackStoreClick(store, source) {
  if (store === "app_store") {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18175877623/6uH9CNqm0rAcEPfD99pD",
      });
    } else if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "google_ads_app_store_conversion",
        send_to: "AW-18175877623/6uH9CNqm0rAcEPfD99pD",
      });
    }
    trackEvent("app_store_click", { source });
    return;
  }

  trackEvent("android_open_test_click", { source });
}

function Icon({ name, className = "h-5 w-5" }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "arrow") {
    return <svg {...props}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>;
  }
  if (name === "check") {
    return <svg {...props}><path d="m5 12 4 4L19 6" /></svg>;
  }
  if (name === "spark") {
    return <svg {...props}><path d="m12 3 1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" /><path d="m18.5 15 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" /></svg>;
  }
  if (name === "box") {
    return <svg {...props}><path d="m4 7 8-4 8 4-8 4-8-4Z" /><path d="m4 7 8 4 8-4v10l-8 4-8-4V7Z" /><path d="M12 11v10" /></svg>;
  }
  if (name === "calendar") {
    return <svg {...props}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></svg>;
  }
  return <svg {...props}><circle cx="12" cy="12" r="9" /></svg>;
}

function StoreLink({ store = "app_store", source, children, className = "", compact = false }) {
  const isApple = store === "app_store";
  const href = isApple ? APP_STORE_URL : ANDROID_OPEN_TEST_URL;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackStoreClick(store, source)}
      className={`${isApple ? "button-primary" : "button-secondary"} ${compact ? "button-compact" : ""} ${className}`}
    >
      {children}
    </a>
  );
}

function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow ${light ? "text-[#FFD6C8]" : "text-[#E34B24]"}`}>{children}</p>;
}

function RotationDemo() {
  const [selectedAge, setSelectedAge] = React.useState("2–3 anos");
  const [visibleCount, setVisibleCount] = React.useState(7);

  const handleAgeChange = (event) => {
    const nextAge = event.target.value;
    const nextOption = ageOptions.find((option) => option.label === nextAge);
    setSelectedAge(nextAge);
    setVisibleCount(nextOption.count);
    trackEvent("rotation_demo_age_selected", {
      age_range: nextAge,
      suggested_count: nextOption.count,
    });
  };

  const handleCountChange = (event) => {
    const nextCount = Number(event.target.value);
    setVisibleCount(nextCount);
  };

  const handleCountCommit = (event) => {
    const nextCount = Number(event.currentTarget.value);
    trackEvent("rotation_demo_count_changed", { visible_count: nextCount });
  };

  return (
    <div className="demo-shell">
      <div className="demo-controls">
        <div>
          <label htmlFor="age-range" className="control-label">Faixa etária</label>
          <select id="age-range" value={selectedAge} onChange={handleAgeChange} className="select-control">
            {ageOptions.map((option) => (
              <option key={option.label} value={option.label}>{option.label}</option>
            ))}
          </select>
        </div>

        <div className="slider-wrap">
          <div className="flex items-end justify-between gap-4">
            <label htmlFor="toy-count" className="control-label mb-0">Brinquedos disponíveis</label>
            <output htmlFor="toy-count" className="count-output">{visibleCount}</output>
          </div>
          <input
            id="toy-count"
            type="range"
            min="4"
            max="12"
            value={visibleCount}
            onChange={handleCountChange}
            onPointerUp={handleCountCommit}
            onKeyUp={handleCountCommit}
            className="range-control"
          />
          <div className="flex justify-between text-xs font-bold text-[#7B655B]">
            <span>Seleção menor</span>
            <span>Mais opções</span>
          </div>
        </div>
      </div>

      <div className="demo-stage">
        <div className="demo-summary" aria-live="polite">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#E34B24]">Rodada de hoje</p>
            <p className="mt-1 text-2xl font-black text-[#2B211D]">{visibleCount} para brincar</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-black text-[#2B211D]">{50 - visibleCount}</p>
            <p className="text-xs font-bold text-[#7B655B]">guardados para depois</p>
          </div>
        </div>

        <div className="toy-grid" aria-label={`${visibleCount} brinquedos na rodada de hoje`}>
          {sampleToys.map((toy, index) => {
            const active = index < visibleCount;
            return (
              <motion.div
                key={toy.name}
                layout
                initial={false}
                animate={{ opacity: active ? 1 : 0.28, scale: active ? 1 : 0.94 }}
                transition={{ duration: 0.22 }}
                className={`toy-card ${active ? "toy-card-active" : "toy-card-resting"}`}
                aria-hidden={!active}
              >
                <div className="toy-emoji" style={{ background: toy.color }}>{toy.emoji}</div>
                <p className="mt-3 font-black text-[#2B211D]">{toy.name}</p>
                <p className="mt-1 line-clamp-1 text-xs font-bold text-[#7B655B]">{toy.category}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map(([label, color]) => (
            <span key={label} className="category-pill">
              <span className="h-2 w-2 rounded-full" style={{ background: color }} />
              {label}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm font-semibold leading-relaxed text-[#7B655B]">
          Este é um exemplo visual. No aplicativo, a quantidade pode ser ajustada para a rotina da família.
        </p>
      </div>
    </div>
  );
}

function AppExperience() {
  const [activeId, setActiveId] = React.useState(appViews[0].id);
  const activeView = appViews.find((view) => view.id === activeId);

  const selectView = (id) => {
    setActiveId(id);
    trackEvent("app_experience_viewed", { view: id });
  };

  return (
    <div className="app-experience">
      <div className="app-copy">
        <div className="app-tabs" role="tablist" aria-label="Telas do aplicativo">
          {appViews.map((view) => (
            <button
              key={view.id}
              type="button"
              role="tab"
              aria-selected={activeId === view.id}
              aria-controls="app-view-panel"
              onClick={() => selectView(view.id)}
              className={`app-tab ${activeId === view.id ? "app-tab-active" : ""}`}
            >
              {view.label}
            </button>
          ))}
        </div>

        <motion.div
          id="app-view-panel"
          role="tabpanel"
          key={activeView.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24 }}
          className="mt-9"
        >
          <Eyebrow>{activeView.eyebrow}</Eyebrow>
          <h3 className="mt-4 max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.035em] text-[#2B211D] md:text-5xl">
            {activeView.title}
          </h3>
          <p className="mt-5 max-w-lg text-lg font-medium leading-relaxed text-[#68554C]">
            {activeView.text}
          </p>
          <ul className="mt-7 space-y-3 text-base font-bold text-[#3B2D27]">
            <li className="feature-line"><Icon name="check" /> Rodízio diário e planejamento de sete dias</li>
            <li className="feature-line"><Icon name="check" /> Categorias, caixas e locais em uma só rotina</li>
            <li className="feature-line"><Icon name="check" /> Checklist para deixar a brincadeira pronta</li>
          </ul>
        </motion.div>
      </div>

      <div className="phone-scene">
        <div className="phone-glow" />
        <motion.div
          key={activeView.image}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="phone-frame"
        >
          <div className="phone-speaker" />
          <img src={activeView.image} alt={`Tela ${activeView.label} do aplicativo Rodízio de Brinquedos`} />
        </motion.div>
      </div>
    </div>
  );
}

function App() {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.5 },
      };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FFF9F2] text-[#2B211D]">
      <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>

      <header className="site-header">
        <div className="header-inner">
          <a href="#inicio" className="brand" aria-label="Rodízio de Brinquedos — início">
            <img src="/favicon.png" alt="" className="h-10 w-10 rounded-xl" />
            <span className="hidden sm:inline">Rodízio de Brinquedos</span>
          </a>
          <nav aria-label="Navegação principal" className="main-nav">
            <a href="#beneficios">Benefícios</a>
            <a href="#demonstracao">Experimente</a>
            <a href="#aplicativo">O aplicativo</a>
          </nav>
          <StoreLink source="header" compact>Começar agora</StoreLink>
        </div>
      </header>

      <main id="conteudo">
        <section id="inicio" className="hero-section">
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="section-container hero-grid">
            <motion.div {...reveal}>
              <div className="hero-badge"><Icon name="spark" /> Uma casa mais leve começa com menos escolhas de cada vez</div>
              <h1 className="hero-title">
                Menos brinquedos à vista.
                <span>Mais brincadeira de verdade.</span>
              </h1>
              <p className="hero-copy">
                O rodízio transforma muitos brinquedos em pequenas seleções intencionais — para a criança explorar com mais calma e a família manter uma rotina mais leve.
              </p>
              <div className="hero-actions">
                <StoreLink source="hero">Começar meu rodízio <Icon name="arrow" /></StoreLink>
                <a href="#demonstracao" className="button-secondary" onClick={() => trackEvent("demo_cta_click", { source: "hero" })}>
                  Experimentar a ideia
                </a>
              </div>
              <p className="mt-5 text-sm font-bold text-[#7B655B]">7 dias para experimentar · use os brinquedos que você já tem</p>
            </motion.div>

            <motion.div {...reveal} transition={{ duration: 0.55, delay: 0.08 }} className="hero-visual" aria-label="De muitos brinquedos para uma rodada com sete itens">
              <div className="shelf-card shelf-card-back">
                <p className="shelf-label">Guardados para depois</p>
                <div className="shelf-icons opacity-40">🧸 🚗 🎨 🥁 🧩 🪁 🪇</div>
              </div>
              <div className="shelf-card shelf-card-front">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="shelf-label text-[#E34B24]">Rodada de hoje</p>
                    <p className="mt-1 text-3xl font-black">7 brinquedos</p>
                  </div>
                  <span className="rounded-full bg-[#FFF0E8] px-3 py-1 text-sm font-black text-[#E34B24]">pronta</span>
                </div>
                <div className="hero-toys">
                  {sampleToys.slice(0, 7).map((toy) => (
                    <div key={toy.name} className="hero-toy" style={{ background: toy.color }} title={toy.name}>{toy.emoji}</div>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#2F3632] px-4 py-3 text-sm font-bold text-white">
                  <Icon name="box" /> O restante descansa nas caixas
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="beneficios" className="section-pad bg-white">
          <div className="section-container">
            <motion.div {...reveal} className="section-heading">
              <Eyebrow>A mudança começa no ambiente</Eyebrow>
              <h2>O problema não é ter brinquedos.<br />É oferecer todos ao mesmo tempo.</h2>
              <p>O rodízio não tira possibilidades da criança. Ele organiza quando cada possibilidade aparece.</p>
            </motion.div>

            <div className="benefit-grid">
              {[
                { number: "01", title: "Menos decisões de uma vez", text: "Uma seleção menor pode facilitar o começo da brincadeira e ajudar a criança a permanecer nela por mais tempo." },
                { number: "02", title: "Brinquedos redescobertos", text: "Depois de um período guardado, um brinquedo conhecido pode voltar a despertar curiosidade e novas formas de brincar." },
                { number: "03", title: "Uma casa mais leve", text: "Fica mais simples guardar, localizar e perceber o que já não acompanha a fase da criança." },
              ].map((benefit, index) => (
                <motion.article key={benefit.number} {...reveal} transition={{ duration: 0.45, delay: index * 0.06 }} className="benefit-card">
                  <span>{benefit.number}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </motion.article>
              ))}
            </div>

            <motion.div {...reveal} className="principle-strip">
              <p>Não se trata de comprar mais.</p>
              <strong>Trata-se de tornar mais significativo o uso do que a família já possui.</strong>
            </motion.div>
          </div>
        </section>

        <section id="demonstracao" className="section-pad bg-[#F8F0E7]">
          <div className="section-container">
            <motion.div {...reveal} className="section-heading">
              <Eyebrow>Entenda experimentando</Eyebrow>
              <h2>Monte uma rodada antes mesmo de baixar o aplicativo.</h2>
              <p>Escolha a faixa etária e ajuste quantos brinquedos ficam disponíveis. O restante não some: descansa para voltar em outro momento.</p>
            </motion.div>
            <motion.div {...reveal} className="mt-12">
              <RotationDemo />
            </motion.div>
          </div>
        </section>

        <section id="aplicativo" className="section-pad bg-white">
          <div className="section-container">
            <motion.div {...reveal} className="section-heading">
              <Eyebrow>Da filosofia para a rotina</Eyebrow>
              <h2>Você aplica a filosofia.<br />O aplicativo cuida da rotina.</h2>
              <p>Uma visão clara do que oferecer hoje, do que vem nos próximos dias e de onde cada brinquedo está guardado.</p>
            </motion.div>
            <motion.div {...reveal} className="mt-14">
              <AppExperience />
            </motion.div>
          </div>
        </section>

        <section className="tablet-section">
          <div className="section-container tablet-grid">
            <motion.div {...reveal}>
              <Eyebrow light>Também no iPad e em tablets Android</Eyebrow>
              <h2 className="mt-4 text-4xl font-black leading-[1.04] tracking-[-0.04em] text-white md:text-6xl">Mais espaço para enxergar a semana inteira.</h2>
              <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-[#E9DFD8]">Na tela grande, a rodada do dia, o planejamento semanal e a organização da casa aparecem juntos, como um painel para a família.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <StoreLink source="tablet">Baixar na App Store</StoreLink>
                <StoreLink store="android" source="tablet">Testar no Android</StoreLink>
              </div>
            </motion.div>
            <motion.div {...reveal} className="tablet-frame">
              <img src="/screenshots/simulator-captures/ipadpro13-home.png" alt="Tela inicial do Rodízio de Brinquedos no iPad" />
            </motion.div>
          </div>
        </section>

        <section id="baixar" className="final-cta-section">
          <div className="section-container">
            <motion.div {...reveal} className="final-cta-card">
              <div>
                <Eyebrow>Comece com o que já existe em casa</Eyebrow>
                <h2>Sua primeira rodada pode começar hoje.</h2>
                <p>Cadastre os brinquedos, escolha uma seleção menor e deixe o aplicativo organizar os próximos sete dias.</p>
              </div>
              <div className="final-actions">
                <StoreLink source="final_cta">Baixar na App Store <Icon name="arrow" /></StoreLink>
                <StoreLink store="android" source="final_cta">Testar no Android</StoreLink>
                <span>7 dias para experimentar</span>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-container footer-inner">
          <div className="brand text-white">
            <img src="/favicon.png" alt="" className="h-9 w-9 rounded-xl" />
            <span>Rodízio de Brinquedos</span>
          </div>
          <p>Menos brinquedos à vista. Mais brincadeira de verdade.</p>
          <div className="footer-links">
            <a href={PRIVACY_URL} target="_blank" rel="noreferrer">Privacidade</a>
            <a href={TERMS_URL} target="_blank" rel="noreferrer">Termos de uso</a>
          </div>
        </div>
      </footer>

      <div className="mobile-store-bar">
        <StoreLink source="mobile_sticky" compact>Começar meu rodízio</StoreLink>
      </div>
    </div>
  );
}

export default App;

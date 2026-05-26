import React from "react";
import { motion } from "framer-motion";

const APP_STORE_URL = "https://apps.apple.com/br/app/rodizio-brinquedos/id6759603735";
const PRIVACY_URL = "https://first-lime-7b2.notion.site/Pol-tica-de-Privacidade-Rod-zio-de-Brinquedos-d40b83abf35f4d089e1ae5f46423b4ca?pvs=143";
const TERMS_URL = "https://first-lime-7b2.notion.site/Termos-de-Uso-Rod-zio-de-Brinquedos-34c496b60a598015ba29cb3322ebfbc6?pvs=143";

const emotionalQuestions = [
  "Brinquedos espalhados pela casa?",
  "Seu filho perde o interesse rapidamente?",
  "Você organiza tudo e, em poucos minutos, parece bagunçado de novo?"
];

const transformationCards = [
  {
    title: "Antes",
    emoji: "🧺",
    tone: "Excesso",
    text: "Muitos brinquedos à vista, escolhas demais, ambiente carregado e brincadeiras que duram pouco."
  },
  {
    title: "Depois",
    emoji: "✨",
    tone: "Calma",
    text: "Poucos brinquedos disponíveis, mais clareza para escolher, casa mais leve e brincadeira com mais foco."
  }
];

const educationalCards = [
  {
    title: "Foco e atenção",
    emoji: "🎯",
    text: "Com menos estímulos visuais, a criança tem mais chance de permanecer na brincadeira por mais tempo."
  },
  {
    title: "Escolha mais simples",
    emoji: "🧠",
    text: "Menos opções à vista reduzem a sobrecarga de escolha e tornam a rotina mais previsível."
  },
  {
    title: "Redescoberta",
    emoji: "🧸",
    text: "Quando um brinquedo volta para a rodada, ele pode despertar novo interesse e novas formas de brincar."
  }
];

const howItWorksCards = [
  {
    icon: "🧸",
    title: "Escolha poucos brinquedos",
    text: "Em vez de deixar tudo disponível, selecione uma pequena rodada para a criança explorar melhor."
  },
  {
    icon: "📦",
    title: "Guarde o restante",
    text: "Os brinquedos fora da rodada ficam organizados por caixas, categorias e locais."
  },
  {
    icon: "🔁",
    title: "Troque no momento certo",
    text: "Depois de alguns dias, a rodada muda e os brinquedos voltam com sensação de novidade."
  }
];

const benefits = [
  "Menos bagunça visual",
  "Mais foco na brincadeira",
  "Brinquedos menos esquecidos",
  "Rotina mais previsível",
  "Casa mais leve",
  "Sistema simples para pais"
];

const appScreens = [
  {
    title: "Rodada do dia",
    subtitle: "Veja o que fica disponível hoje e sugira uma nova seleção em poucos toques.",
    emoji: "🏠",
    imageSrc: "/screenshots/home-rodada.png",
    rows: ["Planejamento semanal", "Sugerir rodada", "Brinquedos disponíveis"]
  },
  {
    title: "Brinquedos organizados",
    subtitle: "Filtre por categoria, caixa e local para saber onde cada brinquedo está.",
    emoji: "🧸",
    imageSrc: "/screenshots/catalogo-brinquedos.png",
    rows: ["Filtros do catálogo", "Lista de brinquedos", "Categorias visíveis"]
  },
  {
    title: "Caixas da casa",
    subtitle: "Guarde o que não está na rodada e mantenha o sistema fácil de repetir.",
    emoji: "📦",
    imageSrc: "/screenshots/caixas.png",
    rows: ["Caixa Montessori", "Ver brinquedos", "Criar caixa"]
  }
];

const tutorialScreens = [
  { title: "1. Veja a rodada", text: "Na Home, confira os brinquedos disponíveis e o resumo do planejamento semanal.", imageSrc: "/screenshots/home-rodada.png" },
  { title: "2. Sugira uma nova seleção", text: "O botão Sugerir rodada monta uma seleção equilibrada a partir das categorias configuradas.", imageSrc: "/screenshots/home-rodada.png" },
  { title: "3. Revise o catálogo", text: "Use filtros por categoria, caixa e local para entender o acervo da casa.", imageSrc: "/screenshots/catalogo-brinquedos.png" },
  { title: "4. Ajuste a composição", text: "Defina quantos brinquedos de cada categoria entram na rodada.", imageSrc: "/screenshots/composicao-rodada.png" },
  { title: "5. Gerencie categorias", text: "Crie, edite, renomeie ou remova categorias conforme a rotina da família.", imageSrc: "/screenshots/gerenciar-categorias.png" },
  { title: "6. Planeje a semana", text: "Escolha dias padrão ou personalize quantidades por categoria em cada dia.", imageSrc: "/screenshots/planejamento-semanal.png" }
];

const tutorialSteps = [
  { number: "01", title: "Cadastre", text: "Adicione brinquedos com nome, foto, categoria, caixa e local." },
  { number: "02", title: "Separe", text: "Organize por tipos: montar, livros, sensorial, movimento ou faz de conta." },
  { number: "03", title: "Defina quantidades", text: "Escolha quantos brinquedos de cada categoria entram na rodada." },
  { number: "04", title: "Sugira a rodada", text: "O app monta uma seleção equilibrada para o dia." },
  { number: "05", title: "Planeje a semana", text: "Cada dia pode usar o padrão ou uma composição personalizada." },
  { number: "06", title: "Troque com calma", text: "Mantenha poucos brinquedos à vista e renove a seleção no momento certo." }
];

const weeklyExamples = [
  { day: "Segunda", mode: "Padrão", rows: ["Montar: 2", "Livro: 1", "Sensorial: 1"], total: "Total: 4" },
  { day: "Quarta", mode: "Personalizado", rows: ["Movimento: 2", "Faz de conta: 2", "Livro: 1"], total: "Total: 5" },
  { day: "Sábado", mode: "Personalizado", rows: ["Montar: 1", "Sensorial: 2", "Movimento: 2"], total: "Total: 5" }
];

const premiumFeatures = [
  "Rodadas por categoria",
  "Planejamento semanal",
  "Organização por caixas e locais",
  "Fotos para encontrar tudo rápido"
];

function SvgIcon({ name, className = "h-5 w-5", title }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? "img" : "presentation",
    "aria-label": title,
    "aria-hidden": title ? undefined : true
  };

  if (name === "arrow-right") {
    return (
      <svg {...commonProps}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  }

  if (name === "play") {
    return (
      <svg {...commonProps}>
        <path d="M8 5v14l11-7Z" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...commonProps}>
        <path d="M12 3 5 6v5c0 4.5 2.9 8.4 7 10 4.1-1.6 7-5.5 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function CTAButton({ children, href = APP_STORE_URL, variant = "primary", className = "" }) {
  const isHashLink = href.startsWith("#");
  const baseClass = "inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#2C1710] px-8 py-4 font-black shadow-[6px_6px_0_#2C1710] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#2C1710]";
  const variantClass = variant === "secondary" ? "bg-white text-[#2C1710]" : "bg-[#FF5A3D] text-white";

  return (
    <a href={href} target={isHashLink ? undefined : "_blank"} rel={isHashLink ? undefined : "noreferrer"} className={`${baseClass} ${variantClass} ${className}`}>
      {children}
    </a>
  );
}

function SectionHeading({ eyebrow, title, children, align = "center", eyebrowColor = "text-[#FF5A3D]" }) {
  const alignmentClass = align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-3xl";

  return (
    <div className={alignmentClass}>
      <p className={`mb-3 text-sm font-black uppercase tracking-[0.25em] ${eyebrowColor}`}>{eyebrow}</p>
      <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">{title}</h2>
      {children}
    </div>
  );
}

function Card({ item, cardBg = "bg-white" }) {
  return (
    <div className={`rounded-[2rem] border-2 border-[#2C1710] ${cardBg} p-7 shadow-[7px_7px_0_#2C1710]`}>
      {item.emoji && <div className="mb-5 text-5xl" aria-hidden="true">{item.emoji}</div>}
      {item.icon && <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#2C1710] bg-[#FFE1B7] text-3xl">{item.icon}</div>}
      {item.tone && <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#FF5A3D]">{item.tone}</p>}
      <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
      <p className="text-base font-medium leading-relaxed text-[#5F453A]">{item.text}</p>
    </div>
  );
}

function PhoneMockup({ screen }) {
  const [imageFailed, setImageFailed] = React.useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="rounded-[2.4rem] border-2 border-[#2C1710] bg-[#2C1710] p-2 shadow-[8px_8px_0_#2C1710]">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.8rem] bg-[#FFF4E8]">
          {screen.imageSrc && !imageFailed ? (
            <img src={screen.imageSrc} alt={screen.title} className="h-full w-full bg-[#FFF4E8] object-contain object-top" onError={() => setImageFailed(true)} />
          ) : (
            <div className="flex h-full items-center justify-center p-5 text-center">
              <div>
                <p className="text-6xl" aria-hidden="true">📱</p>
                <h3 className="mt-4 text-2xl font-black">{screen.title}</h3>
                <p className="mt-3 text-sm font-bold text-[#5F453A]">Imagem em {screen.imageSrc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-5 text-center">
        <h3 className="text-2xl font-black">{screen.title}</h3>
        <p className="mt-2 text-base font-bold leading-relaxed text-[#5F453A]">{screen.subtitle}</p>
      </div>
    </div>
  );
}

function TutorialScreenshotCard({ item, index }) {
  const [imageFailed, setImageFailed] = React.useState(false);

  return (
    <div className="rounded-[2rem] border-2 border-[#2C1710] bg-[#FFF4E8] p-5 shadow-[7px_7px_0_#2C1710]">
      <div className="overflow-hidden rounded-[1.8rem] border-2 border-[#2C1710] bg-[#2C1710] p-2">
        {item.imageSrc && !imageFailed ? (
          <div className="aspect-[9/19.5] overflow-hidden rounded-[1.4rem] bg-[#FFF4E8]">
            <img src={item.imageSrc} alt={item.title} className="h-full w-full bg-[#FFF4E8] object-contain object-top" onError={() => setImageFailed(true)} />
          </div>
        ) : (
          <div className="flex aspect-[9/19.5] items-center justify-center rounded-[1.4rem] bg-white p-8 text-center">
            <div>
              <p className="text-6xl" aria-hidden="true">📱</p>
              <p className="mt-5 text-lg font-black">Screenshot {index + 1}</p>
            </div>
          </div>
        )}
      </div>
      <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-[#FF5A3D]">Passo {index + 1}</p>
      <h3 className="mt-2 text-2xl font-black">{item.title}</h3>
      <p className="mt-3 text-base font-medium leading-relaxed text-[#5F453A]">{item.text}</p>
    </div>
  );
}

function EmotionalVideo() {
  return (
    <section className="border-b-2 border-[#2C1710] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#FF5A3D]">Veja a transformação</p>
            <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">De brinquedos espalhados para uma brincadeira que prende a atenção.</h2>
            <p className="mt-5 text-xl font-medium leading-relaxed text-[#5F453A]">
              Primeiro a casa parece caótica. Depois, poucos brinquedos escolhidos com intenção criam um ambiente mais calmo, bonito e fácil de manter.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border-2 border-[#2C1710] bg-[#2C1710] p-2 shadow-[9px_9px_0_#2C1710]">
            <video className="aspect-video w-full rounded-[1.5rem] bg-[#FFF4E8] object-cover" src="/videos/rodizio-transformacao.mp4" poster="/og-whatsapp.jpg" autoPlay muted loop playsInline controls={false} />
          </div>
        </div>
      </div>
    </section>
  );
}

function runLandingPageSelfTests() {
  const results = [];
  results.push({ name: "appStoreUrlUsesAppleId", passed: /id6759603735$/.test(APP_STORE_URL) });
  results.push({ name: "legalLinksUseHttps", passed: PRIVACY_URL.startsWith("https://") && TERMS_URL.startsWith("https://") });
  results.push({ name: "problemQuestionsHaveThreeItems", passed: emotionalQuestions.length === 3 });
  results.push({ name: "transformationCardsHaveTwoStates", passed: transformationCards.length === 2 && transformationCards.some((item) => item.title === "Antes") && transformationCards.some((item) => item.title === "Depois") });
  results.push({ name: "educationalCardsHaveThreeUniqueItems", passed: educationalCards.length === 3 && new Set(educationalCards.map((item) => item.title)).size === 3 });
  results.push({ name: "howItWorksCardsHaveThreeSteps", passed: howItWorksCards.length === 3 });
  results.push({ name: "appScreensHaveThreeMockups", passed: appScreens.length === 3 && appScreens.every((item) => item.imageSrc.startsWith("/screenshots/")) });
  results.push({ name: "tutorialScreensHaveRealImagePaths", passed: tutorialScreens.length >= 6 && tutorialScreens.every((item) => item.imageSrc.startsWith("/screenshots/")) });
  results.push({ name: "tutorialExplainsCategoryQuantities", passed: tutorialSteps.some((item) => item.text.includes("quantos brinquedos de cada categoria")) });
  results.push({ name: "weeklyExamplesExplainTotals", passed: weeklyExamples.length === 3 && weeklyExamples.every((item) => item.total.includes("Total")) });
  results.push({ name: "footerLinksAreComplete", passed: [PRIVACY_URL, TERMS_URL, APP_STORE_URL].every((url) => url.startsWith("https://")) });
  return results;
}

if (typeof window !== "undefined") {
  window.__rodizioLandingPageTests = runLandingPageSelfTests;
}

export default function LandingPageRodizioBrinquedos() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FFF4E8] text-[#2C1710]">
      <header className="fixed left-0 right-0 top-0 z-[100] border-b-2 border-[#2C1710] bg-[#FFF4E8]/90 shadow-[0_8px_24px_rgba(44,23,16,0.10)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#FFF4E8]/75">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="Ir para o início">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#2C1710] bg-[#FF5A3D] shadow-[4px_4px_0_#2C1710]">
              <span className="text-xl" aria-hidden="true">🧸</span>
            </div>
            <span className="font-serif text-2xl font-black tracking-tight">Rodízio</span>
          </a>
          <nav className="hidden items-center gap-10 text-sm font-bold md:flex" aria-label="Navegação principal">
            <a href="#como-funciona" className="hover:text-[#FF5A3D]">Como funciona</a>
            <a href="#transformacao" className="hover:text-[#FF5A3D]">Transformação</a>
            <a href="#telas" className="hover:text-[#FF5A3D]">Telas</a>
            <a href="#planos" className="hover:text-[#FF5A3D]">Baixar</a>
          </nav>
          <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="rounded-full border-2 border-[#2C1710] bg-[#FF5A3D] px-5 py-3 text-center text-sm font-black text-white shadow-[4px_4px_0_#2C1710] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#2C1710]">
            App Store
          </a>
        </div>
      </header>

      <main id="inicio" className="pt-[78px] md:pt-[84px]">
        <section className="relative overflow-hidden border-b-2 border-[#2C1710]">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-br from-[#FFD7B8] via-[#FFB68F] to-[#FFF4E8] opacity-80" />
          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[#CFE8D8] blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-24">
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border-2 border-[#2C1710] bg-white px-5 py-3 text-sm font-bold shadow-[3px_3px_0_#2C1710]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2D8C75]" />
                Menos bagunça. Mais brincadeira.
              </div>
              <h1 className="max-w-2xl font-serif text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Seu filho tem muitos brinquedos… e brinca cada vez menos?
              </h1>
              <p className="mt-7 max-w-xl text-xl font-medium leading-relaxed text-[#5F453A]">
                Descubra como o rodízio de brinquedos pode aumentar foco, organização e interesse nas brincadeiras.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#como-funciona" variant="primary">Veja como funciona <SvgIcon name="arrow-right" className="h-5 w-5" /></CTAButton>
                <CTAButton variant="secondary">Baixar na App Store</CTAButton>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {emotionalQuestions.map((question) => (
                  <div key={question} className="rounded-3xl border-2 border-[#2C1710] bg-white px-4 py-3 text-sm font-black shadow-[4px_4px_0_#2C1710]">
                    {question}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={false} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative mx-auto flex h-[420px] w-full max-w-[560px] items-center justify-center sm:h-[560px]" aria-hidden="true">
              <div className="absolute h-[300px] w-[300px] rounded-full border-2 border-[#2C1710] bg-gradient-to-br from-[#FFA46B] to-[#FF5A3D] shadow-[10px_10px_0_#2C1710] sm:h-[410px] sm:w-[410px]" />
              <div className="absolute right-8 top-14 rounded-full border-2 border-[#2C1710] bg-white px-5 py-3 text-sm font-black shadow-[6px_6px_0_#2C1710] rotate-[7deg]">Brinquedos demais?</div>
              <div className="absolute bottom-20 left-4 rounded-full border-2 border-[#2C1710] bg-white px-5 py-3 text-sm font-black shadow-[6px_6px_0_#2C1710] rotate-[-8deg]">Poucos à vista</div>
              <div className="relative z-10 text-center">
                <div className="text-8xl">🧸</div>
                <p className="mt-3 font-serif text-3xl font-black italic text-white drop-shadow">brincar melhor</p>
              </div>
            </motion.div>
          </div>
        </section>

        <EmotionalVideo />

        <section id="transformacao" className="scroll-mt-28 border-b-2 border-[#2C1710] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <SectionHeading eyebrow="Transformação" title="Não é sobre guardar brinquedos. É sobre mudar o clima da casa.">
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">
                O rodízio transforma excesso em escolha. A casa fica mais leve e a criança encontra menos distrações para mergulhar melhor na brincadeira.
              </p>
            </SectionHeading>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {transformationCards.map((item) => <Card key={item.title} item={item} cardBg={item.title === "Antes" ? "bg-[#FFF4E8]" : "bg-[#CFE8D8]"} />)}
            </div>
          </div>
        </section>

        <section className="border-b-2 border-[#2C1710] bg-[#FFE9D2]">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <SectionHeading eyebrow="Desenvolvimento infantil" title="Por que o rodízio funciona?" eyebrowColor="text-[#2D8C75]">
              <p className="mt-4 text-xl font-black leading-relaxed text-[#FF5A3D]">Menos estímulos à vista podem facilitar foco, escolha e brincadeiras mais profundas.</p>
            </SectionHeading>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {educationalCards.map((item) => <Card key={item.title} item={item} />)}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeading eyebrow="Como funciona" title="Um sistema simples: menos à vista, mais valor em cada brinquedo." align="left" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {howItWorksCards.map((item, index) => (
              <div key={item.title} className="rounded-[2rem] border-2 border-[#2C1710] bg-white p-7 shadow-[7px_7px_0_#2C1710]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#2C1710] bg-[#FFE1B7] text-3xl">{item.icon}</div>
                <p className="mb-3 text-sm font-black text-[#FF5A3D]">0{index + 1}</p>
                <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                <p className="text-base font-medium leading-relaxed text-[#5F453A]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="beneficios" className="scroll-mt-28 border-y-2 border-[#2C1710] bg-[#FFE9D2]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#FF5A3D]">O que muda na rotina</p>
              <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">Menos bagunça. Mais brincadeira de verdade.</h2>
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">Quando o excesso sai de cena, cada brinquedo volta a ter espaço, atenção e propósito.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((text) => (
                <div key={text} className="flex items-start gap-3 rounded-3xl border-2 border-[#2C1710] bg-white p-5 shadow-[5px_5px_0_#2C1710]">
                  <SvgIcon name="check" className="mt-0.5 h-6 w-6 shrink-0 text-[#2D8C75]" />
                  <p className="font-black">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="telas" className="scroll-mt-28 border-b-2 border-[#2C1710] bg-[#FFF4E8]">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <SectionHeading eyebrow="Agora entra o app" title="Uma ferramenta simples para aplicar o sistema na vida real.">
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">Depois de entender a transformação, o app ajuda você a repetir o método com menos esforço: rodada, caixas, categorias e planejamento semanal.</p>
            </SectionHeading>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {appScreens.map((screen) => <PhoneMockup key={screen.title} screen={screen} />)}
            </div>
          </div>
        </section>

        <section id="tutorial-visual" className="scroll-mt-28 border-b-2 border-[#2C1710] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <SectionHeading eyebrow="Tutorial visual" title="Como transformar a casa em poucos passos." eyebrowColor="text-[#2D8C75]">
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">Veja como sair do excesso e criar uma rodada mais equilibrada usando as telas do aplicativo.</p>
            </SectionHeading>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tutorialScreens.map((item, index) => <TutorialScreenshotCard key={item.title} item={item} index={index} />)}
            </div>
            <div className="mt-12 rounded-[2rem] border-2 border-[#2C1710] bg-[#FFE9D2] p-8 text-center shadow-[7px_7px_0_#2C1710]">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#FF5A3D]">Próximo passo</p>
              <h3 className="mx-auto max-w-3xl text-3xl font-black">Menos bagunça pode começar com uma única rodada.</h3>
              <p className="mx-auto mt-5 max-w-3xl text-lg font-medium leading-relaxed text-[#5F453A]">Você não precisa reorganizar a casa inteira hoje. Comece escolhendo poucos brinquedos e deixando o restante fora de vista.</p>
              <CTAButton className="mt-8">Transforme a rotina <SvgIcon name="arrow-right" className="h-5 w-5" /></CTAButton>
            </div>
          </div>
        </section>

        <section id="tutorial" className="scroll-mt-28 border-b-2 border-[#2C1710] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <SectionHeading eyebrow="O sistema na prática" title="Sugerir rodada e Planejamento semanal.">
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">A rodada é pensada por categoria. O total aparece automaticamente, mas quem manda é a composição: montar, livros, sensorial, movimento e faz de conta.</p>
            </SectionHeading>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {tutorialSteps.map((item) => (
                <div key={item.number} className="rounded-[2rem] border-2 border-[#2C1710] bg-[#FFF4E8] p-7 shadow-[7px_7px_0_#2C1710]">
                  <p className="mb-4 inline-flex rounded-full border-2 border-[#2C1710] bg-[#FF5A3D] px-4 py-2 text-sm font-black text-white">{item.number}</p>
                  <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                  <p className="text-base font-medium leading-relaxed text-[#5F453A]">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[2rem] border-2 border-[#2C1710] bg-[#FFE9D2] p-8 shadow-[7px_7px_0_#2C1710]">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#FF5A3D]">Exemplo</p>
                <h3 className="mb-5 text-3xl font-black">Uma rodada equilibrada</h3>
                <div className="space-y-3 text-lg font-bold text-[#5F453A]">
                  <p>2 brinquedos de montar</p>
                  <p>1 livro</p>
                  <p>1 brinquedo sensorial</p>
                  <p>1 brinquedo de movimento</p>
                </div>
                <div className="mt-6 rounded-2xl border-2 border-[#2C1710] bg-white p-5 text-lg font-black">Total automático: 5 brinquedos</div>
              </div>
              <div className="rounded-[2rem] border-2 border-[#2C1710] bg-[#CFE8D8] p-8 shadow-[7px_7px_0_#2C1710]">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#2D8C75]">Planejamento semanal</p>
                <h3 className="mb-5 text-3xl font-black">Cada dia pode ter uma composição diferente</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  {weeklyExamples.map((item) => (
                    <div key={item.day} className="rounded-2xl border-2 border-[#2C1710] bg-white p-5 shadow-[4px_4px_0_#2C1710]">
                      <p className="text-sm font-black uppercase tracking-[0.14em] text-[#FF5A3D]">{item.mode}</p>
                      <h4 className="mt-2 text-xl font-black">{item.day}</h4>
                      <div className="mt-4 space-y-2 text-sm font-bold text-[#5F453A]">
                        {item.rows.map((row) => <p key={row}>{row}</p>)}
                      </div>
                      <div className="mt-4 rounded-xl bg-[#FFF4E8] p-3 text-sm font-black">{item.total}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="planos" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-20 md:px-8">
          <SectionHeading eyebrow="Comece hoje" title="Teste uma casa com menos brinquedos à vista.">
            <p className="mt-5 text-xl font-medium text-[#5F453A]">O app é a ferramenta. A transformação começa quando a rotina fica mais simples.</p>
          </SectionHeading>
          <div className="mx-auto mt-12 max-w-md rounded-[2rem] border-2 border-[#2C1710] bg-white p-8 shadow-[9px_9px_0_#2C1710]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FFE1B7] px-4 py-2 text-sm font-black"><SvgIcon name="shield" className="h-4 w-4" /> Rodízio de Brinquedos</div>
            <h3 className="text-3xl font-black">Teste grátis disponível</h3>
            <p className="mt-2 text-lg font-medium text-[#5F453A]">Crie sua primeira rodada, organize caixas e descubra quais brinquedos voltam a chamar atenção.</p>
            <div className="my-7 h-px bg-[#E8D5C6]" />
            <ul className="space-y-4">
              {premiumFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3 font-bold"><SvgIcon name="check" className="h-5 w-5 shrink-0 text-[#2D8C75]" /> {item}</li>
              ))}
            </ul>
            <CTAButton className="mt-8 w-full">Baixar na App Store <SvgIcon name="arrow-right" className="h-5 w-5" /></CTAButton>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-[#2C1710] bg-[#2C1710] px-5 py-10 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-3xl font-black">Rodízio de Brinquedos</p>
            <p className="mt-2 text-white/70">Menos bagunça. Mais brincadeira.</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-bold text-white/80">
            <a href={PRIVACY_URL} target="_blank" rel="noreferrer" className="hover:text-white">Privacidade</a>
            <a href={TERMS_URL} target="_blank" rel="noreferrer" className="hover:text-white">Termos</a>
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="hover:text-white">App Store</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

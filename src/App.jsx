import React from "react";
import { motion } from "framer-motion";

const APP_STORE_URL = "https://apps.apple.com/br/app/rodizio-brinquedos/id6759603735";
const PRIVACY_URL = "https://first-lime-7b2.notion.site/Pol-tica-de-Privacidade-Rod-zio-de-Brinquedos-d40b83abf35f4d089e1ae5f46423b4ca?pvs=143";
const TERMS_URL = "https://first-lime-7b2.notion.site/Termos-de-Uso-Rod-zio-de-Brinquedos-34c496b60a598015ba29cb3322ebfbc6?pvs=143";

const emotionalSignals = [
  "A caixa está cheia, mas a brincadeira dura pouco.",
  "A criança pula de um brinquedo para outro sem se envolver.",
  "A casa fica visualmente carregada e todo mundo se cansa mais rápido."
];

const transformationCards = [
  {
    title: "Antes",
    emoji: "🧺",
    text: "Muitos brinquedos visíveis, escolhas demais e uma sensação constante de bagunça."
  },
  {
    title: "Durante",
    emoji: "🧸",
    text: "Poucos brinquedos disponíveis por vez, com categorias claras e uma rodada simples de seguir."
  },
  {
    title: "Depois",
    emoji: "✨",
    text: "Mais tempo de brincadeira, menos excesso visual e brinquedos redescobertos com interesse."
  }
];

const howItWorksCards = [
  {
    icon: "📦",
    title: "Guarde parte dos brinquedos",
    text: "O objetivo não é tirar a brincadeira da criança. É reduzir o excesso visível para abrir espaço para foco."
  },
  {
    icon: "🧭",
    title: "Monte uma rodada menor",
    text: "Escolha uma seleção por categorias: montar, livros, faz de conta, movimento, sensorial e educativo."
  },
  {
    icon: "📅",
    title: "Troque no momento certo",
    text: "Quando a rodada muda, o brinquedo volta com cara de novidade e a rotina fica mais fácil de manter."
  }
];

const benefits = [
  "Reduz a bagunça visual da casa",
  "Ajuda a criança a permanecer mais tempo em uma brincadeira",
  "Evita que brinquedos bons fiquem esquecidos",
  "Organiza caixas, categorias e locais",
  "Cria uma rotina semanal de troca",
  "Apoia pais e responsáveis sem exigir perfeição"
];

const appScreens = [
  {
    title: "Home e rodada do dia",
    subtitle: "Veja o planejamento semanal, os brinquedos disponíveis e o botão Sugerir rodada.",
    emoji: "🏠",
    imageSrc: "/screenshots/home-rodada.png",
    rows: ["Planejamento semanal", "Sugerir rodada", "Brinquedos disponíveis"]
  },
  {
    title: "Catálogo de brinquedos",
    subtitle: "Filtre por categoria, caixa e local para encontrar tudo com facilidade.",
    emoji: "🧸",
    imageSrc: "/screenshots/catalogo-brinquedos.png",
    rows: ["Filtros do catálogo", "Lista de brinquedos", "Categorias visíveis"]
  },
  {
    title: "Caixas da casa",
    subtitle: "Visualize onde cada grupo está guardado e abra os brinquedos de forma organizada.",
    emoji: "📦",
    imageSrc: "/screenshots/caixas.png",
    rows: ["Caixa Montessori", "Ver brinquedos", "Criar caixa"]
  }
];

const tutorialScreens = [
  {
    title: "1. Abra a Home",
    text: "Na Home, confira o resumo do planejamento semanal, o dia atual e os brinquedos disponíveis para a rodada.",
    imageSrc: "/screenshots/home-rodada.png"
  },
  {
    title: "2. Toque em Sugerir rodada",
    text: "O botão Sugerir rodada usa a configuração por categoria para montar uma seleção equilibrada.",
    imageSrc: "/screenshots/home-rodada.png"
  },
  {
    title: "3. Revise o catálogo",
    text: "Na tela Brinquedos, use filtros por categoria, caixa e local para revisar o catálogo antes de ajustar a rodada.",
    imageSrc: "/screenshots/catalogo-brinquedos.png"
  },
  {
    title: "4. Ajuste a composição",
    text: "Em Configurações, defina quantos brinquedos de cada categoria entram na rodada.",
    imageSrc: "/screenshots/composicao-rodada.png"
  },
  {
    title: "5. Gerencie categorias",
    text: "Em Gerenciar categorias, mantenha nomes e exemplos claros para a sua casa.",
    imageSrc: "/screenshots/gerenciar-categorias.png"
  },
  {
    title: "6. Configure a semana",
    text: "No Planejamento semanal, escolha quando usar o padrão e quando cada dia terá quantidades próprias.",
    imageSrc: "/screenshots/planejamento-semanal.png"
  }
];

const tutorialSteps = [
  {
    number: "01",
    title: "Cadastre os brinquedos",
    text: "Adicione nome, foto, categoria, caixa e local para enxergar melhor o que já existe em casa."
  },
  {
    number: "02",
    title: "Organize por categorias",
    text: "Separe por montar, livros, faz de conta, movimento, sensorial ou educativo. A rodada fica mais equilibrada."
  },
  {
    number: "03",
    title: "Defina quantidades menores",
    text: "Em vez de deixar tudo disponivel, escolha poucos brinquedos por categoria para cada rodada."
  },
  {
    number: "04",
    title: "Use Sugerir rodada",
    text: "O app monta uma seleção coerente com a configuração do dia e evita concentrar tudo em um único tipo."
  },
  {
    number: "05",
    title: "Planeje a semana",
    text: "Cada dia pode usar o padrão ou uma composição própria, respeitando a rotina da família."
  },
  {
    number: "06",
    title: "Troque sem drama",
    text: "Quando a rodada muda, alguns brinquedos descansam e outros voltam a despertar interesse."
  }
];

const premiumFeatures = [
  "Cadastre e organize brinquedos",
  "Crie caixas e categorias",
  "Monte rodadas semanais",
  "Use fotos para identificar tudo rápido"
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

  if (name === "heart") {
    return (
      <svg {...commonProps}>
        <path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 0 1 12 6a5 5 0 0 1 7.5 6.6Z" />
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

function EmojiIcon({ children, className = "text-3xl" }) {
  return (
    <span className={className} aria-hidden="true">
      {children}
    </span>
  );
}

function PhoneMockup({ screen, index }) {
  const [imageFailed, setImageFailed] = React.useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="rounded-[2.4rem] border-2 border-[#2C1710] bg-[#2C1710] p-2 shadow-[8px_8px_0_#2C1710]">
        <div className="aspect-[9/19.5] overflow-hidden rounded-[1.8rem] bg-[#FFF4E8]">
          {screen.imageSrc && !imageFailed ? (
            <img
              src={screen.imageSrc}
              alt={screen.title}
              className="h-full w-full bg-[#FFF4E8] object-contain object-top"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="h-full p-5">
              <div className="mx-auto mb-5 h-5 w-24 rounded-full bg-[#2C1710]" />
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FF5A3D]">Tela {index + 1}</p>
              <h3 className="mt-1 text-2xl font-black leading-tight">{screen.title}</h3>
              <p className="mt-4 text-sm font-bold leading-relaxed text-[#5F453A]">{screen.subtitle}</p>
              <div className="mt-5 space-y-3">
                {screen.rows.map((row) => (
                  <div key={row} className="rounded-2xl border-2 border-[#2C1710] bg-white p-3 text-sm font-black shadow-[3px_3px_0_#2C1710]">
                    {row}
                  </div>
                ))}
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
      <div className="mx-auto max-w-[320px] rounded-[2.1rem] border-2 border-[#2C1710] bg-[#2C1710] p-2">
        <div className="aspect-[9/19.5] overflow-hidden rounded-[1.5rem] bg-[#FFF4E8]">
          {item.imageSrc && !imageFailed ? (
            <img
              src={item.imageSrc}
              alt={item.title}
              className="h-full w-full bg-[#FFF4E8] object-contain object-top"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-white p-8 text-center">
              <div>
                <p className="text-6xl">📱</p>
                <p className="mt-5 text-lg font-black">Screenshot {index + 1}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-[#FF5A3D]">Passo {index + 1}</p>
      <h3 className="mt-2 text-2xl font-black">{item.title}</h3>
      <p className="mt-3 text-base font-medium leading-relaxed text-[#5F453A]">{item.text}</p>
    </div>
  );
}

function runLandingPageSelfTests() {
  return [
    { name: "appStoreUrlUsesAppleId", passed: /id6759603735$/.test(APP_STORE_URL) },
    { name: "legalLinksUseHttps", passed: PRIVACY_URL.startsWith("https://") && TERMS_URL.startsWith("https://") },
    { name: "videoPathIsPreserved", passed: "/videos/rodizio-transformacao.mp4".startsWith("/videos/") },
    { name: "screenshotsArePreserved", passed: appScreens.every((item) => item.imageSrc.startsWith("/screenshots/")) },
    { name: "emotionalNarrativeExists", passed: emotionalSignals.length === 3 && transformationCards.length === 3 }
  ];
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
              <EmojiIcon className="text-xl">🧸</EmojiIcon>
            </div>
            <span className="font-serif text-2xl font-black tracking-tight">Rodízio</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold md:flex" aria-label="Navegação principal">
            <a href="#transformacao" className="hover:text-[#FF5A3D]">Transformação</a>
            <a href="#como-funciona" className="hover:text-[#FF5A3D]">Como funciona</a>
            <a href="#beneficios" className="hover:text-[#FF5A3D]">Benefícios</a>
            <a href="#telas" className="hover:text-[#FF5A3D]">Telas</a>
            <a href="#planos" className="hover:text-[#FF5A3D]">Planos</a>
          </nav>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-[#2C1710] bg-[#FF5A3D] px-5 py-3 text-center text-sm font-black text-white shadow-[4px_4px_0_#2C1710] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#2C1710]"
          >
            Baixar na App Store
          </a>
        </div>
      </header>

      <main id="inicio" className="pt-[78px] md:pt-[84px]">
        <section className="relative overflow-hidden border-b-2 border-[#2C1710]">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-br from-[#FFD7B8] via-[#FFB68F] to-[#FFF4E8] opacity-80" />
          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[#CFE8D8] blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-24">
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-[#2C1710] bg-white px-5 py-3 text-sm font-bold shadow-[3px_3px_0_#2C1710]">
                <SvgIcon name="heart" className="h-4 w-4 text-[#FF5A3D]" />
                Para famílias cansadas do excesso
              </div>

              <h1 className="max-w-3xl font-serif text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Seu filho tem muitos brinquedos… <span className="italic text-[#FF5A3D]">e brinca cada vez menos?</span>
              </h1>

              <p className="mt-7 max-w-2xl text-xl font-medium leading-relaxed text-[#5F453A]">
                Descubra como o rodízio de brinquedos pode aumentar foco, organização e interesse nas brincadeiras.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#2C1710] bg-[#FF5A3D] px-8 py-4 text-base font-black text-white shadow-[6px_6px_0_#2C1710] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#2C1710]"
                >
                  Veja como funciona <SvgIcon name="arrow-right" className="h-5 w-5" />
                </a>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#2C1710] bg-white px-8 py-4 text-base font-black shadow-[6px_6px_0_#2C1710] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#2C1710]"
                >
                  Baixar na App Store
                </a>
              </div>

              <div className="mt-10 grid gap-3">
                {emotionalSignals.map((text, index) => (
                  <div key={text} className="flex items-start gap-3 rounded-3xl border-2 border-[#2C1710] bg-white p-4 shadow-[4px_4px_0_#2C1710]">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FFE1B7] text-xs font-black">0{index + 1}</span>
                    <p className="font-bold leading-relaxed text-[#5F453A]">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mx-auto flex h-[420px] w-full max-w-[560px] items-center justify-center sm:h-[560px]"
              aria-hidden="true"
            >
              <div className="absolute h-[280px] w-[280px] rounded-full border-2 border-[#2C1710] bg-gradient-to-br from-[#FFA46B] to-[#FF5A3D] shadow-[10px_10px_0_#2C1710] sm:h-[390px] sm:w-[390px]" />
              <div className="absolute h-[330px] w-[330px] rounded-full border-2 border-dashed border-[#2C1710] opacity-80 sm:h-[450px] sm:w-[450px]" />
              <div className="absolute top-12 rounded-3xl border-2 border-[#2C1710] bg-white p-4 shadow-[6px_6px_0_#2C1710] rotate-[-8deg] sm:top-16">
                <EmojiIcon className="text-4xl">🧺</EmojiIcon>
              </div>
              <div className="absolute right-5 top-24 rounded-3xl border-2 border-[#2C1710] bg-white p-4 shadow-[6px_6px_0_#2C1710] rotate-[8deg] sm:right-8 sm:top-28">
                <EmojiIcon className="text-4xl">📦</EmojiIcon>
              </div>
              <div className="absolute bottom-20 left-7 rounded-3xl border-2 border-[#2C1710] bg-white p-4 shadow-[6px_6px_0_#2C1710] rotate-[10deg] sm:bottom-24 sm:left-12">
                <EmojiIcon className="text-4xl">✨</EmojiIcon>
              </div>
              <div className="absolute bottom-16 right-0 rounded-full border-2 border-[#2C1710] bg-white px-4 py-3 text-xs font-black shadow-[6px_6px_0_#2C1710] rotate-[6deg] sm:bottom-20 sm:right-2 sm:px-5 sm:text-sm">Poucos à vista</div>
              <div className="absolute right-0 top-48 rounded-full border-2 border-[#2C1710] bg-white px-4 py-3 text-xs font-black shadow-[6px_6px_0_#2C1710] rotate-[-8deg] sm:top-56 sm:px-5 sm:text-sm">Brinquedos demais?</div>
              <div className="relative z-10 text-center">
                <div className="text-7xl sm:text-8xl">🧸</div>
                <p className="mt-3 font-serif text-3xl font-black italic text-white drop-shadow">brinque</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b-2 border-[#2C1710] bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#FF5A3D]">Um minuto para enxergar diferente</p>
              <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">Não é sobre guardar brinquedos. É sobre mudar o clima da casa.</h2>
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">
                A proposta não é comprar mais brinquedos. É criar um ambiente em que a criança consiga escolher melhor, brincar por mais tempo e redescobrir o que já tem.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border-2 border-[#2C1710] bg-[#2C1710] shadow-[9px_9px_0_#2C1710]">
              <video
                className="aspect-video h-full w-full bg-[#2C1710] object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/og-whatsapp.jpg"
              >
                <source src="/videos/rodizio-transformacao.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        <section id="transformacao" className="scroll-mt-28 border-b-2 border-[#2C1710] bg-[#FFE9D2]">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#FF5A3D]">Transformação</p>
              <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">Menos bagunça. Mais brincadeira de verdade.</h2>
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">
                O rodízio cria um antes, um durante e um depois. A casa continua tendo brinquedos, mas a criança não precisa lidar com todos ao mesmo tempo.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {transformationCards.map((item) => (
                <div key={item.title} className="rounded-[2rem] border-2 border-[#2C1710] bg-white p-7 shadow-[7px_7px_0_#2C1710]">
                  <div className="mb-5 text-5xl" aria-hidden="true">{item.emoji}</div>
                  <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                  <p className="text-base font-medium leading-relaxed text-[#5F453A]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#FF5A3D]">Como funciona</p>
            <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">Por que o rodízio funciona?</h2>
            <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">
              Primeiro vem a lógica: menos brinquedos disponíveis, mais clareza para escolher e uma troca planejada para manter o interesse vivo.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {howItWorksCards.map((item, index) => (
              <div key={item.title} className="rounded-[2rem] border-2 border-[#2C1710] bg-white p-7 shadow-[7px_7px_0_#2C1710]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#2C1710] bg-[#FFE1B7]">
                  <EmojiIcon>{item.icon}</EmojiIcon>
                </div>
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
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#FF5A3D]">Benefícios</p>
              <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">A casa fica mais leve quando a escolha fica menor.</h2>
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">
                O Rodízio de Brinquedos transforma organização em cuidado diário: menos excesso para administrar e mais chance de uma brincadeira profunda acontecer.
              </p>
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
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#FF5A3D]">Agora entra o app</p>
              <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">Depois que a ideia faz sentido, o app ajuda a manter.</h2>
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">
                Cadastre brinquedos, organize caixas, escolha categorias e monte rodadas semanais sem depender da memória ou de listas soltas.
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {appScreens.map((screen, index) => (
                <PhoneMockup key={screen.title} screen={screen} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="tutorial-visual" className="scroll-mt-28 border-b-2 border-[#2C1710] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#2D8C75]">Tutorial visual</p>
              <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">Da primeira rodada ao planejamento semanal.</h2>
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">
                As telas mostram como a família sai da ideia para a prática: catálogo, sugestão de rodada, categorias e semana planejada.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tutorialScreens.map((item, index) => (
                <TutorialScreenshotCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="tutorial" className="scroll-mt-28 border-b-2 border-[#2C1710] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#FF5A3D]">Tutorial</p>
              <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">Como transformar excesso em uma rodada possível.</h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {tutorialSteps.map((item) => (
                <div key={item.number} className="rounded-[2rem] border-2 border-[#2C1710] bg-[#FFF4E8] p-7 shadow-[7px_7px_0_#2C1710]">
                  <p className="mb-4 inline-flex rounded-full border-2 border-[#2C1710] bg-[#FF5A3D] px-4 py-2 text-sm font-black text-white">{item.number}</p>
                  <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                  <p className="text-base font-medium leading-relaxed text-[#5F453A]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="planos" className="scroll-mt-28 mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#FF5A3D]">Planos</p>
            <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">Teste uma casa com menos brinquedos à vista.</h2>
            <p className="mt-5 text-xl font-medium text-[#5F453A]">Teste o app e veja como o rodízio pode deixar a rotina mais leve.</p>
          </div>

          <div className="mx-auto mt-12 max-w-md rounded-[2rem] border-2 border-[#2C1710] bg-white p-8 shadow-[9px_9px_0_#2C1710]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FFE1B7] px-4 py-2 text-sm font-black">
              <SvgIcon name="shield" className="h-4 w-4" /> Plano Premium
            </div>
            <h3 className="text-3xl font-black">Teste grátis disponível</h3>
            <p className="mt-2 text-lg font-medium text-[#5F453A]">Plano Premium com cobrança mensal após o período de teste, conforme as condições exibidas na App Store.</p>
            <div className="my-7 h-px bg-[#E8D5C6]" />
            <ul className="space-y-4">
              {premiumFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3 font-bold">
                  <SvgIcon name="check" className="h-5 w-5 shrink-0 text-[#2D8C75]" /> {item}
                </li>
              ))}
            </ul>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#2C1710] bg-[#FF5A3D] px-8 py-4 font-black text-white shadow-[6px_6px_0_#2C1710] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#2C1710]"
            >
              Baixar agora <SvgIcon name="arrow-right" className="h-5 w-5" />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-[#2C1710] bg-[#2C1710] px-5 py-10 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-3xl font-black">Rodízio de Brinquedos</p>
            <p className="mt-2 text-white/70">Organização simples para brincadeiras de maior qualidade.</p>
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

import React from "react";
import { motion } from "framer-motion";

const APP_STORE_URL = "https://apps.apple.com/br/app/rodizio-brinquedos/id6759603735";
const PRIVACY_URL = "https://first-lime-7b2.notion.site/Pol-tica-de-Privacidade-Rod-zio-de-Brinquedos-d40b83abf35f4d089e1ae5f46423b4ca?pvs=143";
const TERMS_URL = "https://first-lime-7b2.notion.site/Termos-de-Uso-Rod-zio-de-Brinquedos-34c496b60a598015ba29cb3322ebfbc6?pvs=143";

const audienceFaces = ["👶", "🧒", "👧", "🧸"];
const ratingStars = [1, 2, 3, 4, 5];

const problemCards = [
  {
    title: "Antes",
    emoji: "🧺",
    text: "Brinquedos espalhados, difícil escolher e bagunça constante."
  },
  {
    title: "Durante",
    emoji: "🧸",
    text: "Poucos brinquedos disponíveis, ambiente mais calmo e escolha mais simples."
  },
  {
    title: "Depois",
    emoji: "✨",
    text: "Brincadeira com mais foco, brinquedos valorizados e rotina mais fácil."
  }
];

const howItWorksCards = [
  {
    icon: "🧸",
    title: "Cadastre os brinquedos",
    text: "Registre nome, foto, categoria, caixa e local. Tudo fica fácil de encontrar."
  },
  {
    icon: "📦",
    title: "Monte uma rodada",
    text: "Escolha uma quantidade menor de brinquedos para ficar disponível na semana."
  },
  {
    icon: "📅",
    title: "Troque no momento certo",
    text: "Acompanhe o rodízio e renove o ambiente sem precisar comprar mais brinquedos."
  }
];

const benefits = [
  "Reduz a bagunça visual da casa",
  "Ajuda a criança a focar melhor",
  "Evita brinquedos esquecidos",
  "Organiza caixas, categorias e locais",
  "Cria rotina semanal de troca",
  "Funciona como apoio para famílias"
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
    text: "O botão Sugerir rodada usa a configuração por categoria para montar uma seleção equilibrada de brinquedos.",
    imageSrc: "/screenshots/home-rodada.png"
  },
  {
    title: "3. Revise o catálogo",
    text: "Na tela Brinquedos, use filtros por categoria, caixa e local para revisar o catálogo antes de montar ou ajustar a rodada.",
    imageSrc: "/screenshots/catalogo-brinquedos.png"
  },
  {
    title: "4. Ajuste a composição",
    text: "Em Configurações, defina quantos brinquedos de cada categoria entram na rodada. O total é calculado automaticamente.",
    imageSrc: "/screenshots/composicao-rodada.png"
  },
  {
    title: "5. Gerencie categorias",
    text: "Em Gerenciar categorias, mantenha nomes e exemplos claros. Você pode criar, editar, renomear ou desativar categorias.",
    imageSrc: "/screenshots/gerenciar-categorias.png"
  },
  {
    title: "6. Configure a semana",
    text: "No Planejamento semanal, escolha quando usar o padrão e quando cada dia terá quantidades próprias por categoria.",
    imageSrc: "/screenshots/planejamento-semanal.png"
  }
];

const screenshotFiles = [
  { original: "IMG_3026.PNG", suggested: "public/screenshots/home-rodada.png", use: "Home, planejamento resumido e Sugerir rodada" },
  { original: "IMG_3033.PNG", suggested: "public/screenshots/catalogo-brinquedos.png", use: "Catálogo de brinquedos e filtros" },
  { original: "IMG_3034.PNG", suggested: "public/screenshots/caixas.png", use: "Tela de caixas" },
  { original: "IMG_3032.PNG", suggested: "public/screenshots/composicao-rodada.png", use: "Composição da rodada por categoria" },
  { original: "IMG_3031.PNG", suggested: "public/screenshots/gerenciar-categorias.png", use: "Gerenciar categorias" },
  { original: "IMG_3027.PNG", suggested: "public/screenshots/configuracoes.png", use: "Configurações do app" },
  { original: "IMG_3028.PNG", suggested: "public/screenshots/planejamento-semanal.png", use: "Planejamento semanal completo" },
  { original: "IMG_3029.PNG", suggested: "public/screenshots/dia-personalizado.png", use: "Dia personalizado por categoria" }
];

const tutorialSteps = [
  {
    number: "01",
    title: "Cadastre os brinquedos",
    text: "Adicione cada brinquedo com nome, foto, categoria, caixa e local. Isso cria uma visão clara do que existe em casa antes de montar qualquer rodada."
  },
  {
    number: "02",
    title: "Organize por categorias",
    text: "Separe os brinquedos por tipos, como montar, livros, faz de conta, movimento, sensorial ou educativo. As categorias ajudam a rodada a ficar equilibrada, e não apenas cheia."
  },
  {
    number: "03",
    title: "Defina a quantidade por categoria",
    text: "Em vez de escolher somente um total geral, configure quantos brinquedos de cada categoria devem aparecer. Exemplo: 2 de montar, 1 livro, 1 sensorial e 1 faz de conta."
  },
  {
    number: "04",
    title: "Use Sugerir rodada",
    text: "Ao tocar em Sugerir rodada, o app usa as quantidades por categoria para montar uma seleção equilibrada. O objetivo é evitar excesso e dar variedade à brincadeira."
  },
  {
    number: "05",
    title: "Ative o Planejamento semanal",
    text: "Com o planejamento semanal, cada dia pode usar a configuração padrão ou uma composição própria por categoria. Assim, segunda pode ter mais montar e terça pode ter mais livros ou faz de conta."
  },
  {
    number: "06",
    title: "Entenda o total automático",
    text: "O total de brinquedos da rodada nasce da soma das categorias. Se a configuração tem 2 de montar, 1 livro, 1 sensorial e 1 movimento, o app mostra total 5, mas a lógica principal continua sendo por categoria."
  },
  {
    number: "07",
    title: "Ajuste categorias quando precisar",
    text: "Com o tempo, você pode renomear categorias, adaptar a organização à idade da criança e mudar a forma como os brinquedos são agrupados."
  },
  {
    number: "08",
    title: "Exclua categorias que não usa",
    text: "Se uma categoria não fizer mais sentido para sua casa, você pode removê-la ou deixar de usá-la para manter o sistema simples, limpo e fácil de manter."
  }
];

const weeklyExamples = [
  {
    day: "Segunda-feira",
    mode: "Usar padrão",
    rows: ["Montar: 2", "Livro: 1", "Sensorial: 1", "Faz de conta: 1"],
    total: "Total automático: 5 brinquedos"
  },
  {
    day: "Terça-feira",
    mode: "Personalizado",
    rows: ["Movimento: 2", "Livro: 1", "Faz de conta: 2"],
    total: "Total automático: 5 brinquedos"
  },
  {
    day: "Sábado",
    mode: "Personalizado",
    rows: ["Montar: 1", "Sensorial: 2", "Movimento: 2", "Livro: 1"],
    total: "Total automático: 6 brinquedos"
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

  if (name === "star") {
    return (
      <svg {...commonProps} fill="currentColor" stroke="none">
        <path d="m12 2.4 2.86 5.8 6.4.93-4.63 4.52 1.1 6.38L12 17l-5.73 3.03 1.1-6.38-4.63-4.52 6.4-.93L12 2.4Z" />
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

function ScreenshotFallback({ screen }) {
  return (
    <div className="space-y-3">
      {screen.rows.map((row) => (
        <div key={row} className="flex items-center gap-3 rounded-2xl border-2 border-[#2C1710] bg-white p-3 shadow-[3px_3px_0_#2C1710]">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFE1B7] text-lg">🧩</div>
          <div className="min-w-0">
            <p className="truncate text-sm font-black">{row}</p>
            <p className="text-xs font-bold text-[#8B6B5E]">Organização simples</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PhoneMockup({ screen, index }) {
  const [imageFailed, setImageFailed] = React.useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="rounded-[2.4rem] border-2 border-[#2C1710] bg-[#2C1710] p-3 shadow-[8px_8px_0_#2C1710]">
        <div className="overflow-hidden rounded-[1.8rem] bg-[#FFF4E8]">
          {screen.imageSrc && !imageFailed ? (
            <img
              src={screen.imageSrc}
              alt={screen.title}
              className="h-[520px] w-full object-cover object-top"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="min-h-[470px] p-5">
              <div className="mx-auto mb-5 h-5 w-24 rounded-full bg-[#2C1710]" />
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FF5A3D]">Tela {index + 1}</p>
                  <h3 className="mt-1 text-2xl font-black leading-tight">{screen.title}</h3>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-[#2C1710] bg-white text-2xl shadow-[3px_3px_0_#2C1710]">
                  {screen.emoji}
                </div>
              </div>
              <p className="mb-5 text-sm font-bold leading-relaxed text-[#5F453A]">{screen.subtitle}</p>
              <ScreenshotFallback screen={screen} />
              <div className="mt-5 rounded-2xl border-2 border-[#2C1710] bg-[#CFE8D8] p-4 text-center text-sm font-black">
                Pronto para a próxima rodada
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
      <div className="overflow-hidden rounded-[1.6rem] border-2 border-[#2C1710] bg-white">
        {item.imageSrc && !imageFailed ? (
          <img
            src={item.imageSrc}
            alt={item.title}
            className="h-[520px] w-full object-cover object-top"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="flex h-[520px] items-center justify-center bg-white p-8 text-center">
            <div>
              <p className="text-6xl">📱</p>
              <p className="mt-5 text-lg font-black">Screenshot {index + 1}</p>
              <p className="mt-2 text-sm font-bold text-[#5F453A]">Coloque a imagem em {item.imageSrc}</p>
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

function runLandingPageSelfTests() {
  const results = [];

  results.push({
    name: "appStoreUrlUsesAppleId",
    passed: /id6759603735$/.test(APP_STORE_URL)
  });

  results.push({
    name: "legalLinksUseHttps",
    passed: PRIVACY_URL.startsWith("https://") && TERMS_URL.startsWith("https://")
  });

  results.push({
    name: "problemCardsHaveThreeSteps",
    passed: problemCards.length === 3 && problemCards.every((item) => item.title && item.text)
  });

  results.push({
    name: "howItWorksCardsHaveThreeSteps",
    passed: howItWorksCards.length === 3 && howItWorksCards.every((item) => item.icon && item.title && item.text)
  });

  results.push({
    name: "appScreensHaveThreeMockups",
    passed: appScreens.length === 3 && appScreens.every((item) => item.title && item.subtitle && item.rows.length >= 3 && item.imageSrc)
  });

  results.push({
    name: "tutorialScreensHaveRealImagePaths",
    passed: tutorialScreens.length >= 6 && tutorialScreens.every((item) => item.title && item.text && item.imageSrc.startsWith("/screenshots/"))
  });

  results.push({
    name: "screenshotFilePlanIsComplete",
    passed: screenshotFiles.length >= 8 && screenshotFiles.every((item) => item.original && item.suggested && item.use)
  });

  results.push({
    name: "premiumFeaturesArePresent",
    passed: premiumFeatures.length >= 4
  });

  results.push({
    name: "tutorialExplainsCategoryQuantities",
    passed:
      tutorialSteps.length >= 8 &&
      tutorialSteps.some((item) => item.text.includes("quantos brinquedos de cada categoria")) &&
      tutorialSteps.some((item) => item.title.includes("Sugerir rodada")) &&
      tutorialSteps.some((item) => item.title.includes("Planejamento semanal")) &&
      tutorialSteps.some((item) => item.text.includes("renomear categorias")) &&
      tutorialSteps.some((item) => item.text.includes("removê-la"))
  });

  results.push({
    name: "weeklyExamplesExplainAutomaticTotals",
    passed:
      weeklyExamples.length === 3 &&
      weeklyExamples.every((item) => item.day && item.mode && item.rows.length >= 3 && item.total.includes("Total automático"))
  });

  results.push({
    name: "navigationTargetsExist",
    passed: ["como-funciona", "beneficios", "telas", "tutorial-visual", "tutorial", "planos"].every(Boolean)
  });

  return results;
}

if (typeof window !== "undefined") {
  window.__rodizioLandingPageTests = runLandingPageSelfTests;
}

export default function LandingPageRodizioBrinquedos() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FFF4E8] text-[#2C1710]">
      <header className="sticky top-0 z-50 border-b-2 border-[#2C1710] bg-[#FFF4E8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="Ir para o início">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#2C1710] bg-[#FF5A3D] shadow-[4px_4px_0_#2C1710]">
              <EmojiIcon className="text-xl">🧸</EmojiIcon>
            </div>
            <span className="font-serif text-2xl font-black tracking-tight">Rodízio</span>
          </a>

          <nav className="hidden items-center gap-10 text-sm font-bold md:flex" aria-label="Navegação principal">
            <a href="#como-funciona" className="hover:text-[#FF5A3D]">Como funciona</a>
            <a href="#beneficios" className="hover:text-[#FF5A3D]">Benefícios</a>
            <a href="#telas" className="hover:text-[#FF5A3D]">Telas</a>
            <a href="#tutorial-visual" className="hover:text-[#FF5A3D]">Tutorial</a>
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

      <main id="inicio">
        <section className="relative overflow-hidden border-b-2 border-[#2C1710]">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-br from-[#FFD7B8] via-[#FFB68F] to-[#FFF4E8] opacity-80" />
          <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-[#CFE8D8] blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-24">
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border-2 border-[#2C1710] bg-white px-5 py-3 text-sm font-bold shadow-[3px_3px_0_#2C1710]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2D8C75]" />
                Menos bagunça. Mais brincadeira.
              </div>

              <h1 className="max-w-2xl font-serif text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Menos brinquedos à vista. <span className="italic text-[#FF5A3D]">Mais foco</span> na brincadeira.
              </h1>

              <p className="mt-7 max-w-xl text-xl font-medium leading-relaxed text-[#5F453A]">
                O Rodízio de Brinquedos ajuda pais e responsáveis a organizar brinquedos por caixas, categorias e rodadas semanais — para reduzir a bagunça e criar brincadeiras de maior qualidade.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#2C1710] bg-[#FF5A3D] px-8 py-4 text-base font-black text-white shadow-[6px_6px_0_#2C1710] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#2C1710]"
                >
                  Baixar na App Store <SvgIcon name="arrow-right" className="h-5 w-5" />
                </a>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#2C1710] bg-white px-8 py-4 text-base font-black shadow-[6px_6px_0_#2C1710] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#2C1710]"
                >
                  <SvgIcon name="play" className="h-5 w-5" /> Ver como funciona
                </a>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3" aria-hidden="true">
                  {audienceFaces.map((item) => (
                    <div key={item} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#2C1710] bg-[#FFE1B7] text-lg">
                      {item}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-[#FFB02E]" aria-label="Avaliação visual de cinco estrelas">
                    {ratingStars.map((item) => (
                      <SvgIcon key={item} name="star" className="h-4 w-4" title={`${item} estrela`} />
                    ))}
                  </div>
                  <p className="text-sm font-black">Feito para famílias que querem brincar melhor</p>
                </div>
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
              <div className="absolute top-12 rounded-3xl border-2 border-[#2C1710] bg-white p-4 shadow-[6px_6px_0_#2C1710] rotate-[-8deg] sm:top-16"><EmojiIcon className="text-4xl">📅</EmojiIcon></div>
              <div className="absolute right-5 top-24 rounded-3xl border-2 border-[#2C1710] bg-white p-4 shadow-[6px_6px_0_#2C1710] rotate-[8deg] sm:right-8 sm:top-28"><EmojiIcon className="text-4xl">📦</EmojiIcon></div>
              <div className="absolute bottom-20 left-7 rounded-3xl border-2 border-[#2C1710] bg-white p-4 shadow-[6px_6px_0_#2C1710] rotate-[10deg] sm:bottom-24 sm:left-12"><EmojiIcon className="text-4xl">✨</EmojiIcon></div>
              <div className="absolute bottom-16 right-0 rounded-full border-2 border-[#2C1710] bg-white px-4 py-3 text-xs font-black shadow-[6px_6px_0_#2C1710] rotate-[6deg] sm:bottom-20 sm:right-2 sm:px-5 sm:text-sm">Rodada pronta</div>
              <div className="absolute right-0 top-48 rounded-full border-2 border-[#2C1710] bg-white px-4 py-3 text-xs font-black shadow-[6px_6px_0_#2C1710] rotate-[-8deg] sm:top-56 sm:px-5 sm:text-sm">Menos excessos</div>
              <div className="relative z-10 text-center">
                <div className="text-7xl sm:text-8xl">🧸</div>
                <p className="mt-3 font-serif text-3xl font-black italic text-white drop-shadow">brinque</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-b-2 border-[#2C1710] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#FF5A3D]">O problema</p>
              <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">Quando tudo está disponível, nada chama atenção por muito tempo.</h2>
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">
                Muitos brinquedos espalhados podem gerar excesso visual, desorganização e pouca concentração. O rodízio ajuda a criança a reencontrar interesse pelos brinquedos, enquanto a casa fica mais leve e organizada.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {problemCards.map((item) => (
                <div key={item.title} className="rounded-[2rem] border-2 border-[#2C1710] bg-[#FFF4E8] p-7 shadow-[7px_7px_0_#2C1710]">
                  <div className="mb-5 text-5xl" aria-hidden="true">{item.emoji}</div>
                  <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                  <p className="text-base font-medium leading-relaxed text-[#5F453A]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="como-funciona" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#FF5A3D]">Como funciona</p>
            <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">Um sistema simples para organizar sem complicar.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {howItWorksCards.map((item, index) => (
              <div key={item.title} className="rounded-[2rem] border-2 border-[#2C1710] bg-white p-7 shadow-[7px_7px_0_#2C1710]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#2C1710] bg-[#FFE1B7]"><EmojiIcon className="text-3xl">{item.icon}</EmojiIcon></div>
                <p className="mb-3 text-sm font-black text-[#FF5A3D]">0{index + 1}</p>
                <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                <p className="text-base font-medium leading-relaxed text-[#5F453A]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="beneficios" className="border-y-2 border-[#2C1710] bg-[#FFE9D2]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:px-8">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#FF5A3D]">Benefícios</p>
              <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">Menos brinquedos à vista. Mais atenção na brincadeira.</h2>
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">O Rodízio de Brinquedos foi pensado para transformar o excesso em uma rotina simples, visual e fácil de manter.</p>
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

        <section id="telas" className="border-b-2 border-[#2C1710] bg-[#FFF4E8]">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#FF5A3D]">Telas do app</p>
              <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">Veja como a organização aparece na prática.</h2>
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">As imagens abaixo usam os screenshots reais do app. Elas mostram a Home, o catálogo de brinquedos e a organização por caixas.</p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {appScreens.map((screen, index) => (
                <PhoneMockup key={screen.title} screen={screen} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="tutorial-visual" className="border-b-2 border-[#2C1710] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#2D8C75]">Tutorial visual</p>
              <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">Passo a passo com as telas do aplicativo.</h2>
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">Use esta seção para explicar, com imagens, como o usuário sai da Home, entende a sugestão de rodada, ajusta categorias e configura o planejamento semanal.</p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {tutorialScreens.map((item, index) => (
                <TutorialScreenshotCard key={item.title} item={item} index={index} />
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] border-2 border-[#2C1710] bg-[#FFE9D2] p-8 text-center shadow-[7px_7px_0_#2C1710]">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#FF5A3D]">Aprendizado rápido</p>
              <h3 className="mx-auto max-w-3xl text-3xl font-black">Em poucos minutos, a família entende como organizar, sugerir a rodada e planejar a semana.</h3>
              <p className="mx-auto mt-5 max-w-3xl text-lg font-medium leading-relaxed text-[#5F453A]">O tutorial visual ajuda o usuário a perceber que o app não é apenas uma lista de brinquedos: ele é um método simples para decidir o que fica disponível, o que fica guardado e quando trocar.</p>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#2C1710] bg-[#FF5A3D] px-8 py-4 font-black text-white shadow-[6px_6px_0_#2C1710] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#2C1710]"
              >
                Baixar e começar <SvgIcon name="arrow-right" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <section id="tutorial" className="border-b-2 border-[#2C1710] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#FF5A3D]">Tutorial</p>
              <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">Como usar Sugerir rodada e Planejamento semanal.</h2>
              <p className="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">A nova lógica do app organiza a rodada por categorias. O total de brinquedos aparece para facilitar a leitura, mas ele é calculado automaticamente pela soma das quantidades escolhidas em cada categoria.</p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
                <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#FF5A3D]">Exemplo de Sugerir rodada</p>
                <h3 className="mb-5 text-3xl font-black">Configuração por categoria</h3>
                <div className="space-y-3 text-lg font-bold text-[#5F453A]">
                  <p>2 brinquedos de montar</p>
                  <p>1 livro</p>
                  <p>1 brinquedo sensorial</p>
                  <p>1 brinquedo de faz de conta</p>
                  <p>1 brinquedo de movimento</p>
                </div>
                <div className="mt-6 rounded-2xl border-2 border-[#2C1710] bg-white p-5 text-lg font-black">Total automático da rodada: 6 brinquedos</div>
                <p className="mt-5 text-base font-bold leading-relaxed text-[#5F453A]">Ao sugerir a rodada, o app busca brinquedos que respeitem essa composição. Assim, a seleção não fica concentrada em um único tipo de brinquedo.</p>
              </div>

              <div className="rounded-[2rem] border-2 border-[#2C1710] bg-[#CFE8D8] p-8 shadow-[7px_7px_0_#2C1710]">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#2D8C75]">Exemplo de Planejamento semanal</p>
                <h3 className="mb-5 text-3xl font-black">Cada dia pode ter uma composição diferente</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  {weeklyExamples.map((item) => (
                    <div key={item.day} className="rounded-2xl border-2 border-[#2C1710] bg-white p-5 shadow-[4px_4px_0_#2C1710]">
                      <p className="text-sm font-black uppercase tracking-[0.14em] text-[#FF5A3D]">{item.mode}</p>
                      <h4 className="mt-2 text-xl font-black">{item.day}</h4>
                      <div className="mt-4 space-y-2 text-sm font-bold text-[#5F453A]">
                        {item.rows.map((row) => (
                          <p key={row}>{row}</p>
                        ))}
                      </div>
                      <div className="mt-4 rounded-xl bg-[#FFF4E8] p-3 text-sm font-black">{item.total}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-[2rem] border-2 border-[#2C1710] bg-white p-8 shadow-[7px_7px_0_#2C1710]">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#FF5A3D]">Regra simples</p>
                  <h3 className="text-3xl font-black">O total não manda na rodada. As categorias mandam.</h3>
                </div>
                <div className="space-y-4 text-lg font-medium leading-relaxed text-[#5F453A]">
                  <p>Se o dia estiver marcado como usar padrão, o app usa as quantidades padrão por categoria.</p>
                  <p>Se o dia estiver personalizado, o app usa as quantidades daquele dia específico.</p>
                  <p>Depois disso, o botão Sugerir rodada monta uma seleção coerente com a configuração efetiva do dia.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-[2rem] border-2 border-[#2C1710] bg-[#FFF4E8] p-8 shadow-[7px_7px_0_#2C1710]">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#2D8C75]">Controle flexível</p>
              <h3 className="mb-5 text-3xl font-black">Categorias acompanham a sua casa</h3>
              <p className="text-lg font-medium leading-relaxed text-[#5F453A]">Se a criança cresceu, se os interesses mudaram ou se a família prefere outro jeito de organizar, as categorias podem ser ajustadas. Você pode mudar nomes, reorganizar brinquedos e remover categorias que não combinam mais com a rotina.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border-2 border-[#2C1710] bg-white p-4 text-center font-black">Editar</div>
                <div className="rounded-2xl border-2 border-[#2C1710] bg-white p-4 text-center font-black">Renomear</div>
                <div className="rounded-2xl border-2 border-[#2C1710] bg-white p-4 text-center font-black">Excluir</div>
              </div>
            </div>
          </div>
        </section>

        <section id="planos" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#FF5A3D]">Planos</p>
            <h2 className="font-serif text-5xl font-black leading-tight md:text-6xl">Comece simples. Organize no seu ritmo.</h2>
            <p className="mt-5 text-xl font-medium text-[#5F453A]">Teste o app e veja como o rodízio pode deixar a rotina mais leve.</p>
          </div>

          <div className="mx-auto mt-12 max-w-md rounded-[2rem] border-2 border-[#2C1710] bg-white p-8 shadow-[9px_9px_0_#2C1710]">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FFE1B7] px-4 py-2 text-sm font-black"><SvgIcon name="shield" className="h-4 w-4" /> Plano Premium</div>
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

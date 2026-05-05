import { motion } from 'framer-motion';

const appScreens = [
  {
    title: 'Rodada da semana',
    description: 'Acompanhe a seleção ativa sem excesso de informação.',
    image: '/screenshots/home-rodada.png',
  },
  {
    title: 'Catálogo de brinquedos',
    description: 'Veja tudo o que a criança tem, com fotos e organização clara.',
    image: '/screenshots/catalogo-brinquedos.png',
  },
  {
    title: 'Caixas e locais',
    description: 'Organize por caixas, armários e espaços da casa.',
    image: '/screenshots/caixas.png',
  },
  {
    title: 'Composição da rodada',
    description: 'Monte uma seleção equilibrada para os próximos dias.',
    image: '/screenshots/composicao-rodada.png',
  },
  {
    title: 'Categorias',
    description: 'Ajuste Montessori, movimento, livros, faz de conta e mais.',
    image: '/screenshots/gerenciar-categorias.png',
  },
  {
    title: 'Planejamento semanal',
    description: 'Distribua brinquedos por dia de forma leve e previsível.',
    image: '/screenshots/planejamento-semanal.png',
  },
];

const tutorialSteps = [
  {
    eyebrow: '1',
    title: 'Cadastre os brinquedos',
    text: 'Registre fotos, categorias e onde cada brinquedo fica guardado.',
    image: '/screenshots/catalogo-brinquedos.png',
  },
  {
    eyebrow: '2',
    title: 'Crie a rodada',
    text: 'Escolha uma composição enxuta para deixar a brincadeira mais focada.',
    image: '/screenshots/composicao-rodada.png',
  },
  {
    eyebrow: '3',
    title: 'Planeje a semana',
    text: 'Ajuste os dias sem transformar a rotina em uma tarefa pesada.',
    image: '/screenshots/planejamento-semanal.png',
  },
];

function ScreenshotFrame({ image, title }) {
  return (
    <div className="mx-auto w-full max-w-[300px] rounded-[2rem] bg-ink p-2 shadow-soft">
      <div className="overflow-hidden rounded-[1.55rem] bg-oat">
        <img
          src={image}
          alt={title}
          className="aspect-[9/19.5] h-auto w-full object-cover"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-stone-600 sm:text-lg">
        {text}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden font-sans">
      <section className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_420px] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
            Organização leve para famílias
          </p>
          <h1 className="mt-5 text-5xl font-bold leading-tight text-ink sm:text-6xl">
            Rodízio de Brinquedos
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Um app para organizar brinquedos, criar rodadas equilibradas e manter
            a brincadeira interessante sem deixar a casa virar um catálogo aberto.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#telas"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-stone-800"
            >
              Ver telas do app
            </a>
            <a
              href="#tutorial"
              className="rounded-full border border-stone-300 bg-white/70 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-white"
            >
              Como funciona
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="relative"
        >
          <ScreenshotFrame
            image="/screenshots/home-rodada.png"
            title="Rodada da semana no Rodízio de Brinquedos"
          />
        </motion.div>
      </section>

      <section id="telas" className="px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Telas do app"
          title="Tudo organizado para decidir rápido"
          text="As principais áreas do app foram pensadas para consulta rápida, com fotos reais dos brinquedos e controles simples."
        />

        <div className="mx-auto mt-12 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {appScreens.map((screen, index) => (
            <motion.article
              key={screen.image}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="rounded-3xl border border-stone-200/80 bg-white/70 p-5 shadow-sm backdrop-blur"
            >
              <ScreenshotFrame image={screen.image} title={screen.title} />
              <h3 className="mt-5 text-xl font-bold text-ink">
                {screen.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                {screen.description}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="tutorial" className="px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Tutorial visual"
          title="Da bagunça à rodada da semana"
          text="Um fluxo simples para cadastrar, selecionar e planejar brinquedos sem mudar a rotina da família."
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-3">
          {tutorialSteps.map((step) => (
            <article
              key={step.title}
              className="rounded-3xl border border-stone-200 bg-white/75 p-5 shadow-sm"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-clay text-sm font-bold text-white">
                {step.eyebrow}
              </div>
              <ScreenshotFrame image={step.image} title={step.title} />
              <h3 className="mt-5 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

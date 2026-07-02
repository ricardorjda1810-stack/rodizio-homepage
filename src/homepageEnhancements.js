const ANDROID_TEST_URL = "https://play.google.com/apps/testing/com.rodiziobrinquedos.v3";
const ANDROID_EVENT_NAME = "android_test_click";

function trackAndroidTestClick(source = "homepage") {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", ANDROID_EVENT_NAME, {
      event_category: "homepage",
      event_label: source
    });
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: ANDROID_EVENT_NAME,
    source,
    destination: "google_play_open_testing"
  });
}

function createAndroidTestLink({ className = "", source = "homepage", label = "Testar no Android" } = {}) {
  const link = document.createElement("a");
  link.href = ANDROID_TEST_URL;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.dataset.androidTestLink = source;
  link.className = className;
  link.textContent = label;
  link.addEventListener("click", () => trackAndroidTestClick(source));
  return link;
}

function replaceAndroidSoonButtons() {
  const buttons = Array.from(document.querySelectorAll("button"));

  buttons
    .filter((button) => button.textContent.trim().includes("Google Play em breve"))
    .forEach((button, index) => {
      const isFullWidth = button.className.includes("w-full");
      const link = createAndroidTestLink({
        source: index === 0 ? "hero_android_test" : "plans_android_test",
        label: "Entrar no teste Android",
        className: `inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#2C1710] bg-[#2D8C75] px-8 py-4 font-black text-white shadow-[6px_6px_0_#2C1710] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#2C1710] ${isFullWidth ? "w-full" : ""}`
      });

      button.replaceWith(link);
    });
}

function updateAndroidCopy() {
  const androidStatusText = "Versão Android prevista para breve.";
  Array.from(document.querySelectorAll("p"))
    .filter((paragraph) => paragraph.textContent.trim() === androidStatusText)
    .forEach((paragraph) => {
      paragraph.textContent = "Versão Android em teste aberto. Entre pelo Google Play e ajude a validar a experiência.";
    });
}

function addHeaderTabletLink() {
  const nav = document.querySelector('nav[aria-label="Navegação principal"]');
  if (!nav || nav.querySelector('a[href="#tablet"]')) return;

  const tabletLink = document.createElement("a");
  tabletLink.href = "#tablet";
  tabletLink.className = "hover:text-[#FF5A3D]";
  tabletLink.textContent = "Tablet";

  const downloadLink = nav.querySelector('a[href="#planos"]');
  nav.insertBefore(tabletLink, downloadLink || null);
}

function addFooterAndroidLink() {
  const footerLinks = document.querySelector("footer .flex.flex-wrap");
  if (!footerLinks || footerLinks.querySelector('a[href="' + ANDROID_TEST_URL + '"]')) return;

  const footerAndroidLink = createAndroidTestLink({
    source: "footer_android_test",
    label: "Teste Android",
    className: "hover:text-white"
  });

  footerLinks.appendChild(footerAndroidLink);
}

function tabletSectionHtml() {
  return `
    <section id="tablet" class="scroll-mt-28 border-b-2 border-[#2C1710] bg-[#CFE8D8]">
      <div class="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div class="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p class="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#2D8C75]">Versão tablet</p>
            <h2 class="font-serif text-5xl font-black leading-tight md:text-6xl">Uma tela maior para planejar a casa com calma.</h2>
            <p class="mt-6 text-xl font-medium leading-relaxed text-[#5F453A]">
              No tablet, o Rodízio de Brinquedos ganha cara de painel: rodada do dia, planejamento semanal, catálogo e caixas ficam mais visuais para organizar a rotina da família.
            </p>
            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="rounded-3xl border-2 border-[#2C1710] bg-white p-5 shadow-[5px_5px_0_#2C1710]">
                <p class="text-3xl" aria-hidden="true">🗓️</p>
                <h3 class="mt-3 text-xl font-black">Semana em destaque</h3>
                <p class="mt-2 text-sm font-bold leading-relaxed text-[#5F453A]">Visualize a programação de vários dias com mais espaço.</p>
              </div>
              <div class="rounded-3xl border-2 border-[#2C1710] bg-white p-5 shadow-[5px_5px_0_#2C1710]">
                <p class="text-3xl" aria-hidden="true">📦</p>
                <h3 class="mt-3 text-xl font-black">Organização da casa</h3>
                <p class="mt-2 text-sm font-bold leading-relaxed text-[#5F453A]">Veja brinquedos, caixas e locais com leitura mais confortável.</p>
              </div>
            </div>
            <div class="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href="#telas" class="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#2C1710] bg-white px-8 py-4 font-black text-[#2C1710] shadow-[6px_6px_0_#2C1710] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#2C1710]">Ver telas do app</a>
              <a href="${ANDROID_TEST_URL}" target="_blank" rel="noreferrer" data-android-test-link="tablet_section" class="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#2C1710] bg-[#2D8C75] px-8 py-4 font-black text-white shadow-[6px_6px_0_#2C1710] transition hover:-translate-y-0.5 hover:shadow-[8px_8px_0_#2C1710]">Testar Android</a>
            </div>
          </div>

          <div class="rounded-[2rem] border-2 border-[#2C1710] bg-[#2C1710] p-3 shadow-[10px_10px_0_#2C1710]">
            <div class="overflow-hidden rounded-[1.5rem] bg-[#FFF4E8] p-5 md:p-7">
              <div class="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p class="text-sm font-black uppercase tracking-[0.18em] text-[#FF5A3D]">Dashboard tablet</p>
                  <h3 class="mt-1 text-3xl font-black">Rodízio da semana</h3>
                </div>
                <div class="rounded-2xl border-2 border-[#2C1710] bg-[#FF5A3D] px-4 py-2 text-sm font-black text-white shadow-[4px_4px_0_#2C1710]">Hoje</div>
              </div>

              <div class="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
                <div class="rounded-[1.5rem] border-2 border-[#2C1710] bg-white p-5 shadow-[5px_5px_0_#2C1710]">
                  <div class="flex items-center justify-between gap-3">
                    <h4 class="text-xl font-black">Rodada de hoje</h4>
                    <span class="rounded-full bg-[#FFE1B7] px-3 py-1 text-xs font-black">5 itens</span>
                  </div>
                  <div class="mt-5 grid grid-cols-3 gap-3">
                    ${["🧱", "📚", "🚗", "🎨", "🧸", "🧩"].map((emoji) => `<div class="flex aspect-square items-center justify-center rounded-2xl border-2 border-[#2C1710] bg-[#FFE9D2] text-3xl">${emoji}</div>`).join("")}
                  </div>
                </div>

                <div class="rounded-[1.5rem] border-2 border-[#2C1710] bg-[#CFE8D8] p-5 shadow-[5px_5px_0_#2C1710]">
                  <h4 class="text-xl font-black">Planejamento semanal</h4>
                  <div class="mt-4 space-y-3">
                    ${[
                      ["Seg", "Corpo + Imaginação", "5"],
                      ["Ter", "Mãos + Exploração", "6"],
                      ["Qua", "Comunicação + Corpo", "5"],
                      ["Qui", "Exploração + Mãos", "6"]
                    ].map(([day, label, total]) => `<div class="flex items-center justify-between gap-3 rounded-2xl border-2 border-[#2C1710] bg-white px-4 py-3 shadow-[3px_3px_0_#2C1710]"><div><p class="text-sm font-black text-[#FF5A3D]">${day}</p><p class="text-sm font-bold text-[#5F453A]">${label}</p></div><span class="rounded-full bg-[#FFF4E8] px-3 py-1 text-sm font-black">${total}</span></div>`).join("")}
                  </div>
                </div>
              </div>

              <div class="mt-5 grid gap-4 md:grid-cols-3">
                <div class="rounded-2xl border-2 border-[#2C1710] bg-white p-4 text-center shadow-[4px_4px_0_#2C1710]"><p class="text-2xl font-black">50</p><p class="text-xs font-black uppercase tracking-[0.14em] text-[#5F453A]">Brinquedos</p></div>
                <div class="rounded-2xl border-2 border-[#2C1710] bg-white p-4 text-center shadow-[4px_4px_0_#2C1710]"><p class="text-2xl font-black">7</p><p class="text-xs font-black uppercase tracking-[0.14em] text-[#5F453A]">Dias</p></div>
                <div class="rounded-2xl border-2 border-[#2C1710] bg-white p-4 text-center shadow-[4px_4px_0_#2C1710]"><p class="text-2xl font-black">📦</p><p class="text-xs font-black uppercase tracking-[0.14em] text-[#5F453A]">Caixas</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function addTabletSection() {
  if (document.getElementById("tablet")) return;

  const appScreensSection = document.getElementById("telas");
  if (!appScreensSection) return;

  appScreensSection.insertAdjacentHTML("afterend", tabletSectionHtml());

  const tabletAndroidLink = document.querySelector('[data-android-test-link="tablet_section"]');
  if (tabletAndroidLink) {
    tabletAndroidLink.addEventListener("click", () => trackAndroidTestClick("tablet_section"));
  }
}

function applyHomepageEnhancements() {
  replaceAndroidSoonButtons();
  updateAndroidCopy();
  addHeaderTabletLink();
  addTabletSection();
  addFooterAndroidLink();
}

function startHomepageEnhancements() {
  applyHomepageEnhancements();

  const observer = new MutationObserver(() => {
    applyHomepageEnhancements();
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startHomepageEnhancements, { once: true });
  } else {
    window.requestAnimationFrame(startHomepageEnhancements);
  }
}

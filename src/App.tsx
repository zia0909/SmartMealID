import { useMemo, useState } from "react";

type IconName =
  | "arrow"
  | "bell"
  | "book"
  | "calendar"
  | "chart"
  | "check"
  | "chevron"
  | "heart"
  | "home"
  | "leaf"
  | "menu"
  | "pantry"
  | "plus"
  | "search"
  | "sparkles"
  | "users"
  | "wallet"
  | "x";

const paths: Record<IconName, React.ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
  book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v17H6.5A2.5 2.5 0 0 0 4 22V5.5Z" /><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v17h4.5A2.5 2.5 0 0 1 20 22V5.5Z" /></>,
  calendar: <><path d="M5 3v3M19 3v3M3 9h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" /><path d="M8 13h3v3H8z" /></>,
  chart: <><path d="M4 19V9M10 19V5M16 19v-7M22 19H2" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  chevron: <path d="m9 18 6-6-6-6" />,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />,
  home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v11h14V10M9 21v-6h6v6" /></>,
  leaf: <><path d="M20.5 3.5C12 3 6.5 6.8 6.5 13.5c0 4 3 6.5 6.5 6.5 6.5 0 8-8 7.5-16.5Z" /><path d="M4 21c2.5-5.5 6.5-9 12-12" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  pantry: <><path d="M4 5h16v16H4zM4 10h16M9 10v11M9 5v5" /><path d="M14 14h2" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  sparkles: <><path d="m12 3 1.3 3.7L17 8l-3.7 1.3L12 13l-1.3-3.7L7 8l3.7-1.3L12 3Z" /><path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14ZM5 13l.7 2.3L8 16l-2.3.7L5 19l-.7-2.3L2 16l2.3-.7L5 13Z" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
  wallet: <><path d="M4 6h15a2 2 0 0 1 2 2v11H4a2 2 0 0 1-2-2V6a3 3 0 0 1 3-3h13" /><path d="M15 11h6v5h-6a2.5 2.5 0 0 1 0-5Z" /></>,
  x: <><path d="m6 6 12 12M18 6 6 18" /></>,
};

function Icon({ name, size = 20, className = "" }: { name: IconName; size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

const navItems: { label: string; icon: IconName }[] = [
  { label: "Beranda", icon: "home" },
  { label: "Meal Planner", icon: "calendar" },
  { label: "Stok Dapur", icon: "pantry" },
  { label: "Gizi Keluarga", icon: "users" },
  { label: "EduHub", icon: "book" },
];

const recipes = [
  {
    title: "Nasi Ikan Bakar & Sayur",
    meta: "460 kkal  •  25 menit",
    price: "Rp18.500 / porsi",
    image: "https://images.unsplash.com/photo-1655740005902-2436216b82b8?auto=format&fit=crop&w=900&q=85",
    tags: ["Protein tinggi", "Lokal"],
  },
  {
    title: "Sup Ayam Sayur Rumahan",
    meta: "390 kkal  •  35 menit",
    price: "Rp14.000 / porsi",
    image: "https://images.unsplash.com/photo-1681378128359-a5c2492a3535?auto=format&fit=crop&w=900&q=85",
    tags: ["Gizi seimbang", "Anak suka"],
  },
  {
    title: "Tumis Tempe Pelangi",
    meta: "410 kkal  •  20 menit",
    price: "Rp9.500 / porsi",
    image: "https://images.unsplash.com/photo-1682139710677-cb02f6bc4211?auto=format&fit=crop&w=900&q=85",
    tags: ["Hemat", "Nabati"],
  },
];

export default function App() {
  const [active, setActive] = useState("Beranda");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [period, setPeriod] = useState("Minggu ini");
  const [budget, setBudget] = useState(650000);
  const [generated, setGenerated] = useState(false);
  const [checked, setChecked] = useState([true, true, false, false]);
  const [ingredient, setIngredient] = useState("");
  const [pantry, setPantry] = useState(["Tempe", "Wortel", "Bayam"]);

  const budgetLabel = useMemo(() => new Intl.NumberFormat("id-ID").format(budget), [budget]);
  const progress = Math.round((budget / 900000) * 100);

  function addIngredient() {
    const clean = ingredient.trim();
    if (clean && !pantry.includes(clean)) setPantry([...pantry, clean]);
    setIngredient("");
  }

  return (
    <div className="min-h-screen bg-[#f6f8f3] text-[#19332a]">
      <header className="sticky top-0 z-40 border-b border-[#dfe7db] bg-[#f9fbf6]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-8 px-5 lg:px-10">
          <button className="lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Buka menu">
            <Icon name="menu" />
          </button>
          <a className="flex shrink-0 items-center gap-2.5" href="#">
            <span className="grid size-9 place-items-center rounded-xl bg-[#1f6b47] text-white shadow-[0_6px_16px_rgba(31,107,71,.2)]">
              <Icon name="leaf" size={21} />
            </span>
            <span className="text-xl font-extrabold tracking-[-0.04em]">SmartMeal<span className="text-[#ed8c36]"> ID</span></span>
          </a>
          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {navItems.map((item) => (
              <button key={item.label} onClick={() => setActive(item.label)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${active === item.label ? "bg-[#e4f0e5] text-[#1f6b47]" : "text-[#64756d] hover:bg-white hover:text-[#1f6b47]"}`}>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button className="relative grid size-10 place-items-center rounded-full border border-[#dfe7db] bg-white text-[#476258] transition hover:-translate-y-0.5 hover:shadow-md" aria-label="Notifikasi">
              <Icon name="bell" size={19} />
              <span className="absolute right-2 top-2 size-2 rounded-full border-2 border-white bg-[#ed8c36]" />
            </button>
            <button className="ml-1 flex items-center gap-2 rounded-full border border-[#dfe7db] bg-white p-1 pr-3">
              <span className="grid size-8 place-items-center rounded-full bg-[#f1b870] text-xs font-extrabold text-[#704416]">AR</span>
              <span className="hidden text-sm font-bold sm:inline">Ayu</span>
              <Icon name="chevron" size={14} className="rotate-90 text-[#718178]" />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#19332a]/30 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)}>
          <aside className="h-full w-[290px] bg-[#fbfcf8] p-5 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-8 flex items-center justify-between">
              <span className="font-extrabold">SmartMeal <b className="text-[#ed8c36]">ID</b></span>
              <button onClick={() => setMobileOpen(false)}><Icon name="x" /></button>
            </div>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button key={item.label} onClick={() => { setActive(item.label); setMobileOpen(false); }} className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold ${active === item.label ? "bg-[#e4f0e5] text-[#1f6b47]" : "text-[#63756d]"}`}>
                  <Icon name={item.icon} size={19} />{item.label}
                </button>
              ))}
            </div>
          </aside>
        </div>
      )}

      <main className="mx-auto max-w-[1440px] px-5 py-7 lg:px-10 lg:py-9">
        <section className="mb-7 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-1 text-sm font-bold text-[#ed8c36]">Selasa, 24 Juni 2025</p>
            <h1 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-[#193c2f]">
              Selamat pagi, Ayu!
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-[#6d7e76]">Mari siapkan menu sehat dan hemat untuk keluarga hari ini.</p>
          </div>
          <div className="flex w-fit rounded-full border border-[#dfe7db] bg-white p-1 shadow-sm">
            {["Hari ini", "Minggu ini"].map((item) => (
              <button key={item} onClick={() => setPeriod(item)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${period === item ? "bg-[#1f6b47] text-white shadow-sm" : "text-[#718178]"}`}>
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.55fr_.75fr]">
          <div className="overflow-hidden rounded-[28px] bg-[#1e6545] text-white shadow-[0_18px_55px_rgba(32,80,58,.14)]">
            <div className="grid min-h-[322px] lg:grid-cols-[1.1fr_.9fr]">
              <div className="relative z-10 flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-xs font-bold text-[#d9efdc]">
                    <Icon name="sparkles" size={15} /> Rencana personal untuk keluarga
                  </div>
                  <h2 className="max-w-lg text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-[40px]">
                    Makan bergizi, tanpa bikin kantong menipis.
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-[#cbe0d3]">Atur menu 7 hari sesuai kebutuhan gizi keluarga dan anggaran belanja Anda.</p>
                </div>
                <button onClick={() => setGenerated(true)} className="mt-7 flex w-fit items-center gap-2 rounded-full bg-[#f3a34f] px-5 py-3 text-sm font-extrabold text-[#34351f] shadow-[0_8px_20px_rgba(0,0,0,.15)] transition hover:-translate-y-0.5 hover:bg-[#ffb566]">
                  <Icon name="sparkles" size={17} /> {generated ? "Rencana berhasil dibuat" : "Buat rencana menu"} <Icon name={generated ? "check" : "arrow"} size={17} />
                </button>
              </div>
              <div className="relative min-h-[230px] overflow-hidden lg:min-h-full">
                <img src={recipes[2].image} alt="Hidangan sehat dengan bahan pangan lokal" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e6545] via-[#1e6545]/20 to-transparent" />
                <div className="absolute bottom-5 right-5 rounded-2xl bg-white/95 p-3 text-[#19332a] shadow-xl backdrop-blur">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#789086]">Target hari ini</p>
                  <p className="mt-1 text-lg font-extrabold">4 warna pangan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e1e8de] bg-white p-6 shadow-[0_12px_40px_rgba(58,80,65,.06)] sm:p-7">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-bold text-[#74847d]">Anggaran pangan</p>
                <h3 className="mt-1 text-2xl font-extrabold tracking-tight">Rp{budgetLabel}</h3>
              </div>
              <span className="grid size-10 place-items-center rounded-xl bg-[#fef0df] text-[#dd7b29]"><Icon name="wallet" /></span>
            </div>
            <div className="mt-6 flex items-end justify-between">
              <p className="text-xs font-semibold text-[#8a9892]">Terpakai minggu ini</p>
              <p className="text-sm font-extrabold text-[#1f6b47]">{progress}%</p>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#edf1eb]">
              <div className="h-full rounded-full bg-[#58a269] transition-all" style={{ width: `${progress}%` }} />
            </div>
            <input aria-label="Atur anggaran pangan" className="budget-range mt-6 w-full" type="range" min="200000" max="900000" step="50000" value={budget} onChange={(e) => setBudget(Number(e.target.value))} />
            <div className="mt-4 grid grid-cols-2 divide-x divide-[#e5ebe2] rounded-2xl bg-[#f6f8f3] px-2 py-3 text-center">
              <div><p className="text-[11px] text-[#839089]">Sisa anggaran</p><p className="mt-1 text-sm font-extrabold">Rp250.000</p></div>
              <div><p className="text-[11px] text-[#839089]">Estimasi hemat</p><p className="mt-1 text-sm font-extrabold text-[#e2822d]">Rp82.000</p></div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-5 xl:grid-cols-[1.05fr_.95fr]">
          <div className="rounded-[28px] border border-[#e1e8de] bg-white p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[.15em] text-[#e78834]">Keluarga sehat</p>
                <h2 className="mt-1 text-xl font-extrabold tracking-tight">Capaian gizi hari ini</h2>
              </div>
              <button className="text-xs font-extrabold text-[#1f6b47]">Lihat detail</button>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["Energi", "76%", "#ef9c4e"],
                ["Protein", "88%", "#4f9a63"],
                ["Serat", "64%", "#84a84e"],
                ["Zat Besi", "71%", "#cd6d61"],
              ].map(([name, value, color]) => (
                <div key={name} className="rounded-2xl bg-[#f7f9f5] p-4 text-center">
                  <div className="relative mx-auto grid size-[76px] place-items-center rounded-full" style={{ background: `conic-gradient(${color} ${value}, #e5ebe2 0)` }}>
                    <div className="grid size-[60px] place-items-center rounded-full bg-white text-sm font-extrabold">{value}</div>
                  </div>
                  <p className="mt-3 text-xs font-bold text-[#5f7168]">{name}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#f3dfbd] bg-[#fff8e9] p-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#f6b95d] text-white"><Icon name="heart" size={17} /></span>
              <p className="text-xs leading-5 text-[#765936]"><b>Tips untuk Nara:</b> Tambahkan satu porsi protein hewani untuk mendukung tumbuh kembang optimal.</p>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e1e8de] bg-white p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[.15em] text-[#559064]">Anti food waste</p>
                <h2 className="mt-1 text-xl font-extrabold tracking-tight">Apa yang ada di dapur?</h2>
              </div>
              <span className="grid size-10 place-items-center rounded-xl bg-[#e8f3e7] text-[#397a4f]"><Icon name="pantry" /></span>
            </div>
            <p className="mt-3 text-sm leading-6 text-[#78877f]">Masukkan bahan yang tersisa, kami bantu olah jadi menu bergizi.</p>
            <div className="mt-5 flex gap-2">
              <div className="relative flex-1">
                <Icon name="search" size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#95a29c]" />
                <input value={ingredient} onChange={(e) => setIngredient(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addIngredient()} placeholder="Contoh: tahu, bayam..." className="h-12 w-full rounded-xl border border-[#dfe7db] bg-[#fafbf8] pl-11 pr-3 text-sm outline-none transition focus:border-[#5b946b] focus:ring-4 focus:ring-[#5b946b]/10" />
              </div>
              <button onClick={addIngredient} className="grid size-12 place-items-center rounded-xl bg-[#1f6b47] text-white transition hover:bg-[#18573a]" aria-label="Tambah bahan"><Icon name="plus" /></button>
            </div>
            <div className="mt-4 flex min-h-8 flex-wrap gap-2">
              {pantry.map((item) => (
                <button key={item} onClick={() => setPantry(pantry.filter((entry) => entry !== item))} className="flex items-center gap-2 rounded-full bg-[#edf4eb] px-3 py-1.5 text-xs font-bold text-[#437251]">
                  {item}<Icon name="x" size={13} />
                </button>
              ))}
            </div>
            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#1f6b47] py-3 text-sm font-extrabold text-[#1f6b47] transition hover:bg-[#edf5ec]">
              Temukan resep dari {pantry.length} bahan <Icon name="arrow" size={17} />
            </button>
          </div>
        </section>

        <section className="mt-9">
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.15em] text-[#e78834]">Pilihan cerdas minggu ini</p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-[-0.025em]">Menu lokal, hemat & bergizi</h2>
            </div>
            <button className="hidden items-center gap-1 text-sm font-extrabold text-[#1f6b47] sm:flex">Lihat semua resep <Icon name="arrow" size={17} /></button>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {recipes.map((recipe, index) => (
              <article key={recipe.title} className="group overflow-hidden rounded-[24px] border border-[#e1e8de] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(38,66,51,.11)]">
                <div className="relative h-48 overflow-hidden">
                  <img src={recipe.image} alt={recipe.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <button className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90 text-[#1f6b47] shadow-md backdrop-blur" aria-label={`Simpan ${recipe.title}`}><Icon name="heart" size={17} /></button>
                  {index === 0 && <span className="absolute bottom-3 left-3 rounded-full bg-[#1f6b47] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-white">Paling cocok</span>}
                </div>
                <div className="p-5">
                  <div className="mb-3 flex gap-2">{recipe.tags.map((tag) => <span key={tag} className="rounded-full bg-[#f0f4ec] px-2.5 py-1 text-[10px] font-bold text-[#607268]">{tag}</span>)}</div>
                  <h3 className="text-lg font-extrabold tracking-tight">{recipe.title}</h3>
                  <p className="mt-2 text-xs text-[#819088]">{recipe.meta}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-[#e9eee6] pt-4">
                    <p className="text-sm font-extrabold text-[#de7e2b]">{recipe.price}</p>
                    <button className="grid size-8 place-items-center rounded-full bg-[#e7f1e5] text-[#1f6b47]"><Icon name="chevron" size={16} /></button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-9 grid gap-5 rounded-[28px] bg-[#eef3e8] p-6 lg:grid-cols-[1fr_1.3fr] lg:p-8">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.15em] text-[#52815d]"><Icon name="check" size={15} /> Belanja terencana</span>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight">Checklist belanja keluarga</h2>
            <p className="mt-2 max-w-sm text-sm leading-6 text-[#718078]">Daftar otomatis berdasarkan menu mingguan dan stok yang masih tersedia.</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {["Ikan kembung • 1 kg", "Telur ayam • 10 butir", "Bayam • 2 ikat", "Pepaya • 1 buah"].map((item, index) => (
              <button key={item} onClick={() => setChecked(checked.map((value, i) => i === index ? !value : value))} className={`flex items-center gap-3 rounded-xl border p-3.5 text-left text-sm font-bold transition ${checked[index] ? "border-[#c9dcc8] bg-white/50 text-[#829088] line-through" : "border-white bg-white text-[#334d42] shadow-sm"}`}>
                <span className={`grid size-5 shrink-0 place-items-center rounded-md border ${checked[index] ? "border-[#579368] bg-[#579368] text-white" : "border-[#bcc8c0]"}`}>{checked[index] && <Icon name="check" size={13} />}</span>
                {item}
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-[#dfe7db] bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-5 py-7 text-center sm:flex-row lg:px-10">
          <p className="text-sm font-extrabold">SmartMeal <span className="text-[#ed8c36]">ID</span></p>
          <p className="text-xs text-[#84928b]">Nutrisi cerdas, keluarga kuat, Indonesia sehat.</p>
          <p className="text-xs text-[#84928b]">© 2025 SmartMeal ID</p>
        </div>
      </footer>
    </div>
  );
}

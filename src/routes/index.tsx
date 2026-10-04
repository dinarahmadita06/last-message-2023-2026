import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Untukmu" },
      {
        name: "description",
        content: "Sebuah surat yang mungkin menjadi yang terakhir. Dibuka lembar demi lembar.",
      },
      { property: "og:title", content: "Untukmu" },
      { property: "og:description", content: "Sebuah surat yang mungkin menjadi yang terakhir." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LetterPage,
});

/* ---------------- doodles ---------------- */

function Flower({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 48" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
      <path d="M20 22c-1 8 0 16 2 24" />
      <path d="M21 34c4-3 8-3 10-1-3 3-7 3-10 1Z" />
      <circle cx="20" cy="14" r="2.4" />
      <path d="M20 11.5c-2-5 2-8 2-8s3 4 0 8M22.4 14c5-1 7 3 7 3s-5 2-7-1M20 16.5c1 5-3 7-3 7s-2-5 1-7M17.6 14c-5 0-6-4-6-4s5-2 6 2" />
    </svg>
  );
}

function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 22" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M12 19C5 14 2.5 10.5 3.2 7.2 4 4 7.8 3 10 5.6c.8.9 1.4 1.8 2 2.6.5-1 1.3-2.2 2.4-3 2.6-1.8 6-.4 6.3 2.8.4 3.5-3.2 7.4-8.4 11.2" />
    </svg>
  );
}

function Clip({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 60" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M6 18V8a4 4 0 0 1 8 0v40a6 6 0 0 1-12 0V14" />
    </svg>
  );
}

function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 10" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
      <path d="M2 5c12-4 22 4 34 0s22-4 34 0 22 4 34 0 22-4 34 0 12 2 20 0" />
    </svg>
  );
}

/* ---------------- letter content ---------------- */

type Line = { text: string; strong?: boolean; hand?: boolean; gap?: boolean };
type Deco = "tape" | "clip" | "flower" | "line" | "heart";
type Slide = {
  lines: Line[];
  deco?: Deco[];
  corner?: string;
  note?: string;
  moment?: boolean;
  airy?: boolean;
};

const t = (text: string, opts: Omit<Line, "text"> = {}): Line => ({ text, ...opts });
const gap: Line = { text: "", gap: true };

const slides: Slide[] = [
  {
    deco: ["tape"],
    corner: "30 · 09 · 2026",
    lines: [
      t("Hai abang.", { hand: true }),
      gap,
      t("Apa kabar? Semoga sehat dan bahagia terus ya 😊"),
      gap,
      t("Ketika abang baca ini mungkin akun ini udah nggak aktif."),
      gap,
      t("Abang, terima kasih yaa pernah jadi alasanku untuk bahagia."),
      t("Pernah jadi alasanku untuk semangat menjalani hari."),
      t("Pernah jadi partner terbaikku dalam berdiskusi."),
    ],
  },
  {
    deco: ["line"],
    note: "12.39 siang",
    lines: [
      t("Abang..", { hand: true }),
      gap,
      t("Sebenernya aku masih nggak nyangka ya kalau kita udah selesai."),
      gap,
      t("Oh iya teks ini ditulis di tanggal 30 September 2026, jam 12.39 siang, tepat 120 hari (4 bulan) kita berpisah dan dalam kondisi demam 39.4 derajat Celsius."),
      gap,
      t("Dan hingga detik ketika abang baca ini, perasaanku masih sama."),
      gap,
      t("Abang masih jadi satu-satunya orang yang pengen kuajak dalam segala hal.", { strong: true }),
    ],
  },
  {
    deco: ["flower"],
    lines: [
      t("Abang, ini mungkin akan jadi chat terakhir dari ku."),
      gap,
      t("Semoga ini menjadi kabar baik untuk abang karena setelah ini baik aku ataupun abang sama sama gak tau nomor. Aku gatau nomor WA Abang dan abang juga gatau nomor WA-ku."),
      gap,
      t("Abang, berjanjilah sama aku."),
      gap,
      t("Abang harus lebih bahagia.", { hand: true }),
      t("Abang harus lebih baik.", { hand: true }),
      t("Abang harus lebih sehat.", { hand: true }),
      t("Abang harus lebih dewasa.", { hand: true }),
      t("Abang harus lebih kuat.", { hand: true }),
      t("Abang harus lebih sabar.", { hand: true }),
      gap,
      t("Karena kebahagiaan abang adalah kebahagiaanku juga, walaupun itu tanpa adanya aku di dalamnya 😊"),
    ],
  },
  {
    deco: ["clip"],
    lines: [
      t("Abang,", { hand: true }),
      gap,
      t("bersamaan dengan chat terakhir ini, InsyaAllah aku akan mulai belajar ikhlas ngelepasin abang."),
      gap,
      t("Terbanglah makin tinggi, abang.", { strong: true }),
      gap,
      t("Kejar semua impian abang."),
      t("Kejar semua harapan abang."),
      gap,
      t("Aku di sini cuma bisa do'ain yang terbaik untuk abang."),
    ],
  },
  {
    deco: ["tape"],
    lines: [
      t("Abang...", { hand: true }),
      gap,
      t("Semoga abang selalu dikelilingi orang baik."),
      gap,
      t("Orang yang selalu mendukung abang."),
      t("Orang yang selalu bangga sama abang."),
      t("Orang-orang yang cinta sama abang."),
      gap,
      t("Abang juga selalu bahagia."),
      t("Segala urusan abang dipermudah."),
      gap,
      t("Sungguh, aku menantikan abang berdiri di atas semua impian abang."),
      gap,
      t("Ingin sekali aku melihat abang mencapai semua cita-cita abang."),
    ],
  },
  {
    airy: true,
    lines: [
      t("Abang sayang..", { hand: true }),
      gap,
      t("Maaf kalau ini lancang."),
      gap,
      gap,
      t("Aku..."),
    ],
  },
  {
    moment: true,
    deco: ["heart"],
    lines: [t("Kangen banget sama abang.")],
  },
  {
    note: "maaf ya",
    lines: [
      t("Apakah abang merasakan hal yang sama?"),
      gap,
      t("Hehe, nggak ya 😅"),
      gap,
      t("Gapapa kok."),
      gap,
      t("Tapi maaf ya abang, janji ini yang terakhir."),
      gap,
      t("Aku kangen banget sama abang.", { hand: true }),
    ],
  },
  {
    airy: true,
    deco: ["flower"],
    lines: [
      t("Kalau suatu hari nanti kita bertemu kembali, akan aku ceritakan gimana beratnya hari-hariku kujalani tanpa adanya abang."),
    ],
  },
  {
    deco: ["clip"],
    lines: [
      t("Abang...", { hand: true }),
      gap,
      t("Aku ternyata pengecut."),
      gap,
      t("Kalau dulu aku harus pergi dari Liwa ke Balam untuk melupakan cinta pertamaku, maka sekarang mungkin aku akan melakukan hal yang sama."),
      gap,
      t("Ketika abang baca ini, yang jelas aku udah nggak di Bandar Lampung."),
      t("Tapi masih di Indonesia."),
      gap,
      t("I don't know kapan."),
      t("Mungkin bulan depan. 3 bulan lagi. 6 bulan lagi. Atau tahun depan."),
    ],
  },
  {
    moment: true,
    lines: [
      t("I'll move to another country."),
      gap,
      t("Pengaruh yang abang tinggalin luar biasa, sampai untuk pertama kalinya aku bakal pergi sejauh ini.", { strong: true }),
    ],
  },
  {
    deco: ["line"],
    lines: [
      t("Abang,", { hand: true }),
      gap,
      t("aku nggak akan menagih semua janji yang pernah abang bilang ke aku."),
      gap,
      t("Terutama tentang rencana dalam 5 tahun ke depan terkait pernikahan."),
      gap,
      t("Aku akan anggap itu sebagai perkataan ngelantur yang diucapkan oleh seseorang saat tidak sadar."),
      gap,
      t("Barangkali abang sudah menemukan orang baru di sana."),
      gap,
      t("Aku turut senang abang 😊"),
    ],
  },
  {
    deco: ["tape", "heart"],
    note: "13.03",
    lines: [
      t("Okay, abangg.", { hand: true }),
      gap,
      t("Ingat yaa janji denganku tadi."),
      gap,
      t("Selalu berbahagia ya."),
      gap,
      t("Jangan sampai senyum indah itu turun menjadi kesedihan."),
      gap,
      t("Jangan menangis kecuali tangisan bahagia."),
      gap,
      t("Chat ini selesai diketik jam 13.03."),
    ],
  },
];

const TOTAL = slides.length;
const pad = (n: number) => String(n).padStart(2, "0");

/* ---------------- page ---------------- */

type Stage = "cover" | "letter" | "final";

function LetterPage() {
  const [stage, setStage] = useState<Stage>("cover");
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const scrollBox = useRef<HTMLDivElement | null>(null);

  const next = useCallback(() => {
    setDir(1);
    if (stage === "cover") {
      setStage("letter");
      setIndex(0);
    } else if (stage === "letter") {
      if (index < TOTAL - 1) setIndex((i) => i + 1);
      else setStage("final");
    }
  }, [stage, index]);

  const prev = useCallback(() => {
    setDir(-1);
    if (stage === "final") {
      setStage("letter");
      setIndex(TOTAL - 1);
    } else if (stage === "letter") {
      if (index > 0) setIndex((i) => i - 1);
      else setStage("cover");
    }
  }, [stage, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || (e.key === "Enter" && stage === "cover")) next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, stage]);

  useEffect(() => {
    scrollBox.current?.scrollTo({ top: 0 });
  }, [index, stage]);

  const onTouchStart = (e: React.TouchEvent) => {
    const p = e.touches[0];
    if (p) touch.current = { x: p.clientX, y: p.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touch.current;
    touch.current = null;
    const p = e.changedTouches[0];
    if (!start || !p) return;
    const dx = p.clientX - start.x;
    const dy = p.clientY - start.y;
    if (Math.abs(dx) < 55 || Math.abs(dy) > Math.abs(dx)) return;
    if (dx < 0) next();
    else prev();
  };

  const key = stage === "letter" ? `l${index}` : stage;
  const slide = slides[index];

  return (
    <main
      className="flex w-full items-stretch justify-center sm:px-6 sm:py-6"
      style={{ minHeight: "100dvh", height: "100dvh" }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <article
        key={key}
        className={
          (dir === 1 ? "animate-turn" : "animate-turn-back") +
          " sheet relative flex h-full w-full max-w-[40rem] flex-col overflow-hidden sm:rounded-[3px]"
        }
      >
        {stage === "cover" && <Cover />}
        {stage === "letter" && slide && <Sheet slide={slide} scrollRef={scrollBox} />}
        {stage === "final" && <Final />}

        <nav className="relative z-10 flex items-center justify-between px-7 pb-6 pt-3 text-ink-soft sm:px-12">
          <button
            type="button"
            onClick={prev}
            className={"text-[15px] italic transition-colors hover:text-ink " + (stage === "cover" ? "invisible" : "")}
          >
            ← sebelumnya
          </button>
          <span className="text-xs tracking-[0.25em] text-ink-soft/70">
            {stage === "letter" ? `${pad(index + 1)} / ${pad(TOTAL)}` : ""}
          </span>
          <button
            type="button"
            onClick={next}
            className={"font-hand text-xl transition-colors hover:text-ink " + (stage === "final" ? "invisible" : "")}
          >
            {stage === "cover" ? "buka surat →" : "berikutnya →"}
          </button>
        </nav>
      </article>
    </main>
  );
}

/* ---------------- sheet ---------------- */

function Decorations({ deco = [] }: { deco?: Deco[] | undefined }) {
  return (
    <>
      {deco.includes("tape") && (
        <span className="pointer-events-none absolute -top-1 left-1/2 h-7 w-28 -translate-x-1/2 -rotate-3 bg-washi" style={{ clipPath: "polygon(3% 0,97% 4%,100% 100%,0 94%)" }} />
      )}
      {deco.includes("clip") && <Clip className="pointer-events-none absolute -top-2 right-10 h-16 w-5 text-ink-soft/50" />}
      {deco.includes("flower") && <Flower className="pointer-events-none absolute bottom-20 right-8 h-14 w-12 rotate-6 text-primary/45" />}
      {deco.includes("line") && <span className="pointer-events-none absolute inset-y-0 left-5 w-px bg-margin-line sm:left-8" />}
      {deco.includes("heart") && <Heart className="pointer-events-none absolute bottom-20 left-9 h-5 w-5 -rotate-12 text-primary/50" />}
    </>
  );
}

function Sheet({ slide, scrollRef }: { slide: Slide; scrollRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <>
      <Decorations deco={slide.deco} />
      {slide.corner && <span className="absolute right-7 top-6 font-hand text-lg text-ink-soft/80 sm:right-12">{slide.corner}</span>}
      {slide.note && <span className="absolute right-8 top-[42%] rotate-[-8deg] font-hand text-lg text-primary/55 sm:right-12">{slide.note}</span>}

      <div
        ref={scrollRef}
        className={
          "letter-prose relative flex-1 overflow-y-auto px-8 sm:px-14 " +
          (slide.moment ? "flex flex-col items-center justify-center text-center" : slide.airy ? "flex flex-col justify-center pb-16" : "pt-16 pb-6 sm:pt-20")
        }
      >
        {slide.lines.map((line, i) => {
          if (line.gap) return <div key={i} className="h-4" aria-hidden="true" />;
          const delay = { animationDelay: `${400 + Math.min(i * 90, 900)}ms` };
          if (slide.moment && i === 0)
            return (
              <p key={i} className="animate-soft-fade font-hand text-[2.6rem] leading-tight text-ink sm:text-5xl" style={{ animationDelay: "700ms" }}>
                {line.text}
              </p>
            );
          return (
            <p
              key={i}
              className={
                "animate-rise " +
                (line.hand ? "font-hand text-[1.75rem] leading-snug text-ink" : line.strong ? "italic text-ink" : "text-ink/90") +
                (slide.moment ? " max-w-xs text-lg text-ink-soft" : "")
              }
              style={delay}
            >
              {line.text}
            </p>
          );
        })}
      </div>
    </>
  );
}

/* ---------------- cover ---------------- */

function Cover() {
  return (
    <div className="relative flex flex-1 flex-col px-8 pt-20 sm:px-14 sm:pt-24">
      <span className="absolute inset-y-0 left-5 w-px bg-margin-line sm:left-8" />
      <h1 className="animate-rise font-hand text-[2.8rem] leading-none text-ink" style={{ animationDelay: "300ms" }}>
       ~ Untuk seseorang yang ku cintai sejak tahun 2023 hingga saat ini
      </h1>
      <p className="animate-soft-fade mt-4 font-hand text-xl text-ink-soft" style={{ animationDelay: "900ms" }}>
        30 September 2026
      </p>
      
      <Flower className="animate-soft-fade mt-auto mb-8 ml-auto h-16 w-14 rotate-6 text-primary/45" />
    </div>
  );
}

/* ---------------- final ---------------- */

function Final() {
  return (
    <div className="flex flex-1 flex-col justify-end px-8 pb-10 sm:px-14">
      <p className="animate-rise font-hand text-[2.2rem] leading-snug text-ink" style={{ animationDelay: "500ms" }}>
        Sampai jumpa, manusia favoritku.
      </p>
      <div className="h-20" aria-hidden="true" />
      <p className="animate-soft-fade max-w-xs text-lg italic leading-relaxed text-ink-soft" style={{ animationDelay: "2s" }}>
        Untuk seseorang yang kucintai sejak tahun 2023 - detik ini
      </p>
      <div className="animate-soft-fade mt-12 self-end text-right" style={{ animationDelay: "3s" }}>
        <p className="text-xl tracking-wide text-ink">Deenan Alfharaby</p>
        <p className="mt-1 font-hand text-lg text-ink-soft">30 September 2026</p>
        <Heart className="ml-auto mt-3 h-4 w-4 text-primary/50" />
      </div>
    </div>
  );
}

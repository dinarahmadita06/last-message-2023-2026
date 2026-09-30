import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Untuk abang — sebuah surat" },
      {
        name: "description",
        content:
          "Sebuah surat yang mungkin menjadi yang terakhir. Dibuka lembar demi lembar.",
      },
      { property: "og:title", content: "Untuk abang — sebuah surat" },
      {
        property: "og:description",
        content: "Sebuah surat yang mungkin menjadi yang terakhir.",
      },
    ],
  }),
  component: LetterPage,
});

/* ---------------- ornaments ---------------- */

function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 40"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    >
      <path d="M8 20h104" opacity="0.45" />
      <path d="M60 20c-6-6-14-8-20-7 4 6 12 9 20 7Z" opacity="0.7" />
      <path d="M60 20c6-6 14-8 20-7-4 6-12 9-20 7Z" opacity="0.7" />
      <circle cx="60" cy="20" r="1.6" opacity="0.8" />
    </svg>
  );
}

function Rule() {
  return (
    <div className="mx-auto flex items-center justify-center py-1 text-ink-soft/60">
      <Sprig className="h-5 w-24" />
    </div>
  );
}

/* ---------------- letter content ---------------- */

type Line = { text: string; strong?: boolean; em?: boolean; gap?: boolean };
type Slide = { lines: Line[] };

const t = (text: string, opts: Omit<Line, "text"> = {}): Line => ({
  text,
  ...opts,
});
const gap: Line = { text: "", gap: true };

const slides: Slide[] = [
  {
    lines: [
      t("Hai abang."),
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
    lines: [
      t("Abang.."),
      gap,
      t("Sebenernya aku masih nggak nyangka ya kalau kita udah selesai."),
      gap,
      t(
        "Teks ini ditulis di tanggal 30 September 2026, jam 12.39 siang, tepat 120 hari (4 bulan) kita berpisah.",
      ),
      gap,
      t("Dan hingga detik ketika abang baca ini, perasaanku masih sama."),
      gap,
      t("Abang masih jadi satu-satunya orang yang pengen kuajak dalam segala hal."),
    ],
  },
  {
    lines: [
      t("Abang, ini mungkin akan jadi chat terakhir dari ku."),
      gap,
      t(
        "Semoga ini menjadi kabar baik untuk abang karena setelah ini nggak akan ada lagi yang ganggu abang.",
      ),
      gap,
      t("Abang, berjanjilah sama aku."),
      gap,
      t("Abang harus lebih bahagia.", { strong: true }),
      t("Abang harus lebih baik.", { strong: true }),
      t("Abang harus lebih sehat.", { strong: true }),
      gap,
      t(
        "Karena kebahagiaan abang adalah kebahagiaanku juga, walaupun itu tanpa adanya aku di dalamnya 😊",
      ),
    ],
  },
  {
    lines: [
      t("Abang,"),
      gap,
      t(
        "bersamaan dengan chat terakhir ini, InsyaAllah aku akan mulai belajar ikhlas ngelepasin abang.",
      ),
      gap,
      t("Terbanglah makin tinggi, abang."),
      gap,
      t("Kejar semua impian abang."),
      t("Kejar semua harapan abang."),
      gap,
      t("Aku di sini cuma bisa do'ain yang terbaik untuk abang."),
      gap,
      t(
        "Kalau dulu aku berdoa sama Allah agar menjadikan kita sebagai pasangan, maka sekarang aku minta sama Allah untuk menghapus semua perasaan dari hati dan pikiranku.",
      ),
    ],
  },
  {
    lines: [
      t("Abang..."),
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
    lines: [
      t("Abang sayang..", { strong: true }),
      gap,
      t("Maaf kalau ini lancang."),
      gap,
      t("Aku..."),
      gap,
      t("Kangen banget sama abang.", { strong: true }),
      gap,
      t("Apakah abang merasakan hal yang sama?"),
      gap,
      t("Hehe, nggak ya 😅"),
      gap,
      t("Gapapa kok."),
      gap,
      t("Tapi maaf ya abang, janji ini yang terakhir."),
      gap,
      t("Aku kangen banget sama abang.", { strong: true }),
    ],
  },
  {
    lines: [
      t(
        "Kalau suatu hari nanti kita bertemu kembali, akan aku ceritakan gimana beratnya hari-hariku kujalani tanpa adanya abang.",
      ),
    ],
  },
  {
    lines: [
      t("Abang..."),
      gap,
      t("Aku ternyata pengecut."),
      gap,
      t(
        "Kalau dulu aku harus pergi dari Liwa ke Balam untuk melupakan cinta pertamaku, maka sekarang mungkin aku akan melakukan hal yang sama.",
      ),
      gap,
      t("Ketika abang baca ini, yang jelas aku udah nggak di Bandar Lampung."),
      gap,
      t("Tapi masih di Indonesia."),
      gap,
      t("I don't know kapan."),
      gap,
      t("Mungkin bulan depan."),
      t("3 bulan lagi."),
      t("6 bulan lagi."),
      t("Atau tahun depan."),
      gap,
      t("I'll move to another country.", { strong: true }),
      gap,
      t(
        "Pengaruh yang abang tinggalin luar biasa, sampai untuk pertama kalinya aku bakal pergi sejauh ini.",
      ),
    ],
  },
  {
    lines: [
      t("Abang,"),
      gap,
      t("aku nggak akan menagih semua janji yang pernah abang bilang ke aku."),
      gap,
      t("Terutama tentang rencana dalam 5 tahun ke depan terkait pernikahan."),
      gap,
      t(
        "Aku akan anggap itu sebagai perkataan ngelantur yang diucapkan oleh seseorang saat tidak sadar.",
      ),
      gap,
      t("Barangkali abang sudah menemukan orang baru di sana."),
      gap,
      t("Aku turut senang abang 😊"),
    ],
  },
  {
    lines: [
      t("Okay, abangg."),
      gap,
      t("Ingat yaa janji denganku tadi."),
      gap,
      t("Selalu berbahagia ya."),
      gap,
      t("Jangan sampai senyum indah itu turun menjadi kesedihan."),
      gap,
      t("Jangan menangis kecuali tangisan bahagia."),
      gap,
      t("Chat ini selesai diketik jam 13.03.", { strong: true }),
    ],
  },
];

const TOTAL = slides.length;

/* ---------------- page ---------------- */

type Stage = "cover" | "letter" | "final";

function LetterPage() {
  const [stage, setStage] = useState<Stage>("cover");
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [opening, setOpening] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const scrollBox = useRef<HTMLDivElement | null>(null);

  const next = useCallback(() => {
    setDir(1);
    if (stage === "cover") return;
    if (stage === "letter") {
      if (index < TOTAL - 1) setIndex((i) => i + 1);
      else setStage("final");
    }
  }, [stage, index]);

  const prev = useCallback(() => {
    setDir(-1);
    if (stage === "final") {
      setStage("letter");
      setIndex(TOTAL - 1);
      return;
    }
    if (stage === "letter" && index > 0) setIndex((i) => i - 1);
  }, [stage, index]);

  const open = useCallback(() => {
    setOpening(true);
    window.setTimeout(() => {
      setStage("letter");
      setIndex(0);
      setDir(1);
    }, 900);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Enter" && stage === "cover" && !opening) open();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, open, stage, opening]);

  useEffect(() => {
    scrollBox.current?.scrollTo({ top: 0 });
  }, [index, stage]);

  const onTouchStart = (e: React.TouchEvent) => {
    const p = e.touches[0];
    touch.current = { x: p.clientX, y: p.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touch.current;
    touch.current = null;
    if (!start || stage === "cover") return;
    const p = e.changedTouches[0];
    const dx = p.clientX - start.x;
    const dy = p.clientY - start.y;
    if (Math.abs(dx) < 55 || Math.abs(dy) > Math.abs(dx)) return;
    if (dx < 0) next();
    else prev();
  };

  return (
    <main
      className="relative flex w-full flex-col overflow-hidden"
      style={{ minHeight: "100dvh" }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {stage === "cover" && <Cover onOpen={open} opening={opening} />}

      {stage === "letter" && (
        <div className="flex min-h-[100dvh] w-full flex-col px-5 pt-8 pb-7 sm:px-8">
          <div className="mx-auto flex w-full max-w-[38rem] flex-1 flex-col">
            <div
              key={index}
              className={
                (dir === 1 ? "animate-turn" : "animate-turn-back") +
                " paper-sheet relative flex flex-1 flex-col rounded-sm border border-border/70 px-6 py-9 sm:px-10 sm:py-12"
              }
            >
              <span className="pointer-events-none absolute right-0 top-0 h-10 w-10 border-l border-b border-border/70 bg-muted/60" />
              <div
                ref={scrollBox}
                className="letter-prose flex-1 overflow-y-auto pr-1"
              >
                {slides[index].lines.map((line, i) =>
                  line.gap ? (
                    <div key={i} className="h-5" aria-hidden="true" />
                  ) : (
                    <p
                      key={i}
                      className={
                        "animate-rise " +
                        (line.strong
                          ? "font-medium text-ink"
                          : "text-ink/90")
                      }
                      style={{ animationDelay: `${Math.min(i * 70, 560)}ms` }}
                    >
                      {line.text}
                    </p>
                  ),
                )}
              </div>
              <div className="pt-7">
                <Rule />
              </div>
            </div>

            <nav className="mt-6 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={prev}
                disabled={index === 0}
                className="rounded-full px-4 py-2 text-sm tracking-wide text-ink-soft transition-colors hover:text-ink disabled:opacity-0"
              >
                ← Kembali
              </button>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  {slides.map((_, i) => (
                    <span
                      key={i}
                      className={
                        "h-1.5 rounded-full transition-all duration-500 " +
                        (i === index
                          ? "w-4 bg-primary/70"
                          : "w-1.5 bg-ink-soft/30")
                      }
                    />
                  ))}
                </div>
                <span className="font-hand text-base text-ink-soft">
                  {index + 1} / {TOTAL}
                </span>
              </div>

              <button
                type="button"
                onClick={next}
                className="rounded-full border border-border bg-secondary/60 px-5 py-2 text-sm tracking-wide text-ink transition-colors hover:bg-secondary"
              >
                Lanjut →
              </button>
            </nav>
          </div>
        </div>
      )}

      {stage === "final" && <Final onBack={prev} />}
    </main>
  );
}

/* ---------------- cover ---------------- */

function Cover({ onOpen, opening }: { onOpen: () => void; opening: boolean }) {
  return (
    <div
      className={
        "flex min-h-[100dvh] flex-col items-center justify-center px-6 py-14 transition-all duration-700 " +
        (opening ? "scale-[1.04] opacity-0" : "opacity-100")
      }
    >
      <div className="animate-soft-fade w-full max-w-sm">
        <div
          className="relative mx-auto aspect-[3/2] w-full rounded-sm border border-border/80 bg-envelope"
          style={{ boxShadow: "var(--shadow-letter)" }}
        >
          <div
            className="absolute inset-x-0 top-0 origin-top"
            style={{
              animation: opening
                ? "flap-open 0.85s cubic-bezier(0.4,0,0.2,1) forwards"
                : undefined,
              transformStyle: "preserve-3d",
            }}
          >
            <svg viewBox="0 0 300 150" className="w-full" aria-hidden="true">
              <path
                d="M0 0 L150 112 L300 0 Z"
                fill="var(--envelope)"
                stroke="var(--border)"
                strokeWidth="1"
              />
            </svg>
          </div>
          <span className="absolute left-1/2 top-[58%] grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full border border-primary/30 bg-card text-ink-soft">
            <Sprig className="h-4 w-8" />
          </span>
        </div>

        <div className="mt-11 text-center">
          <h1 className="font-hand text-4xl leading-tight text-ink sm:text-5xl">
            Untuk abang
          </h1>
          <p className="mt-4 text-sm italic leading-relaxed text-ink-soft">
            sebuah surat yang mungkin menjadi yang terakhir
          </p>

          <button
            type="button"
            onClick={onOpen}
            disabled={opening}
            className="mt-10 rounded-full border border-primary/40 bg-card px-8 py-3 text-base tracking-wide text-ink transition-all duration-300 hover:bg-secondary/70 hover:shadow-sm"
          >
            Buka surat
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- final ---------------- */

function Final({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center px-7 py-20 text-center">
      <p
        className="animate-rise font-hand text-3xl leading-snug text-ink sm:text-4xl"
        style={{ animationDelay: "200ms" }}
      >
        Sampai jumpa, manusia favoritku.
      </p>

      <div className="h-24 sm:h-32" aria-hidden="true" />

      <p
        className="animate-soft-fade max-w-xs text-base italic leading-relaxed text-ink-soft"
        style={{ animationDelay: "2.1s" }}
      >
        Untuk seseorang yang kucintai sejak tahun 2023 — detik ini.
      </p>

      <p
        className="animate-soft-fade mt-8 text-lg tracking-wide text-ink"
        style={{ animationDelay: "3.2s" }}
      >
        Deenan Alfharaby
      </p>
      <p
        className="animate-soft-fade mt-2 text-xs tracking-[0.2em] text-ink-soft/80 uppercase"
        style={{ animationDelay: "3.6s" }}
      >
        30 September 2026
      </p>

      <div className="mt-20">
        <Rule />
        <button
          type="button"
          onClick={onBack}
          className="animate-soft-fade mt-6 text-xs italic text-ink-soft/70 transition-colors hover:text-ink-soft"
          style={{ animationDelay: "4.2s" }}
        >
          surat ini selesai.
        </button>
      </div>
    </div>
  );
}

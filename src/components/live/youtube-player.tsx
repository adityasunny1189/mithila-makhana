"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import clsx from "clsx";
import { embedUrl } from "@/lib/youtube-embed";
import { LeafPad, Lotus, Pearl } from "../art";

type Props = {
  videoId?: string | null;
  channelId?: string;
  title: string;
  live?: boolean;
  className?: string;
  /** Larger poster treatment for the main stage. */
  stage?: boolean;
  /** Shown when there is nothing to play yet. */
  emptyNote?: string;
};

/**
 * Click-to-load YouTube player. Nothing loads from YouTube until the viewer presses play,
 * which keeps the page fast and avoids third-party cookies on first visit.
 */
export function YouTubePlayer({ videoId, channelId, title, live, className, stage, emptyNote = "Recording coming soon" }: Props) {
  const [playing, setPlaying] = useState(false);
  const src = embedUrl({ videoId, channelId, autoplay: true });

  return (
    <div
      className={clsx(
        "relative aspect-video w-full overflow-hidden bg-pond-deep",
        stage ? "rounded-[2rem] border-[3px] border-ink" : "rounded-3xl",
        className,
      )}
    >
      {playing && src ? (
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 size-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => src && setPlaying(true)}
          disabled={!src}
          className="group absolute inset-0 size-full cursor-pointer text-left disabled:cursor-default"
          aria-label={src ? `Play: ${title}` : `${title} — coming soon`}
        >
          {videoId ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt=""
              className="absolute inset-0 size-full object-cover opacity-80 transition duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,#2f5a3f,#0d1c13_80%)]">
              <LeafPad className="absolute -top-[20%] -left-[6%] w-[45%] rotate-12 opacity-80" />
              <LeafPad className="absolute -right-[8%] -bottom-[30%] w-[50%] -rotate-45 opacity-70" color="#5d8a55" />
              <Lotus className="absolute top-[12%] right-[22%] w-[18%] opacity-90" color="#8e4fa0" accent="#c58bd4" />
              <Pearl seed={5} className="animate-float absolute top-[30%] left-[30%] w-[9%]" />
              <Pearl seed={8} className="animate-float-slow absolute top-[22%] left-[46%] w-[6%]" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
          {src && (
            <span
              className={clsx(
                "absolute top-1/2 left-1/2 grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sindoor text-pearl shadow-2xl transition duration-500 group-hover:scale-110",
                stage ? "size-24" : "size-16",
              )}
            >
              <span className="animate-pulse-ring absolute inset-0 rounded-full bg-sindoor/60" />
              <Play className={clsx("relative fill-current", stage ? "size-9" : "size-6")} />
            </span>
          )}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
            <div>
              {live && (
                <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-sindoor px-3 py-1 text-[11px] font-extrabold tracking-[0.2em] text-pearl uppercase">
                  <span className="size-1.5 animate-pulse rounded-full bg-pearl" /> Live now
                </span>
              )}
              <p className={clsx("font-display font-semibold text-pearl", stage ? "text-2xl sm:text-3xl" : "text-xl")}>{title}</p>
              {!src && <p className="mt-1 text-sm text-cream/60">{emptyNote}</p>}
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

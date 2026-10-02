"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import clsx from "clsx";
import { embedUrl } from "@/lib/youtube-embed";
import { Scene } from "../mithila/scenes";

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
        "relative aspect-video w-full overflow-hidden bg-kohl",
        stage ? "rounded-[2rem] border-[3px] border-kohl" : "rounded-3xl",
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
            <Scene name="farming" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-kohl/85 via-kohl/20 to-transparent" />
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
              {!src && <p className="mt-1 text-sm text-paper/70">{emptyNote}</p>}
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

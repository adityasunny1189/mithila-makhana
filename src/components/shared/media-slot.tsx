"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, PlayCircle } from "lucide-react";
import clsx from "clsx";
import type { SceneKey } from "@/lib/content";
import { Frame, type BandKind } from "../mithila/borders";
import { Scene } from "../mithila/scenes";
import { YouTubePlayer } from "../live/youtube-player";

type Props = {
  scene: SceneKey;
  alt: string;
  photo?: string | null;
  video?: string | null;
  youtubeId?: string | null;
  band?: BandKind;
  priority?: boolean;
};

/**
 * Framed media for a journey step: a real photo (or the painted scene until one is added),
 * plus a Photo / Video toggle when a clip is available.
 */
export function MediaSlot({ scene, alt, photo, video, youtubeId, band = "triangles", priority }: Props) {
  const hasVideo = Boolean(video || youtubeId);
  const [tab, setTab] = useState<"photo" | "video">("photo");

  return (
    <div>
      <Frame kind={band} className="shadow-[6px_6px_0_var(--kohl)]">
        <div className="relative aspect-[4/3] overflow-hidden bg-paper">
          {tab === "video" && hasVideo ? (
            video ? (
              <video src={video} controls autoPlay playsInline className="absolute inset-0 size-full bg-kohl object-cover" />
            ) : (
              <YouTubePlayer videoId={youtubeId} title={alt} className="absolute inset-0 !aspect-auto h-full !rounded-none" />
            )
          ) : photo ? (
            <Image src={photo} alt={alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority={priority} />
          ) : (
            <Scene name={scene} className="absolute inset-0 size-full" />
          )}
        </div>
      </Frame>
      {hasVideo && (
        <div className="mt-5 inline-flex rounded-full border-2 border-kohl bg-pearl p-1" role="tablist">
          {(
            [
              ["photo", "Photo", Camera],
              ["video", "Watch video", PlayCircle],
            ] as const
          ).map(([key, label, Icon]) => (
            <button
              key={key}
              role="tab"
              aria-selected={tab === key}
              onClick={() => setTab(key)}
              className={clsx(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition",
                tab === key ? "bg-kohl text-haldi" : "text-kohl hover:bg-paper",
              )}
            >
              <Icon className="size-4" /> {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

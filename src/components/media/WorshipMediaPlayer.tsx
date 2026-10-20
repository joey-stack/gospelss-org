"use client";

import React, { useState, useEffect } from "react";
import { Play, Pause, Volume2, Music, Sparkles, BookOpen, Clock } from "lucide-react";

interface Track {
  id: string;
  title: string;
  artist: string;
  duration: string;
  recordedAt: string;
  lyrics: string;
}

const defaultTracks: Track[] = [
  {
    id: "trk-1",
    title: "Helig Ande Fyll Denna Plats (Live i Göteborg)",
    artist: "Gospels Worship Team",
    duration: "6:42",
    recordedAt: "Holy Spirit Worship Göteborg",
    lyrics:
      "Helig Ande, fyll denna plats med Din härlighet\nVåra hjärtan ropar ut: Jesus, kom och var vår kung\nDär två eller tre är samlade i Ditt namn\nDär är Du mitt ibland oss.",
  },
  {
    id: "trk-2",
    title: "Göteborg Tillhör Jesus",
    artist: "Gospels Youth Collective",
    duration: "5:18",
    recordedAt: "Göteborgs Lovsångssamling",
    lyrics:
      "Över varje gata, över varje bro\nReser vi en lovsång, i tro och i ro\nGöteborg tillhör Jesus, Hans ljus ska bryta fram\nNåd och förvandling för varje människa.",
  },
  {
    id: "trk-3",
    title: "Där Två Eller Tre (Matteus 18)",
    artist: "Gospels Akustisk",
    duration: "4:35",
    recordedAt: "Pastoral Böneafton",
    lyrics:
      "I stillhet inför Dig, böjer vi våra knän\nDu hör varje viskning, Du känner varje bön\nTy där två eller tre är församlade i Ditt namn, där är Du.",
  },
];

export function WorshipMediaPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(25);
  const [showLyrics, setShowLyrics] = useState(false);

  const currentTrack = defaultTracks[currentTrackIndex];

  // Simulated playback timer
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 400);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section
      id="media"
      className="section-sacred"
      style={{
        backgroundColor: "var(--bg-card)",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container-page">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 3rem auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.375rem 1rem",
              borderRadius: "var(--radius-pill)",
              backgroundColor: "var(--color-turquoise-50)",
              border: "1px solid var(--color-turquoise-200)",
              color: "var(--color-turquoise-700)",
              fontSize: "var(--text-xs)",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "1rem",
            }}
          >
            <Music size={14} />
            <span>Worship Media & Lovsång</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "var(--color-charcoal-900)",
              marginBottom: "1rem",
              lineHeight: 1.15,
            }}
          >
            Lyssna på liveupptagningar från Göteborg
          </h2>

          <p style={{ color: "var(--color-charcoal-700)", fontSize: "var(--text-base)", lineHeight: 1.6 }}>
            Upplev atmosfären av tillbedjan och helighet. Våra lovsångsinspelningar delas fritt för
            personlig andakt, bönegrupper och församlingar.
          </p>
        </div>

        {/* Player Container */}
        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            backgroundColor: "var(--bg-canvas)",
            borderRadius: "var(--radius-2xl)",
            border: "1px solid var(--border-subtle)",
            boxShadow: "var(--shadow-card)",
            overflow: "hidden",
          }}
        >
          {/* Active Track Highlight Banner */}
          <div
            style={{
              padding: "2rem",
              backgroundColor: "var(--color-charcoal-900)",
              color: "var(--color-white)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1.5rem", position: "relative", zIndex: 10, flexWrap: "wrap" }}>
              <div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    color: "var(--color-turquoise-400)",
                    fontSize: "var(--text-xs)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "0.5rem",
                  }}
                >
                  <Sparkles size={13} />
                  <span>Nu Spelas · {currentTrack.recordedAt}</span>
                </span>
                <h3 style={{ fontSize: "var(--text-2xl)", fontWeight: 700, color: "var(--color-white)", marginBottom: "0.25rem" }}>
                  {currentTrack.title}
                </h3>
                <p style={{ color: "var(--color-charcoal-400)", fontSize: "var(--text-sm)" }}>
                  {currentTrack.artist}
                </p>
              </div>

              {/* Animated Equalizer Wave */}
              <div style={{ display: "flex", alignItems: "flex-end", gap: "3px", height: "28px" }}>
                {[35, 75, 45, 90, 60, 30, 80, 50, 95, 40].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      width: "4px",
                      height: isPlaying ? `${h}%` : "20%",
                      backgroundColor: "var(--color-turquoise-500)",
                      borderRadius: "2px",
                      transition: "height 200ms ease",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Playback Controls & Scrubber */}
            <div style={{ marginTop: "2rem", position: "relative", zIndex: 10 }}>
              {/* Progress Bar */}
              <div
                style={{
                  width: "100%",
                  height: "6px",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderRadius: "var(--radius-pill)",
                  overflow: "hidden",
                  cursor: "pointer",
                  marginBottom: "0.75rem",
                }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickPos = (e.clientX - rect.left) / rect.width;
                  setProgress(Math.round(clickPos * 100));
                }}
              >
                <div
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    backgroundColor: "var(--color-turquoise-500)",
                    borderRadius: "var(--radius-pill)",
                    transition: "width 150ms linear",
                  }}
                />
              </div>

              {/* Control Buttons */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? "Pausa lovsång" : "Spela lovsång"}
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "var(--radius-pill)",
                      backgroundColor: "var(--color-turquoise-500)",
                      color: "var(--color-charcoal-900)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 0 20px rgba(20, 184, 166, 0.4)",
                      cursor: "pointer",
                    }}
                  >
                    {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" style={{ marginLeft: "2px" }} />}
                  </button>

                  <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-400)" }}>
                    {isPlaying ? "01:42" : "00:00"} / {currentTrack.duration}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <button
                    onClick={() => setShowLyrics(!showLyrics)}
                    style={{
                      backgroundColor: showLyrics ? "rgba(20, 184, 166, 0.2)" : "rgba(255, 255, 255, 0.1)",
                      color: showLyrics ? "var(--color-turquoise-400)" : "var(--color-white)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      padding: "0.375rem 0.875rem",
                      borderRadius: "var(--radius-pill)",
                      fontSize: "var(--text-xs)",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      cursor: "pointer",
                    }}
                  >
                    <BookOpen size={14} />
                    <span>{showLyrics ? "Dölj Text" : "Sångtext"}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Expandable Lyrics Drawer */}
            {showLyrics && (
              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1.25rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                  whiteSpace: "pre-line",
                  fontSize: "var(--text-sm)",
                  color: "var(--color-charcoal-300)",
                  lineHeight: 1.8,
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                }}
              >
                {currentTrack.lyrics}
              </div>
            )}
          </div>

          {/* Tracklist Selector */}
          <div style={{ padding: "1.5rem 2rem" }}>
            <span
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                color: "var(--color-charcoal-500)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              Alla Spår (3)
            </span>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {defaultTracks.map((track, idx) => {
                const isSelected = idx === currentTrackIndex;
                return (
                  <div
                    key={track.id}
                    onClick={() => {
                      setCurrentTrackIndex(idx);
                      setIsPlaying(true);
                      setProgress(0);
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.875rem 1rem",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: isSelected ? "var(--color-warm-grey-100)" : "transparent",
                      border: isSelected ? "1px solid var(--color-turquoise-500)" : "1px solid transparent",
                      cursor: "pointer",
                      transition: "all var(--transition-fast)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <span
                        style={{
                          fontSize: "var(--text-xs)",
                          fontWeight: 700,
                          color: isSelected ? "var(--color-turquoise-600)" : "var(--color-charcoal-400)",
                          minWidth: "18px",
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <div>
                        <h4
                          style={{
                            fontSize: "var(--text-sm)",
                            fontWeight: isSelected ? 700 : 500,
                            color: isSelected ? "var(--color-charcoal-900)" : "var(--color-charcoal-700)",
                            marginBottom: "0.125rem",
                          }}
                        >
                          {track.title}
                        </h4>
                        <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)" }}>
                          {track.artist}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <span style={{ fontSize: "var(--text-xs)", color: "var(--color-charcoal-500)" }}>
                        {track.duration}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

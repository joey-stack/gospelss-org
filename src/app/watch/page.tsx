"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { RSVPModal } from "@/components/modals/RSVPModal";
import { SwishModal } from "@/components/modals/SwishModal";
import { PrayerModal } from "@/components/modals/PrayerModal";
import { VolunteerModal } from "@/components/modals/VolunteerModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Music,
  Headphones,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Share2,
  Download,
  ExternalLink,
  Search,
  X,
  Check,
  CheckCircle,
  FileText,
  ChevronRight,
  ArrowRight,
  Heart,
  Church,
  SlidersHorizontal,
  Bookmark,
  Disc3,
  Quote,
} from "lucide-react";

interface VideoItem {
  id: string;
  category: "all" | "concert" | "acoustic" | "prayer" | "teaching";
  categoryLabel: { sv: string; en: string };
  title: { sv: string; en: string };
  subtitle: { sv: string; en: string };
  duration: string;
  venue: { sv: string; en: string };
  recordedDate: { sv: string; en: string };
  image: string;
  description: { sv: string; en: string };
  leaders: string;
  scripture: string;
  youtubeId?: string;
  hasChords?: boolean;
}

interface AudioTrack {
  id: number;
  title: { sv: string; en: string };
  artist: string;
  releaseType: { sv: string; en: string };
  year: string;
  duration: string;
  lyrics: { sv: string; en: string };
  chords: string;
  spotifyUrl: string;
  appleUrl: string;
}

export default function WatchPage() {
  const { t, language } = useLanguage();

  // Navigation Modals
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [swishOpen, setSwishOpen] = useState(false);
  const [prayerOpen, setPrayerOpen] = useState(false);
  const [volunteerOpen, setVolunteerOpen] = useState(false);

  // Filter & Search
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Media Player Modals
  const [activeVideoModal, setActiveVideoModal] = useState<VideoItem | null>(null);
  const [activeChordModal, setActiveChordModal] = useState<AudioTrack | null>(null);
  const [copiedShare, setCopiedShare] = useState<string | null>(null);

  // Audio Playback Simulation State
  const [playingTrackId, setPlayingTrackId] = useState<number | null>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackProgress, setPlaybackProgress] = useState<number>(32);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);

  // Simulated progress when playing
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setPlaybackProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleShare = (id: string, title: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/watch#${id}`);
      setCopiedShare(id);
      setTimeout(() => setCopiedShare(null), 2500);
    }
  };

  // Featured Premiere
  const featuredPremiere: VideoItem = {
    id: "frihamnen-premiere-2025",
    category: "concert",
    categoryLabel: { sv: "Full Konsertinspelning", en: "Full Concert Premiere" },
    title: {
      sv: "Göteborg Lovsjunger — Live från Frihamnskyrkan 2025",
      en: "Gothenburg Praises — Live from Frihamnen Sanctuary 2025",
    },
    subtitle: {
      sv: "Sofia Lindqvist & Västra Götalands Lovsångskollektiv",
      en: "Sofia Lindqvist & West Sweden Worship Collective",
    },
    duration: "34:12",
    venue: { sv: "Frihamnskyrkan, Göteborg", en: "Frihamnen Sanctuary Hall, Gothenburg" },
    recordedDate: { sv: "18 Januari 2025", en: "January 18, 2025" },
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqeRi-2XQyngf6GwRYCdkBl_GtVpaXkRyJQ70dOQIehNsM4E0StgONgZHOdkblv-3mWxQRchq7C25Ox9VXAX3swobcyY1NBpVoEgZ5JVcGq3b4VY8B9LsKvD8ERkjZgKW5j1iJhO9JEBQqt00uC1cyU48zUZJTgr4lTYad7GdXelZ-HJUZtULb6wuKm4srdIwQRg2YAg-eXIObjAg4tFwe0rwk6h8XFmfqx5VNXDgPV-B0EQczBLgy-Q",
    description: {
      sv: "En historisk ekumenisk lovsångskväll som samlade över 1 400 körsångare, musiker och församlingsbor från hela Göteborgsområdet. Inspelad med 96kHz multitrack master direkt från ljudbordet i Frihamnen.",
      en: "A landmark ecumenical worship night gathering over 1,400 vocalists, musicians, and believers from across Gothenburg. Captured in pristine 96kHz multitrack master direct from the sanctuary soundboard.",
    },
    leaders: "Sofia Lindqvist, Elias Mårtensson & Göteborg United Choir",
    scripture: "Psaltaren 98:1–4",
    hasChords: true,
  };

  // Video Archives Catalog
  const videoArchive: VideoItem[] = [
    {
      id: "ande-kom-haga",
      category: "acoustic",
      categoryLabel: { sv: "Akustisk Session", en: "Acoustic Session" },
      title: {
        sv: "Ande Kom — Intim Böneafton i Hagakyrkan",
        en: "Spirit Come (Ande Kom) — Intimate Sanctuary Night",
      },
      subtitle: {
        sv: "Linnéa Bergström & Viktor Sandell",
        en: "Linnéa Bergström & Viktor Sandell",
      },
      duration: "05:18",
      venue: { sv: "Hagakyrkan, Göteborg", en: "Hagakyrkan, Gothenburg" },
      recordedDate: { sv: "8 November 2024", en: "November 8, 2024" },
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCbLeWFoHVtUu-FkBSpk14m3PiiBDRbBCVhzTqzSg0biZ2zz15qJWpC6s0Tl9RDRFccifrb6ufE8w4-DuOYYzkymSAMQWXoxehUh8MX3Ce8o8mXQXKUP-XJWDNhjyaCG53U_iMEHePzW9NQuEw8Jfwj-E7BGoHzJ_71X4z_21upoZ8jVCSa4tuvqU4slhIU9rwGStf7uO5CYNhKOW_5TU6fDVHmah4lnhFw9Sv7a-a5c0rRBcavtTGdog",
      description: {
        sv: "Spontan akustisk bönelovsång inspelad i stearinljusskenet med flygel och akustisk gitarr. En bön om andlig förnyelse bland unga i staden.",
        en: "Spontaneous acoustic prayer song captured by candlelight with grand piano and acoustic guitar, lifting up prayer for young people in the city.",
      },
      leaders: "Linnéa Bergström, Viktor Sandell",
      scripture: "Romarbrevet 8:26",
      hasChords: true,
    },
    {
      id: "du-ar-trofast",
      category: "acoustic",
      categoryLabel: { sv: "Nordisk Psalmton", en: "Nordic Acoustic Hymn" },
      title: {
        sv: "Du Är Trofast (Nordisk Folkmelodi & Cello)",
        en: "Great is Thy Faithfulness (Nordic Folk & Cello)",
      },
      subtitle: {
        sv: "Johan Berg & Cello Trio",
        en: "Johan Berg & Cello Trio",
      },
      duration: "08:34",
      venue: { sv: "Sankt Pauli Församling", en: "Sankt Pauli Sanctuary" },
      recordedDate: { sv: "22 September 2024", en: "September 22, 2024" },
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB3A6eksmzKmWFMb3hYmOtklp-x_FClHUN3hGU15e9tJRi9EptNbcVmazgCZh0i9KoOMn91uzE0Hr3lWWkoSn2n6xKYzfuDtKre3-PrI-Jz0xzipDrJbOZDYfRBTtsT7nSqLaPvTnfLMB2j4VjstfGyk7HIqhZEKlNY-MadjoCFdvNFdDRgauJqMHrKM6FUPv9J2Z5bZjOE0ETRL69QrRAkNSB7-6TTZ0hNY-oui8Wx3JAiXNxRIHVoXA",
      description: {
        sv: "Klassisk kristen hymn omstöpt i skandinaviska folktoner med akustisk cello, kontrabas och stämningsfull stämsång.",
        en: "Timeless Christian hymn reimagined through Scandinavian folk harmonies, acoustic cello, upright bass, and reverent vocal arrangements.",
      },
      leaders: "Johan Berg, Anna Lundqvist (Cello)",
      scripture: "Klagovisorna 3:22–23",
      hasChords: true,
    },
    {
      id: "floder-i-norden",
      category: "concert",
      categoryLabel: { sv: "Live Lovsång", en: "Live Concert Set" },
      title: {
        sv: "Floder i Norden — Live från Hamnmagasinen",
        en: "Rivers in the North — Live from Gothenburg Docks",
      },
      subtitle: {
        sv: "GOSPELS Ungdomsband & Blåsare",
        en: "GOSPELS Youth Collective & Brass",
      },
      duration: "06:45",
      venue: { sv: "Barken Viking, Göteborg", en: "Gothenburg Harbor Wharf" },
      recordedDate: { sv: "14 Juni 2024", en: "June 14, 2024" },
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB-ipUUUqndvmTDxu5fN3i1inPjKOKdavVfSEDtNdXsGIXUDJlaWjm37cc9o20tPvehF6reZACVbPUXCLj8M5bWkDeNH9e4fd_UPt0iPQfUKc_nZqqVslyK0QJSN9RJv7XhYfrlp3Z_vJghiNcw4Mq3ThNU_2kphnyVKQaAExxRATkzbc71jORWQN-LzVh36kEaXiqBS8fGJgPW0BtuxQv1ZEypod0LR5kLLI0B4CupvX4-e399cOlayQ",
      description: {
        sv: "Kraftfull lovsångssång framförd live under Göteborgs ekumeniska ungdomshelg med över 1 200 deltagare och full blåsarsektion.",
        en: "High-energy praise anthem sung live during the Gothenburg Ecumenical Youth Weekend with 1,200 participants and dynamic brass arrangement.",
      },
      leaders: "Klara Söderberg, David Ek",
      scripture: "Jesaja 43:19",
      hasChords: true,
    },
    {
      id: "hjartats-bon-medley",
      category: "prayer",
      categoryLabel: { sv: "Förbön & Lovsång", en: "Spontaneous Intercession" },
      title: {
        sv: "Hjärtats Bön — Nattvaka & Förbön för Göteborg",
        en: "The Heart's Prayer — Gothenburg Night Vigil",
      },
      subtitle: {
        sv: "Klara Söderberg & Lovsångsteam",
        en: "Klara Söderberg & Prayer Ensemble",
      },
      duration: "11:02",
      venue: { sv: "Masthuggskyrkan", en: "Masthuggskyrkan, Gothenburg" },
      recordedDate: { sv: "12 Oktober 2024", en: "October 12, 2024" },
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBxJxMqjVhOP_kaPJk1ovXqJq6ExkmnQ3sXPss0TbZS3WBzLHFwGy29uv-DDb5M4bDEPM4N-wLGoPdZF2dMTVs2-EZRj95e8pQX_whYHs1a26WS9PYC2yuHSS5J-3J48NBGB4RDYK4m-bkEjQeMRHbVSZOGwvh1v5Qd6APYdQUqqLHIlTONcP-A6pzWmNzCa-7GEtcNO9IdMHv3KHJvLkjijDzan2gTY-bts-H1hZ6HKBNWaYwc3VXdvA",
      description: {
        sv: "Spontan nattlovsång och bön med utsikt över hamninloppet. En stilla stund av överlåtelse och förbön för stadens ledare och utsatta.",
        en: "Spontaneous night praise and intercession overlooking Gothenburg Harbor. A contemplative hour of prayer for city leadership and vulnerable neighbors.",
      },
      leaders: "Klara Söderberg, Samuel Jonsson",
      scripture: "Jeremia 29:7",
      hasChords: false,
    },
    {
      id: "en-stad-byggd-pa-bon",
      category: "teaching",
      categoryLabel: { sv: "Undervisning & Vision", en: "Teaching & Vision" },
      title: {
        sv: "En Stad Byggd på Bön — Vår Andliga Historia",
        en: "A City Built on Prayer — Gothenburg's Spiritual Heritage",
      },
      subtitle: {
        sv: "Pastor Marcus Ek",
        en: "Pastor Marcus Ek",
      },
      duration: "28:15",
      venue: { sv: "Betlehemskyrkan, Vasastan", en: "Betlehemskyrkan, Gothenburg" },
      recordedDate: { sv: "4 Maj 2024", en: "May 4, 2024" },
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBc2m0fnGXFZS6G7Qqb1lxrsn_YJm_C0tj94Ce3xKgm-arNcSekp11hOtHuF_A0b9Ki8t9xQNxrY6-4JbyXuD4C7ywhjc3dGGkLw7eNkFut3j4_bfg0Z4CPW6rm6mvl2_kPw1kmKt_ALxWumW-YtDwO8boO26IlgaKJyy6RWyMA0HIy8MMu_yZxwdKUKURrCnbO097wJrc2_UAWsA6Xm5lUt2jlDqUBAtKOTa0ecQdwRq7FRjCE0LOPdg",
      description: {
        sv: "Inblick i väckelsehistorien kring Göta älv, hur bönen format Göteborgs sociala ansvar och varför lovsång föregår verklig förvandling.",
        en: "Keynote on revival history along the Göta River, how faith shaped Gothenburg's civic compassion, and why prayer precedes lasting renewal.",
      },
      leaders: "Pastor Marcus Ek",
      scripture: "2 Krönikeboken 7:14",
      hasChords: false,
    },
    {
      id: "oppna-himlen-session",
      category: "concert",
      categoryLabel: { sv: "Singelrelease Live", en: "Live Single Release" },
      title: {
        sv: "Öppna Himlen — Live Soundboard Session",
        en: "Open the Heavens (Öppna Himlen) — Live Master",
      },
      subtitle: {
        sv: "GOSPELS Kör & Blåsarensemble",
        en: "GOSPELS Gothenburg Choir & Horns",
      },
      duration: "04:52",
      venue: { sv: "Frihamnskyrkan Stora Salen", en: "Frihamnen Main Auditorium" },
      recordedDate: { sv: "18 Januari 2025", en: "January 18, 2025" },
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDuP78I8efXvin7kNbRRLK_VgY_sMafbfgLanPBV4pzx9QVPw2PFah7OXgT8dS-qhNS9bsqvjuDgvNWnlpHC7OprrXZtF7TD404Lu-2GVya-B2yRUbGK89W8zXxE9bTwo9kSSbwyRZwbnvkXSwWy_Vnf0nsTOh36avR6K0rBgOxuGcJbKX-pWnA4t8h7DhCiPzcZ60ja9jxmhCaD_eV67zvkiepEG9lTaLcmvWeo6xZP-O3OvbnsZDQpQ",
      description: {
        sv: "Komplett körversion med dynamiskt blåsarrangemang och församlingssång. Originalarrangemang för nordiska kyrkokörer.",
        en: "Full ensemble choral master featuring horn section and congregational harmony. Original arrangement crafted for Nordic worship choirs.",
      },
      leaders: "Elias Mårtensson & Sofia Lindqvist",
      scripture: "Hesekiel 1:1",
      hasChords: true,
    },
  ];

  // Audio Tracks & Chords
  const audioTracks: AudioTrack[] = [
    {
      id: 1,
      title: {
        sv: "Ande Kom (Live i Göteborg)",
        en: "Spirit Come / Ande Kom (Live in Gothenburg)",
      },
      artist: "GOSPELS Worship feat. Linnéa & Viktor",
      releaseType: { sv: "Akustisk Singel", en: "Acoustic Single" },
      year: "2025",
      duration: "05:18",
      lyrics: {
        sv: "Ande kom, blås över staden nu. I varje hjärta, tänd din eld på nytt. Från hamnens kajer till bergens topp, du är vår räddare, du är vårt hopp.",
        en: "Spirit come, breathe on our city now. In every heart, ignite your fire anew. From harbor piers unto the highest hill, you are our savior, our hope until the end.",
      },
      chords: `Tonart: D-dur | BPM: 68 | Taktart: 4/4

[INTRO]
D  |  G/D  |  Bm7  |  A

[VERS 1]
D                G/D
Ande kom, blås över staden nu
Bm7              A
I varje hjärta, tänd din eld på nytt
D/F#             G
Från hamnens kajer till bergens topp
Em7              Asus4  A
Du är vår räddare, du är vårt hopp

[KÖR]
D                 A/C#
Vi ropar kom, o helige Ande
Bm7               G
Fyll våra rum med din ljuva nåd
D/F#              A
Låt hela staden få se din härlighet
Em7      A        D
Jesus, ditt namn är stort`,
      spotifyUrl: "https://spotify.com",
      appleUrl: "https://apple.com",
    },
    {
      id: 2,
      title: {
        sv: "Floder i Norden (Live från Frihamnen)",
        en: "Rivers in the North (Live from Frihamnen)",
      },
      artist: "GOSPELS Ungdomsband & Blåsare",
      releaseType: { sv: "Live EP Master", en: "Live EP Master" },
      year: "2025",
      duration: "06:45",
      lyrics: {
        sv: "Se, jag gör något helt nytt! I öknen bryter källor fram. Floder i Norden, strömmar av liv, vi sjunger ditt heliga namn.",
        en: "Behold, I make all things new! Springs break forth in the wilderness. Rivers in the North, streams of living water, we exalt your holy name.",
      },
      chords: `Tonart: G-dur | BPM: 122 | Taktart: 4/4

[INTRO]
G  |  Cadd9  |  Em7  |  D

[VERS 1]
G                 Cadd9
Se, jag gör något helt nytt nu
Em7               D
I kalla norden bryter våren ut
G/B               Cadd9
Över vår stad, från älv till hav
Am7               Dsus4  D
Ditt rike kommer, du bryter varje grav

[KÖR]
G                 D
Floder i norden, strömmar av liv
Em7               Cadd9
Sjung ut hans ära, han vann vår strid
G/B               D
Jesus är Herre, i evighet
Am7      D        G
Hela vår stad din nåd har sett`,
      spotifyUrl: "https://spotify.com",
      appleUrl: "https://apple.com",
    },
    {
      id: 3,
      title: {
        sv: "Öppna Himlen (Sanctuary Live)",
        en: "Open the Heavens (Sanctuary Live)",
      },
      artist: "GOSPELS Göteborg Kör & Blåsarensemble",
      releaseType: { sv: "Körsingel", en: "Choral Single" },
      year: "2024",
      duration: "04:52",
      lyrics: {
        sv: "Öppna himlen, låt ditt regn falla ner. Vi söker ditt ansikte, vi längtar efter mer. Helig är Herren sebaot, all jorden är full av hans ära.",
        en: "Open the heavens, let your rain pour down. We seek your face, we long for more of you. Holy is the Lord of hosts, all creation is filled with his glory.",
      },
      chords: `Tonart: Bb-dur | BPM: 74 | Taktart: 3/4

[INTRO]
Bb  |  Eb/Bb  |  Gm7  |  Fsus4

[VERS 1]
Bb               Eb/Bb
Öppna himlen, låt ditt regn falla ner
Gm7              Fsus4
Vi söker ditt ansikte, vi längtar efter mer
Eb               Bb/D
Se våra händer som lyfts i tillbedjan
Cm7              Fsus4  F
Herre, gör under igen

[KÖR]
Bb               Fsus4
Helig är Herren sebaot
Gm7              Eb
All jorden är full av hans ära
Bb/D             Fsus4
Värdig är Lammet som slaktat blev
Cm7      F       Bb
Härskar i evighet`,
      spotifyUrl: "https://spotify.com",
      appleUrl: "https://apple.com",
    },
    {
      id: 4,
      title: {
        sv: "Du Är Trofast (Akustisk Celloversion)",
        en: "Great is Thy Faithfulness (Acoustic Cello)",
      },
      artist: "Johan Berg & Cello Trio",
      releaseType: { sv: "Akustisk Session", en: "Acoustic Session" },
      year: "2024",
      duration: "08:34",
      lyrics: {
        sv: "Stor är din trofasthet, Herre min Fader. Ingen förändring finns hos dig nånsin. Nåd för var morgon och hjälp för var dag.",
        en: "Great is Thy faithfulness, O God my Father. There is no shadow of turning with Thee. Morning by morning new mercies I see.",
      },
      chords: `Tonart: C-dur | BPM: 62 | Taktart: 4/4

[INTRO]
C  |  F/C  |  Am7  |  G/B

[VERS 1]
C                F/C
Stor är din trofasthet, Herre min Fader
C                G
Ingen förändring finns hos dig nånsin
C                F
Din milda barmhärtighet aldrig skall vika
Dm7              G        C
Såsom du varit, förblir du i dag

[KÖR]
G                C
Stor är din trofasthet, stor är din trofasthet
A7               Dm
Nåd för var morgon jag mottagit har
G                C        F
Allt vad jag behöver din hand mig beskärde
C/G              G        C
Stor är din trofasthet, Herre, mot mig`,
      spotifyUrl: "https://spotify.com",
      appleUrl: "https://apple.com",
    },
  ];

  // Filtered Video Catalog
  const filteredVideos = useMemo(() => {
    return videoArchive.filter((video) => {
      const matchesCategory =
        selectedCategory === "all" || video.category === selectedCategory;
      const titleStr =
        `${video.title.sv} ${video.title.en} ${video.leaders} ${video.venue.sv} ${video.venue.en}`.toLowerCase();
      const matchesQuery =
        !searchQuery.trim() || titleStr.includes(searchQuery.toLowerCase().trim());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const currentlyPlayingTrack = audioTracks.find((t) => t.id === playingTrackId) || audioTracks[0];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterDone(true);
      setTimeout(() => {
        setNewsletterEmail("");
      }, 3000);
    }
  };

  return (
    <div className="bg-[#FAF9F5] text-stone-900 antialiased min-h-screen flex flex-col font-sans selection:bg-teal-500/20 selection:text-teal-900">
      {/* Floating Global Navigation */}
      <Navbar
        onOpenRSVP={() => setRsvpOpen(true)}
        onOpenSwish={() => setSwishOpen(true)}
        onOpenPrayer={() => setPrayerOpen(true)}
        onOpenVolunteer={() => setVolunteerOpen(true)}
      />

      <main id="main-content" className="flex-1 w-full">
        {/* ========================================================================= */}
        {/* HERO SECTION: Atmospheric Twilight Sanctuary (Filmic, Not AI Slop)       */}
        {/* ========================================================================= */}
        <section className="relative bg-[#0E1113] text-stone-100 overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 border-b border-white/10">
          {/* Subtle Organic Stage Glow */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/40 via-amber-900/10 to-transparent"></div>
          <div className="absolute -top-40 right-1/4 w-[480px] h-[480px] bg-teal-600/15 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              {/* Refined Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                <span className="text-xs font-semibold tracking-widest text-teal-200 uppercase font-mono">
                  {t(
                    "Göteborgs Lovsångsarkiv • Live Master",
                    "Gothenburg Worship Archive • Live Masters"
                  )}
                </span>
              </div>

              {/* Dignified Editorial Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
                {t("Se & ", "Watch & ")}
                <span className="text-teal-400 font-extrabold">{t("Lyssna", "Listen")}</span>
                <span className="block font-serif font-normal italic text-stone-300 text-3xl sm:text-4xl lg:text-5xl mt-2">
                  {t(
                    "Autentisk lovsång från Västra Götaland",
                    "Authentic worship from Western Sweden"
                  )}
                </span>
              </h1>

              {/* Subtitle with Real Spiritual Depth */}
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl font-light mb-8">
                {t(
                  "Konsertinspelningar, intima akustiska sessioner, körarrangemang och personliga vittnesbörd från Göteborgs torg, kyrkor och hamnområden. Allt material är öppet och fritt tillgängligt.",
                  "Concert recordings, intimate acoustic prayer sessions, choral arrangements, and living testimonies captured across Gothenburg's churches, public squares, and harbors. Freely accessible to all."
                )}
              </p>

              {/* Clean Streaming Action Hub (No fake follower counts) */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md text-white text-sm font-semibold transition duration-150 active:scale-95"
                >
                  <Disc3 className="w-4 h-4 text-[#1DB954]" />
                  <span>Spotify</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>

                <a
                  href="https://apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md text-white text-sm font-semibold transition duration-150 active:scale-95"
                >
                  <Music className="w-4 h-4 text-rose-400" />
                  <span>Apple Music</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md text-white text-sm font-semibold transition duration-150 active:scale-95"
                >
                  <Play className="w-4 h-4 text-red-500 fill-red-500" />
                  <span>YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>

                <button
                  type="button"
                  onClick={() => setSwishOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-stone-950 font-bold text-sm shadow-md transition duration-150 active:scale-95"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>{t("Stöd produktionen", "Support Media Ministry")}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CENTERPIECE: Featured Concert Premiere (Widescreen Liner-Note Layout)     */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 md:py-20 border-b border-stone-200/80 bg-[#FAF9F5]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold text-teal-700 tracking-wider uppercase font-mono">
                  {t("Utvald Premiär", "Featured Premiere")}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  {t("Konsertinspelning i Frihamnen", "Live Concert from Frihamnen")}
                </h2>
              </div>
              <span className="text-xs text-stone-500 font-medium">
                {t("96kHz Multitrack Live Soundboard", "96kHz Multitrack Live Soundboard")}
              </span>
            </div>

            {/* Premiere Card Island */}
            <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition hover:shadow-md">
              {/* Visual Box (7 cols) */}
              <div className="lg:col-span-7 relative group min-h-[320px] sm:min-h-[420px] bg-stone-900 overflow-hidden flex items-center justify-center">
                <Image
                  src={featuredPremiere.image}
                  alt={featuredPremiere.title[language === "SV" ? "sv" : "en"]}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover opacity-85 group-hover:scale-105 group-hover:opacity-95 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>

                {/* Badges on top */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                    {t("Live Master", "Live Master")}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-stone-200 font-mono text-xs border border-white/15">
                    {featuredPremiere.duration}
                  </span>
                </div>

                {/* Tactile Play Button */}
                <button
                  type="button"
                  aria-label={t("Spela premiärvideo", "Play premiere video")}
                  onClick={() => setActiveVideoModal(featuredPremiere)}
                  className="relative z-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-teal-500 group-hover:text-stone-950 group-hover:scale-110 transition duration-300 shadow-2xl"
                >
                  <Play className="w-8 h-8 fill-current ml-1" />
                </button>

                {/* Bottom recording note */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-300 opacity-90 font-mono">
                  <span>{t("Inspelad med full kör & blås", "Full Choir & Brass Ensemble")}</span>
                  <span>Frihamnen 2025</span>
                </div>
              </div>

              {/* Liner Notes & Metadata (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-xs">
                    <span className="font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                      {featuredPremiere.venue[language === "SV" ? "sv" : "en"]}
                    </span>
                    <span className="text-stone-300">•</span>
                    <span className="text-stone-500">
                      {featuredPremiere.recordedDate[language === "SV" ? "sv" : "en"]}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug mb-3">
                    {featuredPremiere.title[language === "SV" ? "sv" : "en"]}
                  </h3>

                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-6">
                    {featuredPremiere.description[language === "SV" ? "sv" : "en"]}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-stone-200 text-xs sm:text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">{t("Lovsångsledare:", "Worship Leaders:")}</span>
                      <span className="font-semibold text-stone-800">{featuredPremiere.leaders}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">{t("Bibelord:", "Key Scripture:")}</span>
                      <span className="font-serif italic font-medium text-teal-800">
                        {featuredPremiere.scripture}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveVideoModal(featuredPremiere)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white font-semibold px-5 py-3 rounded-xl transition duration-150 shadow-sm active:scale-95"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>{t("Spela Video", "Watch Video")}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveChordModal(audioTracks[0])}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-stone-300 hover:border-teal-600 text-stone-800 font-semibold text-sm transition bg-stone-50 active:scale-95"
                  >
                    <FileText className="w-4 h-4 text-teal-700" />
                    <span>{t("Ackord & Text", "Chords & Lyrics")}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SCRIPTURE ACCENT: Reverent Scandinavian Typographic Pause                 */}
        {/* ========================================================================= */}
        <section className="py-12 bg-[#F3F2EC] border-b border-stone-200/80">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <blockquote className="font-serif italic text-2xl sm:text-3xl text-stone-800 leading-relaxed mb-3">
              {t(
                "”Sjung till Herren en ny sång, ty han har gjort under; hans högra hand och hans heliga arm har gett honom seger.”",
                "“Sing to the Lord a new song, for he has done marvelous things; his right hand and his holy arm have worked salvation for him.”"
              )}
            </blockquote>
            <p className="font-mono text-xs tracking-widest uppercase text-teal-800 font-semibold">
              {t("PSALTAREN 98:1 • BIBELORDET ÖVER GÖTEBORGS HAMN", "PSALM 98:1 • SCRIPTURE OVER GOTHENBURG HARBOR")}
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CURATED VIDEO ARCHIVE: Filterable Asymmetric Grid (Anti-Slop Craft)       */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 md:py-24 border-b border-stone-200/80 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            {/* Header + Discovery Filter Toolbar */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
              <div>
                <span className="text-xs font-bold text-teal-700 tracking-wider uppercase font-mono">
                  {t("Sessioner & Inspelningar", "Sessions & Recordings")}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  {t("Utforska Lovsångsarkivet", "Explore the Worship Archive")}
                </h2>
              </div>

              {/* Filters & Search Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Category Pills */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  {[
                    { id: "all", label: t("Alla", "All") },
                    { id: "concert", label: t("Konsert", "Concert") },
                    { id: "acoustic", label: t("Akustiskt", "Acoustic") },
                    { id: "prayer", label: t("Förbön", "Prayer") },
                    { id: "teaching", label: t("Undervisning", "Teaching") },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                        selectedCategory === cat.id
                          ? "bg-teal-600 text-white shadow-xs"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200/80"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Inline Search */}
                <div className="relative min-w-[200px]">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t("Sök sång, plats...", "Search song, venue...")}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-8 pr-3 py-1.5 text-xs text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-teal-500 transition"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Video Cards Grid */}
            {filteredVideos.length === 0 ? (
              <div className="text-center py-16 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
                <Music className="w-8 h-8 text-stone-400 mx-auto mb-2" />
                <p className="text-stone-600 font-medium">
                  {t("Inga inspelningar matchade din sökning.", "No recordings matched your search.")}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-3 text-xs text-teal-700 font-bold hover:underline"
                >
                  {t("Återställ filter", "Reset filters")}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredVideos.map((video) => (
                  <article
                    key={video.id}
                    className="bg-[#FAF9F5] rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition group flex flex-col justify-between"
                  >
                    <div>
                      {/* Thumbnail Container */}
                      <div className="relative aspect-video bg-stone-900 overflow-hidden">
                        <Image
                          src={video.image}
                          alt={video.title[language === "SV" ? "sv" : "en"]}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                        {/* Top tag */}
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-teal-200 font-mono text-[11px] font-semibold border border-white/10">
                            {video.categoryLabel[language === "SV" ? "sv" : "en"]}
                          </span>
                        </div>

                        {/* Duration pill */}
                        <div className="absolute bottom-3 right-3">
                          <span className="px-2 py-0.5 rounded bg-black/75 backdrop-blur-md text-white font-mono text-xs">
                            {video.duration}
                          </span>
                        </div>

                        {/* Hover play button */}
                        <button
                          type="button"
                          aria-label={t("Spela inspelning", "Play recording")}
                          onClick={() => setActiveVideoModal(video)}
                          className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-teal-600/90 hover:bg-teal-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-xl group-hover:scale-110"
                        >
                          <Play className="w-6 h-6 fill-current ml-0.5" />
                        </button>
                      </div>

                      {/* Content Body */}
                      <div className="p-5 sm:p-6">
                        <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-2 font-mono">
                          <MapPin className="w-3.5 h-3.5 text-teal-600" />
                          <span>{video.venue[language === "SV" ? "sv" : "en"]}</span>
                        </div>

                        <h3 className="font-bold text-stone-900 text-lg leading-snug group-hover:text-teal-700 transition line-clamp-2 mb-2">
                          {video.title[language === "SV" ? "sv" : "en"]}
                        </h3>

                        <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed mb-4">
                          {video.description[language === "SV" ? "sv" : "en"]}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Actions Bar */}
                    <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs text-stone-500">
                      <span className="font-medium text-stone-700 truncate max-w-[180px]">
                        {video.leaders}
                      </span>

                      <div className="flex items-center gap-2">
                        {video.hasChords && (
                          <button
                            type="button"
                            onClick={() => setActiveChordModal(audioTracks[0])}
                            title={t("Visa ackordanalys", "View chord sheet")}
                            className="p-1.5 rounded-lg hover:bg-stone-200/70 text-stone-600 transition"
                          >
                            <FileText className="w-4 h-4 text-teal-700" />
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() =>
                            handleShare(video.id, video.title[language === "SV" ? "sv" : "en"])
                          }
                          title={t("Dela video", "Share video")}
                          className="p-1.5 rounded-lg hover:bg-stone-200/70 text-stone-600 transition"
                        >
                          {copiedShare === video.id ? (
                            <Check className="w-4 h-4 text-teal-600" />
                          ) : (
                            <Share2 className="w-4 h-4" />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => setActiveVideoModal(video)}
                          className="font-semibold text-teal-700 hover:text-teal-800 inline-flex items-center gap-1 ml-1"
                        >
                          <span>{t("Spela", "Play")}</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* AUDIO SANCTUARY: Interactive Live Master Discography & Lyrics             */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 md:py-24 bg-[#F5F4EE] border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold text-teal-700 tracking-wider uppercase font-mono">
                  {t("Ljudspår & Lovsång", "Audio Tracks & Worship")}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                  {t("Lyssna, Sjung & Ladda Ner Ackord", "Listen, Sing & Download Chords")}
                </h2>
                <p className="text-sm text-stone-600 mt-1.5">
                  {t(
                    "Klicka på ett spår för att förhandslyssna, se sångtext och öppna ackordanalys för ditt lovsångsteam.",
                    "Click any track to listen, read authentic lyrics, and access chord charts for your worship team."
                  )}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white border border-stone-300 text-stone-800 text-xs font-semibold hover:border-teal-600 transition inline-flex items-center gap-2 shadow-2xs"
                >
                  <Disc3 className="w-4 h-4 text-[#1DB954]" />
                  <span>{t("Hela katalogen på Spotify", "Full Catalog on Spotify")}</span>
                </a>
              </div>
            </div>

            {/* Interactive 2-Column Audio Studio Console */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Tracklist Console (7 cols) */}
              <div className="lg:col-span-7 space-y-3">
                {audioTracks.map((track) => {
                  const isCurrent = playingTrackId === track.id;
                  return (
                    <div
                      key={track.id}
                      onClick={() => {
                        setPlayingTrackId(track.id);
                        setIsPlaying(true);
                      }}
                      className={`p-4 sm:p-5 rounded-2xl border transition cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isCurrent
                          ? "bg-white border-teal-500 shadow-sm"
                          : "bg-white/80 border-stone-200/80 hover:bg-white hover:border-stone-300"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        {/* Play/Pause Button */}
                        <button
                          type="button"
                          aria-label={isCurrent && isPlaying ? "Pause" : "Play"}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (isCurrent) {
                              setIsPlaying(!isPlaying);
                            } else {
                              setPlayingTrackId(track.id);
                              setIsPlaying(true);
                            }
                          }}
                          className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center transition ${
                            isCurrent && isPlaying
                              ? "bg-teal-600 text-white shadow-xs"
                              : "bg-stone-100 text-stone-800 hover:bg-teal-600 hover:text-white"
                          }`}
                        >
                          {isCurrent && isPlaying ? (
                            <Pause className="w-5 h-5 fill-current" />
                          ) : (
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          )}
                        </button>

                        <div className="min-w-0">
                          <span className="text-[11px] font-semibold text-teal-700 uppercase tracking-wider block">
                            {track.releaseType[language === "SV" ? "sv" : "en"]} • {track.year}
                          </span>
                          <h4 className="font-bold text-stone-900 text-base truncate">
                            {track.title[language === "SV" ? "sv" : "en"]}
                          </h4>
                          <p className="text-xs text-stone-500 truncate">{track.artist}</p>
                        </div>
                      </div>

                      {/* Track Actions & Duration */}
                      <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                        <span className="font-mono text-xs text-stone-500 font-medium">
                          {track.duration}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveChordModal(track);
                            }}
                            className="px-2.5 py-1.5 rounded-lg bg-stone-100 hover:bg-teal-50 text-stone-700 hover:text-teal-800 text-xs font-semibold flex items-center gap-1.5 border border-stone-200 transition"
                          >
                            <FileText className="w-3.5 h-3.5 text-teal-700" />
                            <span>{t("Ackord", "Chords")}</span>
                          </button>

                          <a
                            href={track.spotifyUrl}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            title="Spotify"
                            className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-400 hover:text-[#1DB954] transition"
                          >
                            <Disc3 className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Now Playing Mini-Console Bar */}
                {currentlyPlayingTrack && (
                  <div className="mt-4 p-4 rounded-2xl bg-stone-900 text-white flex items-center justify-between gap-4 shadow-lg border border-white/10">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                        {isPlaying ? (
                          <Volume2 className="w-5 h-5 animate-pulse" />
                        ) : (
                          <VolumeX className="w-5 h-5 text-stone-400" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] text-teal-300 font-mono uppercase tracking-wider block">
                          {isPlaying ? t("Spelar nu", "Now Playing") : t("Pausad", "Paused")}
                        </span>
                        <p className="text-xs font-bold text-white truncate">
                          {currentlyPlayingTrack.title[language === "SV" ? "sv" : "en"]}
                        </p>
                      </div>
                    </div>

                    {/* Progress Bar Simulation */}
                    <div className="hidden sm:flex flex-1 max-w-xs items-center gap-2">
                      <div className="flex-1 h-1.5 bg-stone-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-teal-400 rounded-full transition-all duration-300"
                          style={{ width: `${playbackProgress}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] font-mono text-stone-400 shrink-0">
                        {Math.floor((playbackProgress / 100) * 5)}:
                        {String(Math.floor(((playbackProgress / 100) * 318) % 60)).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="px-3 py-1.5 rounded-lg bg-teal-500 text-stone-950 font-bold text-xs hover:bg-teal-400 transition"
                      >
                        {isPlaying ? t("Pausa", "Pause") : t("Spela", "Resume")}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Contemplative Lyrics & Liner Note Box (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-teal-700 uppercase tracking-wider font-mono">
                      {t("Sångtext & Teologi", "Lyrics & Meditation")}
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveChordModal(currentlyPlayingTrack)}
                      className="text-xs text-teal-700 font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      <span>{t("Öppna Ackordblad", "Open Lead Sheet")}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h3 className="font-bold text-stone-900 text-xl mb-1">
                    {currentlyPlayingTrack.title[language === "SV" ? "sv" : "en"]}
                  </h3>
                  <p className="text-xs text-stone-500 mb-6">{currentlyPlayingTrack.artist}</p>

                  <blockquote className="font-serif italic text-lg sm:text-xl text-stone-800 leading-relaxed p-5 rounded-2xl bg-[#FAF9F5] border-l-4 border-teal-500 mb-6">
                    ”{currentlyPlayingTrack.lyrics[language === "SV" ? "sv" : "en"]}”
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                  <span>{t("Fritt för församlingar & lovsångsteam", "Free for churches & teams")}</span>
                  <button
                    type="button"
                    onClick={() => setActiveChordModal(currentlyPlayingTrack)}
                    className="font-bold text-teal-700 hover:text-teal-800"
                  >
                    PDF Leadsheet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* LIVED TESTIMONIES: "Röster från Västra Götaland" (Human & Authentic)      */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 md:py-24 bg-white border-b border-stone-200/80">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold text-teal-700 tracking-wider uppercase font-mono">
                {t("Vittnesbörd & Berättelser", "Lived Faith & Testimonies")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                {t("Röster från Västra Götaland", "Voices from Gothenburg & Beyond")}
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-2">
                {t(
                  "Hur öppen lovsång och bön berör människor i vardagen på Göteborgs gator och i våra församlingar.",
                  "How open praise and prayer transform everyday lives across Gothenburg's neighborhoods."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimony 1 */}
              <div className="p-7 rounded-3xl bg-[#FAF9F5] border border-stone-200/80 flex flex-col justify-between hover:border-teal-500/60 transition shadow-2xs">
                <div>
                  <Quote className="w-8 h-8 text-teal-700/40 mb-4" />
                  <p className="font-serif italic text-stone-800 text-base sm:text-lg leading-relaxed mb-6">
                    {t(
                      "”Jag hade lämnat kyrkan bakom mig efter år av utanförskap. Att kliva in i lovsångskvällen i Frihamnen kändes som att dricka friskt vatten i en andlig öken.”",
                      "“I had given up on church completely after years of feeling unseen. Walking into the Frihamnen worship night was like drinking living water in a spiritual desert.”"
                    )}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center text-sm font-mono">
                    ML
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Madeleine Lind</h4>
                    <p className="text-xs text-stone-500">Majorna, Göteborg</p>
                  </div>
                </div>
              </div>

              {/* Testimony 2 */}
              <div className="p-7 rounded-3xl bg-[#FAF9F5] border border-stone-200/80 flex flex-col justify-between hover:border-teal-500/60 transition shadow-2xs">
                <div>
                  <Quote className="w-8 h-8 text-teal-700/40 mb-4" />
                  <p className="font-serif italic text-stone-800 text-base sm:text-lg leading-relaxed mb-6">
                    {t(
                      "”Att höra unga musiker leda lovsång på svenska utan religiös förställning fick mina tonårssöner att upptäcka en äkta tro med verkligt engagemang.”",
                      "“Hearing young musicians lead worship in authentic Swedish with zero religious performance made my teenage sons rediscover Christ with genuine passion.”"
                    )}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 font-bold flex items-center justify-center text-sm font-mono">
                    AS
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Anders &amp; Sara Axelsson</h4>
                    <p className="text-xs text-stone-500">Linnéstaden, Göteborg</p>
                  </div>
                </div>
              </div>

              {/* Testimony 3 */}
              <div className="p-7 rounded-3xl bg-[#FAF9F5] border border-stone-200/80 flex flex-col justify-between hover:border-teal-500/60 transition shadow-2xs">
                <div>
                  <Quote className="w-8 h-8 text-teal-700/40 mb-4" />
                  <p className="font-serif italic text-stone-800 text-base sm:text-lg leading-relaxed mb-6">
                    {t(
                      "”Vi tog med ljudanläggningen ut på torget i Angered en råkall höstkväll. Värmen i evangeliet och musiken bröt ensamheten mitt i vardagen.”",
                      "“We brought our sound gear onto the public square in Angered on a cold autumn evening. The warmth of the gospel and music broke through loneliness right on the streets.”"
                    )}
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-stone-200 text-stone-800 font-bold flex items-center justify-center text-sm font-mono">
                    DK
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">David Karlström</h4>
                    <p className="text-xs text-stone-500">GOSPELS Outreach Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* NEWSLETTER: Dignified Media & Release Radar                               */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-[#0E1113] text-white">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-400 mb-3 block">
              {t("HÅLL DIG UPPDATERAD", "RELEASE RADAR")}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              {t(
                "Missa Inte Nya Inspelningar & Ackordblad",
                "Never Miss a Worship Release or Chord Chart"
              )}
            </h2>
            <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8 font-light">
              {t(
                "Få direkt tillgång till nya konsertmasters, noter och inbjudningar till öppna lovsångssamlingar i Göteborg. Ingen spam, bara uppmuntran och musik.",
                "Receive direct access to live recordings, leadsheets, and invitations to upcoming gatherings across Gothenburg. Pure inspiration, zero noise."
              )}
            </p>

            {newsletterDone ? (
              <div className="p-4 rounded-2xl bg-teal-900/40 border border-teal-500/50 max-w-md mx-auto text-teal-200 text-sm flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                <span>
                  {t(
                    "Tack för din anmälan! Du får nästa utskick direkt till din e-post.",
                    "Thank you for subscribing! You'll receive our next release directly."
                  )}
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={t("Skriv din e-postadress", "Enter your email address")}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-stone-400 focus:outline-none focus:border-teal-400 transition"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-stone-950 font-bold text-sm shrink-0 transition duration-150 active:scale-95 shadow-md"
                >
                  {t("Prenumerera", "Subscribe")}
                </button>
              </form>
            )}

            <p className="text-xs text-stone-500 mt-4">
              {t(
                "Vi respekterar din integritet i enlighet med GDPR. Du kan avsluta när som helst.",
                "Protected under Swedish GDPR. Unsubscribe at any time with one click."
              )}
            </p>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* ========================================================================= */}
      {/* CINEMA VIDEO MODAL (Interactive Viewer)                                  */}
      {/* ========================================================================= */}
      {activeVideoModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="bg-[#121415] border border-white/15 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl text-white flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-teal-400">
                  {activeVideoModal.categoryLabel[language === "SV" ? "sv" : "en"]} •{" "}
                  {activeVideoModal.duration}
                </span>
                <h3 className="font-bold text-base sm:text-lg text-white">
                  {activeVideoModal.title[language === "SV" ? "sv" : "en"]}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                aria-label="Close"
                className="p-2 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Viewport Simulation */}
            <div className="relative aspect-video bg-black w-full overflow-hidden flex items-center justify-center">
              <Image
                src={activeVideoModal.image}
                alt={activeVideoModal.title[language === "SV" ? "sv" : "en"]}
                fill
                className="object-cover opacity-60"
              />
              <div className="relative z-10 text-center p-6 max-w-lg">
                <div className="w-16 h-16 rounded-full bg-teal-500 text-stone-950 flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <p className="text-sm sm:text-base font-semibold text-white mb-2">
                  {t("Spelar upp 4K Master Ljudbordsström", "Streaming 4K Master Soundboard Feed")}
                </p>
                <p className="text-xs text-stone-300 font-mono">
                  {activeVideoModal.venue[language === "SV" ? "sv" : "en"]} • {activeVideoModal.scripture}
                </p>
              </div>
            </div>

            {/* Modal Details Footer */}
            <div className="p-5 sm:p-6 bg-[#16191B] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-stone-400 max-w-xl">
                {activeVideoModal.description[language === "SV" ? "sv" : "en"]}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setSwishOpen(true)}
                  className="px-4 py-2 rounded-xl bg-teal-500 text-stone-950 font-bold text-xs hover:bg-teal-400 transition"
                >
                  {t("Stöd med Swish", "Support with Swish")}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveVideoModal(null)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition"
                >
                  {t("Stäng", "Close")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CHORD SHEET & LYRICS MODAL                                                */}
      {/* ========================================================================= */}
      {activeChordModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveChordModal(null)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div>
                <span className="text-[11px] font-mono uppercase font-bold text-teal-800">
                  {t("Ackordanalys & Textblad", "Lead Sheet & Chords")}
                </span>
                <h3 className="font-bold text-lg text-stone-900">
                  {activeChordModal.title[language === "SV" ? "sv" : "en"]}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveChordModal(null)}
                className="p-2 rounded-full hover:bg-stone-200 text-stone-500 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chord sheet body */}
            <div className="p-6 overflow-y-auto font-mono text-xs sm:text-sm text-stone-800 space-y-4 bg-white">
              <pre className="whitespace-pre-wrap leading-relaxed select-text font-mono bg-stone-50 p-4 rounded-xl border border-stone-200 text-stone-900">
                {activeChordModal.chords}
              </pre>
            </div>

            {/* Modal actions */}
            <div className="p-4 border-t border-stone-200 bg-stone-50 flex items-center justify-between">
              <span className="text-xs text-stone-500">
                {t("Skapad för lokala lovsångsteam", "Crafted for local worship teams")}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== "undefined") window.print();
                  }}
                  className="px-4 py-2 rounded-xl border border-stone-300 hover:border-teal-600 text-stone-800 text-xs font-semibold transition"
                >
                  {t("Skriv ut", "Print")}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveChordModal(null)}
                  className="px-4 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold transition"
                >
                  {t("Klar", "Done")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Existing Functional Modals */}
      <RSVPModal isOpen={rsvpOpen} onClose={() => setRsvpOpen(false)} />
      <SwishModal isOpen={swishOpen} onClose={() => setSwishOpen(false)} />
      <PrayerModal isOpen={prayerOpen} onClose={() => setPrayerOpen(false)} />
      <VolunteerModal isOpen={volunteerOpen} onClose={() => setVolunteerOpen(false)} />
    </div>
  );
}

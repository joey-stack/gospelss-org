/**
 * GOSPELS Data Access Layer (DAL)
 * Provides resilient access to Events, RSVPs, Prayer Requests, and Kingdom Partners.
 * Complies with Swedish GDPR Article 9.
 */

export interface EventRecord {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  doorsOpen: string;
  location: string;
  venue: string;
  capacity: number;
  isFree: boolean;
  status: "UPCOMING" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
}

export interface RSVPRecord {
  id: string;
  eventId: string;
  name: string;
  email: string;
  attendees: number;
  confirmedAt: string;
  checkedIn: boolean;
}

export interface PrayerRequestRecord {
  id: string;
  name?: string;
  email?: string;
  topic: string;
  content: string;
  isUrgent: boolean;
  gdprConsent: boolean;
  status: "PENDING" | "ASSIGNED" | "PRAYED" | "ARCHIVED";
  createdAt: string;
}

export interface KingdomPartnerRecord {
  id: string;
  name: string;
  email: string;
  phone?: string;
  amount: number;
  currency: string;
  interval: "monthly" | "yearly";
  provider: "STRIPE" | "SWISH" | "BANKGIRO";
  status: "ACTIVE" | "PAST_DUE" | "CANCELLED";
  createdAt: string;
}

export interface VolunteerRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  isUnder18: boolean;
  guardianName?: string;
  guardianPhone?: string;
  parentalConsent: boolean;
  status: "PENDING" | "APPROVED" | "REJECTED";
  createdAt: string;
}

export interface TrackRecord {
  id: string;
  title: string;
  artist: string;
  duration: string;
  recordedAt: string;
  audioUrl: string;
  lyrics: string;
}

export interface TestimonyRecord {
  id: string;
  name: string;
  role: string;
  city: string;
  content: string;
  date: string;
}

// In-Memory / Local Development Seed Store
const seedEvents: EventRecord[] = [
  {
    id: "evt-hsw-2026",
    title: "Holy Spirit Worship 2026",
    slug: "holy-spirit-worship-2026",
    description: "En helig kväll av oavbruten lovsång och bön i Göteborg för alla generationer.",
    date: "2026-11-14T18:00:00Z",
    doorsOpen: "17:30",
    location: "Göteborg, Sverige",
    venue: "Göteborg Konserthus / Central Mötesplats",
    capacity: 250,
    isFree: true,
    status: "UPCOMING",
  },
  {
    id: "evt-glk-2027",
    title: "Göteborgs Lovsångskonsert 2027",
    slug: "goteborgs-lovsangskonsert-2027",
    description: "Storskalig öppen lovsångskonsert som samlar tusentals unga i hjärtat av Göteborg.",
    date: "2027-05-22T17:00:00Z",
    doorsOpen: "16:00",
    location: "Göteborg, Sverige",
    venue: "Bältesspännarparken / Frihamnen Open Air",
    capacity: 2500,
    isFree: true,
    status: "UPCOMING",
  },
];

// Global runtime memory store for local development
const globalStore = global as unknown as {
  __gospels_rsvps?: RSVPRecord[];
  __gospels_prayers?: PrayerRequestRecord[];
  __gospels_partners?: KingdomPartnerRecord[];
  __gospels_volunteers?: VolunteerRecord[];
};

if (!globalStore.__gospels_rsvps) {
  globalStore.__gospels_rsvps = [];
}
if (!globalStore.__gospels_prayers) {
  globalStore.__gospels_prayers = [];
}
if (!globalStore.__gospels_volunteers) {
  globalStore.__gospels_volunteers = [];
}
if (!globalStore.__gospels_partners) {
  // Pre-seed 48 founding Kingdom Partners
  globalStore.__gospels_partners = Array.from({ length: 48 }).map((_, i) => ({
    id: `partner_${i + 1}`,
    name: `Kingdom Partner ${i + 1}`,
    email: `partner${i + 1}@gospelss.org`,
    amount: 150,
    currency: "SEK",
    interval: "monthly",
    provider: i % 2 === 0 ? "SWISH" : "STRIPE",
    status: "ACTIVE",
    createdAt: new Date().toISOString(),
  }));
}

export const db = {
  events: {
    findMany: async (): Promise<EventRecord[]> => {
      return seedEvents;
    },
    findBySlug: async (slug: string): Promise<EventRecord | undefined> => {
      return seedEvents.find((e) => e.slug === slug);
    },
    findById: async (id: string): Promise<EventRecord | undefined> => {
      return seedEvents.find((e) => e.id === id);
    },
  },

  rsvps: {
    findManyByEventId: async (eventId: string): Promise<RSVPRecord[]> => {
      return (globalStore.__gospels_rsvps || []).filter((r) => r.eventId === eventId);
    },
    create: async (data: {
      eventId: string;
      name: string;
      email: string;
      attendees: number;
    }): Promise<RSVPRecord> => {
      const existing = (globalStore.__gospels_rsvps || []).find(
        (r) => r.eventId === data.eventId && r.email.toLowerCase() === data.email.toLowerCase()
      );
      if (existing) {
        throw new Error("Du har redan reserverat plats med denna e-postadress.");
      }

      const newRecord: RSVPRecord = {
        id: `rsvp_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        eventId: data.eventId,
        name: data.name,
        email: data.email.toLowerCase(),
        attendees: data.attendees,
        confirmedAt: new Date().toISOString(),
        checkedIn: false,
      };

      globalStore.__gospels_rsvps!.push(newRecord);
      return newRecord;
    },
    countAttendees: async (eventId: string): Promise<number> => {
      const records = (globalStore.__gospels_rsvps || []).filter((r) => r.eventId === eventId);
      return records.reduce((acc, curr) => acc + curr.attendees, 0);
    },
  },

  prayers: {
    create: async (data: {
      name?: string;
      email?: string;
      topic: string;
      content: string;
      isUrgent?: boolean;
      gdprConsent: boolean;
    }): Promise<PrayerRequestRecord> => {
      if (!data.gdprConsent) {
        throw new Error("Samtycke enligt GDPR Artikel 9 krävs för att skicka böneämne.");
      }

      const record: PrayerRequestRecord = {
        id: `prayer_${Date.now()}`,
        name: data.name,
        email: data.email,
        topic: data.topic,
        content: data.content,
        isUrgent: data.isUrgent || false,
        gdprConsent: data.gdprConsent,
        status: "PENDING",
        createdAt: new Date().toISOString(),
      };

      globalStore.__gospels_prayers!.push(record);
      return record;
    },
  },

  partners: {
    findMany: async (): Promise<KingdomPartnerRecord[]> => {
      return globalStore.__gospels_partners || [];
    },
    count: async (): Promise<number> => {
      return (globalStore.__gospels_partners || []).length;
    },
    getMonthlyTotal: async (): Promise<number> => {
      return (globalStore.__gospels_partners || []).reduce((acc, curr) => acc + curr.amount, 0);
    },
    create: async (data: {
      name: string;
      email: string;
      amount?: number;
      provider?: "STRIPE" | "SWISH" | "BANKGIRO";
    }): Promise<KingdomPartnerRecord> => {
      const record: KingdomPartnerRecord = {
        id: `partner_${Date.now()}`,
        name: data.name,
        email: data.email.toLowerCase(),
        amount: data.amount || 150,
        currency: "SEK",
        interval: "monthly",
        provider: data.provider || "STRIPE",
        status: "ACTIVE",
        createdAt: new Date().toISOString(),
      };
      globalStore.__gospels_partners!.push(record);
      return record;
    },
  },

  volunteers: {
    findMany: async (): Promise<VolunteerRecord[]> => {
      return globalStore.__gospels_volunteers || [];
    },
    count: async (): Promise<number> => {
      return (globalStore.__gospels_volunteers || []).length;
    },
    create: async (data: {
      name: string;
      email: string;
      phone: string;
      role: string;
      isUnder18: boolean;
      guardianName?: string;
      guardianPhone?: string;
      parentalConsent?: boolean;
    }): Promise<VolunteerRecord> => {
      if (data.isUnder18 && (!data.guardianName || !data.parentalConsent)) {
        throw new Error("Målsmans godkännande krävs för volontärer under 18 år.");
      }

      const record: VolunteerRecord = {
        id: `vol_${Date.now()}`,
        name: data.name,
        email: data.email.toLowerCase(),
        phone: data.phone,
        role: data.role,
        isUnder18: data.isUnder18,
        guardianName: data.guardianName,
        guardianPhone: data.guardianPhone,
        parentalConsent: Boolean(data.parentalConsent),
        status: "PENDING",
        createdAt: new Date().toISOString(),
      };
      globalStore.__gospels_volunteers!.push(record);
      return record;
    },
  },

  media: {
    findManyTracks: async (): Promise<TrackRecord[]> => {
      return [
        {
          id: "trk-1",
          title: "Helig Ande Fyll Denna Plats (Live i Göteborg)",
          artist: "Gospels Worship Team",
          duration: "6:42",
          recordedAt: "Holy Spirit Worship Göteborg",
          audioUrl: "/assets/audio/helig-ande-live.mp3",
          lyrics: "Helig Ande, fyll denna plats med Din härlighet / Våra hjärtan ropar ut: Jesus, kom och var vår kung / Där två eller tre är samlade i Ditt namn / Där är Du mitt ibland oss.",
        },
        {
          id: "trk-2",
          title: "Göteborg Tillhör Jesus",
          artist: "Gospels Youth Collective",
          duration: "5:18",
          recordedAt: "Göteborgs Lovsångssamling",
          audioUrl: "/assets/audio/goteborg-tillhor-jesus.mp3",
          lyrics: "Över varje gata, över varje bro / Reser vi en lovsång, i tro och i ro / Göteborg tillhör Jesus, Hans ljus ska bryta fram.",
        },
        {
          id: "trk-3",
          title: "Där Två Eller Tre (Matteus 18)",
          artist: "Gospels Akustisk",
          duration: "4:35",
          recordedAt: "Pastoral Böneafton",
          audioUrl: "/assets/audio/dar-tva-eller-tre.mp3",
          lyrics: "I stillhet inför Dig, böjer vi våra knän / Du hör varje viskning, Du känner varje bön / Ty där två eller tre är församlade i Ditt namn, där är Du.",
        },
      ];
    },
  },

  testimonies: {
    findMany: async (): Promise<TestimonyRecord[]> => {
      return [
        {
          id: "test-1",
          name: "Hanna K.",
          role: "Ung vuxen",
          city: "Göteborg",
          content: "Under Holy Spirit Worship mötte jag Jesus på ett sätt jag aldrig upplevt tidigare. Den fria entrén gjorde att jag kunde bjuda med tre vänner som aldrig tidigare satt sin fot i en kyrka.",
          date: "November 2025",
        },
        {
          id: "test-2",
          name: "Lukas E.",
          role: "Ungdomsledare",
          city: "Mölndal",
          content: "Det var inte bara en konsert, det var en helig atmosfär. Unga från olika kyrkor och bakgrunder stod tillsammans i timmar i tillbedjan. En förvandlande kväll för vår stad.",
          date: "Oktober 2025",
        },
        {
          id: "test-3",
          name: "Sara M.",
          role: "Förbönsteamet",
          city: "Partille",
          content: "Vi såg trasiga relationer upprättas och unga som fann djup inre frid mitt i en tid av oro och ångest. Bönen bar hela rummet.",
          date: "September 2025",
        },
      ];
    },
  },
};




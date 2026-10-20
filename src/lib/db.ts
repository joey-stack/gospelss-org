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
};

if (!globalStore.__gospels_rsvps) {
  globalStore.__gospels_rsvps = [];
}
if (!globalStore.__gospels_prayers) {
  globalStore.__gospels_prayers = [];
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
};

const TIMEZONE = "Europe/Paris";

function getTimezoneOffsetMinutes(date: Date, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
    .formatToParts(date)
    .reduce<Record<string, number>>((acc, part) => {
      if (part.type !== "literal") {
        acc[part.type] = Number(part.value);
      }
      return acc;
    }, {});

  const utcMillis = Date.UTC(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour === 24 ? 0 : parts.hour,
    parts.minute,
    parts.second
  );
  return (utcMillis - Math.floor(date.getTime() / 1000) * 1000) / 60000;
}

export function createParisDate(
  year: number,
  month: number,
  day: number,
  hour = 0,
  minute = 0
): Date {
  const utcGuess = Date.UTC(year, month - 1, day, hour, minute, 0);
  let offset = getTimezoneOffsetMinutes(new Date(utcGuess), TIMEZONE);
  offset = getTimezoneOffsetMinutes(new Date(utcGuess - offset * 60000), TIMEZONE);
  return new Date(utcGuess - offset * 60000);
}

export function calculateCountdown(targetDate: string) {
  const datePart = targetDate.includes("T") ? targetDate.split("T")[0] : targetDate;
  const [year, month, day] = datePart.split("-").map(Number);
  const diff = createParisDate(year, month, day, 17, 0).getTime() - Date.now();
  if (diff > 0) {
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
}

export interface CalendarEvent {
  title: string;
  description?: string;
  location: string;
  startLocal: string;
  endLocal: string;
  timezone: string;
}

export function buildGoogleCalendarUrl(event: CalendarEvent): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${event.startLocal}/${event.endLocal}`,
    location: event.location,
    ctz: event.timezone,
  });
  if (event.description) {
    params.set("details", event.description);
  }
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function buildIcsDataUrl(event: CalendarEvent): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@wedding`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
    `DTSTART;TZID=${event.timezone}:${event.startLocal}`,
    `DTEND;TZID=${event.timezone}:${event.endLocal}`,
    `SUMMARY:${event.title}`,
    `LOCATION:${event.location}`,
    event.description ? `DESCRIPTION:${event.description}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .filter(Boolean)
    .join("\r\n");

  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines)}`;
}

export function buildGoogleMapsUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function buildAppleMapsUrl(address: string): string {
  return `https://maps.apple.com/?q=${encodeURIComponent(address)}`;
}

export function formatParisDate(
  dateInput: string | Date,
  options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  },
  locale = "en-GB"
): string {
  const d = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  if (isNaN(d.getTime())) return "-";
  return d.toLocaleString(locale, {
    ...options,
    timeZone: TIMEZONE,
    hour12: false,
  });
}


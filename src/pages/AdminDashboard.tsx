import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Download,
  ExternalLink,
  LogOut,
  Search,
  Trash2,
  XCircle,
} from "lucide-react";
import {
  getStoredRsvps,
  RSVP_STORAGE_KEY,
  StoredGuestRsvp,
} from "../components/RsvpSection";
import { formatParisDate } from "../utils/calendarAndMaps";

const ADMIN_TOKEN_KEY = "admin_session_token";

export function AdminDashboard() {
  const navigate = useNavigate();
  const [guests, setGuests] = useState<StoredGuestRsvp[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "yes" | "no" | "pending">("all");

  useEffect(() => {
    if (!sessionStorage.getItem(ADMIN_TOKEN_KEY)) {
      navigate("/admin");
      return;
    }
    setGuests(getStoredRsvps());
  }, [navigate]);

  const filteredGuests = useMemo(() => {
    let list = [...guests];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (g) =>
          g.full_name.toLowerCase().includes(q) ||
          g.email?.toLowerCase().includes(q) ||
          g.message?.toLowerCase().includes(q)
      );
    }
    if (filter !== "all") {
      list = list.filter((g) => g.attendance === filter);
    }
    return list;
  }, [guests, search, filter]);

  const confirmed = guests.filter((g) => g.attendance === "yes");
  const confirmedGuestsCount = confirmed.reduce((acc, g) => acc + (g.guest_count || 1), 0);
  const declinedCount = guests.filter((g) => g.attendance === "no").length;
  const shuttleCount = guests.filter(
    (g) => g.attendance === "yes" && g.transportation === "shuttle"
  ).length;
  const valetCount = guests.filter(
    (g) => g.attendance === "yes" && g.transportation === "valet"
  ).length;

  const handleDelete = (id: string) => {
    const next = guests.filter((g) => g.id !== id);
    setGuests(next);
    localStorage.setItem(RSVP_STORAGE_KEY, JSON.stringify(next));
  };

  const handleExportCsv = () => {
    const transportLabel = (t?: string) =>
      t === "shuttle" ? "Bus" : t === "valet" ? "Own transport" : "-";
    const headers = [
      "Name",
      "Email",
      "Status",
      "Adults",
      "Children",
      "Total Guests",
      "Transportation",
      "Dietary Requirements",
      "Message",
      "Response Date",
    ];
    const rows = guests.map((g) => [
      g.full_name,
      g.email || "",
      g.attendance === "yes" ? "Confirmed" : g.attendance === "no" ? "Declined" : "Pending",
      g.adult_count || 1,
      g.children_count || 0,
      g.guest_count || 1,
      transportLabel(g.transportation),
      g.dietary_requirements || "-",
      g.message || "",
      g.responded_at ? formatParisDate(g.responded_at) : "",
    ]);
    const csv = [headers, ...rows]
      .map((r) => r.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `wedding-guests-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_TOKEN_KEY);
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <h1 className="font-body text-2xl sm:text-3xl font-semibold text-sage-dark">
            Admin Dashboard
          </h1>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="inline-flex h-9 rounded-md px-3 items-center gap-2 text-sm font-medium bg-sage-dark hover:bg-sage-dark/90 text-white"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline">Invitation</span>
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex h-9 rounded-md px-3 items-center gap-2 text-sm font-medium border border-sage-dark/50 text-sage-dark hover:bg-sage-dark hover:text-white transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Log out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4"
        >
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="pb-1 sm:pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
              <h3 className="text-sm sm:text-base font-body font-medium text-sage-dark/70">
                Confirmed
              </h3>
            </div>
            <div className="px-3 sm:px-4 pb-3 sm:pb-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                <span className="text-xl sm:text-2xl font-semibold text-green-600">
                  {confirmedGuestsCount}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="pb-1 sm:pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
              <h3 className="text-sm sm:text-base font-body font-medium text-sage-dark/70">
                Declined
              </h3>
            </div>
            <div className="px-3 sm:px-4 pb-3 sm:pb-4">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                <span className="text-xl sm:text-2xl font-semibold text-red-500">
                  {declinedCount}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="pb-1 sm:pb-2 px-3 sm:px-4 pt-3 sm:pt-4">
              <h3 className="text-sm sm:text-base font-body font-medium text-sage-dark/70">
                Totals
              </h3>
            </div>
            <div className="px-3 sm:px-4 pb-3 sm:pb-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Yes
                  </span>
                  <span className="text-xl sm:text-2xl font-semibold text-green-600">
                    {confirmedGuestsCount}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    No
                  </span>
                  <span className="text-xl sm:text-2xl font-semibold text-red-500">
                    {declinedCount}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Bus
                  </span>
                  <span className="text-xl sm:text-2xl font-semibold text-sage-dark">
                    {shuttleCount}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Own transport
                  </span>
                  <span className="text-xl sm:text-2xl font-semibold text-sage-dark">
                    {valetCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6">
              <h3 className="font-body text-xl sm:text-2xl font-semibold text-sage-dark">
                Guest List
              </h3>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex h-9 w-full sm:w-48 rounded-md border border-input bg-background pl-9 pr-3 py-1 text-sm focus:outline-none"
                  />
                </div>
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as any)}
                  className="flex h-9 w-full sm:w-36 rounded-md border border-input bg-background px-3 py-1 text-sm focus:outline-none"
                >
                  <option value="all">All</option>
                  <option value="yes">Confirmed</option>
                  <option value="no">Declined</option>
                  <option value="pending">Pending</option>
                </select>
                <button
                  onClick={handleExportCsv}
                  className="inline-flex h-9 rounded-md px-3 items-center gap-2 text-sm font-medium bg-sage-dark hover:bg-sage-dark/90 text-white"
                >
                  <Download className="w-4 h-4" />
                  CSV Export
                </button>
              </div>
            </div>

            <div className="p-6 pt-0">
              {filteredGuests.length > 0 ? (
                <div className="space-y-3">
                  {filteredGuests.map((guest) => {
                    const isExpanded = expandedId === guest.id;
                    return (
                      <div
                        key={guest.id}
                        className="border rounded-lg px-4 py-3 bg-card hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="font-semibold text-foreground truncate">
                              {guest.full_name}
                            </span>
                            <span
                              className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                                guest.attendance === "yes"
                                  ? "bg-primary text-primary-foreground"
                                  : guest.attendance === "no"
                                  ? "bg-destructive text-destructive-foreground"
                                  : "bg-secondary text-secondary-foreground"
                              }`}
                            >
                              {guest.attendance === "yes"
                                ? "Confirmed"
                                : guest.attendance === "no"
                                ? "Declined"
                                : "Pending"}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => setExpandedId(isExpanded ? null : guest.id)}
                              className="h-7 w-7 inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
                            >
                              {isExpanded ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </button>
                            <button
                              onClick={() => handleDelete(guest.id)}
                              className="h-7 w-7 inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-destructive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {isExpanded && (
                          <div className="mt-3 pt-3 border-t space-y-2 text-sm">
                            <div>
                              <span className="text-xs text-muted-foreground uppercase tracking-wide block">
                                Attendance
                              </span>
                              <span className="font-medium">
                                {guest.attendance === "yes"
                                  ? "Joyfully accepts"
                                  : "Regretfully declines"}
                              </span>
                            </div>
                            <div>
                              <span className="text-xs text-muted-foreground uppercase tracking-wide block">
                                Transportation
                              </span>
                              <span className="font-medium">
                                {guest.transportation === "shuttle"
                                  ? "Bus shuttle"
                                  : guest.transportation === "valet"
                                  ? "Driving or taxi"
                                  : "-"}
                              </span>
                            </div>
                            <div>
                              <span className="text-xs text-muted-foreground uppercase tracking-wide block">
                                Dietary requirements
                              </span>
                              <span className="font-medium whitespace-pre-wrap">
                                {guest.dietary_requirements || "None specified"}
                              </span>
                            </div>
                            <div>
                              <span className="text-xs text-muted-foreground uppercase tracking-wide block">
                                Response date
                              </span>
                              <span className="font-medium">
                                {formatParisDate(guest.responded_at)}
                              </span>
                            </div>
                            <div>
                              <span className="text-xs text-muted-foreground uppercase tracking-wide block">
                                Message
                              </span>
                              <span className="font-medium italic whitespace-pre-wrap">
                                {guest.message ? `"${guest.message}"` : "No message left"}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-center py-8 text-muted-foreground">No RSVPs yet</p>
              )}
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}


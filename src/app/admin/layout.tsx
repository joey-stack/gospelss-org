"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  PlusCircle,
  HeartHandshake,
  Users,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
    { href: "/admin/events", label: "Event Manager", icon: Calendar, exact: true },
    { href: "/admin/events/new", label: "Create Event", icon: PlusCircle, exact: true },
    { href: "/admin/prayer", label: "Prayer Requests", icon: HeartHandshake, exact: false },
    { href: "/admin/volunteers", label: "Volunteer Applications", icon: Users, exact: false },
  ];

  return (
    <div className="min-h-screen flex bg-stone-100 text-stone-900 antialiased font-sans">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-stone-900 text-stone-100 flex flex-col justify-between p-5 shrink-0 min-h-screen sticky top-0 h-screen">
        <div>
          {/* Brand Lockup */}
          <div className="flex items-center justify-between pb-6 border-b border-stone-800">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/brand/logo-white.svg"
                alt="GOSPELS"
                width={110}
                height={24}
                className="h-5 w-auto"
              />
            </Link>
            <span className="text-[10px] font-mono uppercase bg-teal-900/80 text-teal-300 px-2 py-0.5 rounded border border-teal-500/30">
              Admin
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 space-y-1" aria-label="Admin Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.exact
                ? pathname === item.href
                : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition ${
                    isActive
                      ? "bg-teal-600 text-white shadow-xs"
                      : "text-stone-400 hover:text-white hover:bg-stone-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-stone-800 space-y-2">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-stone-400 hover:text-white transition px-3 py-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Tillbaka till webbplatsen</span>
          </Link>
          <div className="px-3 text-[10px] text-stone-500 font-mono">
            Gospels Admin v1.0
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

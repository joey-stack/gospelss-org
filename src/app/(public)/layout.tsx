import React from "react";
import { GlobalHeader } from "@/components/layout/GlobalHeader";
import { GlobalFooter } from "@/components/layout/GlobalFooter";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-grey-50 text-grey-900 antialiased font-body">
      <GlobalHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <GlobalFooter />
    </div>
  );
}

"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

interface Props {
  title: string;
}

export default function DashboardHeader({ title }: Props) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border-first bg-bg px-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger />

        <h1 className="text-xl font-semibold text-text-primary">{title}</h1>
      </div>
    </header>
  );
}

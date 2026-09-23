"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import DashboardHeader from "./dashboard-header";
import CustomerSidebar from "./dashboard-sidebar";

interface DashboardLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function DashboardLayout({
  title,
  children,
}: DashboardLayoutProps) {
  return (
    <SidebarProvider defaultOpen>
      <CustomerSidebar />

      <SidebarInset className="bg-surface min-h-screen">
        <DashboardHeader title={title} />

        <main className="flex-1 p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

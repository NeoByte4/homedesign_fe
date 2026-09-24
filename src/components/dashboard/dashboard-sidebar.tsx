"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  customerSidebarMenu,
  logoutMenu,
} from "@/src/data/dashboard/sidebar-menu";

export default function CustomerSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="border-r border-border-first bg-bg">
      <SidebarHeader className="border-b border-border-first px-5 py-6">
        <Link href="/" className="space-y-1">
          <h2 className="text-xl font-semibold text-primary">FurniHome</h2>
          <p className="text-xs text-text-secondary">Customer Dashboard</p>
        </Link>
      </SidebarHeader>
      <SidebarContent className="px-2 py-3">
        <SidebarGroup>
          <SidebarMenu>
            {customerSidebarMenu.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    render={
                      <Link
                        href={item.href}
                        className="flex items-center gap-3"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    }
                    isActive={active}
                    className="
                h-11 rounded-lg transition-colors

                hover:bg-surface hover:text-primary

                data-[active=true]:bg-primary
                data-[active=true]:text-on-primary
                data-[active=true]:font-medium
              "
                  />
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Logout */}
      <SidebarFooter className="border-t border-border-first p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={
                <Link
                  href={logoutMenu.href}
                  className="flex items-center gap-2"
                >
                  <logoutMenu.icon className="h-5 w-5" />
                  <span>{logoutMenu.title}</span>
                </Link>
              }
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

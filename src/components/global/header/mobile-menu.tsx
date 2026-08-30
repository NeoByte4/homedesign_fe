"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import { Menu, X } from "lucide-react";
import ContainerLayout from "../../layouts/container-layout";
import { routes } from "@/src/lib/routes";
import NavItems from "./nav-items";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((p) => !p);

  if (!open)
    return (
      <button onClick={toggleOpen}>
        <Menu />
      </button>
    );

  return (
    <div className="bg-surface/95 backdrop-blur-xl inset-0 w-full h-screen fixed">
      <ContainerLayout>
        <nav className="flex items-center gap-4 justify-between mb-8 pt-2">
          <div className="flex items-center justify-start h-full">
            <Link className="block relative h-16 w-32" href={routes.home}>
              <Image
                src="/site-logo/logo-header-primary.png"
                alt="logo image"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, 160px"
                priority
              />
            </Link>
          </div>
          <button onClick={toggleOpen}>
            <X />
          </button>
        </nav>

        <NavItems onNavigate={() => setOpen(false)} />
      </ContainerLayout>
    </div>
  );
};
export default MobileMenu;

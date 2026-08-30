import Image from "next/image";
import React from "react";

import Link from "next/link";
import ContainerLayout from "../../layouts/container-layout";
import { routes } from "@/src/lib/routes";
import NavItems from "./nav-items";
import MobileMenu from "./mobile-menu";
import StyledButton from "../../ui/styled-button";
import { ShoppingCart, UserPlus } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 w-full z-[9001] bg-bg/60 backdrop-blur-md">
      <ContainerLayout className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center py-2">
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
        <div className="hidden md:col-span-3 md:grid place-items-center">
          <NavItems />
        </div>
        <div className="flex items-center justify-end md:hidden">
          <MobileMenu />
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-end gap-2">
          <Link href="/cart">
            <StyledButton
              icon={ShoppingCart}
              variant="icon"
              cartCount={0}
              aria-label="Shopping Cart"
            />
          </Link>
          <Link href={routes.signup}>
            <StyledButton icon={UserPlus}>Sign Up</StyledButton>
          </Link>
        </div>
      </ContainerLayout>
    </header>
  );
};

export default Header;

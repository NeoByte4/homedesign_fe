import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { navLinks } from "@/src/data/navLinks";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

const NavItems = ({ onNavigate }: { onNavigate?: () => void }) => (
  <nav className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1 lg:gap-3 md:py-1 md:px-4 md:border md:border-surface-2 md:shadow-sm md:rounded-lg md:bg-bg/50 md:backdrop-blur-xl ">
    {navLinks.map((navItem) => (
      <React.Fragment key={navItem.href}>
        {navItem.subPages ? (
          <div className={`relative group`}>
            <Link
              href={navItem.href}
              onClick={onNavigate}
              className="font-medium transition py-2 px-4 hidden md:flex items-center justify-between md:justify-center hover:text-primary-dark"
            >
              {navItem.name}
              <ChevronDown
                size={16}
                className="ml-1 group-hover:rotate-180 transition-all"
              />
            </Link>

            <div className="absolute z-[9005] left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-64 mt-0">
              <nav className="p-1.5 mt-3 bg-surface border rounded-md shadow-md ">
                {navItem.subPages.map((subPage) => (
                  <Link
                    key={subPage.slug}
                    href={`${navItem.href}/${subPage.slug}`}
                    onClick={onNavigate}
                    className="block px-4 py-2 rounded hover:bg-bg transition"
                  >
                    <span className="line-clamp-2">{subPage.name}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className="md:hidden">
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className="flex items-center gap-2 hover:text-primary transition font-medium py-2 px-4 w-full justify-between relative "
                    aria-haspopup="menu"
                  >
                    {navItem.name}
                    <ChevronDown size={16} />
                  </button>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="w-64 bg-white border rounded-md shadow-md mt-2 p-2 relative z-[9999] max-h-64 overflow-y-scroll"
                >
                  {navItem.subPages.map((subPage) => (
                    <Link
                      key={subPage.slug}
                      href={`${navItem.href}/${subPage.slug}`}
                      onClick={onNavigate}
                      className="block px-4 py-2 rounded hover:bg-gray-100 transition"
                    >
                      {subPage.name}
                    </Link>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
          </div>
        ) : (
          <Link
            href={navItem.href}
            onClick={onNavigate}
            className="font-medium hover:text-primary-dark transition py-2 px-4 block text-nowrap"
          >
            {navItem.name}
          </Link>
        )}
      </React.Fragment>
    ))}
  </nav>
);

export default NavItems;

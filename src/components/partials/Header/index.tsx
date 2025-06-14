"use client";

import { ActiveLink } from "@/components/ui/ActiveLink";
import { Button } from "@/components/ui/Button";
import useScrollPosition from "@/hooks/ui/useScrollPosition";
import { useVisibleSection } from "@/hooks/utils/useVisibleSection";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/home/#home", name: "Home" },
  {
    href: "/home/#services",
    name: "Services",
  },
  { href: "/home/#features", name: "Features" },
  {
    href: "/home/#projects",
    name: "Projects",
  },
  {
    href: "/blogs",
    name: "Blogs",
  },
];

const Header = ({ className }: { className?: string }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollTop, scrollDirection } = useScrollPosition();
  const { visibleSection } = useVisibleSection(
    ["home", "services", "features", "projects"],
    0.5,
  );
  console.log(visibleSection);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // const closeMobileMenu = () => {
  //   setIsMobileMenuOpen(false);
  //   document.body.style.overflow = "auto";
  // };

  return (
    <>
      <header
        className={cn(
          "text-foreground top-0 right-0 left-0 z-50 h-20 bg-transparent backdrop-blur-xs transition-all duration-300 ease-in-out",
          {
            "dark fixed": pathname === "/home",
            "bg-card sticky": pathname !== "/home",
            "bg-background/95 shadow-sm":
              scrollTop > 80 && pathname === "/home",
            "-translate-y-full":
              scrollDirection === "down" &&
              scrollTop > 80 &&
              pathname === "/home",
            "translate-y-0":
              (scrollDirection === "up" && pathname === "/home") ||
              (scrollTop <= 80 && pathname === "/home"),
          },
          className,
        )}
      >
        <div className="container flex h-full items-center justify-between">
          <Link
            href="/home"
            className="font-display flex w-full items-center gap-2 text-xl font-medium transition-opacity duration-300 hover:opacity-80"
            aria-label="Home"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={48}
              height={48}
              className="size-12 rounded-lg object-contain object-left"
            />
            <div className="leading-none">
              <h5 className="font-semibold">CyberDoc</h5>
              <span className="text-xs leading-0">Renovation Experts</span>
            </div>
          </Link>
          <nav className="hidden flex-1 items-center justify-center gap-4 px-0 lg:flex lg:gap-6 lg:px-16">
            {navLinks?.map((link, index) => {
              const url = new URL(link?.href, "http://a");
              const isHashed = !!url.hash;
              return (
                <span key={index}>
                  {isHashed ? (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "underline-effect primary text-sm whitespace-nowrap uppercase",
                        {
                          active: visibleSection === url.hash.replace("#", ""),
                        },
                      )}
                    >
                      {link?.name}
                    </Link>
                  ) : (
                    <ActiveLink
                      key={link.name}
                      href={link.href}
                      className="underline-effect primary text-sm whitespace-nowrap uppercase"
                      activeClassName="active"
                    >
                      {link?.name}
                    </ActiveLink>
                  )}
                </span>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <Link href={"#"}>
              <Button asChild={true}>
                <span>GET AN ESTIMATE</span>
              </Button>
            </Link>
            {/* Mobile Menu Button */}
            <button
              className="flex flex-col space-y-1.5 focus:outline-none lg:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "bg-foreground h-0.5 w-6 transition-all duration-300 ease-in-out",
                  isMobileMenuOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "bg-foreground h-0.5 w-6 transition-all duration-300 ease-in-out",
                  isMobileMenuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "bg-foreground h-0.5 w-6 transition-all duration-300 ease-in-out",
                  isMobileMenuOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        className={cn(
          "bg-card fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-500",
          isMobileMenuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-50",
        )}
      >
        <nav className="flex flex-col items-center gap-4">
          {navLinks?.map((link, index) => {
            const url = new URL(link?.href, "http://a");
            const isHashed = !!url.hash;
            return (
              <span key={index}>
                {isHashed ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "underline-effect primary text-sm whitespace-nowrap uppercase",
                      {
                        active: visibleSection === url.hash.replace("#", ""),
                      },
                    )}
                  >
                    {link?.name}
                  </Link>
                ) : (
                  <ActiveLink
                    key={link.name}
                    href={link.href}
                    className="underline-effect primary text-sm whitespace-nowrap uppercase"
                    activeClassName="active"
                  >
                    {link?.name}
                  </ActiveLink>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Header;

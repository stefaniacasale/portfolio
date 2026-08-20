"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/data/content";
import { CloseIcon, MenuIcon } from "./icons";
import { container, externalLinkProps, pillPrimary, pillSecondary } from "./ui";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const MENU_ID = "primary-menu";

const linkClass =
  "rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap text-ink/70 transition-colors duration-200 hover:bg-sand-soft hover:text-ink";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const close = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  // Escape closes the menu and hands focus back to the toggle.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close(true);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  // Opening the menu moves focus to its first link.
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/85 backdrop-blur">
      <a
        href="#main"
        className="sr-only rounded-full bg-ink px-4 py-2 text-sm font-semibold text-ivory focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-10"
      >
        Skip to content
      </a>

      <div
        className={`${container} flex items-center justify-between gap-4 py-3.5`}
      >
        <a
          href="#top"
          aria-label={`${site.name}, back to top`}
          className="group flex items-center gap-2.5 rounded-xl text-base font-extrabold tracking-tight whitespace-nowrap transition-colors duration-200 hover:text-ink/70"
        >
          <Image
            src="/branding/sc-monogram.png"
            alt=""
            width={40}
            height={40}
            sizes="40px"
            className="h-10 w-10 rounded-xl transition-transform duration-200 group-hover:scale-[1.03]"
          />
          <span>{site.name}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          <a
            href={site.resumeHref}
            {...externalLinkProps}
            aria-label="Resume PDF, opens in new tab"
            className={`${pillSecondary} ml-2 whitespace-nowrap max-lg:hidden`}
          >
            Resume
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label={`Email ${site.name}`}
            className={`${pillPrimary} whitespace-nowrap`}
          >
            Email me
          </a>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls={MENU_ID}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-line bg-ivory-warm p-2.5 text-ink transition-colors duration-200 hover:border-ink hover:bg-sand-soft md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open ? (
        <div
          id={MENU_ID}
          ref={panelRef}
          className="border-t border-line bg-ivory md:hidden"
        >
          <nav aria-label="Main" className={`${container} flex flex-col py-4`}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => close()}
                className="rounded-2xl px-3 py-3 text-base font-medium text-ink transition-colors duration-200 hover:bg-sand-soft"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={site.resumeHref}
                {...externalLinkProps}
                aria-label="Resume PDF, opens in new tab"
                onClick={() => close()}
                className={pillSecondary}
              >
                Resume
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label={`Email ${site.name}`}
                onClick={() => close()}
                className={pillPrimary}
              >
                Email me
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

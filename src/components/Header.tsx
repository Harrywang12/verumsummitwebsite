"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type NavItem = { label: string; href: string };

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const about: NavItem[] = [
    { label: "About Us", href: "/about" },
    { label: "Executive Team", href: "/about/executive-team" },
    { label: "FAQ", href: "/about/faq" },
  ];
  const conference: NavItem[] = [
    { label: "Schedule", href: "/conference/schedule" },
    { label: "Events", href: "/conference/events" },
    { label: "Hotel", href: "/conference/hotel" },
    { label: "Sponsors", href: "/conference/sponsors" },
  ];
  const resources: NavItem[] = [
    { label: "Important Documents", href: "/resources/important-documents" },
    { label: "Position Papers", href: "/resources/position-papers" },
    { label: "Policies", href: "/resources/policies" },
    { label: "Contact", href: "/resources/contact" },
  ];

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="w-full bg-primary text-primary-foreground border-b border-black/10 sticky top-0 z-50">
      <div className="container-site flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-10 w-10 bg-primary-foreground text-primary flex items-center justify-center font-bold text-lg">
            VS
          </div>
          <span className="uppercase tracking-wider font-semibold">Verum Summit MUN</span>
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden block text-primary-foreground"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>

        <nav className="hidden md:flex gap-8 text-sm">
          <div className="relative">
            <Link href="/" className="hover:underline underline-offset-4">Home</Link>
          </div>

          <Dropdown
            title="About"
            items={about}
            isOpen={openMenu === "about"}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          />
          <Dropdown
            title="Conference"
            items={conference}
            isOpen={openMenu === "conference"}
            onMouseEnter={() => handleMouseEnter("conference")}
            onMouseLeave={handleMouseLeave}
          />
          <Dropdown
            title="Resources"
            items={resources}
            isOpen={openMenu === "resources"}
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          />

          <div className="relative">
            <Link href="/registration" className="uppercase tracking-wide">Registration</Link>
          </div>
          <div className="relative">
            <Link href="/committees" className="uppercase tracking-wide">Committees</Link>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <div className="md:hidden border-t border-black/10 bg-primary">
          <div className="container-site py-4 space-y-4">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block">Home</Link>
            <Section title="About" items={about} onItemClick={() => setMobileOpen(false)} />
            <Section title="Conference" items={conference} onItemClick={() => setMobileOpen(false)} />
            <Section title="Resources" items={resources} onItemClick={() => setMobileOpen(false)} />
            <Link href="/registration" onClick={() => setMobileOpen(false)} className="block">Registration</Link>
            <Link href="/committees" onClick={() => setMobileOpen(false)} className="block">Committees</Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Dropdown({
  title,
  items,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: {
  title: string;
  items: NavItem[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className="uppercase tracking-wide" aria-haspopup="menu" aria-expanded={isOpen}>
        {title}
      </button>
      {isOpen ? (
        <div className="absolute left-0 top-full bg-white text-foreground shadow-lg border border-black/10 min-w-[240px] z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 hover:bg-muted hover:text-foreground border-b last:border-b-0 border-black/10"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Section({ title, items, onItemClick }: { title: string; items: NavItem[]; onItemClick: () => void }) {
  return (
    <div>
      <div className="uppercase tracking-wide text-xs text-primary-foreground/80">{title}</div>
      <div className="mt-2 space-y-2">
        {items.map((i) => (
          <Link key={i.href} href={i.href} onClick={onItemClick} className="block">
            {i.label}
          </Link>
        ))}
      </div>
    </div>
  );
}



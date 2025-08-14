import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0e1526] text-white border-t border-black/20 mt-16">
      <div className="container-site py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-white text-[#0e1526] flex items-center justify-center font-bold text-lg">
              VS
            </div>
            <div className="uppercase tracking-wider font-semibold">Verum Summit MUN</div>
          </div>
          <p className="text-sm text-white/70 mt-4 max-w-xs">
            A premier Model United Nations conference—professional, inclusive, and inspiring.
          </p>
        </div>

        <div>
          <h3 className="font-semibold uppercase text-sm tracking-wide">About</h3>
          <nav className="mt-3 space-y-2 text-sm">
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/about/executive-team">Executive Team</FooterLink>
            <FooterLink href="/about/faq">FAQ</FooterLink>
          </nav>
        </div>

        <div>
          <h3 className="font-semibold uppercase text-sm tracking-wide">Conference</h3>
          <nav className="mt-3 space-y-2 text-sm">
            <FooterLink href="/conference/schedule">Schedule</FooterLink>
            <FooterLink href="/conference/events">Events</FooterLink>
            <FooterLink href="/conference/hotel">Hotel</FooterLink>
            <FooterLink href="/conference/sponsors">Sponsors</FooterLink>
          </nav>
        </div>

        <div>
          <h3 className="font-semibold uppercase text-sm tracking-wide">Resources</h3>
          <nav className="mt-3 space-y-2 text-sm">
            <FooterLink href="/resources/important-documents">Important Documents</FooterLink>
            <FooterLink href="/resources/position-papers">Position Papers</FooterLink>
            <FooterLink href="/resources/policies">Policies</FooterLink>
            <FooterLink href="/resources/contact">Contact</FooterLink>
            <FooterLink href="/registration">Registration</FooterLink>
            <FooterLink href="/committees">Committees</FooterLink>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site py-6 text-xs text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Verum Summit MUN</span>
          <nav className="hidden md:flex gap-4">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/conference/schedule">Conference</FooterLink>
            <FooterLink href="/resources/important-documents">Resources</FooterLink>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block hover:underline underline-offset-4">
      {children}
    </Link>
  );
}



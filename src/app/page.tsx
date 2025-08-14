import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Hero
        title="Verum Summit Model United Nations"
        subtitle="A premier MUN experience focused on diplomacy, leadership, and real-world impact."
        imageUrl="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2070&auto=format&fit=crop"
      />
      <section className="container-site py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="About" href="/about" image="https://images.unsplash.com/photo-1506755594592-349d12a7c52c?q=80&w=2069&auto=format&fit=crop" />
          <Card title="Conference" href="/conference/schedule" image="https://images.unsplash.com/photo-1512303384310-4314eb0d3a09?q=80&w=2070&auto=format&fit=crop" />
          <Card title="Registration" href="/registration" image="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2064&auto=format&fit=crop" />
        </div>
      </section>
    </div>
  );
}

function Card({ title, href, image }: { title: string; href: string; image: string }) {
  return (
    <Link href={href} className="group block border border-black/10">
      <div className="relative h-48 w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity" />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">TBD</p>
      </div>
    </Link>
  );
}

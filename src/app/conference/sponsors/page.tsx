import Hero from "@/components/Hero";

export default function SponsorsPage() {
  return (
    <div>
      <Hero
        title="Sponsors"
        subtitle="We are grateful for the partners who support Verum Summit."
        imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop"
      />
      <section className="container-site py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="border border-black/10 bg-white h-24 flex items-center justify-center text-sm text-muted-foreground">
              Logo TBD
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



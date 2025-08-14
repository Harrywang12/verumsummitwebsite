import Hero from "@/components/Hero";

export default function CommitteesPage() {
  return (
    <div>
      <Hero
        title="Committees"
        subtitle="Explore committees and topics."
        imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2069&auto=format&fit=crop"
      />
      <section className="container-site py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border border-black/10 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2070&auto=format&fit=crop"
                alt="Committee"
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Committee TBD</h3>
                <p className="text-sm text-muted-foreground">Topic TBD</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



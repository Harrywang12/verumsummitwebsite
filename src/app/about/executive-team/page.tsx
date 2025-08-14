import Hero from "@/components/Hero";

export default function ExecutiveTeamPage() {
  return (
    <div>
      <Hero
        title="Executive Team"
        subtitle="Meet the dedicated leaders behind Verum Summit MUN."
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
      />
      <section className="container-site py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border border-black/10 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1965&auto=format&fit=crop`}
                alt="Executive"
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Name TBD</h3>
                <p className="text-sm text-muted-foreground">Role TBD</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



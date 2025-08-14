import Hero from "@/components/Hero";

export default function FAQPage() {
  return (
    <div>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions."
        imageUrl="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2064&auto=format&fit=crop"
      />
      <section className="container-site py-12">
        <div className="space-y-6 max-w-3xl">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="border border-black/10 bg-white p-4">
              <h3 className="font-semibold">Question TBD</h3>
              <p className="text-sm text-muted-foreground mt-2">Answer TBD</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



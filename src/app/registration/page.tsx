import Hero from "@/components/Hero";

export default function RegistrationPage() {
  return (
    <div>
      <Hero
        title="Registration"
        subtitle="Secure your spot at Verum Summit MUN."
        imageUrl="https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=2070&auto=format&fit=crop"
      />
      <section className="container-site py-12 space-y-8">
        <div className="border border-black/10 bg-white p-6">TBD</div>
        <div className="border border-black/10 bg-white p-6">
          <h2 className="text-xl font-semibold">Financial Aid</h2>
          <p className="text-sm text-muted-foreground mt-2">TBD</p>
        </div>
      </section>
    </div>
  );
}



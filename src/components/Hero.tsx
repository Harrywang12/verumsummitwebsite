import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle?: string;
  imageUrl: string;
};

export default function Hero({ title, subtitle, imageUrl }: HeroProps) {
  return (
    <section className="relative w-full h-[52vh] min-h-[380px] border-b border-black/10">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          className="object-cover object-center scale-105"
        />
      </div>
      <div className="relative h-full w-full bg-gradient-to-t from-black/60 via-black/30 to-transparent">
        <div className="container-site h-full flex flex-col items-start justify-end pb-8">
          <h1 className="text-white text-3xl md:text-5xl font-semibold tracking-tight drop-shadow">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-white/90 mt-2 max-w-3xl text-base md:text-lg drop-shadow">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}



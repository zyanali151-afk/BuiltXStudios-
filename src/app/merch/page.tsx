export default function MerchandisePage() {
  return (
    <section className="relative w-full h-[calc(100vh-7rem)] flex items-center justify-center text-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background/50 z-10" />
      <div className="z-20 animate-fade-in-down">
        <h1 className="text-5xl font-headline font-bold tracking-tight text-primary sm:text-7xl lg:text-8xl">
          Coming Soon
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/80">
          Our exclusive line of merchandise is being crafted. Stay tuned for the reveal.
        </p>
      </div>
    </section>
  );
}

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function MerchandisePage() {
  const bgImage = PlaceHolderImages.find((img) => img.id === 'merch-soon');

  return (
    <section className="relative w-full h-[calc(100vh-7rem)] flex items-center justify-center text-center p-4">
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="object-cover z-0"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm z-10" />
      <div className="z-20">
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

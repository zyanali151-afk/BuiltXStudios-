import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const gameShowcaseImage = PlaceHolderImages.find((img) => img.id === 'game-showcase');
  const robloxShowcaseImage = PlaceHolderImages.find((img) => img.id === 'roblox-showcase');

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl">
              Elegance in Digital Craftsmanship
            </h1>
            <p className="mt-6 text-lg leading-8 text-foreground/80 font-body">
              BuiltXStudios is a creative powerhouse, designing immersive games and digital experiences that captivate and inspire.
            </p>
          </div>
        </div>
      </section>

      <section id="vision" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">Our Vision</h2>
              <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
                We believe in the power of play and the art of creation. Our mission is to build worlds that tell stories, forge connections, and push the boundaries of imagination, blending artistic vision with technical excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="creations" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-center mb-12 text-primary">
            Featured Creations
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 border-border/60">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Standalone Games</CardTitle>
                <CardDescription>Explore our portfolio of unique and engaging games.</CardDescription>
              </CardHeader>
              <CardContent>
                {gameShowcaseImage && (
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={gameShowcaseImage.imageUrl}
                      alt={gameShowcaseImage.description}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      data-ai-hint={gameShowcaseImage.imageHint}
                    />
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-primary hover:text-primary/80">
                  <Link href="/games">
                    View All Games <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 border-border/60">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Roblox Experiences</CardTitle>
                <CardDescription>Discover our creative and popular games on the Roblox platform.</CardDescription>
              </CardHeader>
              <CardContent>
                {robloxShowcaseImage && (
                   <div className="overflow-hidden rounded-lg">
                    <Image
                      src={robloxShowcaseImage.imageUrl}
                      alt={robloxShowcaseImage.description}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                      data-ai-hint={robloxShowcaseImage.imageHint}
                    />
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-primary hover:text-primary/80">
                  <Link href="/roblox">
                    Explore Roblox Games <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

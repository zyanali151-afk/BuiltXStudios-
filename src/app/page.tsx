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
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="relative w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-down">
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
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
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
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-center mb-12 text-primary animate-fade-in-down">
            Featured Creations
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/60 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Standalone Games</CardTitle>
                <CardDescription>Explore our portfolio of unique and engaging games.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-40 w-full bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Games</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-primary hover:text-primary/80">
                  <Link href="/games">
                    View All Games <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/60 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Roblox Experiences</CardTitle>
                <CardDescription>Discover our creative and popular games on the Roblox platform.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-40 w-full bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Roblox</span>
                </div>
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

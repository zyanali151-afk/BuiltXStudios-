import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const games = [
  {
    title: 'Cosmic Drift',
    description: 'An endless runner through the vast, beautiful, and dangerous cosmos. Master the drift to survive.',
    image: PlaceHolderImages.find((img) => img.id === 'game-1'),
  },
  {
    title: 'Neo-Kyoto: Afterfall',
    description: 'A cyberpunk RPG set in a rain-drenched, neon-lit city. Uncover a corporate conspiracy.',
    image: PlaceHolderImages.find((img) => img.id === 'game-2'),
  },
  {
    title: 'Chronicles of Aethel',
    description: 'Explore ancient ruins and forgotten kingdoms in this open-world fantasy adventure.',
    image: PlaceHolderImages.find((img) => img.id === 'game-3'),
  },
];

export default function GamesPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-6xl">
          Our Games
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Discover the worlds we have meticulously crafted.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game, index) => (
          <Card key={index} className="overflow-hidden group hover:shadow-primary/20 hover:shadow-lg transition-all duration-300">
            {game.image && (
              <CardContent className="p-0">
                <div className="aspect-[3/4] overflow-hidden">
                  <Image
                    src={game.image.imageUrl}
                    alt={game.image.description}
                    width={500}
                    height={700}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={game.image.imageHint}
                  />
                </div>
              </CardContent>
            )}
            <CardHeader>
              <CardTitle className="font-headline">{game.title}</CardTitle>
              <CardDescription>{game.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

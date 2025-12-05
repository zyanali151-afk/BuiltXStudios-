import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const robloxGames = [
  {
    title: 'Blocky Obby Parkour',
    description: 'Leap, dash, and climb through hundreds of challenging stages in this vibrant obstacle course.',
    image: PlaceHolderImages.find((img) => img.id === 'roblox-1'),
  },
  {
    title: 'Pixel Tycoon Saga',
    description: 'Build your empire from the ground up in this engaging and strategic tycoon game.',
    image: PlaceHolderImages.find((img) => img.id === 'roblox-2'),
  },
];

export default function RobloxGamesPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-6xl">
          Roblox Experiences
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Jump into the fun with our popular games on the Roblox platform.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {robloxGames.map((game, index) => (
          <Card key={index} className="overflow-hidden group hover:shadow-primary/20 hover:shadow-lg transition-all duration-300">
            {game.image && (
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={game.image.imageUrl}
                    alt={game.image.description}
                    width={500}
                    height={500}
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

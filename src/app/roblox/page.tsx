import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const robloxGames = [
  {
    title: 'Shadow Accession',
    description: 'Leap, dash, and climb through hundreds of challenging stages in this vibrant obstacle course.',
  },
  {
    title: 'Coming soon',
    description: 'Coming soon',
  },
];

export default function RobloxGamesPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-6xl animate-fade-in-down">
          Roblox Experiences
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 animate-fade-in-up">
          Jump into the fun with our popular games on the Roblox platform.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
        {robloxGames.map((game, index) => (
          <Card key={index} className="overflow-hidden group hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
            <CardHeader className="min-h-[120px]">
              <CardTitle className="font-headline">{game.title}</CardTitle>
              <CardDescription>{game.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

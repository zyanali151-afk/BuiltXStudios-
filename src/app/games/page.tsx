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
  },
  {
    title: 'Neo-Kyoto: Afterfall',
    description: 'A cyberpunk RPG set in a rain-drenched, neon-lit city. Uncover a corporate conspiracy.',
  },
  {
    title: 'Chronicles of Aethel',
    description: 'Explore ancient ruins and forgotten kingdoms in this open-world fantasy adventure.',
  },
];

export default function GamesPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tight text-primary sm:text-6xl animate-fade-in-down">
          Our Games
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80 animate-fade-in-up">
          Discover the worlds we have meticulously crafted.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {games.map((game, index) => (
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

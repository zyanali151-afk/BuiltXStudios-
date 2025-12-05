import { Github, Twitter } from 'lucide-react';
import Link from 'next/link';

const BxLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    <path
      d="M12 2L2 7V17L12 22L22 17V7L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M2 7L12 12M22 7L12 12M12 22V12M17 4.5L7 9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <BxLogo />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} BuiltXStudios. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="GitHub">
            <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

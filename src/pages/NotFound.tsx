import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/Reveal";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="min-h-[80vh] grid place-items-center px-4">
        <div className="text-center">
          <p className="font-display text-[10rem] leading-none gradient-text">404</p>
          <h1 className="mt-2 font-display text-3xl font-semibold">Page not found</h1>
          <p className="mt-3 text-muted-foreground">
            The page you're looking for has moved or never existed.
          </p>
          <Button asChild className="mt-6 rounded-full gradient-primary border-0">
            <Link to="/">Back home</Link>
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}

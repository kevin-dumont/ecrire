"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    if (pathname === "/") {
      // Si on est sur la page d'accueil, on scroll vers la section
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      // Si on n'est pas sur la page d'accueil, on redirige vers la home avec l'ancre
      router.push(`/#${id}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-border/40"
          : "bg-background border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-base font-bold text-white">
                LinkedPost
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white/70 hover:text-white hover:bg-accent/50 transition-colors"
              onClick={() => handleNavigation('features')}
            >
              Fonctionnalités
            </Button>
            <Button 
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white hover:bg-accent/50 transition-colors"
              onClick={() => handleNavigation('pricing')}
            >
              Tarifs
            </Button>
            <Link href="/login">
              <Button 
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-accent/50 transition-colors"
              >
                Connexion
              </Button>
            </Link>
            <Link href="/signup">
              <Button 
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300"
              >
                Commencer
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
              className="text-white/70 hover:text-white hover:bg-accent/50"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border/40">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Button 
              variant="ghost" 
              size="sm"
              className="w-full justify-start text-white/70 hover:text-white hover:bg-accent/50"
              onClick={() => handleNavigation('features')}
            >
              Fonctionnalités
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="w-full justify-start text-white/70 hover:text-white hover:bg-accent/50"
              onClick={() => handleNavigation('pricing')}
            >
              Tarifs
            </Button>
            <Link href="/login">
              <Button 
                variant="ghost" 
                size="sm"
                className="w-full justify-start text-white/70 hover:text-white hover:bg-accent/50"
              >
                Connexion
              </Button>
            </Link>
            <Link href="/signup">
              <Button 
                size="sm"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
              >
                Commencer
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
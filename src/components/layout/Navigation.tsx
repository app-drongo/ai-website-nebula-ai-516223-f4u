'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Zap, Sparkles, Brain } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import Image from 'next/image';

const DEFAULT_NAVIGATION = {
  brandName: 'Webline.ai',
  tagline: 'AI-Powered Web Solutions',
  ctaText: 'Get Started',
  ctaHref: '/start',
  navItems: [
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="https://pub-60de11c8c43b49ea9bd786eb6273aa91.r2.dev/639f3a0ad5b1182948adb5e4507ccb49.svg"
              alt="Webline.ai Logo"
              width={140}
              height={40}
              className="h-8 md:h-10 w-auto object-contain"
              data-editable-src="logoSrc"
            />
            <div className="flex flex-col">
              <span
                className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                data-editable="brandName"
              >
                {config.brandName}
              </span>
              <span
                className="text-xs text-muted-foreground hidden sm:block"
                data-editable="tagline"
              >
                {config.tagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {config.navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium relative group"
                  data-editable-href={`navItems[${idx}].href`}
                  data-href={item.href}
                >
                  <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </div>

            <Button
              onClick={handleCtaClick}
              className="relative bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/25"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span data-editable="ctaText">{config.ctaText}</span>
              </div>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground hover:bg-accent">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-background/95 backdrop-blur-lg border-l border-border"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-border">
                    <div className="flex items-center gap-3">
                      <Image
                        src="https://pub-60de11c8c43b49ea9bd786eb6273aa91.r2.dev/639f3a0ad5b1182948adb5e4507ccb49.svg"
                        alt="Webline.ai Logo"
                        width={120}
                        height={32}
                        className="h-6 md:h-8 w-auto object-contain"
                        data-editable-src="logoSrc"
                      />
                      <span
                        className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                        data-editable="brandName"
                      >
                        {config.brandName}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex flex-col gap-4 py-6 flex-1">
                    {config.navItems.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavClick(item.href)}
                        className="text-left text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-3 px-4 rounded-lg hover:bg-accent/50 group"
                        data-editable-href={`navItems[${idx}].href`}
                        data-href={item.href}
                      >
                        <div className="flex items-center gap-3">
                          {idx === 0 && <Zap className="h-5 w-5 text-primary" />}
                          {idx === 1 && <Brain className="h-5 w-5 text-primary" />}
                          {idx === 2 && <Sparkles className="h-5 w-5 text-primary" />}
                          <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <div className="pt-6 border-t border-border">
                    <Button
                      onClick={handleCtaClick}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg"
                      data-editable-href="ctaHref"
                      data-href={config.ctaHref}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        <span data-editable="ctaText">{config.ctaText}</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

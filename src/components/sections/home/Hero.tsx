'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Zap, Brain } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  badge: 'Revolutionary AI Technology',
  title: 'Transform Ideas Into Reality',
  subtitle:
    'Nebula AI delivers breakthrough generative capabilities that surpass traditional limitations. Experience the future of intelligent creativity.',
  description:
    'Seamlessly integrate advanced AI into your workflow with our intuitive interface. Trusted by innovators worldwide to accelerate creativity and solve complex challenges.',
  primaryCta: 'Start Creating',
  primaryHref: '/get-started',
  secondaryCta: 'Watch Demo',
  secondaryHref: '/demo',
  features: [
    {
      title: 'Intelligent Generation',
      description:
        'Revolutionary algorithms that understand context and create with unprecedented precision',
    },
    {
      title: 'Seamless Integration',
      description:
        'Intuitive interface makes advanced AI accessible to everyone, regardless of technical expertise',
    },
    {
      title: 'Transformative Power',
      description:
        'Breakthrough capabilities that accelerate innovation and unlock new creative possibilities',
    },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setGlowIntensity(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.primaryHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryHref);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-background text-foreground overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Glow effects */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
        style={{ opacity: 0.3 + glowIntensity / 500 }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse"
        style={{ opacity: 0.2 + glowIntensity / 600, animationDelay: '1s' }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Badge
              variant="outline"
              className="px-4 py-2 text-sm font-medium bg-primary/10 border-primary/20 text-primary hover:bg-primary/20 transition-colors"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span data-editable="badge">{config.badge}</span>
            </Badge>
          </div>

          {/* Main heading */}
          <div
            className={`mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight">
              <span
                data-editable="title"
                className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
              >
                {config.title}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>
          </div>

          {/* Description */}
          <div
            className={`mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              <span data-editable="description">{config.description}</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="primaryHref"
                data-href={config.primaryHref}
                className="px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
              >
                <span data-editable="primaryCta">{config.primaryCta}</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryHref"
                data-href={config.secondaryHref}
                className="px-8 py-4 text-lg font-semibold border-primary/20 text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
              >
                <span data-editable="secondaryCta">{config.secondaryCta}</span>
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div
            className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              {config.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  {/* Feature icon */}
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      {idx === 0 && <Brain className="h-8 w-8" />}
                      {idx === 1 && <Zap className="h-8 w-8" />}
                      {idx === 2 && <Sparkles className="h-8 w-8" />}
                    </div>
                  </div>

                  {/* Feature content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <span data-editable={`features[${idx}].description`}>
                        {feature.description}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Zap, Shield, Sparkles, Cpu, Network } from 'lucide-react';

const DEFAULT_FEATURES = {
  title: 'Revolutionary AI Capabilities',
  subtitle: "Breakthrough technology that redefines what's possible with artificial intelligence",
  features: [
    {
      title: 'Neural Architecture',
      description:
        'Advanced neural networks with unprecedented processing power and intelligent decision-making capabilities that adapt to complex scenarios in real-time.',
      badge: 'Core Technology',
    },
    {
      title: 'Quantum Processing',
      description:
        'Lightning-fast computational speed powered by quantum-inspired algorithms that deliver results in milliseconds, not minutes.',
      badge: 'Performance',
    },
    {
      title: 'Secure Intelligence',
      description:
        'Enterprise-grade security with encrypted data processing and privacy-first architecture that protects your most sensitive information.',
      badge: 'Security',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };

  return (
    <section id="features" className="bg-background text-foreground py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="h-6 w-6 text-primary" />
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Next-Gen AI
            </Badge>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            <span data-editable="title">{config.title}</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {config.features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group relative overflow-hidden"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardContent className="p-8 relative z-10">
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 relative">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="text-primary relative z-10">
                      {idx === 0 && <Brain className="h-8 w-8" />}
                      {idx === 1 && <Zap className="h-8 w-8" />}
                      {idx === 2 && <Shield className="h-8 w-8" />}
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <Badge
                  variant="secondary"
                  className="mb-4 bg-secondary/50 text-secondary-foreground border-0"
                >
                  <span data-editable={`features[${idx}].badge`}>{feature.badge}</span>
                </Badge>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors duration-300">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </h3>

                <p className="text-muted-foreground leading-relaxed text-lg">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  {idx === 0 && <Cpu className="h-8 w-8 text-primary" />}
                  {idx === 1 && <Network className="h-8 w-8 text-primary" />}
                  {idx === 2 && <Shield className="h-8 w-8 text-primary" />}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="flex items-center justify-center mt-16">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <Sparkles className="h-4 w-4 text-primary" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </div>
    </section>
  );
}

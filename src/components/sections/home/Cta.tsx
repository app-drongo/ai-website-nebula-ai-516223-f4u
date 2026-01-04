'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, Rocket, Brain } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_CTA = {
  title: 'Ready to Transform Your Ideas with Nebula AI?',
  subtitle:
    'Join thousands of innovators who are already leveraging next-generation AI to accelerate their creativity and solve complex challenges.',
  primaryCtaText: 'Start Building Now',
  primaryCtaHref: '/get-started',
  secondaryCtaText: 'View Documentation',
  secondaryCtaHref: '/docs',
  features: [
    {
      title: 'Instant Deployment',
      description: 'Deploy your AI models in seconds with our revolutionary infrastructure',
    },
    {
      title: 'Advanced Intelligence',
      description: 'Breakthrough algorithms that surpass traditional AI limitations',
    },
    {
      title: 'Seamless Integration',
      description: 'Intuitive APIs that make powerful AI accessible to everyone',
    },
  ],
  stats: [
    { value: '99.9%', label: 'Uptime' },
    { value: '10x', label: 'Faster Processing' },
    { value: '500K+', label: 'Active Users' },
  ],
} as const;

type CtaProps = Partial<typeof DEFAULT_CTA>;

export default function Cta(props: CtaProps) {
  const config = { ...DEFAULT_CTA, ...props };
  const navigate = useSmartNavigation();
  const [isHovered, setIsHovered] = useState(false);

  const handlePrimaryClick = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="cta" className="relative bg-background text-foreground py-24 overflow-hidden">
      {/* Futuristic background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
            <span data-editable="title">{config.title}</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={handlePrimaryClick}
              data-editable-href="primaryCtaHref"
              data-href={config.primaryCtaHref}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-primary/25 transition-all duration-300 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
              <ArrowRight
                className={`ml-2 h-5 w-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleSecondaryClick}
              data-editable-href="secondaryCtaHref"
              data-href={config.secondaryCtaHref}
              className="border-border hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            {config.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                </div>
                <div className="text-muted-foreground font-medium">
                  <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {config.features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    {idx === 0 && <Zap className="h-8 w-8 text-primary" />}
                    {idx === 1 && <Brain className="h-8 w-8 text-primary" />}
                    {idx === 2 && <Rocket className="h-8 w-8 text-primary" />}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-card-foreground">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}

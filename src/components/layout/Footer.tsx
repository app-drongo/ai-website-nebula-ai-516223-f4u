'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Twitter, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  brandName: 'Nebula AI',
  tagline: 'Next-generation AI that transforms ideas into reality',
  copyright: '© 2024 Nebula AI. All rights reserved.',
  newsletter: {
    title: 'Stay Updated',
    description: 'Get the latest AI insights and product updates',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
  },
  productLinks: [
    { title: 'AI Generator', href: '/generator' },
    { title: 'API Access', href: '/api' },
    { title: 'Integrations', href: '/integrations' },
  ],
  companyLinks: [
    { title: 'About Us', href: '/about' },
    { title: 'Careers', href: '/careers' },
    { title: 'Contact', href: '/contact' },
  ],
  legalLinks: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
  ],
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
  };

  return (
    <footer id="footer" className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid gap-12 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                <span data-editable="brandName">{config.brandName}</span>
              </h3>
              <p className="mt-2 text-muted-foreground max-w-md">
                <span data-editable="tagline">{config.tagline}</span>
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                <span data-editable="newsletter.title">{config.newsletter.title}</span>
              </h4>
              <p className="text-sm text-muted-foreground">
                <span data-editable="newsletter.description">{config.newsletter.description}</span>
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex gap-2 max-w-sm"
                data-form-id="695ab9e7863a599dcee1b067"
              >
                <input
                  type="email"
                  placeholder={config.newsletter.placeholder}
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <span data-editable="newsletter.buttonText">{config.newsletter.buttonText}</span>
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </form>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Product</h4>
            <nav className="space-y-3">
              {config.productLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => navigate(link.href)}
                  data-editable-href={`productLinks[${idx}].href`}
                  data-href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span data-editable={`productLinks[${idx}].title`}>{link.title}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Company</h4>
            <nav className="space-y-3">
              {config.companyLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => navigate(link.href)}
                  data-editable-href={`companyLinks[${idx}].href`}
                  data-href={link.href}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span data-editable={`companyLinks[${idx}].title`}>{link.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            <span data-editable="copyright">{config.copyright}</span>
          </p>

          {/* Legal Links & Social */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Legal Links */}
            <nav className="flex gap-6">
              {config.legalLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => navigate(link.href)}
                  data-editable-href={`legalLinks[${idx}].href`}
                  data-href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span data-editable={`legalLinks[${idx}].title`}>{link.title}</span>
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-4">
              <button
                onClick={() => navigate('https://github.com')}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate('https://twitter.com')}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate('https://linkedin.com')}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </button>
              <button
                onClick={() => navigate('mailto:contact@nebulaai.com')}
                className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

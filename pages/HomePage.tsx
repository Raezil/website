
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS, COMPANY_INFO, FAQS, COLLABORATIONS } from '../constants';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Icons } from '../components/Icons';

function HomePage() {
  const featuredProjects = PROJECTS.filter(p => p.isFeatured);

  return (
    <div className="gradient-bg">
      {/* Hero Section - Premium & Animated */}
      <section className="container mx-auto max-w-5xl px-4 py-24 sm:py-32 text-center relative">
        {/* Floating geometric shapes for visual interest */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 animate-fade-in-up">
          {/* Logo showcase */}
          <div className="mb-8 flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Protocol Lattice"
              className="h-24 w-24 sm:h-32 sm:w-32 animate-float"
              style={{
                animation: 'floatSlow 6s ease-in-out infinite',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="gradient-text">
              {COMPANY_INFO.heroTitle}
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-xl sm:text-2xl" style={{ color: 'hsl(var(--color-text-secondary))' }}>
            {COMPANY_INFO.heroSubtitle}
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="#/projects">
              <button className="btn btn-primary" style={{
                fontSize: '1.125rem',
                padding: '1rem 2rem'
              }}>
                Explore Our Projects
              </button>
            </a>
            <a href="#/contact">
              <button className="btn btn-outline" style={{
                fontSize: '1.125rem',
                padding: '1rem 2rem'
              }}>
                Get In Touch
              </button>
            </a>
          </div>
        </div>
      </section>


      {/* Collaborations Section */}
      <section className="container mx-auto max-w-5xl px-4 py-20 sm:py-28">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="text-gradient-purple">Key Collaborations</span>
          </h2>
          <p className="text-lg" style={{ color: 'hsl(var(--color-text-secondary))' }}>
            Partnering with leading organizations to shape the future of AI
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {COLLABORATIONS.map((collab, index) => {
            const Icon = Icons[collab.icon as keyof typeof Icons];
            return (
              <a
                href={collab.href}
                target="_blank"
                rel="noopener noreferrer"
                key={collab.name}
                className="block group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="card hover-lift" style={{
                  background: 'hsl(var(--color-bg-secondary))',
                  border: '1px solid hsl(var(--color-border-subtle))',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--spacing-xl)'
                }}>
                  <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                    <img
                      src="/utcp.png"
                      alt={collab.name + " logo"}
                      className="h-14 w-14 flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ color: 'hsl(var(--color-accent-purple))' }}
                    />
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-mono)' }}>{collab.name}</h3>
                      <p style={{ color: 'hsl(var(--color-text-secondary))' }}>{collab.description}</p>
                    </div>
                    <Icons.externalLink className="h-5 w-5 flex-shrink-0 hidden sm:block self-start transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" style={{ color: 'hsl(var(--color-text-muted))' }} />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto max-w-5xl px-4 py-20 sm:py-28">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="text-gradient-blue">Frequently Asked Questions</span>
          </h2>
          <p className="text-lg" style={{ color: 'hsl(var(--color-text-secondary))' }}>
            Everything you need to know about Protocol Lattice
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="card hover-lift"
              style={{
                background: 'hsl(var(--color-bg-secondary))',
                border: '1px solid hsl(var(--color-border-subtle))',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--spacing-xl)',
                animationDelay: `${index * 100}ms`
              }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{
                color: 'hsl(var(--color-text-primary))',
                fontFamily: 'var(--font-display)'
              }}>
                {faq.question}
              </h3>
              <p style={{
                color: 'hsl(var(--color-text-secondary))',
                lineHeight: '1.7'
              }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;

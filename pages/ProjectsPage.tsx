import React, { useState, useMemo } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { cn } from '../lib/utils';
import Button from '../components/ui/Button';

function ProjectsPage() {
    const allTags = useMemo(() => ['All', ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))], []);
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'All') {
            return PROJECTS;
        }
        return PROJECTS.filter(p => p.tags.includes(activeFilter));
    }, [activeFilter]);

    return (
        <div className="gradient-bg min-h-screen">
            <div className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h1
                        className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        <span className="gradient-text">Open Source Work</span>
                    </h1>
                    <p
                        className="mx-auto max-w-2xl text-xl"
                        style={{ color: 'hsl(var(--color-text-secondary))' }}
                    >
                        A collection of libraries, frameworks, and protocols we've built and maintain.
                    </p>
                </div>

                <div className="mb-12 flex flex-wrap justify-center gap-3">
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setActiveFilter(tag)}
                            className="transition-all duration-300"
                            style={{
                                padding: '0.625rem 1.5rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.9375rem',
                                fontWeight: '500',
                                border: activeFilter === tag ? 'none' : '2px solid hsl(var(--color-border-default))',
                                background: activeFilter === tag
                                    ? 'linear-gradient(135deg, hsl(var(--color-accent-purple)), hsl(var(--color-accent-blue)))'
                                    : 'transparent',
                                color: 'hsl(var(--color-text-primary))',
                                cursor: 'pointer',
                                boxShadow: activeFilter === tag ? 'var(--glow-purple)' : 'none'
                            }}
                            onMouseEnter={(e) => {
                                if (activeFilter !== tag) {
                                    e.currentTarget.style.borderColor = 'hsl(var(--color-accent-purple))';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeFilter !== tag) {
                                    e.currentTarget.style.borderColor = 'hsl(var(--color-border-default))';
                                }
                            }}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
import React from 'react';
import { SOCIAL_LINKS, COMPANY_INFO } from '../../constants';
import { Icons } from '../Icons';

function Footer() {
    return (
        <footer className="border-t mt-auto" style={{
            borderColor: 'hsl(var(--color-border-subtle))',
            background: 'hsl(var(--color-bg-secondary))'
        }}>
            <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row">
                <div className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="Protocol Lattice"
                        className="h-6 w-6"
                    />
                    <p className="text-sm" style={{ color: 'hsl(var(--color-text-secondary))' }}>
                        &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All Rights Reserved.
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="transition-all duration-300 hover:scale-110"
                        style={{ color: 'hsl(var(--color-text-muted))' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--color-accent-purple))'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--color-text-muted))'}
                    >
                        <Icons.github className="h-5 w-5" />
                    </a>
                    <a
                        href={SOCIAL_LINKS.utcpWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Universal Tool Calling Protocol"
                        className="transition-all duration-300 hover:scale-110"
                        style={{ color: 'hsl(var(--color-text-muted))' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(var(--color-accent-blue))'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(var(--color-text-muted))'}
                    >
                        <Icons.utcp className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
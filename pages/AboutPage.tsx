
import React from 'react';
import { COMPANY_INFO, FAQS } from '../constants';
import Badge from '../components/ui/Badge';
import { Icons } from '../components/Icons';

function AboutPage() {
    const ossPhilosophy = FAQS.find(faq => faq.question === "What is your open-source philosophy?");

    return (
        <div className="gradient-bg">
            <div className="container mx-auto max-w-3xl px-4 py-16 sm:py-24">
                <div className="text-center animate-fade-in-up">
                    <img
                        src="/logo.png"
                        alt="Protocol Lattice"
                        className="mx-auto h-20 w-20 mb-6 animate-float"
                    />
                    <h1
                        className="text-5xl font-extrabold tracking-tight gradient-text mb-6"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        {COMPANY_INFO.name}
                    </h1>
                    <p
                        className="text-xl"
                        style={{ color: 'hsl(var(--color-text-secondary))' }}
                    >
                        {COMPANY_INFO.shortPitch}
                    </p>
                </div>

                <div className="mt-16 prose prose-invert max-w-none prose-p:text-muted-foreground prose-headings:text-foreground">
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                    <p>{COMPANY_INFO.longBio}</p>

                    {ossPhilosophy && (
                        <>
                            <h2 className="mt-12 text-2xl font-bold">Open Source Philosophy</h2>
                            <p>{ossPhilosophy.answer}</p>
                        </>
                    )}

                    <h2 className="mt-12 text-2xl font-bold">Partnerships & Collaboration</h2>
                    <p>
                        We believe in the power of open collaboration to build the future of AI. We partner with organizations. If you are building on our protocols or are interested in a strategic partnership, please get in touch.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;

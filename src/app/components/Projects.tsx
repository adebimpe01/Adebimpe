"use client";

import { useState, useEffect } from "react";

type Project = {
    title: string;
    tag: string;
    description: string;
    problem: string;
    solution: string;
    stack: string[];
    link?: string;
};

const projects: Project[] = [
    {
        title: "TaskFlow",
        tag: "Personal Project",
        description:
            "Full-stack, workspace-based collaboration platform with email invites, role-based permissions (Owner/Admin/Member), and a live drag-and-drop Kanban board. Authentication via Auth.js with server-side authorization on every mutation.",
        problem:
            "Most personal-project task apps are single-user and don't reflect how teams actually work — no invites, no roles, no shared workspaces. I wanted to prove I could build the harder version: multi-user, permission-aware, and safe against people editing data they shouldn't have access to.",
        solution:
            "Built a workspace model where every mutation checks the requesting user's role server-side, not just in the UI — so permissions can't be bypassed by calling the API directly. Auth.js handles session management, and the Kanban board uses optimistic UI updates so drag-and-drop feels instant while still being validated on the server.",
        stack: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Auth.js"],
        link: "https://adebimpe-taskflow.vercel.app/",
    },
    {
        title: "Dynah Sweet Treats",
        tag: "Client Project — Live",
        description:
            "Marketing and ordering site for a campus food vendor, with a WhatsApp-based ordering flow and full technical SEO — structured data, sitemap, and Google Search Console indexing.",
        problem:
            "The client took orders manually through WhatsApp DMs with no online presence, making her invisible to anyone searching for campus food vendors and creating friction for new customers who didn't already have her number.",
        solution:
            "Built a fast, SEO-indexed site that funnels visitors straight into a pre-filled WhatsApp order message — keeping the ordering channel she already knew how to manage, while making her discoverable on Google and giving new customers a clear path to order without needing her contact saved beforehand.",
        stack: ["Next.js", "SEO", "Vercel"],
        link: "https://dynah-sweet-treat.vercel.app/",
    },
    {
        title: "Lendsqr User Management Dashboard",
        tag: "Personal Project",
        description:
            "Full-stack admin dashboard with a paginated, filterable user table and detailed profile views. Custom REST API deployed separately from the frontend, with CORS configured across environments.",
        problem:
            "This was a frontend engineering assessment simulating a real fintech admin panel — needed to handle thousands of user records without the UI choking, plus a backend deployed independently from the frontend, which meant solving cross-origin issues most tutorials skip.",
        solution:
            "Implemented pagination and filtering so the table only ever renders a manageable slice of data, and configured CORS explicitly between the separately-hosted API and frontend so requests succeed in production, not just on localhost.",
        stack: ["React", "TypeScript", "SCSS", "REST API"],
        link: "https://lendsqr-fe-test-j7vw.vercel.app/",
    },
    {
        title: "MovieHub",
        tag: "Frontend Engineering Assessment",
        description:
            "Movie discovery app integrated with the TMDB API — debounced search, multi-filter browsing, and a details page with similar-movie recommendations. TanStack Query handles caching and loading states.",
        problem:
            "Naive search-as-you-type implementations fire an API call on every keystroke, which is wasteful and can hit rate limits fast — a real risk on a public API like TMDB with generous but not unlimited quotas.",
        solution:
            "Debounced the search input so requests only fire after the user pauses typing, and used TanStack Query to cache results so revisiting a search or movie doesn't re-fetch unnecessarily — cutting down API calls significantly while keeping the UI feeling responsive.",
        stack: ["React", "TypeScript", "Vite", "Tailwind", "TanStack Query"],
        link: "https://moviehub-2du2.vercel.app/",
    },
    {
        title: "Hulu Landing Page Clone",
        tag: "Personal Project",
        description:
            "Pixel-accurate recreation of the Hulu landing page, focused on responsive layout precision.",
        problem:
            "Wanted to sharpen pure CSS/layout skills without any framework or backend complexity getting in the way — specifically matching a polished, professionally-designed page pixel-for-pixel across breakpoints.",
        solution:
            "Rebuilt the layout from scratch using Bootstrap's grid system, carefully matching spacing, typography scale, and breakpoint behavior against the original site rather than eyeballing it.",
        stack: ["HTML", "CSS", "Bootstrap"],
        link: "https://github.com/RukayatAbdulkareem/hulu-web-clone",
    },
];

export default function Projects() {
    const [selected, setSelected] = useState<Project | null>(null);

    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") setSelected(null);
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        document.body.style.overflow = selected ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [selected]);

    return (
        <section id="projects" className="px-6 py-16 md:py-20 max-w-5xl mx-auto border-t border-line">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                Projects
            </h2>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <button
                        key={project.title}
                        onClick={() => setSelected(project)}
                        className="text-left rounded-lg border border-line p-6 flex flex-col hover:border-accent transition-colors cursor-pointer"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <h3 className="font-display text-lg font-semibold text-ink">
                                {project.title}
                            </h3>
                            <span className="text-sm text-accent shrink-0">
                                View details →
                            </span>
                        </div>

                        <p className="mt-1 text-xs text-ink-soft uppercase tracking-wide">
                            {project.tag}
                        </p>

                        <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                            {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-2 py-1 rounded-md bg-cream text-ink-soft border border-line"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </button>
                ))}
            </div>

            {selected && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
                        aria-hidden="true"
                    />

                    <div
                        role="dialog"
                        aria-modal="true"
                        onClick={(e) => e.stopPropagation()}
                        className="relative bg-white rounded-xl border border-line max-w-lg w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-xl"
                    >
                        <button
                            onClick={() => setSelected(null)}
                            aria-label="Close"
                            className="absolute top-4 right-4 text-ink-soft hover:text-accent transition-colors"
                        >
                            ✕
                        </button>

                        <p className="text-xs text-ink-soft uppercase tracking-wide">
                            {selected.tag}
                        </p>
                        <h3 className="mt-1 font-display text-2xl font-bold text-ink">
                            {selected.title}
                        </h3>

                        <div className="mt-5">
                            <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">
                                Problem
                            </h4>
                            <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                                {selected.problem}
                            </p>
                        </div>

                        <div className="mt-5">
                            <h4 className="text-sm font-semibold text-accent uppercase tracking-wide">
                                Solution
                            </h4>
                            <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                                {selected.solution}
                            </p>
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {selected.stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-2 py-1 rounded-md bg-cream text-ink-soft border border-line"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {selected.link && (
                            <a
                                href={selected.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center justify-center rounded-md bg-accent text-cream px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
                            >
                                View Live Project →
                            </a>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
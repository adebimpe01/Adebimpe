type Project = {
    title: string;
    tag: string;
    description: string;
    stack: string[];
    link?: string;
};

const projects: Project[] = [
    {
        title: "TaskFlow",
        tag: "Personal Project",
        description:
            "Full-stack, workspace-based collaboration platform with email invites, role-based permissions (Owner/Admin/Member), and a live drag-and-drop Kanban board. Authentication via Auth.js with server-side authorization on every mutation.",
        stack: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Auth.js"],
        link: "https://adebimpe-taskflow.vercel.app/",
    },
    {
        title: "Dynah Sweet Treats",
        tag: "Client Project — Live",
        description:
            "Marketing and ordering site for a campus food vendor, with a WhatsApp-based ordering flow and full technical SEO — structured data, sitemap, and Google Search Console indexing.",
        stack: ["Next.js", "SEO", "Vercel"],
        link: "https://dynah-sweet-treat.vercel.app/",
    },
    {
        title: "Lendsqr User Management Dashboard",
        tag: "Personal Project",
        description:
            "Full-stack admin dashboard with a paginated, filterable user table and detailed profile views. Custom REST API deployed separately from the frontend, with CORS configured across environments.",
        stack: ["React", "TypeScript", "SCSS", "REST API"],
        link: "https://lendsqr-fe-test-j7vw.vercel.app/",
    },
    {
        title: "MovieHub",
        tag: "Frontend Engineering Assessment",
        description:
            "Movie discovery app integrated with the TMDB API — debounced search, multi-filter browsing, and a details page with similar-movie recommendations. TanStack Query handles caching and loading states.",
        stack: ["React", "TypeScript", "Vite", "Tailwind", "TanStack Query"],
        link: "https://moviehub-2du2.vercel.app/",
    },
    {
        title: "Hulu Landing Page Clone",
        tag: "Personal Project",
        description:
            "Pixel-accurate recreation of the Hulu landing page, focused on responsive layout precision.",
        stack: ["HTML", "CSS", "Bootstrap"],
        link: "https://github.com/adebimpe01/",
    },
];
export default function Projects() {
    return (
        <section id="projects" className="px-6 py-16 md:py-20 max-w-5xl mx-auto border-t border-line">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                Projects
            </h2>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="rounded-lg border border-line p-6 flex flex-col hover:border-accent transition-colors"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <h3 className="font-display text-lg font-semibold text-ink">
                                {project.title}
                            </h3>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline shrink-0">
                                    View →
                                </a>
                            )}
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
                    </div>
                ))}
            </div>
        </section>
    );
}
import Image from "next/image";

export default function Hero() {
    return (
        <section className="px-6 py-16 md:py-20 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[1fr_260px] gap-10 items-start">
                <div>
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-ink leading-tight">
                        Rukayat Abdulkareem
                    </h1>
                    <p className="mt-2 text-lg text-ink-soft font-medium">
                        Frontend Web Developer
                    </p>

                    <p className="mt-6 text-ink-soft leading-relaxed max-w-2xl">
                        I&apos;m a frontend web developer with a B.Sc. in Mathematics and
                        hands-on experience building full-stack, production-style web
                        applications with React, Next.js, and TypeScript. I care about
                        clean interfaces, solid architecture, and shipping things that
                        actually work end to end — from UI and API integration to
                        authentication and deployment.
                    </p>

                    <p className="mt-4 text-ink-soft leading-relaxed max-w-2xl">
                        My most recent project, TaskFlow, is a full-stack collaborative
                        task manager with role-based permissions and a live Kanban
                        board. I&apos;ve also built and deployed Dynah Sweet Treats, a
                        local business ordering site currently indexed on Google. I&apos;m
                        currently looking for an entry-level or internship role where I
                        can keep growing as part of a collaborative engineering team.
                    </p>
                    <div className="mt-6 flex items-center gap-6">
                        <a
                            href="https://github.com/adebimpe01/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-accent transition-colors"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 shrink-0"
                                aria-hidden="true"
                            >
                                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
                            </svg>
                            GitHub
                        </a>

                        <a href="https://www.linkedin.com/in/abdulkareem-rukayat-b743a6247/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-accent transition-colors">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5 shrink-0"
                                aria-hidden="true"
                            >
                                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-line shadow-lg mx-auto md:mx-0 md:justify-self-end">
                    <Image
                        src="/profile.jpg"
                        alt="Rukayat Abdulkareem"
                        width={256}
                        height={256}
                        className="object-cover object-top w-full h-full"
                        priority
                    />
                </div>
            </div >
        </section >
    );
}
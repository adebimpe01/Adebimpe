export default function About() {
const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "Supabase",
  "Auth.js",
  "TanStack Query",
  "REST APIs",
  "Vite",
  "Git & GitHub",
];

    return (
        <section id="about" className="px-6 py-16 md:py-20 max-w-5xl mx-auto border-t border-line">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
                About
            </h2>

            <div className="mt-8 grid md:grid-cols-[1.4fr_1fr] gap-12">
                {/* Left: bio + education + what I'm looking for */}
                <div className="space-y-6">
                    <p className="text-ink-soft leading-relaxed">
                        I got into frontend development the practical way — by building
                        things people actually needed, then figuring out how to make
                        them work well. That instinct started with a B.Sc. in
                        Mathematics, where I spent most of my time thinking in systems
                        and logic long before I wrote a line of React. That background
                        still shapes how I approach UI work: I care less about how
                        something looks in isolation and more about whether the whole
                        system — state, data, layout — holds together under real use.
                    </p>

                    <p className="text-ink-soft leading-relaxed">
                        Since then I&apos;ve moved from tutorials into full, deployed
                        products: role-based permissions, live data, authentication,
                        real users. TaskFlow and Dynah Sweet Treats (in the Projects
                        section below) are the two I&apos;m proudest of — not because
                        they&apos;re flashy, but because they&apos;re finished, working,
                        and currently live.
                    </p>

                    <div>
                        <h3 className="font-display text-sm font-semibold text-ink uppercase tracking-wide">
                            Education
                        </h3>
                        <div className="mt-2 space-y-2">
                            <div>
                                <p className="text-ink font-medium">B.Sc. Mathematics</p>
                                <p className="text-sm text-ink-soft">
                                    Prince Abubakar Audu University — Completed July 2026
                                </p>
                            </div>
                            <div>
                                <p className="text-ink font-medium">National Diploma, Computer Science</p>
                                <p className="text-sm text-ink-soft">
                                    Kwara State Polytechnic — 2021 – 2022
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg border border-line bg-cream/60 p-4">
                        <p className="text-ink-soft leading-relaxed">
                            <span className="font-semibold text-ink">
                                Right now:
                            </span>{" "}
                            I&apos;m looking for an entry-level or internship frontend
                            role where I can keep growing on a collaborative engineering
                            team — somewhere I can learn from experienced developers while
                            contributing real, shippable work.
                        </p>
                    </div>
                </div>

                {/* Right: tech stack grid */}
                <div>
                    <h3 className="font-display text-sm font-semibold text-ink uppercase tracking-wide">
                        Tech Stack
                    </h3>
                    <div className="mt-4 grid grid-cols-2 gap-3">
                        {stack.map((item) => (
                            <div
                                key={item}
                                className="rounded-md border border-line px-3 py-2 text-sm text-ink-soft text-center"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
type SkillGroup = {
  category: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React.js",
      "Next.js (App Router)",
      "React Router",
      "TanStack Query",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & Data",
    items: ["Prisma ORM", "PostgreSQL", "Supabase", "Auth.js", "REST APIs", "Server Actions"],
  },
  {
    category: "Tools",
    items: ["Git & GitHub", "Vite", "Axios", "npm", "Vercel", "Render"],
  },
  {
    category: "Concepts",
    items: [
      "Responsive Web Design",
      "REST API Integration",
      "Component Architecture",
      "State Management",
      "Authentication & Authorization",
      "Technical SEO",
      "UI/UX Implementation",
    ],
  },
  {
    category: "Soft Skills",
    items: ["Communication", "Collaboration", "Technical Documentation", "Problem-Solving"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-16 md:py-20 max-w-5xl mx-auto border-t border-line">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
        Skills
      </h2>

      <div className="mt-8 grid md:grid-cols-2 gap-x-12 gap-y-8">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-display text-sm font-semibold text-ink uppercase tracking-wide">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-full bg-cream text-ink-soft border border-line"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
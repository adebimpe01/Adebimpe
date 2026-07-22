import ContactForm from "./ContactForm";


export default function Contact() {
  return (
    <section id="contact" className="px-6 py-16 md:py-20 max-w-5xl mx-auto border-t border-line">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-ink">
          Let&apos;s work together
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">
          I&apos;m currently looking for an entry-level or internship frontend
          role. If you&apos;re hiring, or just want to talk about a project,
          I&apos;d love to hear from you.
        </p>

        <div className="mt-10 flex flex-col divide-y divide-line border border-line rounded-lg overflow-hidden">
          <a
            href="mailto:abdulkareemrukayat18@gmail.com"
            className="group flex items-center justify-between px-5 py-4 hover:bg-accent/5 transition-colors"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 6 10-6" />
                </svg>
              </span>
              <span>
                <span className="block text-xs text-ink-soft/70">Email</span>
                <span className="block text-sm font-medium text-ink">
                  abdulkareemrukayat18@gmail.com
                </span>
              </span>
            </span>
            <span className="text-ink-soft group-hover:text-accent group-hover:translate-x-0.5 transition-all">
              →
            </span>
          </a>

          <a
            href="tel:+2349029063912"
            className="group flex items-center justify-between px-5 py-4 hover:bg-accent/5 transition-colors"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs text-ink-soft/70">Phone</span>
                <span className="block text-sm font-medium text-ink">
                  +234 902 906 3912
                </span>
              </span>
            </span>
            <span className="text-ink-soft group-hover:text-accent group-hover:translate-x-0.5 transition-all">
              →
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/abdulkareem-rukayat-b743a6247/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-5 py-4 hover:bg-accent/5 transition-colors"
          >
            <span className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs text-ink-soft/70">LinkedIn</span>
                <span className="block text-sm font-medium text-ink">
                  linkedin.com/in/abdulkareem-rukayat
                </span>
              </span>
            </span>
            <span className="text-ink-soft group-hover:text-accent group-hover:translate-x-0.5 transition-all">
              →
            </span>
          </a>
        </div>
      </div>
      <ContactForm />
    </section>
    
  );
}
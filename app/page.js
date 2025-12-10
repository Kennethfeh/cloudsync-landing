import SectionHeading from "../components/SectionHeading";

const stats = [
  { label: "Teams onboarded", value: "2,400+" },
  { label: "Average sync speed", value: "3.2× faster" },
  { label: "Monthly recoveries", value: "18k" },
];

const features = [
  {
    title: "Zero-knowledge security",
    copy: "Client-side encryption, role-based access, and automated compliance exports for SOC 2, ISO, and HIPAA audits.",
  },
  {
    title: "Context-aware sync",
    copy: "Edge caching plus predictive prefetching keeps frequently accessed workspaces instantly available across devices.",
  },
  {
    title: "Insights for operators",
    copy: "Lifecycle timelines show asset ownership, approval state, and retention rules so teams can make confident decisions.",
  },
];

const workflow = [
  { step: "Discover", detail: "Interviewed customer success teams to map current asset-sharing gaps and draft the sitemap." },
  { step: "Sketch", detail: "Produced grayscale wireframes for marketing + app surfaces, then ran async critiques with stakeholders." },
  { step: "Polish", detail: "Translated approved frames into high-fidelity mocks with motion notes, tokens, and dev-ready documentation." },
];

const testimonials = [
  {
    quote: "CloudSync let us consolidate three internal tools. The blueprint route made developer handoff effortless.",
    name: "Kylie Booker",
    role: "Director of Engineering @ Echo",
  },
  {
    quote: "The design system notes meant we could build marketing and product in parallel without second-guessing spacing or tone.",
    name: "Mateo Silva",
    role: "Product Manager @ Northwind",
  },
];

const tools = ["Figma", "Arcade", "Maze", "Notion"];

const analytics = [
  {
    label: "Launch conversion lift",
    value: "+42%",
    detail: "CTA variants and testimonial sequencing increased trial starts week over week.",
  },
  {
    label: "Support tickets deflected",
    value: "1.8k/mo",
    detail: "Blueprint notes clarified edge cases so fewer engineering escalations were needed.",
  },
  {
    label: "Blueprint adoption",
    value: "87%",
    detail: "Engineers referenced /blueprint in PRDs, improving implementation accuracy.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <main id="main" className="px-6 py-16 md:py-24 hero-glow">
        <header className="max-w-6xl mx-auto">
          <nav className="flex items-center justify-between text-sm text-slate-600" aria-label="Primary">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <span aria-hidden>☁️</span>
              <span>CloudSync Studio</span>
            </div>
            <div className="flex items-center gap-3">
              <a className="hidden md:inline-flex px-4 py-2 rounded-full border border-slate-200 hover:border-slate-300 transition" href="/blueprint">
                Blueprint
              </a>
              <a className="px-5 py-2 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition" href="#contact" aria-label="Book a design review">
                Book a review
              </a>
            </div>
          </nav>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
                Design system + marketing case study
              </p>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
                Sync every surface—from marketing site to admin workflows—without sacrificing craft.
              </h1>
              <p className="text-lg text-slate-600">
                This concept project frames the visual language, component tokens, and developer annotations for CloudSync’s upcoming launch. Every section is annotated inside the <strong>Blueprint</strong> route plus the design handoff docs in the repo.
              </p>
              <div className="flex flex-wrap gap-4">
                <a className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-medium text-white shadow-lg shadow-blue-600/30 focus-ring transition" href="/blueprint">
                  View blueprint
                </a>
                <a className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 font-medium text-slate-900 hover:border-slate-300 focus-ring" href="#process">
                  Read process
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-slate-500" aria-label="Tool stack">
                {tools.map((tool) => (
                  <span key={tool} className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-300" aria-hidden />
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-surface relative overflow-hidden p-6 grid-overlay" role="img" aria-label="Preview of the dashboard layout">
              <p className="text-sm font-medium text-slate-500">High-fidelity preview</p>
              <div className="mt-4 rounded-2xl bg-white shadow-lg p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase text-slate-500">Storage health</p>
                    <p className="text-2xl font-semibold">99.9%</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 text-emerald-700 text-xs px-3 py-1">Healthy</span>
                </div>
                <div className="h-32 rounded-xl bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600" aria-hidden />
                <div className="space-y-2">
                  {["Sync API", "Audit Trail", "Spaces"].map((item) => (
                    <div key={item} className="flex items-center justify-between text-sm">
                      <span>{item}</span>
                      <span className="text-slate-500">Updated 3m ago</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <dl className="mt-16 grid gap-8 text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="card-surface px-6 py-8">
                <dt className="text-sm text-slate-500">{stat.label}</dt>
                <dd className="text-3xl font-semibold mt-2">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        <section className="mt-24 space-y-12" id="features">
          <SectionHeading
            eyebrow="Design system"
            title="A composable kit for marketing + product surfaces"
            description="Each feature card references the design token table inside docs/design-system.md so engineers can plug the same primitives into production."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="card-surface h-full p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="mt-4 text-sm text-slate-600">{feature.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-12 lg:grid-cols-2" id="process">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Architecture"
              title="Blueprint route doubles as a handoff artifact"
              description="Navigate to /blueprint for sitemap, responsive grids, and motion notes. It mirrors the annotated Figma file so PMs and engineers stay in sync."
            />
            <ul className="mt-10 space-y-6">
              {workflow.map((item, index) => (
                <li key={item.step} className="flex gap-4">
                  <span className="mt-1 h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold">
                    0{index + 1}
                  </span>
                  <div>
                    <h4 className="text-lg font-semibold">{item.step}</h4>
                    <p className="text-sm text-slate-600">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface p-8 space-y-6">
            <p className="text-sm font-semibold text-slate-500">Wireframe peek</p>
            <div className="rounded-2xl border border-dashed border-slate-300 p-6 space-y-4 text-sm text-slate-600">
              <p>Header • Hero • Product callout • Feature grid • Timeline • Testimonial carousel • Pricing CTA</p>
              <p className="text-xs text-slate-500">
                Every row lists intended column behaviors (stack, split 50/50, etc.) to cut ambiguity during implementation.
              </p>
            </div>
            <a
              href="/blueprint"
              className="inline-flex items-center gap-2 text-blue-600 font-medium"
            >
              View live blueprint
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        <section className="mt-24" id="analytics">
          <SectionHeading
            eyebrow="Analytics"
            title="Impact tracked post-launch"
            description="Metrics come from the paired Mixpanel dashboard and stakeholder interviews."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {analytics.map((item) => (
              <article key={item.label} className="card-surface p-6 space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                <p className="text-3xl font-semibold text-slate-900">{item.value}</p>
                <p className="text-sm text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 space-y-10" id="voice">
          <SectionHeading
            eyebrow="Product narrative"
            title="Trust signals told through customer stories"
            description="Purposeful copy anchors each module so messaging and visuals reinforce one another."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="card-surface p-6 space-y-4">
                <blockquote className="text-lg text-slate-900">“{testimonial.quote}”</blockquote>
                <figcaption className="text-sm text-slate-600">
                  {testimonial.name} · {testimonial.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-24" id="contact">
          <div className="card-surface px-6 py-12 text-center space-y-6">
            <SectionHeading
              title="Ready for review calls or async feedback"
              description="Share the deployed Vercel link alongside the Blueprint route so reviewers can understand both the polish and the process."
            />
            <div className="flex flex-wrap justify-center gap-4">
              <a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 font-medium text-white focus-ring" href="mailto:design@gamemaker.dev" aria-label="Email the designer">
                Email the designer
              </a>
              <a className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 font-medium text-slate-900 focus-ring" href="https://vercel.com" target="_blank" rel="noreferrer">
                Launch on Vercel
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-16 text-center text-sm text-slate-500">
          Designed for the Web Designer role — includes specs, motion notes, and developer-ready docs.
        </footer>
      </main>
    </>
  );
}

import SectionHeading from "../../components/SectionHeading";

const sitemap = [
  {
    node: "Home",
    children: ["Hero", "Product Narrative", "Testimonials", "CTA"],
  },
  {
    node: "Docs",
    children: ["Design System", "Tokens", "Component States"],
  },
  {
    node: "Web App",
    children: ["Spaces", "Audit Trail", "Admin"],
  },
];

const grids = [
  { label: "Hero", cols: "12-col fluid", notes: "Split 60/40 on desktop, stack on mobile" },
  { label: "Features", cols: "3-up cards", notes: "Auto height with equal gap" },
  { label: "Testimonials", cols: "2-col masonry", notes: "Cards share height above md" },
];

export const metadata = {
  title: "CloudSync Blueprint",
  description: "Annotated site architecture and wireframes for engineers.",
};

export default function Blueprint() {
  return (
    <main className="px-6 py-16 max-w-5xl mx-auto space-y-16">
      <SectionHeading
        eyebrow="Blueprint"
        title="Architecture, wireframes, and motion cues"
        description="This internal-facing page mirrors the annotated Figma file so engineers can verify structure without leaving the repo."
        align="left"
      />

      <section>
        <h3 className="text-lg font-semibold">Site map</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {sitemap.map((item) => (
            <article key={item.node} className="card-surface p-5">
              <p className="text-sm font-semibold text-slate-500">{item.node}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {item.children.map((child) => (
                  <li key={child}>• {child}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold">Responsive grid decisions</h3>
        <table className="mt-4 w-full text-left text-sm">
          <thead>
            <tr className="text-slate-500">
              <th className="py-2">Module</th>
              <th className="py-2">Grid</th>
              <th className="py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {grids.map((grid) => (
              <tr key={grid.label} className="border-t border-slate-200">
                <td className="py-3 font-medium">{grid.label}</td>
                <td className="py-3">{grid.cols}</td>
                <td className="py-3 text-slate-600">{grid.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3 className="text-lg font-semibold">Motion specs</h3>
        <div className="mt-4 space-y-4">
          <p className="text-sm text-slate-600">
            • Primary CTAs: 180ms ease-out on hover, drop shadow increases subtly.<br />
            • Cards: translateY(-4px) + shadow-lg when focused/hovered, defined via Tailwind utilities.<br />
            • Testimonial carousel (future scope): fade between quotes every 6s with pause on focus.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold">Developer handoff</h3>
        <p className="mt-4 text-sm text-slate-600">
          Pair this page with docs/design-system.md. Each module references tokens (spacing, color, radius) so implementation stays consistent. Update the Figma link in the docs before sharing with the hiring team.
        </p>
      </section>
    </main>
  );
}

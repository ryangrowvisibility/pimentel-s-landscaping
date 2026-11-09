import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(661) 496-6849";
const TEL = "tel:+16614966849";
const SMS = "sms:+16614966849";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Pimentel's%20Landscaping&query_place_id=ChIJE-pObwIP6oAR0ofvllRupd0";
const FB = "https://www.facebook.com/PimentelsLandscape/";

const services = [
  { icon: "layers", name: "Backyard Makeovers", text: "Tell us what you are picturing and we will work out how to fit it in your yard: grass, concrete, rock, a fire pit, greenery along the fence. One crew handles the whole job, so you are not juggling contractors.", tag: "Most requested" },
  { icon: "leaf", name: "Sod & Artificial Grass", text: "We pull the old lawn, till and add topsoil, level the ground and lay fresh sod. Prefer no mowing and no watering? We install artificial grass too, and it pairs well with rock borders." },
  { icon: "drop", name: "Sprinklers, Drip & Drainage", text: "Full sprinkler systems, drip lines for garden beds and French drains for water that sits where it should not. If another job left your yard draining badly, we can look at what went wrong." },
  { icon: "mountain", name: "Decorative Rock & Stone", text: "Landscape rock and decorative stone for front yards, side yards and beds. It looks clean, holds up in the Bakersfield heat and cuts down on what you need to water." },
  { icon: "rake", name: "Grading & Resloping", text: "Getting the ground right is what keeps water away from your house and keeps a new lawn level. We grade and reslope before anything goes in." },
  { icon: "tree", name: "Tree Services", text: "Trimming and tree work as part of a yard project or on its own. Call and describe the tree, and we will tell you what it needs." },
  { icon: "scissors", name: "Gardening & Lawn Maintenance", text: "Ongoing gardening and lawn care to keep the yard looking the way it did the day we finished." },
  { icon: "truck", name: "Yard Clean-Ups", text: "Overgrown beds, weeds, debris and neglected corners cleared out and hauled off, whether you are getting ready to sell or just want your yard back." },
];

const reviews = [
  { name: "Daniel N.", job: "Full backyard", text: "From the first call they were out to earn the job. They beat the other bids and delivered what he had pictured. Edwin was confident, easy to work with, answered every question and went the extra mile." },
  { name: "Yvette U.", job: "Drainage repair, sod, sprinklers", text: "Another contractor's concrete had blocked the drainage at her brand-new house. Edwin recommended a French drain and fixed the damage, then put in new sod, a full sprinkler system and drip lines around the garden beds." },
  { name: "Annabel D.", job: "Backyard design", text: "They brought her backyard vision to life. Edwin paid attention to the smallest details so he understood exactly what she wanted, and good communication kept the whole project on track." },
  { name: "Google reviewer", job: "Lawn replacement", text: "Edwin was the first to bid. The crew showed up on time and finished in two days: old lawn out, soil tilled, topsoil added, ground leveled and new sod down. Excellent work." },
  { name: "Annie G.", job: "Yard project", text: "Very impressed with the outcome. They took their time, made sure everything was done right and stayed on schedule. She will use them for her next project and refer family and friends." },
  { name: "Chris J.", job: "Artificial grass and rock", text: "Very pleased with the artificial grass and rock in the backyard, and the price was fair and reasonable." },
];

const steps = [
  { title: "Call or text", text: "Tell us what is going on with your yard and what you would like it to be. Photos by text help." },
  { title: "We come take a look", text: "We walk the yard with you, measure, look at how it drains and talk through ideas, including ones you may not have thought of." },
  { title: "You get a clear bid", text: "You will know what is included and what it costs before anything starts. Change your mind about a detail? Now is the time." },
  { title: "We do the work", text: "The crew shows up when we say, keeps you posted and works through the plan. Some lawn replacements take as little as two days." },
  { title: "Final walk-through", text: "We walk it with you when we finish. If something is not right, tell us and we will look at it." },
];

const faqs = [
  { q: "What areas do you work in?", a: "We are a Bakersfield landscaping company. If you are outside town and not sure whether we can get to you, call or text and ask." },
  { q: "How do I get a bid?", a: `Call or text ${PHONE}. We will set up a time to see the yard, then give you a price for the work you want.` },
  { q: "Can you fix a yard that drains badly?", a: "Yes. We install French drains and regrade yards so water moves away from where it should not be. One customer came to us after another contractor's concrete blocked the drainage at a new house." },
  { q: "My yard is small. Is it worth doing?", a: "Often, yes. One customer did not think her yard was big enough for much, and it ended up with a fire pit, added concrete, grass and greenery along the fence." },
  { q: "How long does a job take?", a: "It depends on the size. A straightforward lawn replacement can be done in about two days. A full backyard takes longer, and we will give you an idea of timing with your bid." },
  { q: "Should I go with sod or artificial grass?", a: "Sod is cooler underfoot and looks like a real lawn because it is one. Artificial grass means no mowing and no watering. We install both and can walk you through the trade-offs for your yard." },
  { q: "Who will I be dealing with?", a: "Pimentel's is locally owned by Gabriel Pimentel. Most of our customers work with Edwin, who comes out to see the yard and stays in touch through the job." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Pimentel's Landscaping",
  alternateName: "Pimentel Outdoor Living",
  telephone: "+1-661-496-6849",
  areaServed: "Bakersfield, CA",
  sameAs: [FB],
  hasMap: MAPS,
  aggregateRating: { "@type": "AggregateRating", ratingValue: 4.4, reviewCount: 26 },
};

function CallBtn({ className = "" }: { className?: string }) {
  return <a href={TEL} className={`btn inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-cta px-6 text-lg font-bold text-on-cta hover:bg-cta-dark ${className}`}><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>;
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-paper focus:p-3">Skip to main content</a>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-white"><Icon name="leaf" className="h-5 w-5" /></span>
            <span className="font-[family-name:var(--font-heading)] text-lg font-bold leading-tight">Pimentel&apos;s Landscaping</span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-6 text-[1.0625rem] font-semibold lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#how" className="hover:text-brand">How It Works</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="hidden text-lg font-bold text-brand-dark xl:block">{PHONE}</a>
            <a href={TEL} className="btn hidden min-h-[48px] items-center rounded-lg bg-cta px-5 font-bold text-on-cta hover:bg-cta-dark md:inline-flex">Call Now</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="btn grid h-12 w-12 place-items-center rounded-lg bg-cta text-on-cta md:hidden"><Icon name="phone" /></a>
          </div>
        </div>
      </header>

      <main id="main" className="pb-20 md:pb-0">
        <section id="top" className="bg-tint">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-12 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 font-semibold text-brand-dark"><Icon name="pin" className="h-5 w-5" />Locally owned in Bakersfield, CA</p>
              <h1>Landscaping &amp; Backyard Makeovers in Bakersfield</h1>
              <p className="mt-5 max-w-[56ch] text-xl leading-relaxed text-muted">Dirt to green grass, sprinklers that work, drainage that does its job. Gabriel Pimentel&apos;s crew brings honest bids and careful work to yards all over town.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <CallBtn />
                <a href={SMS} className="btn inline-flex min-h-[52px] items-center justify-center gap-2 rounded-lg border-2 border-brand px-6 text-lg font-bold text-brand-dark hover:bg-brand-soft"><Icon name="message" className="h-5 w-5" />Text Us Photos</a>
              </div>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[1.0625rem] font-semibold">
                <Stars count={4} /><span>4.4 on Google</span><span aria-hidden="true" className="text-line">|</span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline decoration-line underline-offset-4 hover:text-brand">26 Google reviews</a><span aria-hidden="true" className="text-line">|</span><span>Locally owned</span>
              </p>
            </div>
            <figure className="rounded-2xl border border-line bg-paper p-7 shadow-[0_18px_50px_-30px_oklch(0.35_0.1_150/0.5)]">
              <Stars />
              <blockquote className="mt-4 font-[family-name:var(--font-heading)] text-[1.3rem] font-bold leading-snug">&ldquo;We didn&apos;t think our yard was big enough to do much. Edwin saw the potential.&rdquo;</blockquote>
              <p className="mt-4 text-muted">He drew up a design with a fire pit, added concrete, grass and greenery along the fence, and the finished yard went past what the family expected.</p>
              <figcaption className="mt-5 border-t border-line pt-4 font-semibold">Laura R. <span className="font-normal text-muted">· Google review · backyard makeover</span></figcaption>
            </figure>
          </div>
        </section>

        <section aria-label="Why homeowners call us" className="border-y border-line bg-paper">
          <ul className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-6 gap-y-6 px-5 py-8 md:grid-cols-4">
            {[["sparkle", "4.4 Google rating", "26 reviews"], ["users", "Locally owned", "by Gabriel Pimentel"], ["layers", "Plan through install", "one crew, start to finish"], ["clock", "On-schedule work", "a theme in our reviews"]].map(([i, a, b]) => (
              <li key={a} className="flex items-center gap-3"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-dark"><Icon name={i} /></span><span className="leading-tight"><span className="block font-bold">{a}</span><span className="text-[1.0625rem] text-muted">{b}</span></span></li>
            ))}
          </ul>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="max-w-[60ch]"><h2>Landscaping Services in Bakersfield</h2><p className="mt-3 text-muted">From one tree to a whole backyard. Here is what people call us for most.</p></div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <article key={s.name} className={`reveal flex flex-col rounded-2xl border bg-paper p-6 ${i === 0 ? "border-2 border-brand" : "border-line"}`}>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand-dark"><Icon name={s.icon} /></span>
                  {s.tag && <span className="mt-4 self-start rounded-full bg-brand px-3 py-0.5 text-[0.9375rem] font-semibold text-white">{s.tag}</span>}
                  <h3 className="mt-4">{s.name}</h3>
                  <p className="mt-2 grow text-[1.0625rem] leading-relaxed text-muted">{s.text}</p>
                  <a href={TEL} className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 font-bold text-brand-dark hover:text-brand">Call about this<Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="mx-auto max-w-[44rem] text-center">
              <div className="flex justify-center"><Stars count={4} className="h-6 w-6" /></div>
              <h2 className="mt-3">Rated 4.4 from 26 Google Reviews</h2>
              <p className="mt-3 text-muted">What Bakersfield homeowners say about working with us.</p>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-[44px] items-center gap-1.5 font-bold text-brand-dark underline underline-offset-4">Read all reviews on Google<Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name + r.job} className="reveal flex flex-col rounded-2xl border border-line bg-paper p-6">
                  <figcaption className="flex items-center gap-3"><span aria-hidden="true" className="grid h-11 w-11 place-items-center rounded-full bg-brand text-lg font-bold text-white">{r.name[0]}</span><span className="leading-tight"><span className="block font-bold">{r.name}</span><span className="text-[1.0625rem] text-muted">{r.job}</span></span></figcaption>
                  <div className="mt-4"><Stars className="h-4 w-4" /></div>
                  <blockquote className="mt-2 text-[1.0625rem] leading-relaxed">{r.text}</blockquote>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 lg:grid-cols-2">
            <div>
              <h2>A Small Company That Answers the Phone</h2>
              <div className="mt-5 space-y-4 text-muted">
                <p>Pimentel&apos;s Landscaping, also known as Pimentel Outdoor Living, is locally owned and operated here in Bakersfield by Gabriel Pimentel. We are a hands-on team, and the people who bid your yard are part of the crew that gets it built.</p>
                <p>Most of our customers meet Edwin first. He comes out, looks at what you have, listens to what you want and tells you straight what will work. Customers keep telling us the same thing: he noticed something they had not, or found a way to fit what they thought would not fit.</p>
                <p>Honesty and integrity are how we have built this business. If your yard needs a drain before it needs a lawn, we will tell you.</p>
              </div>
            </div>
            <ul className="grid content-start gap-4 sm:grid-cols-2">
              {[["users", "You talk to the crew", "No call center and no salesperson. The people you meet are doing the work."], ["clock", "We show up on time", "Customers mention on-time crews and jobs that stayed on schedule."], ["sparkle", "Details matter", "We take the time to understand exactly what you want before we start."], ["check", "Fair, clear pricing", "Reviewers call our prices fair and reasonable, and we will walk you through the bid."]].map(([i, t, d]) => (
                <li key={t} className="reveal rounded-2xl border border-line bg-tint p-6"><span className="text-brand-dark"><Icon name={i} className="h-7 w-7" /></span><h3 className="mt-3">{t}</h3><p className="mt-1.5 text-[1.0625rem] leading-relaxed text-muted">{d}</p></li>
              ))}
            </ul>
          </div>
        </section>

        <section id="how" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[920px] px-5">
            <h2>How It Works</h2>
            <ol className="mt-10 space-y-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal grid grid-cols-[72px_1fr] items-stretch overflow-hidden rounded-2xl border border-line bg-paper sm:grid-cols-[96px_1fr]">
                  <span className="grid place-items-center bg-brand font-[family-name:var(--font-heading)] text-3xl font-bold text-white">{i + 1}</span>
                  <div className="p-5 sm:p-6"><h3>{s.title}</h3><p className="mt-1 text-[1.0625rem] leading-relaxed text-muted">{s.text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="area" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 lg:grid-cols-2">
            <div>
              <h2>Proudly Serving Bakersfield, California</h2>
              <p className="mt-4 text-muted">We are based here and work on yards around Bakersfield. If you are not sure we reach your street, send a quick text and we will let you know.</p>
              <a href={SMS} className="btn mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-lg border-2 border-brand px-5 font-bold text-brand-dark hover:bg-brand-soft"><Icon name="message" className="h-5 w-5" />Text {PHONE}</a>
            </div>
            <iframe title="Map of Bakersfield, California" src="https://maps.google.com/maps?q=Bakersfield%2C%20CA&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[340px] w-full rounded-2xl border border-line" />
          </div>
        </section>

        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div><h2>Questions We Get Asked</h2><p className="mt-3 text-muted">Do not see yours? Call <a href={TEL} className="font-bold text-brand-dark underline underline-offset-4">{PHONE}</a> and ask.</p></div>
            <div className="divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex min-h-[60px] items-center justify-between gap-4 py-4 text-lg font-bold">{f.q}<Icon name="plus" className="faq-icon h-5 w-5 shrink-0 text-brand-dark" /></summary>
                  <p className="max-w-[62ch] pb-5 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-dark text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-7 px-5 py-14 md:flex-row md:items-center md:justify-between md:py-20">
            <div className="max-w-[34rem]"><h2 className="text-white">Ready to Get Your Yard Back?</h2><p className="mt-3 text-xl leading-relaxed text-white/85">Call or text Pimentel&apos;s Landscaping and tell us what you have in mind.</p></div>
            <CallBtn className="w-full md:w-auto" />
          </div>
        </section>
      </main>

      <footer className="bg-paper">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-[family-name:var(--font-heading)] text-xl font-bold">Pimentel&apos;s Landscaping</p>
            <p className="mt-1 text-muted">Also known as Pimentel Outdoor Living</p>
            <p className="mt-4"><a href={TEL} className="font-bold text-brand-dark">{PHONE}</a></p>
            <p className="mt-1 text-muted">Bakersfield, CA</p>
            <a href={FB} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-[44px] items-center font-semibold underline underline-offset-4">Find us on Facebook</a>
          </div>
          <div><h3>Services</h3><ul className="mt-3 space-y-1.5 text-muted">{services.slice(0, 6).map((s) => <li key={s.name}>{s.name}</li>)}</ul></div>
          <div><h3>Get in touch</h3><ul className="mt-3 space-y-1.5 text-muted"><li>Call or text to set up a time</li><li>Serving Bakersfield, California</li><li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">See us on Google</a></li></ul></div>
        </div>
        <p className="border-t border-line px-5 py-5 text-center text-[1.0625rem] text-muted">&copy; {new Date().getFullYear()} Pimentel&apos;s Landscaping. All rights reserved.</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-paper p-2 md:hidden">
        <a href={TEL} className="btn flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-cta font-bold text-on-cta"><Icon name="phone" className="h-5 w-5" />Call</a>
        <a href={SMS} className="btn flex min-h-[52px] items-center justify-center gap-2 rounded-lg bg-brand font-bold text-white"><Icon name="message" className="h-5 w-5" />Text</a>
      </div>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Bot, BriefcaseBusiness, Check, ChevronDown,
  ChevronLeft, ChevronRight, Code2, Instagram, Linkedin, Mail, Menu, MessageCircle,
  Palette, PenTool, Phone, Quote, ShoppingBag, Sparkles, X,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "../components/button";
import logoAsset from "../assets/adeleke-logo-v2.png.asset.json";
import heroImage from "../assets/agency-hero.jpg";
import brandingImage from "../assets/work-branding.jpg";
import ecommerceImage from "../assets/work-ecommerce.jpg";
import animationImage from "../assets/work-animation.jpg";

const whatsappUrl = "https://wa.me/2348118250735";
const navItems = ["Home", "About", "Services", "Portfolio", "Process", "FAQ", "Contact"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adeleke Hub Agency | Creative Solutions That Drive Results" },
      { name: "description", content: "Adeleke Hub Agency builds powerful brands, persuasive content, professional websites, AI animations and e-commerce strategies." },
      { property: "og:title", content: "Adeleke Hub Agency | Digital Creative Agency" },
      { property: "og:description", content: "Creative, strategic digital work designed to attract attention and drive growth." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: AgencyPage,
});

const services = [
  { icon: Palette, title: "Branding Design", text: "Build a professional and memorable brand identity.", number: "01" },
  { icon: PenTool, title: "Copywriting", text: "Create persuasive words that capture attention and encourage action.", number: "02" },
  { icon: Code2, title: "Website Design & Development", text: "Create responsive, modern and conversion-focused websites.", number: "03" },
  { icon: ShoppingBag, title: "E-commerce Marketing", text: "Help online stores attract customers and improve sales opportunities.", number: "04" },
  { icon: Bot, title: "AI Animation", text: "Create engaging AI-powered animations, product visuals, promotional videos and creative storytelling.", number: "05" },
];

const portfolio = [
  { title: "Identity System", category: "Branding", text: "A flexible visual language designed for distinction.", image: brandingImage },
  { title: "Commerce Experience", category: "E-commerce", text: "A clear, responsive storefront built around the buyer journey.", image: ecommerceImage },
  { title: "Product Motion", category: "AI Animation", text: "Cinematic visual storytelling for product campaigns.", image: animationImage },
  { title: "Launch Campaign", category: "Copywriting", text: "A concise campaign story shaped to inspire action.", image: heroImage },
  { title: "Digital Presence", category: "Web Design", text: "A premium web experience with a conversion-first structure.", image: ecommerceImage },
];

const faqs = [
  ["What services do you offer?", "We offer branding design, copywriting, website design and development, e-commerce marketing, and AI animation."],
  ["How much does a project cost?", "Every project is scoped around its goals, complexity and deliverables. Share your brief and budget range for a tailored quote."],
  ["How long will my project take?", "Timelines depend on scope. After discovery, you receive a clear schedule with key milestones before work begins."],
  ["Are revisions included?", "Yes. Revision rounds are agreed in the project scope so feedback stays focused and the process stays predictable."],
  ["Can you redesign my existing website?", "Yes. We can evaluate your current website, clarify what should improve, and redesign it around your brand and conversion goals."],
  ["Do you help e-commerce businesses?", "Yes. We create storefront experiences and marketing strategies designed to help online stores attract and convert customers."],
  ["How do I start a project?", "Send us your goals through the contact form or WhatsApp. We will review your brief and arrange the next step."],
];

function AgencyPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [testimonial, setTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const filtered = filter === "All" ? portfolio : portfolio.filter((item) => item.category === filter);
  const testimonials = [
    { quote: "Add a short client quote here that speaks to the quality of the collaboration and final work.", name: "Client name", role: "Company / role" },
    { quote: "Replace this with feedback about the clarity of the process, attention to detail and communication.", name: "Client name", role: "Company / role" },
    { quote: "Use this space for a genuine client story about the experience and the value of the finished project.", name: "Client name", role: "Company / role" },
  ];
  const activeTestimonial = testimonials[testimonial] ?? { quote: "", name: "", role: "" };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project enquiry from ${String(form.get("name"))}`);
    const body = encodeURIComponent(`Name: ${form.get("name")}\nEmail: ${form.get("email")}\nBusiness: ${form.get("business")}\nService: ${form.get("service")}\nBudget: ${form.get("budget")}\n\nProject details:\n${form.get("details")}`);
    window.location.href = `mailto:adelekehubagency@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main id="home">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="site-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <a href="#home" aria-label="Adeleke Hub Agency home" className="flex min-w-0 items-center">
            <img src={logoAsset.url} alt="Adeleke Hub Agency" className="h-14 w-auto max-w-[130px] object-contain sm:max-w-[160px]" />
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-foreground transition-colors hover:text-primary">{item}</a>)}
            <Button asChild><a href="#contact">Start a Project <ArrowUpRight size={17} /></a></Button>
          </nav>
          <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center rounded-md border border-border bg-background lg:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div className={`overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 lg:hidden ${menuOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"}`}>
          <nav className="site-container flex flex-col py-4" aria-label="Mobile navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="border-b border-border py-3 font-semibold">{item}</a>)}
            <Button asChild className="mt-4"><a href="#contact" onClick={() => setMenuOpen(false)}>Start a Project</a></Button>
          </nav>
        </div>
      </header>

      <section className="site-container grid min-h-[calc(100svh-5rem)] items-center gap-12 py-12 lg:grid-cols-[1.02fr_.98fr] lg:py-16">
        <div className="reveal is-visible">
          <p className="eyebrow mb-6">Independent digital creative agency</p>
          <h1 className="display-title max-w-3xl">Creative Solutions That <span className="text-primary">Drive Results.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">We build powerful brands, persuasive content, professional websites, engaging AI animations and e-commerce strategies that help businesses attract attention and grow.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild><a href="#contact">Start Your Project <ArrowRight size={18} /></a></Button>
            <Button asChild variant="outline"><a href="#services">Explore Services</a></Button>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-border pt-6 text-sm text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-success" /> Available for selected projects
          </div>
        </div>
        <div className="hero-visual relative mx-auto w-full max-w-2xl">
          <div className="absolute -left-3 top-8 z-10 bg-primary px-4 py-3 text-xs font-bold uppercase tracking-[.16em] text-primary-foreground">Strategy × Craft</div>
          <img src={heroImage} alt="Creative agency workspace with branding, website and animation concepts" width={1600} height={1200} fetchPriority="high" className="aspect-[4/3] w-full rounded-lg object-cover" />
          <div className="absolute -bottom-5 right-3 max-w-56 rounded-md bg-ink p-4 text-sm font-semibold text-primary-foreground shadow-xl">Ideas shaped into purposeful digital experiences.</div>
        </div>
      </section>

      <section id="about" className="section-pad bg-ink text-primary-foreground">
        <div className="site-container grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div className="reveal"><p className="eyebrow">About us</p><p className="mt-5 text-sm leading-6 text-primary-foreground/60">Creativity is only powerful when it moves a business forward.</p></div>
          <div className="reveal"><h2 className="section-title max-w-3xl">We Turn Ideas Into <span className="text-primary">Digital Experiences.</span></h2><p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/65">Adeleke Hub Agency combines creativity, strategy and technology to help businesses build stronger brands, improve their online presence and increase conversions.</p></div>
        </div>
      </section>

      <section id="services" className="section-pad">
        <div className="site-container">
          <div className="reveal flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">What we do</p><h2 className="section-title mt-4 max-w-2xl">One creative partner. Five ways to grow.</h2></div><p className="max-w-sm text-muted-foreground">Focused expertise for every touchpoint where your business needs to look, sound and perform better.</p></div>
          <div className="mt-14 grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text, number }) => <article key={title} className="group reveal min-h-72 border-b border-r border-border bg-card p-7 transition-colors duration-300 hover:bg-ink hover:text-primary-foreground">
              <div className="flex items-center justify-between"><Icon className="text-primary" size={28} strokeWidth={1.7} /><span className="text-xs font-bold text-muted-foreground">{number}</span></div>
              <h3 className="mt-14 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground group-hover:text-primary-foreground/65">{text}</p>
              <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">Start a project <ArrowUpRight size={16} /></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="site-container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="reveal"><p className="eyebrow">Why Adeleke Hub</p><h2 className="section-title mt-4">Built with intent.<br />Made to perform.</h2><p className="mt-6 max-w-md leading-7 text-muted-foreground">We balance original thinking with commercial clarity—so every decision has a reason and every deliverable has a purpose.</p></div>
          <div className="grid sm:grid-cols-2">{["Creative & Strategic", "Conversion Focused", "Professional Design", "Responsive Solutions", "Detail Driven", "Modern Technology"].map((item) => <div key={item} className="reveal flex items-center gap-4 border-b border-border py-5 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check size={16} /></span><span className="font-bold">{item}</span></div>)}</div>
        </div>
      </section>

      <section id="process" className="section-pad">
        <div className="site-container"><div className="reveal"><p className="eyebrow">Our process</p><h2 className="section-title mt-4">Clear from first thought to final launch.</h2></div>
          <div className="mt-14 grid gap-4 md:grid-cols-4">{[["01","Discover","We listen, ask the right questions and understand the opportunity."],["02","Strategize","We define a focused direction built around your goals."],["03","Create","We develop the words, visuals and experience with care."],["04","Launch","We refine, deliver and help your new work meet the world."]].map(([number,title,text], index) => <article key={title} className="reveal relative border-t-2 border-ink pt-6"><span className="font-display text-5xl font-extrabold text-primary">{number}</span><h3 className="mt-8 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>{index < 3 && <ArrowRight className="absolute right-2 top-7 hidden text-border md:block" />}</article>)}</div>
        </div>
      </section>

      <section id="portfolio" className="section-pad bg-ink text-primary-foreground">
        <div className="site-container"><div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow">Selected work</p><h2 className="section-title mt-4">A glimpse of what we create.</h2></div><p className="max-w-sm text-primary-foreground/55">Sample project presentations—ready to be replaced with your live case studies.</p></div>
          <div className="mt-10 flex gap-2 overflow-x-auto pb-3" role="group" aria-label="Filter portfolio">{["All","Branding","Web Design","Copywriting","E-commerce","AI Animation"].map((category) => <button key={category} type="button" onClick={() => setFilter(category)} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${filter === category ? "border-primary bg-primary text-primary-foreground" : "border-primary-foreground/20 text-primary-foreground hover:border-primary"}`}>{category}</button>)}</div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">{filtered.map((project, index) => <article key={project.title} className={`group reveal overflow-hidden ${index === 0 && filtered.length > 2 ? "md:col-span-2" : ""}`}><div className={`${index === 0 && filtered.length > 2 ? "aspect-[16/7]" : "aspect-[4/3]"} overflow-hidden rounded-md`}><img src={project.image} alt={`${project.title} ${project.category} sample project`} width={index === 0 ? 1600 : 1200} height={index === 0 ? 1200 : 912} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" /></div><div className="mt-5 flex items-start justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[.14em] text-primary">{project.category}</p><h3 className="mt-2 text-2xl font-bold">{project.title}</h3><p className="mt-2 text-sm text-primary-foreground/55">{project.text}</p></div><ArrowUpRight className="shrink-0 text-primary" /></div></article>)}</div>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-container grid gap-10 lg:grid-cols-[.6fr_1.4fr]"><div className="reveal"><p className="eyebrow">Client perspective</p><h2 className="section-title mt-4">Good work builds trust.</h2></div><div className="reveal border-l-4 border-primary pl-6 md:pl-10"><Quote className="text-primary" size={38} /><blockquote className="mt-6 max-w-3xl font-display text-2xl font-semibold leading-relaxed md:text-4xl">“{activeTestimonial.quote}”</blockquote><div className="mt-8 flex items-end justify-between gap-5"><div><p className="font-bold">{activeTestimonial.name}</p><p className="text-sm text-muted-foreground">{activeTestimonial.role} · Placeholder</p></div><div className="flex gap-2"><button type="button" aria-label="Previous testimonial" onClick={() => setTestimonial((testimonial + testimonials.length - 1) % testimonials.length)} className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-primary"><ChevronLeft /></button><button type="button" aria-label="Next testimonial" onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} className="grid h-11 w-11 place-items-center rounded-full bg-ink text-primary-foreground hover:bg-primary"><ChevronRight /></button></div></div></div></div>
      </section>

      <section id="faq" className="section-pad bg-surface"><div className="site-container grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div className="reveal"><p className="eyebrow">Frequently asked</p><h2 className="section-title mt-4">A few things you may want to know.</h2><Button asChild variant="outline" className="mt-7"><a href={whatsappUrl} target="_blank" rel="noreferrer">Ask us on WhatsApp</a></Button></div><div className="reveal">{faqs.map(([question, answer], index) => <div key={question} className="border-b border-border"><button type="button" className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-5 py-6 text-left font-bold" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><ChevronDown className={`shrink-0 text-primary transition-transform ${openFaq === index ? "rotate-180" : ""}`} /></button><div className={`grid transition-[grid-template-rows] duration-300 ${openFaq === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><div className="overflow-hidden"><p className="max-w-2xl pb-6 leading-7 text-muted-foreground">{answer}</p></div></div></div>)}</div></div></section>

      <section className="bg-ink py-16 text-primary-foreground"><div className="site-container reveal flex flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="eyebrow">Your next move</p><h2 className="mt-4 font-display text-3xl font-extrabold md:text-5xl">Ready To Build Something That Works?</h2><p className="mt-4 max-w-2xl text-primary-foreground/60">Let&apos;s turn your idea into a professional digital experience designed to attract, engage and convert.</p></div><Button asChild className="shrink-0"><a href="#contact">Start Your Project <ArrowRight size={18} /></a></Button></div></section>

      <section id="contact" className="section-pad"><div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div className="reveal"><p className="eyebrow">Start a conversation</p><h2 className="section-title mt-4">Tell us what you&apos;re building.</h2><p className="mt-6 max-w-md leading-7 text-muted-foreground">Share a few details and we&apos;ll continue the conversation by email. Prefer a faster response? Reach us on WhatsApp.</p><div className="mt-9 space-y-4"><a href="mailto:adelekehubagency@gmail.com" className="flex items-center gap-3 font-semibold hover:text-primary"><Mail className="text-primary" /> adelekehubagency@gmail.com</a><a href="tel:+2348118250735" className="flex items-center gap-3 font-semibold hover:text-primary"><Phone className="text-primary" /> +234 811 825 0735</a><a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-semibold hover:text-primary"><MessageCircle className="text-primary" /> 08118250735</a></div></div>
          <form onSubmit={handleSubmit} className="reveal grid gap-5 rounded-lg border border-border bg-card p-6 shadow-sm md:grid-cols-2 md:p-9"><Field label="Name" name="name" placeholder="Your name" required /><Field label="Email" name="email" placeholder="you@company.com" type="email" required /><Field label="Business Name" name="business" placeholder="Your business" /><label className="grid gap-2 text-sm font-bold">Service Needed<select name="service" required defaultValue="" className="h-12 rounded-md border border-input bg-background px-3 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label><label className="grid gap-2 text-sm font-bold md:col-span-2">Budget<select name="budget" required defaultValue="" className="h-12 rounded-md border border-input bg-background px-3 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"><option value="" disabled>Select a budget range</option><option>Under ₦250,000</option><option>₦250,000 – ₦500,000</option><option>₦500,000 – ₦1,000,000</option><option>Above ₦1,000,000</option><option>Let&apos;s discuss</option></select></label><label className="grid gap-2 text-sm font-bold md:col-span-2">Project Details<textarea name="details" required minLength={20} maxLength={1500} rows={5} placeholder="Tell us about your goals, audience and ideal timeline..." className="rounded-md border border-input bg-background p-3 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label><Button type="submit" className="md:col-span-2">Send Project Enquiry <ArrowRight size={18} /></Button></form>
        </div></section>

      <footer className="border-t border-primary-foreground/10 bg-ink py-14 text-primary-foreground"><div className="site-container"><div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"><div><img src={logoAsset.url} alt="Adeleke Hub Agency" className="h-14 w-auto rounded-sm bg-background px-2" /><p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/55">Branding • Copywriting • Web Design • E-commerce • AI Animation</p></div><FooterLinks title="Quick Links" items={navItems.slice(1).map((label) => [label, `#${label.toLowerCase()}`])} /><FooterLinks title="Services" items={services.map((service) => [service.title, "#services"])} /><div><h3 className="font-bold">Contact</h3><div className="mt-5 space-y-3 text-sm text-primary-foreground/60"><a className="block hover:text-primary" href="mailto:adelekehubagency@gmail.com">adelekehubagency@gmail.com</a><a className="block hover:text-primary" href="tel:+2348118250735">+234 811 825 0735</a><div className="flex gap-3 pt-3"><a href="#contact" aria-label="Instagram" className="hover:text-primary"><Instagram /></a><a href="#contact" aria-label="LinkedIn" className="hover:text-primary"><Linkedin /></a></div></div></div></div><div className="mt-12 flex flex-col justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/45 sm:flex-row"><p>© 2026 Adeleke Hub Agency. All rights reserved.</p><div className="flex gap-5"><a href="#contact" className="hover:text-primary">Privacy Policy</a><a href="#contact" className="hover:text-primary">Terms & Conditions</a></div></div></div></footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat With Us on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2 rounded-full bg-success px-4 font-bold text-primary-foreground shadow-xl transition-transform hover:scale-105"><MessageCircle className="shrink-0" /><span className="hidden sm:inline">Chat With Us on WhatsApp</span></a>
    </main>
  );
}

function Field({ label, ...props }: { label: string; name: string; placeholder: string; type?: string; required?: boolean }) {
  return <label className="grid gap-2 text-sm font-bold">{label}<input {...props} maxLength={120} className="h-12 rounded-md border border-input bg-background px-3 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label>;
}

function FooterLinks({ title, items }: { title: string; items: string[][] }) {
  return <div><h3 className="font-bold">{title}</h3><ul className="mt-5 space-y-3 text-sm text-primary-foreground/60">{items.map(([label, href]) => <li key={label}><a href={href} className="hover:text-primary">{label}</a></li>)}</ul></div>;
}
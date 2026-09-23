import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, BadgeCheck, Bot, Check, ChevronDown,
  ChevronLeft, ChevronRight, Code2, Instagram, Linkedin, Mail, Menu, MessageCircle,
  MapPin, Palette, PenTool, Phone, Quote, ShoppingBag, Sparkles, Star, X,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Button } from "../components/button";
import logoAsset from "../assets/adeleke-hub-agency-transparent.png.asset.json";
import heroImage from "../assets/agency-hero.jpg";
import atelierNineImage from "../assets/portfolio/atelier-nine.jpg";
import oriTableImage from "../assets/portfolio/ori-table.jpg";
import havenRealtyImage from "../assets/portfolio/haven-realty.jpg";
import kinfolkMarketImage from "../assets/portfolio/kinfolk-market.jpg";
import relaySaasImage from "../assets/portfolio/relay-saas.jpg";
import amaBotanicsImage from "../assets/portfolio/ama-botanics.jpg";
import nnekaAdvisoryImage from "../assets/portfolio/nneka-advisory.jpg";
import stonebridgeImage from "../assets/portfolio/stonebridge.jpg";
import afterHoursImage from "../assets/portfolio/after-hours.jpg";
import fixRightImage from "../assets/portfolio/fixright.jpg";

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

type PortfolioProject = {
  title: string;
  slug: string;
  industry: string;
  category: "Branding" | "Web Design" | "Copywriting" | "E-commerce" | "AI Animation";
  service: string;
  text: string;
  image: string;
  challenge: string;
  approach: string;
  details: string;
  services: string[];
};

const portfolio: PortfolioProject[] = [
  { title: "Atelier Nine", slug: "atelier-nine", industry: "Fashion / Clothing", category: "E-commerce", service: "Brand identity · E-commerce website", text: "A refined fashion identity and considered shopping experience for a contemporary Nigerian clothing label.", image: atelierNineImage, challenge: "The label needed one coherent expression across garments, packaging and online retail without losing its quiet, editorial character.", approach: "We built the identity around confident typography, a restrained palette and a shopping journey that gives the collection room to breathe.", details: "The system connects garment labels, swing tags, lookbook art direction and responsive store pages. Product information stays clear while generous spacing and editorial imagery establish a premium position.", services: ["Brand identity", "E-commerce design", "Art direction", "Packaging"] },
  { title: "Ori Table", slug: "ori-table", industry: "Restaurant / Food", category: "Branding", service: "Brand identity · Campaign design", text: "A warm hospitality identity rooted in Nigerian flavour, shared tables and contemporary service.", image: oriTableImage, challenge: "Ori Table needed to feel locally rooted and modern across dine-in, takeaway and social channels.", approach: "A characterful wordmark, earthy palette and botanical illustration system create recognition without leaning on familiar restaurant clichés.", details: "Menus, takeaway packaging, table cards and social templates share the same visual rhythm. Food photography remains the hero while concise copy carries the restaurant’s welcoming voice.", services: ["Brand strategy", "Visual identity", "Menu design", "Social campaign"] },
  { title: "Haven & Key Realty", slug: "haven-key-realty", industry: "Real Estate", category: "Web Design", service: "Website design · Copywriting", text: "An elegant property platform that turns considered guidance and premium listings into a clear digital experience.", image: havenRealtyImage, challenge: "The agency needed to present high-value homes with credibility while making property discovery feel simple on every screen.", approach: "We paired an editorial visual language with direct navigation, focused property search and reassuring service copy.", details: "The responsive website balances cinematic property photography with useful listing information, floorplans and enquiry paths. Supporting brochures extend the same visual language into viewings and presentations.", services: ["UX strategy", "Website design", "Responsive development", "Copywriting"] },
  { title: "Kinfolk Market", slug: "kinfolk-market", industry: "Homeware E-commerce", category: "E-commerce", service: "Online store · Product storytelling", text: "A calm online shop that helps everyday homeware feel considered, useful and easy to buy.", image: kinfolkMarketImage, challenge: "A growing homeware retailer needed a clearer product system and a warmer shopping experience across desktop and mobile.", approach: "We organised products around everyday use, simplified filtering and paired practical details with natural product photography.", details: "Collection pages support comparison without visual clutter, while product pages foreground materials, dimensions and delivery. Packaging and digital touchpoints share a quiet sage identity.", services: ["E-commerce strategy", "UI design", "Product copy", "Packaging direction"] },
  { title: "Relay", slug: "relay", industry: "Technology / SaaS", category: "Copywriting", service: "Positioning · Launch copy · Web design", text: "A direct, useful launch system that makes workflow software understandable to busy teams.", image: relaySaasImage, challenge: "Relay had capable software but its offer felt technical and difficult to distinguish in a crowded productivity category.", approach: "We clarified the promise, structured the message around real work and designed a bright, practical product story.", details: "The launch combined homepage messaging, pricing copy, email sequences and a lightweight visual system. Product screens appear in context without overstating functionality or inventing performance claims.", services: ["Positioning", "Website copy", "Launch emails", "Landing page design"] },
  { title: "Ama Botanics", slug: "ama-botanics", industry: "Beauty / Skincare", category: "Branding", service: "Packaging · E-commerce art direction", text: "A botanical skincare system that feels trustworthy, specific and naturally premium.", image: amaBotanicsImage, challenge: "The range needed stronger shelf recognition and clearer product information without making unsupported cosmetic promises.", approach: "We combined ingredient-led storytelling, botanical illustration and a disciplined packaging hierarchy.", details: "Each carton and bottle clearly separates product, ingredient and usage information. Ecommerce art direction carries the tactile, botanical world into focused product pages and educational content.", services: ["Brand identity", "Packaging design", "Product copy", "Art direction"] },
  { title: "Nneka Okafor Advisory", slug: "nneka-okafor", industry: "Personal Brand", category: "Web Design", service: "Personal brand · Website · Content system", text: "A poised personal brand for a strategist helping ambitious organisations make clearer decisions.", image: nnekaAdvisoryImage, challenge: "The founder’s expertise needed a distinctive platform that felt authoritative, human and consistent across speaking and social content.", approach: "We shaped a concise positioning story and an editorial identity built around clarity, perspective and direct communication.", details: "The system includes a responsive advisory website, keynote templates, LinkedIn content and stationery. Every format supports the same measured, confident voice.", services: ["Brand strategy", "Website design", "Content templates", "Presentation design"] },
  { title: "Stonebridge Partners", slug: "stonebridge-partners", industry: "Corporate / Infrastructure", category: "Copywriting", service: "Corporate rebrand · Reports · Website", text: "A confident communications system for an infrastructure consultancy working across complex sectors.", image: stonebridgeImage, challenge: "Stonebridge needed to explain specialist expertise to varied audiences without relying on dense, technical language.", approach: "We organised the offer around outcomes, introduced a modular identity and created a clearer hierarchy for long-form information.", details: "The rebrand spans proposals, annual reports, signage, stationery and a responsive corporate site. Direct writing and repeatable page structures make complex work easier to navigate.", services: ["Messaging strategy", "Corporate identity", "Report design", "Website copy"] },
  { title: "After Hours Lagos", slug: "after-hours-lagos", industry: "Creative / Entertainment", category: "AI Animation", service: "Campaign identity · Motion direction", text: "A high-energy visual campaign built to move consistently from city posters to social video.", image: afterHoursImage, challenge: "The live music series needed a recognisable campaign that could announce changing line-ups across print, social and venue screens.", approach: "We built a bold typographic system with a limited colour palette, then translated its rhythm into short animated sequences.", details: "Poster layouts, story frames, tickets and stage graphics work as one flexible campaign. Motion uses punchy type transitions and documentary venue footage rather than synthetic spectacle.", services: ["Campaign identity", "Social design", "Motion direction", "Event collateral"] },
  { title: "FixRight Services", slug: "fixright-services", industry: "Local Home Services", category: "Web Design", service: "Local brand · Booking website", text: "A practical identity and booking experience that helps a local repair team feel dependable from first call to invoice.", image: fixRightImage, challenge: "The business needed to look established, explain a broad service range quickly and make appointment requests easier on mobile.", approach: "We created a highly visible identity, straightforward service language and a short mobile-first booking path.", details: "Vehicle graphics, uniforms, invoices, leaflets and the website use the same clear information hierarchy. The result is approachable and useful across neighbourhood marketing and day-to-day service.", services: ["Visual identity", "Website design", "Service copy", "Print collateral"] },
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

const testimonials = [
  { initials: "DO", name: "Daniel Okafor", role: "Founder", business: "Noura Lifestyle", industry: "Fashion & Lifestyle", service: "Branding Design", location: "Lagos, Nigeria", rating: 5, verified: true, quote: "Adeleke Hub Agency gave our brand a much more professional identity. The new colors, visual direction and overall branding made everything feel more consistent and premium." },
  { initials: "SW", name: "Sarah Williams", role: "Business Owner", business: "Bloom & Beauty", industry: "Beauty & Skincare", service: "Website Design & Development", location: "London, UK", rating: 5, verified: true, quote: "The website came out clean, professional and easy to navigate. I especially liked how the design presented our services clearly on both desktop and mobile." },
  { initials: "MC", name: "Michael Carter", role: "Founder", business: "GrowthPilot", industry: "Digital Services", service: "Copywriting", location: "Toronto, Canada", rating: 5, verified: true, quote: "The copy made our offer much easier to understand. The messaging became clearer, more persuasive and much more focused on what our customers actually need." },
  { initials: "AJ", name: "Amanda Johnson", role: "E-commerce Manager", business: "UrbanNest Store", industry: "E-commerce & Home Decor", service: "E-commerce Marketing", location: "Atlanta, USA", rating: 5, verified: true, quote: "Adeleke Hub Agency helped us look at our online store from a customer’s perspective. The recommendations gave us a much clearer direction for presenting our products and marketing them online." },
  { initials: "JA", name: "James Anderson", role: "Creative Director", business: "Nova Drinks", industry: "Food & Beverage", service: "AI Animation", location: "Manchester, UK", rating: 5, verified: true, quote: "The animation concept brought our product idea to life in a really engaging way. The visual storytelling gave us something much more interesting to use for our promotional content." },
  { initials: "GM", name: "Grace Mensah", role: "Founder", business: "Elevate Consulting", industry: "Business Consulting", service: "Branding + Website Design", location: "Accra, Ghana", rating: 5, verified: true, quote: "The combination of the new branding and website made our business look much more established. Everything feels more professional and consistent now." },
];

function AgencyPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const [testimonialPage, setTestimonialPage] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(1);
  const [testimonialsPaused, setTestimonialsPaused] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const testimonialTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [filter]);

  useEffect(() => {
    const updateTestimonialsPerPage = () => {
      const nextValue = window.innerWidth >= 1280 ? 3 : window.innerWidth >= 640 ? 2 : 1;
      setTestimonialsPerPage(nextValue);
      setTestimonialPage(0);
      testimonialTrackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    };
    updateTestimonialsPerPage();
    window.addEventListener("resize", updateTestimonialsPerPage);
    return () => window.removeEventListener("resize", updateTestimonialsPerPage);
  }, []);

  const testimonialPageCount = Math.ceil(testimonials.length / testimonialsPerPage);
  const showTestimonialPage = (page: number) => {
    const nextPage = (page + testimonialPageCount) % testimonialPageCount;
    setTestimonialPage(nextPage);
    const firstCard = testimonialTrackRef.current?.children.item(nextPage * testimonialsPerPage) as HTMLElement | null;
    testimonialTrackRef.current?.scrollTo({ left: firstCard?.offsetLeft ?? 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (testimonialsPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => showTestimonialPage(testimonialPage + 1), 6500);
    return () => window.clearInterval(timer);
  }, [testimonialPage, testimonialPageCount, testimonialsPaused]);

  const filtered = filter === "All" ? portfolio : portfolio.filter((item) => item.category === filter);
  const openProject = (project: PortfolioProject) => {
    setActiveProject(project);
    document.body.style.overflow = "hidden";
  };
  const closeProject = () => {
    setActiveProject(null);
    document.body.style.overflow = "";
  };
  const showNextProject = () => {
    if (!activeProject) return;
    const currentIndex = portfolio.findIndex((project) => project.slug === activeProject.slug);
    setActiveProject(portfolio[(currentIndex + 1) % portfolio.length] ?? portfolio[0] ?? null);
  };
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
        <div className="site-container grid min-h-32 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-2 lg:min-h-36">
          <a href="#home" aria-label="Adeleke Hub Agency home" className="flex min-w-0 items-center self-stretch py-1">
            <img src={logoAsset.url} alt="Adeleke Hub Agency" width={500} height={500} className="h-auto w-[120px] shrink-0 object-contain sm:w-[132px] lg:w-[140px] xl:w-[160px]" />
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-3 lg:flex xl:gap-6">
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

      <section className="home-body overflow-hidden border-b border-border bg-background">
        <div className="site-container grid min-h-[calc(100svh-8rem)] items-center gap-12 py-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-16 lg:py-14">
          <div className="home-hero-copy relative z-10">
            <div className="mb-7 flex items-center gap-3"><span className="h-px w-10 bg-primary" /><p className="text-xs font-extrabold uppercase text-primary">Independent digital creative agency</p></div>
            <h1 className="home-display max-w-3xl text-[clamp(2.65rem,5.2vw,5.2rem)] font-bold leading-[1.02] text-foreground">We Build Digital Experiences That Help Businesses <span className="text-primary">Grow.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">We create memorable brands, compelling content, professional websites, engaging AI animations and e-commerce solutions that help businesses attract attention and grow.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="group"><a href="#contact">Start Your Project <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} /></a></Button>
              <Button asChild variant="outline" className="group"><a href="#services">Explore Our Services <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} /></a></Button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-x-7 gap-y-3 border-t border-border pt-5 text-xs font-semibold text-muted-foreground sm:grid-cols-4">
              <span>Brand systems</span><span>Web experiences</span><span>Digital commerce</span><span>Motion stories</span>
            </div>
          </div>
          <div className="home-hero-visual relative mx-auto w-full max-w-3xl pb-5 pr-4 sm:pr-7">
            <div className="grid grid-cols-[1.35fr_.65fr] gap-3 sm:gap-4">
              <div className="relative mt-8 overflow-hidden rounded-md border border-border bg-card p-2 shadow-xl sm:p-3">
                <img src={heroImage} alt="Professional website, branding and digital campaign work" width={1600} height={1200} fetchPriority="high" className="aspect-[4/5] h-full w-full object-cover" />
                <div className="absolute bottom-5 left-5 bg-background px-4 py-3 shadow-lg"><p className="text-[10px] font-bold uppercase text-primary">Digital experience</p><p className="home-display mt-1 text-sm font-bold">Strategy shaped into craft</p></div>
              </div>
              <div className="grid gap-3 sm:gap-4">
                <img src={atelierNineImage} alt="Fashion e-commerce brand presentation" width={1408} height={1056} className="aspect-[4/5] w-full rounded-md border border-border object-cover shadow-md" />
                <img src={kinfolkMarketImage} alt="E-commerce product and website presentation" width={1408} height={1056} className="aspect-square w-full rounded-md border border-border object-cover shadow-md" />
                <div className="relative overflow-hidden rounded-md border border-border bg-ink p-2 shadow-md">
                  <img src={afterHoursImage} alt="AI animation and entertainment campaign presentation" width={1408} height={1056} className="aspect-[4/3] w-full object-cover opacity-80" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase text-primary-foreground">Motion + AI</span>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 bg-primary px-4 py-3 text-xs font-extrabold uppercase text-primary-foreground">Brand · Web · Commerce · Motion</div>
          </div>
        </div>
      </section>

      <section id="about" className="section-pad bg-ink text-primary-foreground">
        <div className="site-container grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div className="reveal"><p className="eyebrow">About us</p><p className="mt-5 text-sm leading-6 text-primary-foreground/60">Creativity is only powerful when it moves a business forward.</p></div>
          <div className="reveal"><h2 className="section-title max-w-3xl">We Turn Ideas Into <span className="text-primary">Digital Experiences.</span></h2><p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/65">Adeleke Hub Agency combines creativity, strategy and technology to help businesses build stronger brands, improve their online presence and increase conversions.</p></div>
        </div>
      </section>

      <section id="services" className="home-body section-pad">
        <div className="site-container">
          <div className="reveal grid gap-6 border-b border-border pb-10 lg:grid-cols-[1fr_.55fr] lg:items-end"><div><p className="eyebrow">Services preview</p><h2 className="home-display mt-4 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">The right creative expertise, working as one.</h2></div><p className="max-w-md leading-7 text-muted-foreground lg:justify-self-end">Focused digital services for every point where your business needs to look sharper, sound clearer and work harder.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {services.map(({ icon: Icon, title, text, number }, index) => <article key={title} className={`home-card-lift group reveal flex min-h-72 flex-col rounded-md border border-border bg-card p-6 ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}>
              <div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-md bg-accent text-primary"><Icon size={23} strokeWidth={1.7} /></span><span className="home-display text-xs font-bold text-muted-foreground">{number}</span></div>
              <h3 className="home-display mt-10 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p>
              <a href="#contact" className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-bold text-foreground transition-colors hover:text-primary">Explore Service <ArrowRight className="text-primary transition-transform group-hover:translate-x-1" size={16} /></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="home-body section-pad bg-surface">
        <div className="site-container">
          <div className="reveal flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Why Adeleke Hub</p><h2 className="home-display mt-4 text-4xl font-bold md:text-5xl">Creative work with a business point of view.</h2></div><p className="max-w-sm leading-7 text-muted-foreground">Every decision balances originality with clarity, relevance and real commercial goals.</p></div>
          <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">{[["Strategic","Business focused thinking."],["Creative","Distinctive visual solutions."],["Conversion Focused","Designed around business objectives."],["Modern","Using current digital tools and technology."]].map(([title,text], index) => <article key={title} className="reveal border-b border-r border-border bg-background p-6 lg:min-h-56"><div className="flex items-center justify-between"><span className="home-display text-xs font-bold text-primary">0{index + 1}</span><Check size={17} className="text-primary" /></div><h3 className="home-display mt-12 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
        </div>
      </section>

      <section id="process" className="home-body section-pad">
        <div className="site-container"><div className="reveal grid gap-6 md:grid-cols-[.65fr_1.35fr] md:items-end"><div><p className="eyebrow">Our process</p><h2 className="home-display mt-4 text-4xl font-bold md:text-5xl">From first conversation to launch.</h2></div><p className="max-w-lg leading-7 text-muted-foreground md:justify-self-end">A clear, collaborative process keeps every project focused and moving forward.</p></div>
          <div className="relative mt-14 grid gap-5 md:grid-cols-4 before:absolute before:left-0 before:right-0 before:top-5 before:hidden before:h-px before:bg-border md:before:block">{[["01","Discover","We listen, ask the right questions and understand the opportunity."],["02","Strategy","We define a focused direction built around your goals."],["03","Create","We develop the words, visuals and experience with care."],["04","Launch","We refine, deliver and help your new work meet the world."]].map(([number,title,text], index) => <article key={title} className="reveal relative"><div className="relative z-10 flex items-center justify-between"><span className="home-display grid h-10 w-10 place-items-center rounded-full bg-ink text-xs font-bold text-primary-foreground">{number}</span>{index < 3 && <ArrowRight className="mr-2 hidden text-primary md:block" size={18} />}</div><h3 className="home-display mt-7 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="home-body section-pad bg-ink text-primary-foreground" aria-labelledby="featured-work-title">
        <div className="site-container">
          <div className="reveal flex flex-col justify-between gap-7 border-b border-primary-foreground/15 pb-9 md:flex-row md:items-end"><div><p className="eyebrow">Featured work</p><h2 id="featured-work-title" className="home-display mt-4 text-4xl font-bold md:text-6xl">Selected work across industries.</h2></div><a href="#portfolio" className="group inline-flex items-center gap-2 font-bold text-primary">Explore all projects <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} /></a></div>
          <div className="mt-10 grid gap-7 md:grid-cols-2">{portfolio.slice(0, 4).map((project, index) => <article key={project.slug} className={`group reveal ${index === 0 || index === 3 ? "md:col-span-2" : ""}`}><a href={`#case-study-${project.slug}`} onClick={(event) => { event.preventDefault(); openProject(project); }} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"><div className={`relative overflow-hidden rounded-md bg-surface ${index === 0 || index === 3 ? "aspect-[16/8]" : "aspect-[4/3]"}`}><img src={project.image} alt={`${project.title} — ${project.service} presentation`} width={1408} height={1056} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" /><div className="absolute inset-0 flex items-end bg-ink/0 p-5 transition-colors group-hover:bg-ink/30"><span className="translate-y-2 bg-background px-4 py-2 text-sm font-bold text-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">View Project <ArrowUpRight className="ml-2 inline text-primary" size={16} /></span></div></div><div className="mt-5 flex items-start justify-between gap-5"><div><p className="text-xs font-bold uppercase text-primary">{project.industry}</p><h3 className="home-display mt-2 text-2xl font-bold md:text-3xl">{project.title}</h3></div><ArrowUpRight className="mt-1 shrink-0 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div></a></article>)}</div>
        </div>
      </section>

      <section id="portfolio" className="portfolio-editorial section-pad bg-background">
        <div className="site-container">
          <div className="reveal border-b border-border pb-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-3xl"><p className="eyebrow">Portfolio</p><h2 className="mt-4 text-5xl leading-[1.02] text-foreground md:text-7xl">Professional solutions for different kinds of business.</h2></div>
            <p className="mt-6 max-w-sm leading-7 text-muted-foreground lg:mt-0">A collection of focused brand, website, commerce, copy and motion projects—each shaped around a different audience and purpose.</p>
          </div>
          <div className="mt-8 flex gap-2 overflow-x-auto pb-3" role="group" aria-label="Filter portfolio">
            {["All","Branding","Web Design","Copywriting","E-commerce","AI Animation"].map((category) => <Button key={category} type="button" variant={filter === category ? "dark" : "outline"} onClick={() => setFilter(category)} aria-pressed={filter === category} className="min-h-0 shrink-0 rounded-full px-5 py-2 text-sm font-semibold">{category}</Button>)}
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {filtered.map((project) => <article key={project.slug} className="group reveal">
              <a href={`#case-study-${project.slug}`} onClick={(event) => { event.preventDefault(); openProject(project); }} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4" aria-label={`View ${project.title} case study`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-surface">
                  <img src={project.image} alt={`${project.title} — ${project.service} presentation`} width={1408} height={1056} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                  <div className="absolute inset-0 flex items-end bg-ink/0 p-5 transition-colors duration-300 group-hover:bg-ink/35"><span className="translate-y-3 bg-background px-4 py-2 text-sm font-semibold text-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">View Project <ArrowUpRight className="ml-2 inline transition-transform group-hover:translate-x-1" size={16} /></span></div>
                </div>
                <div className="mt-6"><div className="flex flex-wrap items-center gap-3 text-xs"><span className="font-bold uppercase text-primary">{project.industry}</span><span className="h-1 w-1 rounded-full bg-border" /><span className="text-muted-foreground">{project.service}</span></div><div className="mt-3 flex items-start justify-between gap-5"><div><h3 className="text-3xl leading-tight text-foreground">{project.title}</h3><p className="mt-3 max-w-xl leading-7 text-muted-foreground">{project.text}</p><span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground">View Project <ArrowUpRight className="text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={16} /></span></div></div></div>
              </a>
            </article>)}
          </div>
        </div>
      </section>

      {activeProject && <CaseStudyModal project={activeProject} onClose={closeProject} onNext={showNextProject} />}

      <section className="section-pad bg-surface" aria-labelledby="testimonials-title">
        <div
          className="site-container"
          onMouseEnter={() => setTestimonialsPaused(true)}
          onMouseLeave={() => setTestimonialsPaused(false)}
          onTouchStart={() => setTestimonialsPaused(true)}
          onTouchEnd={() => setTestimonialsPaused(false)}
          onFocusCapture={() => setTestimonialsPaused(true)}
          onBlurCapture={(event) => !event.currentTarget.contains(event.relatedTarget) && setTestimonialsPaused(false)}
        >
          <div className="reveal flex flex-col justify-between gap-7 border-b border-border pb-9 md:flex-row md:items-end">
            <div><p className="eyebrow">Client testimonials</p><h2 id="testimonials-title" className="section-title mt-4">What Our Clients Say</h2><p className="mt-4 text-lg text-muted-foreground">Real experiences from businesses we&apos;ve worked with.</p></div>
            <div className="flex gap-2">
              <Button type="button" variant="outline" aria-label="Previous testimonials" onClick={() => showTestimonialPage(testimonialPage - 1)} className="h-11 min-h-0 w-11 rounded-full p-0"><ChevronLeft size={19} /></Button>
              <Button type="button" variant="dark" aria-label="Next testimonials" onClick={() => showTestimonialPage(testimonialPage + 1)} className="h-11 min-h-0 w-11 rounded-full p-0"><ChevronRight size={19} /></Button>
            </div>
          </div>

          <div ref={testimonialTrackRef} className="testimonial-scroll mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-5" aria-live="polite" aria-label="Client testimonials carousel">
            {testimonials.map((item, index) => <article key={item.name} className={`relative flex min-w-full snap-start flex-col overflow-hidden rounded-md border bg-card p-6 shadow-sm sm:min-w-[calc(50%-0.75rem)] xl:min-w-[calc(33.333%-1rem)] ${index % 3 === 0 ? "border-t-4 border-t-primary" : index % 3 === 1 ? "border-l-4 border-l-primary" : "border-border"}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div role="img" aria-label={`${item.name} profile placeholder`} className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ink font-display text-sm font-extrabold text-primary-foreground ring-2 ring-primary/20">{item.initials}</div>
                  <div><h3 className="font-display text-base font-extrabold">{item.name}</h3><p className="text-sm text-muted-foreground">{item.role}, {item.business}</p></div>
                </div>
                <Quote className="shrink-0 text-primary/25" size={30} aria-hidden="true" />
              </div>
              <div className="mt-6 flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>{Array.from({ length: item.rating }).map((_, star) => <Star key={star} className="fill-primary text-primary" size={16} aria-hidden="true" />)}</div>
              <blockquote className="mt-5 flex-1 text-base leading-7 text-foreground">“{item.quote}”</blockquote>
              <div className="mt-7 border-t border-border pt-5">
                <div className="flex flex-wrap gap-2"><span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">{item.service}</span>{item.verified && <span className="inline-flex items-center gap-1 rounded-full bg-surface px-3 py-1 text-xs font-semibold text-foreground"><BadgeCheck className="text-primary" size={14} /> Verified client</span>}</div>
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground"><span>{item.industry}</span><span className="inline-flex items-center gap-1"><MapPin size={13} />{item.location}</span></div>
              </div>
            </article>)}
          </div>

          <div className="mt-3 flex justify-center gap-2" aria-label="Choose testimonial page">
            {Array.from({ length: testimonialPageCount }).map((_, page) => <Button key={page} type="button" variant="outline" aria-label={`Show testimonial page ${page + 1}`} aria-current={testimonialPage === page ? "true" : undefined} onClick={() => showTestimonialPage(page)} className={`h-2.5 min-h-0 w-2.5 rounded-full border-0 p-0 transition-all ${testimonialPage === page ? "w-8 bg-primary" : "bg-border"}`}><span className="sr-only">Page {page + 1}</span></Button>)}
          </div>
        </div>
      </section>

      <section id="faq" className="section-pad bg-surface"><div className="site-container grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div className="reveal"><p className="eyebrow">Frequently asked</p><h2 className="section-title mt-4">A few things you may want to know.</h2><Button asChild variant="outline" className="mt-7"><a href={whatsappUrl} target="_blank" rel="noreferrer">Ask us on WhatsApp</a></Button></div><div className="reveal">{faqs.map(([question, answer], index) => <div key={question} className="border-b border-border"><button type="button" className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-5 py-6 text-left font-bold" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{question}</span><ChevronDown className={`shrink-0 text-primary transition-transform ${openFaq === index ? "rotate-180" : ""}`} /></button><div className={`grid transition-[grid-template-rows] duration-300 ${openFaq === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}><div className="overflow-hidden"><p className="max-w-2xl pb-6 leading-7 text-muted-foreground">{answer}</p></div></div></div>)}</div></div></section>

      <section className="home-body overflow-hidden bg-ink py-20 text-primary-foreground"><div className="site-container reveal relative"><div className="absolute -right-8 -top-20 hidden font-home-display text-[13rem] font-extrabold leading-none text-primary/10 lg:block" aria-hidden="true">A</div><div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow">Your next move</p><h2 className="home-display mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">Ready To Build Something That Works?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/65">Let&apos;s turn your idea into a professional digital experience built around your goals.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Button asChild className="group shrink-0"><a href="#contact">Start Your Project <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} /></a></Button><Button asChild variant="outline" className="group shrink-0 border-primary-foreground/30 bg-transparent text-primary-foreground"><a href={whatsappUrl} target="_blank" rel="noreferrer">Chat With Us on WhatsApp <MessageCircle className="transition-transform group-hover:scale-110" size={18} /></a></Button></div></div></div></section>

      <section id="contact" className="section-pad"><div className="site-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]"><div className="reveal"><p className="eyebrow">Start a conversation</p><h2 className="section-title mt-4">Tell us what you&apos;re building.</h2><p className="mt-6 max-w-md leading-7 text-muted-foreground">Share a few details and we&apos;ll continue the conversation by email. Prefer a faster response? Reach us on WhatsApp.</p><div className="mt-9 space-y-4"><a href="mailto:adelekehubagency@gmail.com" className="flex items-center gap-3 font-semibold hover:text-primary"><Mail className="text-primary" /> adelekehubagency@gmail.com</a><a href="tel:+2348118250735" className="flex items-center gap-3 font-semibold hover:text-primary"><Phone className="text-primary" /> +234 811 825 0735</a><a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-semibold hover:text-primary"><MessageCircle className="text-primary" /> 08118250735</a></div></div>
          <form onSubmit={handleSubmit} className="reveal grid gap-5 rounded-lg border border-border bg-card p-6 shadow-sm md:grid-cols-2 md:p-9"><Field label="Name" name="name" placeholder="Your name" required /><Field label="Email" name="email" placeholder="you@company.com" type="email" required /><Field label="Business Name" name="business" placeholder="Your business" /><label className="grid gap-2 text-sm font-bold">Service Needed<select name="service" required defaultValue="" className="h-12 rounded-md border border-input bg-background px-3 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select></label><label className="grid gap-2 text-sm font-bold md:col-span-2">Budget<select name="budget" required defaultValue="" className="h-12 rounded-md border border-input bg-background px-3 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"><option value="" disabled>Select a budget range</option><option>Under ₦250,000</option><option>₦250,000 – ₦500,000</option><option>₦500,000 – ₦1,000,000</option><option>Above ₦1,000,000</option><option>Let&apos;s discuss</option></select></label><label className="grid gap-2 text-sm font-bold md:col-span-2">Project Details<textarea name="details" required minLength={20} maxLength={1500} rows={5} placeholder="Tell us about your goals, audience and ideal timeline..." className="rounded-md border border-input bg-background p-3 font-normal outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" /></label><Button type="submit" className="md:col-span-2">Send Project Enquiry <ArrowRight size={18} /></Button></form>
        </div></section>

      <footer className="border-t border-primary-foreground/10 bg-ink py-14 text-primary-foreground"><div className="site-container"><div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4"><div><div className="inline-flex items-center justify-center rounded-md bg-background p-2.5"><img src={logoAsset.url} alt="Adeleke Hub Agency" width={500} height={500} loading="lazy" className="h-auto w-[130px] object-contain sm:w-[145px] lg:w-[150px]" /></div><p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/55">Branding • Copywriting • Web Design • E-commerce • AI Animation</p></div><FooterLinks title="Quick Links" items={navItems.slice(1).map((label) => [label, `#${label.toLowerCase()}`])} /><FooterLinks title="Services" items={services.map((service) => [service.title, "#services"])} /><div><h3 className="font-bold">Contact</h3><div className="mt-5 space-y-3 text-sm text-primary-foreground/60"><a className="block hover:text-primary" href="mailto:adelekehubagency@gmail.com">adelekehubagency@gmail.com</a><a className="block hover:text-primary" href="tel:+2348118250735">+234 811 825 0735</a><div className="flex gap-3 pt-3"><a href="#contact" aria-label="Instagram" className="hover:text-primary"><Instagram /></a><a href="#contact" aria-label="LinkedIn" className="hover:text-primary"><Linkedin /></a></div></div></div></div><div className="mt-12 flex flex-col justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-xs text-primary-foreground/45 sm:flex-row"><p>© 2026 Adeleke Hub Agency. All rights reserved.</p><div className="flex gap-5"><a href="#contact" className="hover:text-primary">Privacy Policy</a><a href="#contact" className="hover:text-primary">Terms & Conditions</a></div></div></div></footer>

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

function CaseStudyModal({ project, onClose, onNext }: { project: PortfolioProject; onClose: () => void; onNext: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return <div className="fixed inset-0 z-[70] bg-ink/70 p-0 backdrop-blur-sm md:p-6" role="dialog" aria-modal="true" aria-labelledby="case-study-title" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <article className="case-study-scroll relative mx-auto h-full max-w-6xl overflow-y-auto bg-background shadow-2xl">
      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-background/95 px-5 py-4 backdrop-blur md:px-8"><span className="text-xs font-bold uppercase text-muted-foreground">Adeleke Hub Agency / Case Study</span><Button type="button" variant="outline" onClick={onClose} aria-label="Close case study" className="h-10 min-h-0 w-10 rounded-full p-0"><X size={18} /></Button></div>
      <div className="portfolio-editorial">
        <header className="grid gap-8 px-5 py-12 md:grid-cols-[1.2fr_.8fr] md:px-10 md:py-16"><div><p className="eyebrow">{project.industry}</p><h2 id="case-study-title" className="mt-4 text-6xl leading-none text-foreground md:text-8xl">{project.title}</h2></div><div className="self-end"><p className="text-sm font-semibold text-foreground">{project.service}</p><p className="mt-4 leading-7 text-muted-foreground">{project.text}</p></div></header>
        <img src={project.image} alt={`${project.title} complete project presentation`} width={1408} height={1056} className="aspect-[4/3] w-full object-cover" />
        <div className="grid gap-10 px-5 py-14 md:grid-cols-3 md:px-10 md:py-20"><section><p className="eyebrow">Project Overview</p><p className="mt-5 leading-7 text-muted-foreground">{project.text}</p></section><section><p className="eyebrow">Challenge</p><p className="mt-5 leading-7 text-muted-foreground">{project.challenge}</p></section><section><p className="eyebrow">Our Approach</p><p className="mt-5 leading-7 text-muted-foreground">{project.approach}</p></section></div>
        <section className="bg-surface px-5 py-14 md:px-10 md:py-20"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><p className="eyebrow">Project Preview</p><h3 className="mt-4 text-5xl text-foreground">One system, considered in detail.</h3></div><div className="flex flex-wrap gap-2">{project.services.map((service) => <span key={service} className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold">{service}</span>)}</div></div><div className="mt-10 grid gap-4 md:grid-cols-2"><img src={project.image} alt={`${project.title} website and identity overview`} width={1408} height={1056} loading="lazy" className="aspect-[4/3] h-full w-full rounded-md object-cover object-left" /><div className="grid grid-cols-2 gap-4"><img src={project.image} alt={`${project.title} digital detail`} width={1408} height={1056} loading="lazy" className="h-full min-h-0 w-full rounded-md object-cover object-center" /><img src={project.image} alt={`${project.title} brand application detail`} width={1408} height={1056} loading="lazy" className="h-full min-h-0 w-full rounded-md object-cover object-right" /></div></div></section>
        <section className="grid gap-8 px-5 py-14 md:grid-cols-[.65fr_1.35fr] md:px-10 md:py-20"><div><p className="eyebrow">Project Details</p><h3 className="mt-4 text-4xl text-foreground">Designed as a complete business experience.</h3></div><p className="max-w-2xl text-lg leading-8 text-muted-foreground">{project.details}</p></section>
        <footer className="border-t border-border px-5 py-10 md:px-10"><div className="flex flex-col justify-between gap-5 sm:flex-row"><Button type="button" variant="outline" onClick={onNext}><span>Next Project</span><ArrowRight size={17} /></Button><Button asChild><a href="#contact" onClick={onClose}>Start a Similar Project <ArrowUpRight size={17} /></a></Button></div></footer>
      </div>
    </article>
  </div>;
}
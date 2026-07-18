import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  MapPin,
  GraduationCap,
  Code2,
  Layout,
  Smartphone,
  Database,
  Terminal,
  Sparkles,
  BookOpen,
} from "lucide-react";
import profileImg from "@/assets/profile.png";

export const Route = createFileRoute("/")({
  component: Home,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  { name: "HTML", value: 90 },
  { name: "JavaScript", value: 72 },
  { name: "Python", value: 70 },
  { name: "C++", value: 85 },
  { name: "MySQL", value: 90 },
];

const SERVICES = [
  { icon: Layout, title: "Frontend Web Development", desc: "Modern, accessible interfaces built with clean, semantic markup." },
  { icon: Smartphone, title: "Responsive Website Design", desc: "Mobile-first layouts that look great on every device." },
  { icon: Code2, title: "UI Development", desc: "Clean, componentized user interfaces with a polished, consistent look." },
  { icon: Database, title: "Database Design with MySQL", desc: "Well-structured schemas for reliable data-driven apps." },
  { icon: Terminal, title: "Python Programming Solutions", desc: "Scripts and beginner-friendly tools to solve real problems." },
  { icon: Sparkles, title: "Continuous Learning", desc: "Always exploring new tools and frameworks to grow as a developer." },
];

function Home() {
  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-9 h-9 rounded-full bg-gradient-primary grid place-items-center text-white shadow-glow">
            D
          </span>
          <span>Dino<span className="text-primary">.</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-card/60 border border-border/50 px-2 py-1">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition"
        >
          Hire Me
        </a>
        <button
          className="md:hidden p-2 rounded-lg bg-card border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-foreground mb-1"></div>
          <div className="w-5 h-0.5 bg-foreground mb-1"></div>
          <div className="w-5 h-0.5 bg-foreground"></div>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <div className="px-6 py-3 flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-[1.02] tracking-tight">
            MUNYANSANGA NZIZA{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dino Shakuru
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            <span className="text-foreground font-medium">Computer Science Student</span> · Aspiring Full Stack Developer
          </p>
          <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
            Passionate about building modern web applications and continuously improving my
            programming skills. I enjoy learning new technologies and creating clean,
            responsive, and user-friendly websites.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition"
            >
              View Portfolio <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold hover:bg-secondary transition"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a href="mailto:dinoshakuru@gmail.com" className="hover:text-primary transition" aria-label="Email"><Mail className="w-5 h-5" /></a>
            <a href="tel:+250792457573" className="hover:text-primary transition" aria-label="Phone"><Phone className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition" aria-label="GitHub"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-card-glow">
            <img src={profileImg} alt="Munyansanga Nziza Dino Shakuru" className="w-full aspect-square object-cover" />
            <div className="absolute inset-0 ring-1 ring-primary/40 rounded-3xl pointer-events-none" />
          </div>
          <div className="absolute -top-4 -right-4 rounded-full bg-card/90 backdrop-blur border border-border px-4 py-2 text-xs font-medium shadow-card-glow">
            <span className="text-primary">✦</span> CS @ MKU
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-card/90 backdrop-blur border border-border px-4 py-3 shadow-card-glow">
            <div className="text-sm font-semibold">Full Stack Dev</div>
            <div className="text-xs text-muted-foreground">In progress</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <div className="text-xs uppercase tracking-[0.25em] text-primary font-semibold">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
        {title}
      </h2>
    </div>
  );
}

function About() {
  const points = [
    "Currently studying Computer Science at MKU",
    "Passionate about programming",
    "Interested in web development",
    "Continuous learner",
    "Goal-oriented and motivated",
  ];
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="About Me" title="Curious mind, building things that work." />
        <div className="grid lg:grid-cols-2 gap-10">
          <p className="text-muted-foreground text-lg leading-relaxed">
            I am <span className="text-foreground font-medium">MUNYANSANGA NZIZA Dino Shakuru</span>, a
            Computer Science student at Mount Kigali University (MKU) with a strong passion for
            software development and modern web technologies. I enjoy learning new programming
            languages, solving problems, and building responsive web applications. My goal is to
            become a skilled full-stack developer by continuously improving my technical abilities
            and gaining practical experience through personal projects and collaboration.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card/60 p-4"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-gradient-primary shrink-0" />
                <span className="text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Education" title="Building strong foundations." />
        <div className="rounded-3xl border border-border bg-card/60 p-8 md:p-10 shadow-card-glow relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-20"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="text-xs uppercase tracking-wider text-primary font-semibold">
                Currently Studying
              </div>
              <h3 className="mt-1 text-2xl font-bold">Mount Kigali University (MKU)</h3>
              <p className="text-muted-foreground">Bachelor of Computer Science</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Algorithms", "Web Dev", "Databases", "Software Eng"].map((t) => (
                  <span key={t} className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Skills" title="Tools I'm sharpening every day." />
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
          {SKILLS.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">{s.name}</span>
                <span className="text-muted-foreground">{s.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-primary"
                  style={{ width: `${s.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Portfolio" title="Projects Coming Soon" />
        <div className="rounded-3xl border border-dashed border-border bg-card/40 p-10 md:p-14 text-center relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{ background: "var(--gradient-primary)" }}
          />
          <div className="relative">
            <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow">
              <BookOpen className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="mt-6 text-2xl font-bold">Projects Coming Soon</h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              I am currently working on developing practical projects that demonstrate my
              programming and web development skills. This section will be updated as new
              projects are completed.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Collaborate with me <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Services" title="What I can help with." />
        <p className="-mt-8 mb-10 text-muted-foreground">
          Ready-to-grow offerings as I sharpen my skills.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card/60 p-6 hover:border-primary/50 hover:-translate-y-1 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <s.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Contact" title="Let's build something together." />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <a
              href="mailto:dinoshakuru@gmail.com"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5 hover:border-primary/50 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-medium">dinoshakuru@gmail.com</div>
              </div>
            </a>
            <a
              href="tel:+250792457573"
              className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5 hover:border-primary/50 transition"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                <div className="font-medium">+250 792 457 573</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
                <div className="font-medium">Kigali, Rwanda</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground pt-2">
              I usually respond within 24 hours. Feel free to reach out about internships,
              collaborations, or just to say hi.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(String(data.get("subject") || "Hello Dino"));
              const body = encodeURIComponent(
                `From: ${data.get("name")} <${data.get("email")}>\n\n${data.get("message")}`,
              );
              window.location.href = `mailto:dinoshakuru@gmail.com?subject=${subject}&body=${body}`;
            }}
            className="rounded-3xl border border-border bg-card/60 p-6 md:p-8 space-y-4 shadow-card-glow"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="What's this about?" />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your idea…"
                className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm outline-none focus:border-primary transition"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition"
            >
              Send Message <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm outline-none focus:border-primary transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Dino Shakuru. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="mailto:dinoshakuru@gmail.com" className="hover:text-primary"><Mail className="w-4 h-4" /></a>
          <a href="tel:+250792457573" className="hover:text-primary"><Phone className="w-4 h-4" /></a>
          <a href="#" className="hover:text-primary"><Github className="w-4 h-4" /></a>
          <a href="#" className="hover:text-primary"><Linkedin className="w-4 h-4" /></a>
          <a href="#" className="hover:text-primary"><Twitter className="w-4 h-4" /></a>
        </div>
      </div>
    </footer>
  );
}

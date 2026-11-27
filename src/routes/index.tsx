import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight, Award, BarChart3, BookOpen, Briefcase, Code2, Database, Download, ExternalLink,
  FileText, GraduationCap, Globe, Mail, Menu, Music, Phone, Send, Smartphone, Sparkles, Wrench, X, CheckCircle2,
} from "lucide-react";
import {
  achievements, certifications, education, internships, nav, profile, projects, skills, stats,
} from "@/data/portfolio";
import photo from "@/assets/lavanya.png.asset.json";
import { GithubIcon, LinkedinIcon } from "@/components/portfolio/icons";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lavanya A — Software Developer Portfolio" },
      { name: "description", content: "Lavanya A, 2026 CSE graduate and aspiring Software Developer: Python full stack, data analytics and Generative AI projects." },
      { property: "og:title", content: "Lavanya A — Software Developer Portfolio" },
      { property: "og:description", content: "Projects, skills, internships and research by Lavanya A, aspiring Software Developer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const id = (s: string) => s.toLowerCase();
const resumeHref = profile.resume || profile.linkedin;

function Index() {
  return (
    <div className="portfolio min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Internships />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10);
    f(); window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`sticky top-0 z-50 border-b transition-all ${scrolled ? "border-border bg-background/85 shadow-soft backdrop-blur" : "border-transparent bg-background"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <a href="#home" className="font-display text-xl font-extrabold text-heading">
          Lavanya<span className="text-primary">.</span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <a key={n} href={`#${id(n)}`} className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground">{n}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={resumeHref} download={profile.resumeFileName} className="hidden items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5 sm:inline-flex">
            <Download className="size-4" /> Resume
          </a>
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} className="text-heading lg:hidden" aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-3 lg:hidden">
          {nav.map((n) => (
            <a key={n} href={`#${id(n)}`} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 font-medium hover:bg-accent">{n}</a>
          ))}
          <a href={resumeHref} download={profile.resumeFileName} className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-4 py-2 font-semibold text-primary-foreground">
            <Download className="size-4" /> Download Resume
          </a>
        </nav>
      )}
    </header>
  );
}

function Typing() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = profile.roles[i % profile.roles.length];
    if (!word) return;
    const t = setTimeout(() => {
      if (!del && text === word) return setDel(true);
      if (del && text === "") { setDel(false); setI(i + 1); return; }
      setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, !del && text === word ? 1600 : del ? 40 : 80);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return (
    <span className="text-gradient">{text}<span className="animate-caret ml-0.5 inline-block w-[3px] translate-y-1 bg-primary align-baseline" style={{ height: "1em" }} /></span>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-12 md:py-14 lg:grid-cols-[1.3fr_1fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-sm font-medium text-primary shadow-soft">
            <span className="size-2 rounded-full bg-primary" /> Open to entry-level roles · 2026 graduate
          </span>
          <p className="mt-6 text-lg font-semibold text-heading">Hello, I'm</p>
          <h1 className="mt-1 text-5xl font-extrabold leading-[1.1] md:text-7xl">Lavanya A<span className="text-primary">.</span></h1>
          <p className="mt-4 text-2xl font-bold text-heading md:text-3xl">{profile.title}</p>
          <p className="mt-2 h-9 text-xl font-semibold md:text-2xl"><Typing /></p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
              View My Projects <ArrowRight className="size-4" />
            </a>
            <a href={resumeHref} download={profile.resumeFileName} className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 font-semibold text-heading transition-colors hover:border-primary hover:text-primary">
              <Download className="size-4" /> Download Resume
            </a>
            <div className="ml-1 flex gap-2">
              <Social href={profile.linkedin} label="LinkedIn"><LinkedinIcon /></Social>
              <Social href={profile.github} label="GitHub"><GithubIcon /></Social>
            </div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:150ms]">
          <div className="relative flex aspect-[4/5] items-end justify-center overflow-hidden rounded-lg border border-border bg-accent shadow-soft">
            <img src={photo.url} alt="Lavanya A, Software Developer" className="absolute inset-0 size-full object-cover" />
          </div>
          <div className="absolute -left-4 bottom-5 hidden rounded-lg border border-border bg-card p-3 shadow-soft sm:flex sm:items-center sm:gap-3">
            <span className="rounded-xl bg-accent p-2 text-primary"><GraduationCap className="size-5" /></span>
            <div><p className="font-display font-bold text-heading">8.51 CGPA</p><p className="text-xs text-muted-foreground">B.E. CSE</p></div>
          </div>
          <div className="absolute -right-4 top-5 hidden rounded-lg border border-border bg-card p-3 shadow-soft sm:flex sm:items-center sm:gap-3">
            <span className="rounded-xl bg-accent p-2 text-primary"><FileText className="size-5" /></span>
            <div><p className="font-display font-bold text-heading">Published</p><p className="text-xs text-muted-foreground">JETIR research</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex size-11 items-center justify-center rounded-full border border-border bg-background text-heading transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary">
      {children}
    </a>
  );
}

function Section({ id, eyebrow, title, alt, children }: { id: string; eyebrow: string; title: string; alt?: boolean; children: ReactNode }) {
  return (
    <section id={id} className={alt ? "bg-secondary" : "bg-background"}>
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-24">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

function About() {
  const points = [
    "Strong foundation in core computer science",
    "Programming and software development knowledge",
    "Hands-on experience through academic projects and virtual internships",
    "Interested in Python development, web technologies, data analytics and AI",
    "Published research paper on a Music Emotion Recognition System",
    "Committed to continuous learning and professional growth",
  ];
  return (
    <Section id="about" eyebrow="About Me" title="Building practical software, one project at a time" alt>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-lg leading-relaxed">
            I'm a 2026 Computer Science and Engineering graduate from <strong className="text-heading">Srinivas Institute of Technology, Mangalore</strong>. I love turning ideas into working software — from Python web apps to data dashboards and machine learning experiments.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />{p}</li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 self-start">
          {stats.map((s) => (
            <div key={s.label} className="card-lift rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="font-display text-4xl font-extrabold text-gradient">{s.value}</p>
              <p className="mt-2 font-medium text-heading">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

const skillIcons = { code: Code2, globe: Globe, db: Database, chart: BarChart3, tools: Wrench };

function Skills() {
  return (
    <Section id="skills" eyebrow="Technical Skills" title="My toolkit">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((g) => {
          const Icon = skillIcons[g.icon];
          return (
            <div key={g.group} className="card-lift rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <span className="rounded-xl bg-gradient-primary p-2.5 text-primary-foreground"><Icon className="size-5" /></span>
                <h3 className="text-lg font-bold">{g.group}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">{s}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic journey" alt>
      <ol className="relative ml-3 border-l-2 border-accent">
        {education.map((e) => (
          <li key={e.degree} className="relative mb-8 pl-8 last:mb-0">
            <span className="absolute -left-[13px] top-1 flex size-6 items-center justify-center rounded-full bg-gradient-primary ring-4 ring-secondary"><GraduationCap className="size-3.5 text-primary-foreground" /></span>
            <div className="card-lift rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold">{e.degree}</h3>
                <span className="rounded-full bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">{e.years}</span>
              </div>
              <p className="mt-1">{e.school}</p>
              <p className="mt-2 font-semibold text-primary">{e.score}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Internships() {
  return (
    <Section id="internships" eyebrow="Experience" title="Internships">
      <div className="grid gap-5 lg:grid-cols-3">
        {internships.map((x, i) => (
          <div key={x.role} className="card-lift flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="rounded-xl bg-accent p-2.5 text-primary"><Briefcase className="size-5" /></span>
              <span className="font-display text-3xl font-extrabold text-primary/15">0{i + 1}</span>
            </div>
            <h3 className="mt-4 text-lg font-bold">{x.role}</h3>
            <p className="mt-1 text-sm font-semibold text-primary">{x.org} · Virtual Internship</p>
            <p className="mt-3 flex-1">{x.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {x.tags.map((t) => <span key={t} className="rounded-md border border-border px-2 py-0.5 text-xs font-medium">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ProjectVisual({ kind }: { kind: "audio" | "phone" | "chart" }) {
  return (
    <div className="project-visual relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      {kind === "audio" ? (
        <div className="relative flex items-end gap-1.5">
          {[30, 60, 45, 80, 55, 95, 70, 40, 85, 50, 65, 35].map((h, i) => (
            <span key={i} className="w-3 rounded-full bg-primary-foreground/80 transition-all duration-500 group-hover:opacity-100" style={{ height: `${h}px` }} />
          ))}
          <Music className="absolute -top-14 left-1/2 size-10 -translate-x-1/2 text-primary-foreground" />
        </div>
      ) : kind === "chart" ? (
        <div className="relative w-56 rounded-2xl border-4 border-primary-foreground/80 bg-background/15 p-3 transition-transform duration-500 group-hover:-translate-y-1">
          <div className="flex items-center gap-2">
            <BarChart3 className="size-5 text-primary-foreground" />
            <div className="h-1.5 w-16 rounded bg-primary-foreground/60" />
            <div className="ml-auto h-1.5 w-8 rounded bg-primary-foreground/40" />
          </div>
          <div className="mt-3 flex items-end gap-1.5">
            {[40, 70, 55, 90, 60, 80, 45, 95].map((h, i) => (
              <span key={i} className="flex-1 rounded-t bg-primary-foreground/75" style={{ height: `${h * 0.6}px` }} />
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            <div className="h-6 rounded bg-primary-foreground/35" />
            <div className="h-6 rounded bg-primary-foreground/25" />
            <div className="h-6 rounded bg-primary-foreground/45" />
          </div>
        </div>
      ) : (
        <div className="relative h-44 w-24 rounded-[1.25rem] border-4 border-primary-foreground/80 bg-background/15 p-2 transition-transform duration-500 group-hover:-rotate-6">
          <div className="mx-auto h-1 w-8 rounded-full bg-primary-foreground/70" />
          <Sparkles className="mx-auto mt-8 size-8 text-primary-foreground" />
          <div className="mt-6 space-y-1.5"><div className="h-1.5 rounded bg-primary-foreground/60" /><div className="h-1.5 w-2/3 rounded bg-primary-foreground/40" /></div>
          <Smartphone className="absolute -right-12 top-4 size-8 text-primary-foreground/70" />
        </div>
      )}
    </div>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Work" title="Projects I'm proud of" alt>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.name} className="group card-lift flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <ProjectVisual kind={p.visual} />
            <div className="flex flex-1 flex-col p-7">
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => <span key={t} className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{t}</span>)}
              </div>
              <h3 className="mt-4 text-2xl font-bold">{p.name}</h3>
              <p className="mt-3 leading-relaxed">{p.desc}</p>
              <ul className="mt-4 grid gap-2">
                {p.features.map((f) => <li key={f} className="flex gap-2 text-sm"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />{f}</li>)}
              </ul>
              {p.link ? (
                <a href={p.link} target="_blank" rel="noreferrer" className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
                  <GithubIcon className="size-4" /> View Project
                </a>
              ) : (
                <p className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold text-muted-foreground">
                  <FileText className="size-4" /> Dashboards available on request
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications" title="Courses & credentials">
      <div className="grid gap-5 md:grid-cols-3">
        {certifications.map((c) => (
          <div key={c.name} className="card-lift flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
            <span className="h-fit rounded-xl bg-accent p-2.5 text-primary"><BookOpen className="size-5" /></span>
            <div>
              <h3 className="font-bold">{c.name}</h3>
              <p className="mt-1 text-sm font-semibold text-primary">{c.issuer}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  const [paper, ...rest] = achievements;
  return (
    <Section id="achievements" eyebrow="Achievements" title="Milestones" alt>
      <div className="grid gap-5 lg:grid-cols-3">
        {paper && (
          <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-elegant lg:row-span-2">
            <FileText className="size-10" />
            <h3 className="mt-6 text-2xl font-bold text-primary-foreground">{paper.title}</h3>
            <p className="mt-3 text-primary-foreground/90">{paper.desc}</p>
            <a href={profile.paper} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5">
              Read the paper <ExternalLink className="size-4" />
            </a>
          </div>
        )}
        {rest.map((a) => (
          <div key={a.title} className="card-lift flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft lg:col-span-2">
            <span className="h-fit rounded-xl bg-accent p-2.5 text-primary"><Award className="size-5" /></span>
            <div><h3 className="text-lg font-bold">{a.title}</h3><p className="mt-1">{a.desc}</p></div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function validateContact(v: { name: string; email: string; subject: string; message: string }) {
  const e: Partial<Record<keyof typeof v, string>> = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Please enter a valid email address.";
  if (v.subject.trim().length < 3) e.subject = "Please add a subject.";
  if (v.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
  return e;
}

function Contact() {
  const [v, setV] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<ReturnType<typeof validateContact>>({});
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validateContact(v);
    setErrors(e);
    if (Object.keys(e).length) { setStatus("err"); return; }
    const body = `From: ${v.name} (${v.email})\n\n${v.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`;
    setStatus("ok");
    setV({ name: "", email: "", subject: "", message: "" });
  };
  const field = "w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-4 focus:ring-ring/15";
  const contacts = [
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: LinkedinIcon, label: "LinkedIn", value: "lavanya-a-b0759b2a0", href: profile.linkedin },
    { icon: GithubIcon, label: "GitHub", value: "Lavanyashekhar", href: profile.github },
  ];
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="text-lg leading-relaxed">Have an opportunity or project in mind? I'd love to connect and discuss how I can contribute.</p>
          <div className="mt-8 space-y-3">
            {contacts.map((c) => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="card-lift flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft">
                <span className="rounded-xl bg-accent p-2.5 text-primary"><c.icon className="size-5" /></span>
                <div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</p><p className="truncate font-semibold text-heading">{c.value}</p></div>
              </a>
            ))}
          </div>
        </div>
        <form onSubmit={submit} noValidate className="rounded-3xl border border-border bg-card p-6 shadow-soft md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" error={errors.name}><input className={field} value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} autoComplete="name" /></Field>
            <Field label="Email Address" error={errors.email}><input type="email" className={field} value={v.email} onChange={(e) => setV({ ...v, email: e.target.value })} autoComplete="email" /></Field>
          </div>
          <div className="mt-4"><Field label="Subject" error={errors.subject}><input className={field} value={v.subject} onChange={(e) => setV({ ...v, subject: e.target.value })} /></Field></div>
          <div className="mt-4"><Field label="Message" error={errors.message}><textarea rows={5} className={field} value={v.message} onChange={(e) => setV({ ...v, message: e.target.value })} /></Field></div>
          <Button type="submit" size="lg" className="mt-6 w-full font-semibold">
            <Send className="size-4" /> Send Message
          </Button>
          {status === "ok" && <p role="status" className="mt-4 rounded-xl bg-accent p-3 text-sm font-medium text-accent-foreground">Thanks! Your email app has opened with the message ready to send.</p>}
          {status === "err" && <p role="alert" className="mt-4 rounded-xl bg-destructive/10 p-3 text-sm font-medium text-destructive">Please fix the highlighted fields and try again.</p>}
        </form>
      </div>
    </Section>
  );
}

function Field({ label, error, children }: { label: string; error?: string | undefined; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-heading">{label}</span>
      {children}
      {error && <span className="mt-1 block text-sm text-destructive">{error}</span>}
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold text-heading">Lavanya A<span className="text-primary">.</span></p>
          <p className="mt-1 text-muted-foreground">Software Developer</p>
          <a href={`mailto:${profile.email}`} className="mt-4 inline-flex items-center gap-2 text-foreground hover:text-primary"><Mail className="size-4" />{profile.email}</a>
        </div>
        <nav className="grid grid-cols-3 gap-2 text-sm" aria-label="Footer">
          {nav.map((n) => <a key={n} href={`#${id(n)}`} className="text-muted-foreground hover:text-primary">{n}</a>)}
        </nav>
        <div className="flex gap-3 md:justify-end">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="h-fit rounded-full border border-border p-3 hover:text-primary"><LinkedinIcon /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="h-fit rounded-full border border-border p-3 hover:text-primary"><GithubIcon /></a>
        </div>
      </div>
      <p className="border-t border-border py-5 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Lavanya A. All rights reserved.</p>
    </footer>
  );
}

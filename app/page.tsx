export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold">
            SuSi<span className="text-cyan-400">.</span>
          </h1>

          <div className="hidden gap-8 md:flex">
            <a href="#about" className="text-gray-300 hover:text-cyan-400">
              About
            </a>

            <a href="#skills" className="text-gray-300 hover:text-cyan-400">
              Skills
            </a>

            <a href="#projects" className="text-gray-300 hover:text-cyan-400">
              Projects
            </a>

            <a href="#contact" className="text-gray-300 hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[80vh] max-w-6xl items-center px-6">
        <div>
          <p className="mb-4 tracking-[0.3em] text-cyan-400">
            HELLO, I'M
          </p>

          <h2 className="text-7xl font-black md:text-9xl">
            SuSi<span className="text-cyan-400">.</span>
          </h2>

          <h3 className="mt-6 text-2xl font-semibold text-gray-200">
            Web Developer & GIS Developer
          </h3>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            I create modern websites, interactive maps, and useful digital
            experiences using modern web technologies.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-bold text-slate-950 hover:bg-cyan-300"
            >
              My Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/20 px-6 py-3 hover:border-cyan-400 hover:text-cyan-400"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-cyan-400">ABOUT ME</p>

        <h2 className="mt-3 text-4xl font-bold">
          Who is SuSi?
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          I'm SuSi, a developer interested in web development, GIS,
          mapping technologies, and interactive applications. I enjoy
          turning ideas into useful digital experiences.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-cyan-400">SKILLS</p>

        <h2 className="mt-3 text-4xl font-bold">
          My Technologies
        </h2>

        <div className="mt-8 flex flex-wrap gap-4">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "GIS",
            "Leaflet",
            "PostgreSQL",
            "PostGIS",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-white/10 bg-slate-900 px-5 py-3 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-cyan-400">PROJECTS</p>

        <h2 className="mt-3 text-4xl font-bold">
          My Work
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <p className="text-cyan-400">01</p>

            <h3 className="mt-5 text-2xl font-bold">
              GIS Web Map
            </h3>

            <p className="mt-4 text-gray-400">
              An interactive GIS website for displaying locations
              and geographic information.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <p className="text-cyan-400">02</p>

            <h3 className="mt-5 text-2xl font-bold">
              Lottery Website
            </h3>

            <p className="mt-4 text-gray-400">
              A modern lottery web application interface with
              tickets and draw results.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <p className="text-cyan-400">03</p>

            <h3 className="mt-5 text-2xl font-bold">
              Portfolio
            </h3>

            <p className="mt-4 text-gray-400">
              A responsive personal portfolio built with Next.js.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-white/10 bg-slate-900 px-6 py-32 text-center"
      >
        <p className="text-cyan-400">CONTACT</p>

        <h2 className="mt-4 text-5xl font-black">
          Let's Work Together.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-gray-400">
          Have a project or idea? Feel free to contact me.
        </p>

        <a
          href="mailto:susi@example.com"
          className="mt-8 inline-block rounded-lg bg-cyan-400 px-7 py-3 font-bold text-slate-950"
        >
          Email Me
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 SuSi. All rights reserved.
      </footer>

    </main>
  );
}
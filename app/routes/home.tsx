import type { Route } from "./+types/home";
import { data } from "react-router";
import { getRepos } from "~/services/github/github-service.server";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Header from "~/components/header";
import RepositoryList from "~/components/repository-list";

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Luca Di Bello" },
    { name: "description", content: "Luca Di Bello personal website" },
  ];
}

// ---------------------------------------------------------------------------
// Server-side loader – repos are fetched at request time (SSR)
// ---------------------------------------------------------------------------

/** Only allow safe https:// URLs from env vars used as hrefs. */
function safeUrl(value: string | undefined, fallback: string): string {
  try {
    const url = new URL(value ?? "");
    if (url.protocol === "https:") return url.toString();
  } catch {
    // invalid URL — fall through to fallback
  }
  return fallback;
}

export async function loader() {
  const repos = await getRepos();

  const maxProjects = process.env.MAX_PROJECTS
    ? parseInt(process.env.MAX_PROJECTS, 10)
    : 4;

  // Base64-encode the email so it doesn't appear as plain text in the
  // server-rendered HTML — prevents naive bot scraping.
  const rawMail = process.env.MAIL_ADDRESS ?? "";
  const mailEncoded = rawMail ? Buffer.from(rawMail).toString("base64") : "";

  return data({
    repos,
    maxProjects,
    githubUrl: safeUrl(process.env.GITHUB_URL, "#"),
    linkedinUrl: safeUrl(process.env.LINKEDIN_URL, "#"),
    mailEncoded,
  });
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function Home({ loaderData }: Route.ComponentProps) {
  const { repos, maxProjects, githubUrl, linkedinUrl, mailEncoded } =
    loaderData;
  const currentYear = new Date().getFullYear();

  /** Decode the base64 email and open the mail client */
  function handleMailClick(e: React.MouseEvent) {
    e.preventDefault();
    if (!mailEncoded) return;
    const addr = atob(mailEncoded);
    window.location.href = `mailto:${addr}`;
  }

  return (
    <main>
      {/* Hero */}
      <Header
        githubUrl={githubUrl}
        linkedinUrl={linkedinUrl}
        onMailClick={handleMailClick}
      />

      {/* Divider */}
      <div className="relative w-full h-[200px]">
        <img
          src="/images/steps.svg"
          alt="steps"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* About Me */}
      <section className="bg-viridian py-10 px-5">
        <h2 className="text-2xl md:text-3xl font-bold text-white my-7">
          About me
        </h2>
        <div className="flex flex-col gap-5 mb-5">
          <p className="text-white text-lg font-bold">
            I&apos;m a{" "}
            <code className="font-mono inline-block text-sm bg-mint-cream px-[0.2em] rounded-sm text-black">
              Software Engineer
            </code>{" "}
            completing my{" "}
            <a
              href="https://www.usi.ch/en/education/master/informatics"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <code className="font-mono inline-block text-sm bg-mint-cream px-[0.2em] rounded-sm text-black group-hover:underline">
                Master of Science in Informatics
              </code>
            </a>{" "}
            at USI, specializing in{" "}
            <a
              href="https://www.usi.ch/en/education/master/informatics/structure-and-contents/computer-systems"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <code className="font-mono inline-block text-sm bg-mint-cream px-[0.2em] rounded-sm text-black group-hover:underline">
                Computer Systems
              </code>
            </a>
            {" , "}with a visiting semester at{" "}
            <a
              href="https://www.epfl.ch/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <code className="font-mono inline-block text-sm bg-mint-cream px-[0.2em] rounded-sm text-black group-hover:underline">
                EPFL
              </code>
            </a>{" "}
            focused on cybersecurity and machine learning.
          </p>
          <p className="text-white text-lg font-bold">
            My research centers on{" "}
            <code className="font-mono inline-block text-sm bg-mint-cream px-[0.2em] rounded-sm text-black">
              Confidential Computing
            </code>{" "}
            in Big Data infrastructure &mdash; building systems that are
            scalable, efficient, and trustworthy even under adversarial
            conditions.
          </p>
          <p className="text-white text-lg font-bold">
            From a young age, I&apos;ve been passionate about computer science
            and have consistently sought ways to deepen my expertise. Feel free
            to{" "}
            <code className="font-mono inline-block text-sm bg-mint-cream px-[0.2em] rounded-sm text-black">
              explore my portfolio
            </code>{" "}
            and take a look at some of the projects I&apos;ve worked on.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="relative w-full h-[200px]">
        <img
          src="/images/steps-inv.svg"
          alt="divider"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Featured Projects */}
      <section className="bg-mint-cream py-10 px-5">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Featured Projects 🚀
        </h2>
        <p className="text-lg font-bold mb-2">
          I&apos;ve had the opportunity to contribute to a range of projects,
          both individually and as part of a team. Below are some of the most
          notable ones.
        </p>

        <RepositoryList repositories={repos} maxProjects={maxProjects} />

        {/* View more on GitHub */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-5 px-4 py-2 border border-black rounded-md hover:bg-black/10 transition-colors font-medium"
        >
          <FiGithub />
          View more on Github 🚀
        </a>
      </section>

      {/* Skills & Research Interests */}
      <section className="bg-mint-cream pt-4 pb-10 px-5">
        {/* Subtle separator from Projects section above */}
        <div className="border-t border-black/10 mb-10" />

        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Skills &amp; Research Interests
        </h2>
        <p className="text-lg font-bold mb-6">
          Areas I&apos;ve built expertise in through coursework, research, and
          hands-on projects.
        </p>

        <div className="bg-mint-green/60 rounded-xl p-4 md:p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Confidential Computing & Security */}
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-bold mb-2">
                Confidential Computing &amp; Security
              </h3>
              <p className="text-base text-black/70 mb-3">
                Trusted execution environments (Intel SGX, Gramine), zero-trust
                architectures, zero-knowledge proofs, and vulnerability research
                through fuzzing and network analysis.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "TEEs",
                  "Intel SGX",
                  "Software Security",
                  "Privacy-Enhancing Tech",
                  "Cryptography",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-viridian/10 text-viridian"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Distributed Systems & Networking */}
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-bold mb-2">
                Distributed Systems &amp; Networking
              </h3>
              <p className="text-base text-black/70 mb-3">
                High-performance computing, distributed stream processing,
                virtual network simulation, P2P architectures, and traffic
                engineering.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "HPC",
                  "Distributed Systems",
                  "Edge Computing",
                  "IoT",
                  "Network ML",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-viridian/10 text-viridian"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Machine Learning & Computer Vision */}
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-bold mb-2">
                Machine Learning &amp; Computer Vision
              </h3>
              <p className="text-base text-black/70 mb-3">
                Statistical learning, network-based ML, computer vision, and
                data science &mdash; with experience spanning academic
                coursework at SUPSI, USI, and EPFL.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Machine Learning",
                  "Computer Vision",
                  "Data Science",
                  "Network ML",
                  "Information Retrieval",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-viridian/10 text-viridian"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Full-Stack & Backend Engineering */}
            <div className="bg-white rounded-lg p-5 shadow-sm">
              <h3 className="text-lg font-bold mb-2">
                Full-Stack &amp; Backend Engineering
              </h3>
              <p className="text-base text-black/70 mb-3">
                TypeScript/Node.js, React/Next.js/React Router, Python, Rust,
                Java, C/C++, Solidity &mdash; end-to-end product development
                from design to deployment.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "TypeScript",
                  "React",
                  "Python",
                  "Rust",
                  "Java",
                  "C/C++",
                  "Solidity",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-viridian/10 text-viridian"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative w-full h-[200px]">
        <img
          src="/images/steps-two.svg"
          alt="divider"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Contact Me */}
      <section className="bg-viridian py-10 px-5">
        <h2 className="text-2xl md:text-3xl font-bold text-white my-7">
          Contact me
        </h2>
        <p className="text-white text-lg font-bold">
          I&apos;m always{" "}
          <code className="font-mono inline-block text-sm bg-mint-cream px-[0.2em] rounded-sm text-black">
            open to new opportunities
          </code>{" "}
          and collaborations. Reach out to me if you want to get in touch!
        </p>

        {/* Social buttons */}
        <div className="flex flex-col md:flex-row gap-5 mt-5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-md hover:bg-black/10 transition-colors font-semibold"
          >
            <FiGithub />
            Github
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-md hover:bg-black/10 transition-colors font-semibold"
          >
            <FiLinkedin />
            LinkedIn
          </a>
          <a
            href="#contact"
            onClick={handleMailClick}
            className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-md hover:bg-black/10 transition-colors font-semibold"
          >
            <FiMail />
            Email
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="relative w-full h-[200px]">
        <img
          src="/images/steps-two-inv.svg"
          alt="divider"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Footer */}
      <footer className="bg-mint-cream pt-10 pb-[100px] px-5 text-center">
        <div className="flex flex-col gap-2 mb-5">
          <h2 className="text-xl font-semibold">
            © Copyright {currentYear}, Luca Di Bello
          </h2>
          <p className="text-black text-base font-bold">
            Made with ❤️ in Switzerland
          </p>
        </div>
      </footer>
    </main>
  );
}

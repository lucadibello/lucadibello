import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

interface HeaderProps {
  githubUrl: string;
  linkedinUrl: string;
  onMailClick: (e: React.MouseEvent) => void;
}

export default function Header({
  githubUrl,
  linkedinUrl,
  onMailClick,
}: HeaderProps) {
  return (
    <header>
      <section className="bg-mint-cream px-5 pb-10 pt-[150px] w-full">
        <h1 className="text-2xl md:text-3xl font-bold">
          Hello there, I&apos;m Luca Di Bello 👋
        </h1>

        <p className="text-xl font-bold mt-5">
          a{" "}
          <code className="font-mono inline-block bg-mint-green text-lg px-[0.2em] rounded-sm">
            Software Engineer
          </code>{" "}
          based in{" "}
          <code className="font-mono inline-block bg-mint-green text-lg px-[0.2em] rounded-sm">
            Switzerland
          </code>{" "}
          🇨🇭.
        </p>

        {/* Social icon buttons */}
        <div className="flex gap-2 mt-5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-mint-green hover:bg-cambridge-blue transition-colors"
          >
            <FiGithub />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-mint-green hover:bg-cambridge-blue transition-colors"
          >
            <FiLinkedin />
          </a>
          <a
            href="#contact"
            onClick={onMailClick}
            aria-label="Email"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-mint-green hover:bg-cambridge-blue transition-colors"
          >
            <FiMail />
          </a>
        </div>
      </section>
    </header>
  );
}

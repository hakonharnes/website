import CardList from "@/components/CardList";
import SocialLinks from "@/components/SocialLinks";
import ExternalLink from "@/components/ExternalLink";
import { SectionHeader } from "@/components/SectionHeader";
import InternalLink from "@/components/InternalLink";

export default function AboutSection() {
  return (
    <section>
      <SectionHeader title="About" />
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
        <div className="flex flex-col gap-4 text-lg text-slate-400  ">
          <p>
            Back in 2016, I decided to try my hand at programming a snake game
            after watching a{" "}
            <span className="text-white">
              <ExternalLink href="https://www.youtube.com/watch?v=AaGK-fj-BAMt">
                YouTube video
              </ExternalLink>
            </span>
            . That’s when I tumbled head first into the rabbit hole of
            programming. Fast forward to today, and I hold a Master’s degree in
            Computer Science from the Norwegian University of Science and
            Technology. I’m currently expanding my skill set at the University
            of Tromsø, where I’m studying in management with an expected
            graduation date of June 2024.
          </p>
          <p>
            Over the years, I’ve gained experience in a diverse set of
            programming languages, with a particular focus on Python and backend
            development. However, my interests extend to frontend development,
            as evidenced by this website. I’m always eager to try out emerging
            technologies, like WebAssembly. For those curious, I use Neovim and
            Arch Linux, by the way.
          </p>
          <p>
            Security is another interest of mine. I’ve identified and disclosed
            critical vulnerabilities that were present on a prominent website.
            On a related note, did you know that websites might be secretly
            mining cryptocurrencies on your computer without your consent? It’s
            a practice known as cryptojacking, and I’ve actually published
            several peer-reviewed papers on the subject! Check out the{" "}
            <InternalLink underline href="#publications">
              publications
            </InternalLink>{" "}
            section for more details.
          </p>
          <p>I am currently looking for new job opportunities.</p>
          <MyLinks />
        </div>
        <div className="lg:w-72 lg:flex-shrink-0">
          <Skills />
        </div>
      </div>
    </section>
  );
}

function MyLinks() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-lg font-medium text-slate-400 pt-[2px]">
        Reach me at:
      </span>
      <SocialLinks />
    </div>
  );
}

function Skills() {
  return (
    <div className="w-full flex flex-col gap-8">
      <SkillList
        title="Languages"
        technologies={["Python", "TypeScript", "HTML", "CSS", "Bash", "Rust"]}
      />
      <SkillList
        title="Frameworks & libraries"
        technologies={["FastAPI", "Django", "Express.js", "TailwindCSS"]}
      />
      <SkillList
        title="Technologies"
        technologies={["Linux", "Docker", "Vim"]}
      />
    </div>
  );
}

type SkillListProps = {
  title: string;
  technologies: string[];
};

function SkillList({ title, technologies }: SkillListProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl font-bold">{title}</h1>
      <CardList elements={technologies} />
    </div>
  );
}

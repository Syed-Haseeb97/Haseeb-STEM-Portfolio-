import { Section } from './Section';
import { achievements, profileDetails } from '../data/portfolio';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building useful software with curiosity and ownership."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-base leading-8 text-muted">
          <p>
            I am a student passionate about physics, mathematics, and
            computational problem solving. I am currently preparing for
            competitive exams while exploring programming and data analysis.
          </p>
          <p>
            I enjoy understanding how scientific principles explain real-world
            phenomena and how computational tools can help solve complex
            problems. As a developer, I focus on building useful software rather
            than tutorial projects.
          </p>
          <p>
            I use AI responsibly to accelerate research, prototyping, debugging,
            and development, while still understanding the system, making the
            engineering decisions, and owning the code I ship.
          </p>

          <div className="rounded-lg border border-line bg-gray-50 p-5">
            <h3 className="text-base font-semibold text-ink">Achievements</h3>
            <ul className="mt-4 grid gap-3 text-sm leading-6">
              {achievements.map((achievement) => (
                <li key={achievement} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <figure className="rounded-lg border border-line bg-white p-3 shadow-soft">
          <img
            src={profileDetails.portfolioImage}
            alt="Portfolio description showing Haseeb's about information and achievements"
            className="w-full rounded-md border border-line"
            loading="lazy"
          />
          <figcaption className="px-1 pt-3 text-xs leading-5 text-muted">
            Profile summary and achievements from Haseeb's portfolio notes.
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}

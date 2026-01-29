import TypingText from "@/components/TypingText";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen pt-60">
      <h2 className="text-6xl font-bold mb-6">About</h2>

      <p className="text-2xl text-zinc-300 max-w-4xl mb-6">
        Hi! I&apos;m Ricardo Gonzalez, a Computer Systems Engineering graduate
        and software developer.
      </p>

      <p className="text-xl text-zinc-400 max-w-4xl mb-4">
        I have over five years of experience developing software and enjoy
        working on modern web, desktop, and mobile applications. I am passionate
        about technology and solving problems through programming, system
        design, and efficient solutions.
      </p>

      <p className="text-xl text-zinc-400 max-w-4xl mb-4">
        I enjoy writing clean, readable code and turning complex problems into
        simple, intuitive, and user-friendly experiences. I learn quickly, adapt
        easily, and enjoy collaborating with multidisciplinary teams.
      </p>

      <p className="text-xl text-zinc-400 max-w-4xl">
        <TypingText
          text="Currently, I am building personal projects—including this
          portfolio—while continuing to study new technologies and frameworks to
          grow as a frontend developer."
        ></TypingText>
      </p>
    </section>
  );
}



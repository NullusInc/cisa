export function AboutSection() {
  return (
    <section className="relative flex w-full min-h-dvh items-center justify-center bg-background sm:justify-start">
      <div className="px-6 text-center sm:px-8 sm:pl-8 sm:pr-0 sm:text-left lg:pl-18">
        <div className="max-w-full sm:max-w-[60vw] sm:pr-8 lg:pr-12">
          <p className="font-sans text-left text-foreground text-[0.95rem] sm:text-[clamp(1.5rem,1rem+2vw,3rem)] lg:text-[clamp(1.25rem,0.8rem+1vw,2rem)] leading-snug sm:leading-relaxed">
            The City Innovation Students&rsquo; Association (CISA) is the
            undergraduate student governing body within UCalgary&rsquo;s
            School of Architecture, Planning and Landscape, with the mission
            to represent academic student interests and foster an inclusive community.
          </p>
          <p className="font-sans text-left text-foreground text-[0.95rem] sm:text-[clamp(1.5rem,1rem+2vw,3rem)] lg:text-[clamp(1.25rem,0.8rem+1vw,2rem)] leading-snug sm:leading-relaxed mt-12">
            Our vision within CISA is fairness, process, and strength in
            academic representation, as well as building strong connections
            within the program, communities surrounding our downtown campus,
            and other student groups at the University of Calgary.
          </p>
        </div>
      </div>
    </section>
  );
}

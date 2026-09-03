export function AboutSection() {
  return (
    <section className="relative flex w-full h-dvh max-h-375 items-center justify-center bg-background sm:justify-start">
      <div className="px-6 text-center sm:px-8 sm:pl-8 sm:pr-0 sm:text-left lg:pl-18">
        <div className="max-w-7xl sm:pr-8 lg:pr-12">
          <p className="font-sans text-left text-foreground text-md sm:text-[clamp(1.2rem,0.8rem+1.6vw,2.4rem)] lg:text-[clamp(1rem,0.64rem+0.8vw,1.6rem)] leading-snug sm:leading-relaxed">
            <span className="font-bold">The City Innovation Students&rsquo; Association</span> (CISA) is the
            undergraduate student governing body within UCalgary&rsquo;s
            School of Architecture, Planning and Landscape, with the mission
            to represent academic student interests and foster an inclusive community.
          </p>
          <p className="font-sans text-left text-foreground text-[0.95rem] sm:text-[clamp(1.2rem,0.8rem+1.6vw,2.4rem)] lg:text-[clamp(1rem,0.64rem+0.8vw,1.6rem)] leading-snug sm:leading-relaxed mt-12">
            <span className="font-bold">Our vision</span> within CISA is fairness, process, and strength in
            academic representation, as well as building strong connections
            within the program, communities surrounding our downtown campus,
            and other student groups at the University of Calgary.
          </p>
        </div>
      </div>
    </section>
  );
}

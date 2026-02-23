export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-gray-800 to-gray-600 px-4 py-24 text-center">
      <div className="absolute inset-0 z-0 bg-gray-700/50" aria-hidden />
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-4">
        <p className="font-sans text-sm font-medium uppercase tracking-wider text-[var(--color-off-white)]/90 md:text-base">
          Psychologia
        </p>
        <h1 className="font-serif text-4xl font-medium leading-tight text-[var(--color-off-white)] md:text-5xl lg:text-6xl">
          W drodze do siebie
        </h1>
        <p className="font-sans text-lg text-[var(--color-off-white)]/90 md:text-xl">
          Psychoterapia i Wsparcie Psychologiczne
        </p>
      </div>
    </section>
  );
};

export const CallToActionWaveSection = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--color-off-white)] pt-16 pb-32 md:pt-20 md:pb-40">
      <div className="absolute inset-x-0 bottom-0 h-[60%] min-h-[280px] w-full">
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 h-full w-full overflow-visible"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            fill="var(--color-wave)"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      <div className="relative z-10 flex justify-center">
        <h2 className="font-serif text-3xl font-medium text-[var(--color-off-white)] drop-shadow-sm md:text-4xl lg:text-5xl">
          Dobrze, że jesteś!
        </h2>
      </div>
    </section>
  );
};

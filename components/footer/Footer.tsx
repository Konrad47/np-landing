const SECTION_MAX_WIDTH = "72rem";

const columns = [
  {
    heading: "Kontakt",
    items: ["E-mail: kontakt@example.com", "Tel: +48 123 456 789", "Strona: www.example.com"],
  },
  {
    heading: "Gabinet Psychoterapii",
    items: ["Adres gabinetu", "Miasto, kod pocztowy"],
  },
  {
    heading: "O mnie",
    items: ["Link do strony O mnie", "Polityka prywatności"],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-[var(--color-footer)] text-[var(--color-off-white)]">
      <div
        className="mx-auto w-full px-4 py-12 sm:px-6 lg:px-8 md:py-16"
        style={{ maxWidth: SECTION_MAX_WIDTH }}
      >
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-sans text-lg font-semibold">{col.heading}</h3>
              <ul className="mt-4 space-y-2 font-sans text-sm opacity-95">
                {col.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

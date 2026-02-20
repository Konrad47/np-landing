import { Header, Footer } from "@/components/layout";

export const metadata = {
  title: "Kontakt",
};

export default function KontaktPage() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-16 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
          Kontakt
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Formularz lub dane kontaktowe — do uzupełnienia.
        </p>
      </main>
      <Footer />
    </div>
  );
}

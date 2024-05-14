import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-292px)] flex gap-4 justify-center items-center text-[#353535] max-md:flex-col max-md:text-center max-sm:gap-2">
      <h1 className="text-9xl max-sm:text-7xl">404</h1>
      <div>
        <h2 className="text-lg font-semibold max-sm:text-base">
          Oops! La página que buscas no fue encontrada.
        </h2>
        <p className="max-sm:text-sm">
          Puedes volver a la página de{" "}
          <Link className="text-[#1B85D0] underline font-bold" href="/">
            inicio
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

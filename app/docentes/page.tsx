import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docentes",
};

export default function Teacher() {
  return (
    <section className="text-[#353535] text-center py-28 max-sm:py-16">
      <h1 className="text-[40px] font-bold mb-[30px] max-sm:text-3xl">
        CETPRO Naciones Unidas
      </h1>
      <form className="flex flex-col gap-[25px] items-center w-[500px] mx-auto max-sm:w-full">
        <input
          className="outline-slate-300 text-[20px] placeholder:text-[rgba(53,53,53,0.25)] h-[60px] w-full bg-[rgba(53,53,53,0.05)] pl-[25px]"
          placeholder="Usuario"
          type="text"
        />
        <input
          className="outline-slate-300 text-[20px] placeholder:text-[rgba(53,53,53,0.25)] h-[60px] w-full bg-[rgba(53,53,53,0.05)] pl-[25px] mb-[10px]"
          placeholder="Contraseña"
          type="text"
        />
        <button
          className="bg-[#1B85D0] w-full text-white h-[60px] text-[20px] font-bold"
          type="submit"
        >
          Ingresar
        </button>
      </form>
    </section>
  );
}

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import GmailLogo from "@/assets/images/logo-gmail.svg";
import WhatsappLogo from "@/assets/images/logo-whatsapp.svg";
import FacebookLogo from "@/assets/images/logo-facebook.svg";

export const metadata: Metadata = {
  title: "Contacto",
};

export default function Contact() {
  return (
    <section className="text-[#353535] flex justify-center items-center gap-[130px] my-[50px] max-lg:flex-col max-md:gap-20">
      <div className="text-xs flex flex-col items-center text-center">
        <Link href="https://wa.link/9bmd08" target="_blank">
          <Image
            width={55}
            height={55}
            src={WhatsappLogo}
            alt="Whatsapp Cetpro"
            className="mb-[20px]"
          />
        </Link>
        <p className="max-w-[300px] max-lg:max-w-full grid gap-3 mb-[35px]">
          <span>
            Para cualquier orientación, informes o activación de la cuenta
            llamar a los siguientes whatsapp
          </span>
          <span>Gloria Trejo: 922211769</span>
          <span>Nely Espinoza: 971245467 - 970456072</span>
          <span>De lunes a viernes</span>
          <span>De: 8:00am. A 12:00 pm.</span>
          <span> y de 14:00 pm. A 6:00pm.</span>
        </p>

        <Link href="mailto:mesadepartes@cetpronnuu.edu.pe" target="_blank">
          <Image
            width={48}
            height={36}
            src={GmailLogo}
            alt="Gmail Cetpro"
            className="mb-[20px]"
          />
        </Link>
        <p className="max-w-[254px] max-lg:max-w-full grid gap-3 mb-[35px]">
          <span>ESCRIBENOS UN E-MAIL</span>
          <span>
            Para cualquier orientación, informes, escribenos al siguiente
            correo:
          </span>
          <span>mesadepartes@cetpronnuu.edu.pe</span>
        </p>

        <Link
          href="https://www.facebook.com/cetpronacionesunidasoficial/"
          target="_blank"
        >
          <Image
            width={47}
            height={47}
            src={FacebookLogo}
            alt="Facebook Cetpro"
            className="mb-[20px]"
          />
        </Link>
        <p>Siguenos en facebook</p>
      </div>

      <div className="text-center max-lg:w-full">
        <p className="text-[28px] font-bold mb-[20px] max-sm:text-xl">
          Ubícanos en Jr. Colón 152 - Callao{" "}
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.7217147120327!2d-77.14857512602804!3d-12.062658342194633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cb9a315f43e7%3A0xd2abc5dddbba153b!2sCETPRO%20%22Naciones%20Unidas%22!5e0!3m2!1ses-419!2spe!4v1714600229808!5m2!1ses-419!2spe"
          width="550"
          height="550"
          loading="lazy"
          allowFullScreen
          style={{ border: "0" }}
          className="max-lg:w-full max-sm:h-[300px]"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

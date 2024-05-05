import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Procedimiento de matrícula",
};

export default function RegistrationProcedure() {
  return (
    <section className="text-[#353535] my-12">
      <h1 className="text-3xl font-bold text-center uppercase mb-8 max-sm:text-2xl">
        Procedimiento de matrícula
      </h1>
      <section className="mb-12">
        <h2 className="text-xl max-sm:text-lg font-bold mb-2">
          PROCEDIMIENTO DE MATRÍCULA
        </h2>
        <ol className="list-decimal list-inside mb-2">
          <li>Lea completamente el contenido de la presente página.</li>
          <li>
            En la sección <span className="font-bold">ESPECIALIDADES</span>{" "}
            encontrará la información de los diferentes módulos y cursos,
            horarios, frecuencias, fechas de inicio y fin.
          </li>
          <li>
            Seleccione un módulo o curso; de clic en el botón -INSCRIPCION-
          </li>
          <li>
            Lea atentamente la página de los TERMINOS, CONDICIONES Y COMPROMISOS
            y de clic en ACEPTO.
          </li>
          <li>Llene los formularios con sus datos personales.</li>
          <li>
            En el transcurso de 3 días entraremos en contacto con usted para
            confirmar su matrícula y entregarle su usuario y contraseña. Esta
            cuenta se usará con GOOGLE MEET y el CLASSROOM del CETPRO.
          </li>
        </ol>
        <h3 className="font-bold">Recomendaciones:</h3>
        <ul className="list-asterisk list-inside">
          <li>Digite correctamente su número telefónico.</li>
          <li>
            Verifique que su correo este activo antes de ingresarlo al
            formulario.
          </li>
          <li>Digite correctamente su correo electrónico.</li>
          <li>En los formularios solo emplee letras y números.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl max-sm:text-lg font-bold mb-2">LA MATRÍCULA</h2>

        <p className="mb-4">
          La matrícula es el proceso por el cual él o la estudiante se registra
          en un periodo académico y recibe los sílabos correspondientes. Este
          proceso acredita la condición de estudiante e implica el compromiso de
          cumplir los deberes y ser sujeto de los derechos establecidos en el
          Reglamento del Estudiante del CETPRO Naciones Unidas.
        </p>

        <p className="mb-4">
          La matrícula garantiza el otorgamiento de los certificados modulares o
          de capacitación correspondientes, siempre que él o la estudiante haya
          concluido satisfactoriamente el módulo y cumplido con los trámites
          formales requeridos por el CETPRO.
        </p>

        <p>
          La asistencia a clases de una especialidad sin haber completado o
          regularizado su matrícula en los plazos establecidos, no genera ningún
          derecho académico.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl max-sm:text-lg font-bold mb-2">REQUISITOS</h2>

        <p className="font-bold">Completar el Registro de datos personales.</p>
        <p className="mb-4">
          Formulario 1 y 2 que debe llenar durante el proceso de matrícula en
          página web del CETPRO
        </p>

        <p className="font-bold mb-4">
          Presentar copia legible del documento de identidad
        </p>

        <p className="font-bold">Foto actualizada del estudiante</p>
        <p className="mb-4">
          Foto recientemente tomada, con buena definición, sin cubrir partes del
          rostro
        </p>

        <p className="font-bold">Si el estudiante es menor de edad</p>
        <p>
          Su padre o el responsable legal del menor, debe presentar su documento
          de identidad y foto bajo las mismas condiciones del estudiante
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl max-sm:text-lg font-bold mb-2">
          REQUERIMIENTOS TÉCNICOS
        </h2>
        <p>El CETPRO Naciones Unidas emplea GOOGLE PARA ESCUELAS</p>
        <p>Se emplearán herramientas como:</p>
        <ul className="list-disc list-inside">
          <li>La plataforma de CLASSROOM.</li>
          <li>
            Para las sesiones síncronas, video conferencias, emplearemos MEET de
            GOOGLE
          </li>
          <li>
            Para la comunicación asíncrona, emplearemos el correo electrónico
            GMAIL.
          </li>
          <li>Para absolver consultas y en menor medida se emplea WHATSAPP.</li>
          <li>
            Requerirá una computadora (laptop o desktop) o un TELÉFONO CELULAR
            donde pueda instalar las aplicaciones de GMAIL, GOOGLE MEET y
            CLASSROOM, con acceso a internet.
          </li>
        </ul>
        <p>Su acceso a internet debe tener las siguientes características:</p>
        <ul className="list-disc list-inside">
          <li>
            Ancho de banda para usar google MEET, mínimo de 3Mbps, si la
            conexion baja a menos de 2Mbps puede participar en la conferencia
            solo con audio, sin video (la plataforma regula automáticamente).
          </li>
          <li>
            Para reproducir videos grabados de las clases (tipo youtube), mínimo
            2Mbps.
          </li>
          <li>
            Para abrir CLASSROOM o GMAIL requiere de aproximadamente 750Kb a
            1.5Mb, La descarga de los archivos adjuntos depende del tamaño del
            archivo, por ejemplo GMAIL permite adjuntar como máximo archivos de
            hasta 25Mb.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl max-sm:text-lg font-bold mb-2">COMPROMISO</h2>
        <p className="font-bold">GLOSARIO DE TÉRMINOS.</p>
        <p className="mb-4">
          <span className="font-semibold">Padre:</span> se define como tal al
          padre, madre, tutor o apoderado legal del estudiante si es menor de
          edad.
        </p>
        <p className="font-bold">DEL COMPROMISO</p>
        <p className="font-semibold mb-4">
          El estudiante al matricularse en los módulos y/o cursos brindados por
          la Institución Educativa Cetpro Naciones Unidas, se compromete y
          acepta lo siguiente:
        </p>
        <p>
          <span className="font-semibold">NÚMERO 1:</span> Poseer una copia
          digital o en otro formato del “Reglamento Interno Del Estudiante De La
          Institución Educativa Cetpro Naciones Unidas” y del presente
          compromiso.
        </p>
        <p>
          <span className="font-semibold">NÚMERO 2:</span> Acepto que me
          encuentro en condiciones de cumplir y que cumpliré con el Reglamento
          Interno Del Estudiante De La Institución Educativa Cetpro Naciones
          Unidas y con los los acuerdos de convivencia escolar (normas de
          convivencia) de la institución educativa.
        </p>
        <p>
          <span className="font-semibold">NÚMERO 3:</span> Me comprometo a
          realizar las acciones necesarias para el cumplimiento de la
          reglamentación mencionada en el presente documento.
        </p>
        <p>
          <span className="font-semibold">NÚMERO 4:</span> Acepto que me
          encuentro en condiciones de responder a las sanciones o medidas
          disciplinarias como resultado de las faltas cometidas, y las cumpliré
          como establece la reglamentación establecida.
        </p>
        <p>
          <span className="font-semibold">NÚMERO 5:</span> Acepto que he leído y
          mi matrícula confirma mi aceptación. Me comprometo a volver a leer y
          cumplir totalmente el contenido del “Reglamento Interno Del Estudiante
          De La Institución Educativa CETPRO Naciones Unidas” y del presente
          compromiso.
        </p>
        <p>
          <span className="font-semibold">NÚMERO 6:</span> Acepto que si el
          estudiante es menor de edad, yo como padre o responsable del
          estudiante legal del menor matriculado, cuyos datos he consignado al
          llenar el formulario de matrícula, autorizo la matrícula del menor
          cuyos datos se consignan en el formulario de matrícula.
        </p>
        <p>
          <span className="font-semibold">NÚMERO 7:</span> Acepto poseer una
          copia digital o en otro formato del “Reglamento Interno Del Estudiante
          De La Institución Educativa Cetpro Naciones Unidas” y del presente
          compromiso, ademá acepto y me comprometo a lo siguiente:
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl max-sm:text-lg font-bold mb-2">
          REGLAMENTO INTERNO DEL ESTUDIANTE DE LA INSTITUCIÓN EDUCATIVA CETPRO
          NACIONES UNIDAS
        </h2>

        <p className="font-bold mb-2">DEBERES DE LOS ESTUDIANTES</p>
        <ul className="list-asterisk list-inside mb-4">
          <li className="list-item">
            Respetar el horario de ingreso y/o salida de todas las actividades
            educativas programadas; así como participar en ellas.
          </li>
          <li className="list-item">
            Mantener el prestigio de la institución educativa, demostrar buena
            conducta y esmero en el estudio.
          </li>
          <li className="list-item">
            No realizar acciones que atenten contra la moral y buenas
            costumbres.
          </li>
          <li className="list-item">
            Tratar con cortesía y respeto a sus compañeros(as) y personal de la
            institución educativa cultivando el buen lenguaje, desterrando las
            expresiones vulgares.
          </li>
          <li className="list-item">
            Practicar los valores institucionales como parte de su formación
            integral y el paradigma institucional.
          </li>
          <li className="list-item">
            Respetar los acuerdos de convivencia escolar (normas de convivencia)
            y los compromisos pactados con la institución.
          </li>
        </ul>

        <p className="font-bold mb-2">FALTAS DE CARÁCTER DISCIPLINARIO</p>

        <p className="font-semibold">
          Todo tipo y forma de bullying. Quedando terminante prohibido todo acto
          que afecte a su o sus compañeros y/o familias, dentro y fuera de la
          institución educativa pudiendo manifestarse como:
        </p>
        <ol className="mb-4 list-lower-alpha list-inside">
          <li> Acciones de maltrato verbal, psicológico.</li>
          <li>
            Juegos que conlleven acciones de maltrato verbal o psicológico.
          </li>
          <li> Acciones que atenten contra su moral y buenas costumbres.</li>
          <li>
            Utilizar o grabar o exhibir, textos, imágenes o vídeos en medios de
            comunicación, internet, redes sociales, medios de comunicación,
            WhatsApp, Messenger, Facebook, en afiches, carteles, letreros; u
            otro medio, para expresar insultos y ofensas, denigrar, difamar,
            afectar el prestigio, de sus compañeros y/o familias.
          </li>
          <li>
            Fomentar, realizar rumores, injurias, ofensas, conflictos, chismes
            para desprestigiar, indisponer, difamar a su o sus compañeros.
          </li>
          <li>
            Intolerancia, denigración, discriminación a la diversidad, como por
            ejemplo por su nacionalidad, religión, discapacidad, diferencia
            sexual.
          </li>
          <li>
            Y otros, que indiquen faltas disciplinarias relacionadas a estos y
            no se detallan en estos items.
          </li>
        </ol>

        <p className="font-semibold">
          Todo tipo y forma de agresión física verbal o psicológica contra
          docentes o personal que labora en la institución educativa, que se
          realice dentro o fuera de la institución educativa. Quedando
          terminante prohibido todo acto que afecte a docentes o personal que
          labora en la institución educativa, sea dentro y fuera de la
          institución educativa pudiendo manifestarse como:
        </p>
        <ol className="mb-4 list-lower-alpha list-inside">
          <li> Acciones de maltrato verbal, psicológico.</li>

          <li> Evitar el desarrollo de las clases.</li>

          <li>Fomentar y/o practicar el desafío o desacato a la autoridad.</li>

          <li>
            Motivar la inasistencia o participación de sus compañeros a clases
          </li>

          <li>
            Juegos y acciones que atenten contra la buena imagen del docente o
            del personal de la institución educativa.
          </li>

          <li>
            Acciones que atenten contra la moral y buenas costumbres del
            personal docente o que labora en la institución educativa.
          </li>

          <li>
            Utilizar o grabar o exhibir, textos, imágenes o vídeos en medios de
            comunicación, internet, redes sociales, medios de comunicación,
            WhatsApp, Messenger, Facebook, en afiches, carteles, letreros; u
            otro medio, para expresar insultos y ofensas, denigrar, difamar,
            afectar el prestigio, del personal docente o del personal que labora
            en la institución educativa.
          </li>

          <li>
            Fomentar, realizar rumores, injurias, ofensas, conflictos, chismes,
            dentro del aula o institución educativa para desprestigiar,
            indisponer, difamar al personal docente o que labora en la
            institución educativa.
          </li>

          <li>
            Intolerancia, denigración, discriminación a la diversidad, como por
            ejemplo por su nacionalidad, religión, discapacidad, diferencia
            sexual, entre otros.
          </li>

          <li>
            Y otros, que indiquen faltas disciplinarias relacionadas a estos y
            no se detallan en estos items.
          </li>
        </ol>

        <p className="font-semibold">
          No respetar los acuerdos de convivencia escolar (normas de
          convivencia).
        </p>
        <ol className="mb-4 list-lower-alpha list-inside">
          <li>
            No integrar los comités de trabajo de la institución educativa.
          </li>

          <li>
            No respetar los acuerdos de las normas de convivencia, por el uso de
            ropa y prendas de vestir.
          </li>

          <li> Cometer actos de falta de respeto al docente.</li>

          <li>
            Y otros, que indiquen faltas disciplinarias relacionadas a estos y
            no se detallan en estos items.
          </li>
        </ol>

        <p className="font-semibold">
          No mantener permanencia educativa efectiva, de su labor educativa.
        </p>
        <ol className="mb-4 list-lower-alpha list-inside">
          <li>
            No respetar el horario de ingreso o salida de las actividades
            educativas programadas.
          </li>

          <li> Ingresar a otras aulas.</li>

          <li>
            No cumplir con trabajos, tareas y/o traer materiales y otros
            correspondientes al módulo ocupacional o de capacitación.
          </li>

          <li> Permanecer en el aula, sin cumplir con labores educativas.</li>

          <li>
            Y otros, que indiquen faltas disciplinarias relacionadas a estos y
            no se detallan en estos items.
          </li>
        </ol>

        <p className="font-semibold">
          La resistencia al cumplimiento de las órdenes de su docente o personal
          de la institución educativa, relacionadas a sus labores educativas,
          disciplinarias y/o de las normas de convivencia.
        </p>
        <ol className="mb-4 list-lower-alpha list-inside">
          <li>
            No cumplir con las tareas o trabajos asignados en el aula de clases,
            entre otras.
          </li>
          <li>
            Y otros, que indiquen faltas disciplinarias relacionadas a estos y
            no se detallan en estos items.
          </li>
        </ol>
      </section>
    </section>
  );
}

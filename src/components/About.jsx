import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola! soy Thomas, Desarrollador Full Stack
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            Naturalmente busco siempre mejores formas de hacer las cosas, estar
            en aprendizaje continuo y encarar nuevos desafíos. Como 
            profesional he transitado por varias verticales de mi carrera, como
            son: consultoría, preventa, proyectos, análisis de datos y helpdesk.
            Considero que mi background en técnología permite aportar a las
            organizaciones un conocimiento integral en cuanto al ciclo de vida
            de un producto, al igual que experiencia en el área de servicio al
            cliente tanto interno como externo.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Trabaja conmigo
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Mira mis trabajos anteriores
            </a>
          </div>
        </div>
        <div className="flex justify-evenly lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./me.png"
          />
        </div>
      </div>
    </section>
  );
}
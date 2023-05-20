import React, { useRef } from "react";
import Validate from "./Validate.js";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [errors, setErrors] = React.useState({
    name: "",
    message: "",
    email: "",
  });

  const [userMessage, setUserMessage] = React.useState({
    name: "",
    message: "",
    email: "",
  });

  function handleInputChange(evento) {
    setUserMessage({
      ...userMessage,
      [evento.target.name]: evento.target.value, // Sintaxis ES6 para actualizar la key correspondiente
    });

    setErrors(
      Validate({
        ...userMessage,
        [evento.target.name]: evento.target.value,
      })
    );
  }

  function handleSubmit(userMessage) {
    setErrors(Validate(userMessage));
    if (
      !errors.name &&
      !errors.email &&
      !errors.message &&
      userMessage.name &&
      userMessage.email &&
      userMessage.message
    ) {
      emailjs
        .sendForm(
          "service_bim7l3f",
          "template_4bzz2fb",
          form.current,
          "mErWn1VkP9JSz--5O"
        )
        .then(
          (result) => {
            window.alert("Message sent");
          },
          (error) => {
            window.alert(error.text);
          }
        );

      setUserMessage({
        name: "",
        message: "",
        email: "",
      });
      return true;
    }
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6067.744500462487!2d-3.676215700000006!3d40.500207900000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ses!4v1684527786976!5m2!1sen!2ses"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                DIRECCIÓN
              </h2>
              <p className="mt-1">
                Madrid. <br />
                España
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                CORREO ELECTRÓNICO
              </h2>
              <a
                href="mailto:tommynaquiche@hotmail.com"
                className="text-indigo-400 leading-relaxed"
              >
                tommynaquiche@hotmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                NÚMERO DE TELÉFONO
              </h2>
              <p className="leading-relaxed">+34 623526356</p>
            </div>
          </div>
        </div>
        <form
          ref={form}
          name="contact"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(userMessage);
            if (!errors.name && !errors.email && !errors.message)
              e.target.reset();
          }}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            ¡Contáctame!
          </h2>
          <p className="leading-relaxed mb-5">
            Envía un mensaje usando este formulario y te responderé en breve...
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleInputChange}
              placeholder="Tu nombre..."
            />
            <p style={{ fontSize: "15px", color: "red" }}>{errors.name}</p>
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={handleInputChange}
              placeholder="email@email.com"
            />
          </div>
          <p style={{ fontSize: "15px", color: "red" }}>{errors.email}</p>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={handleInputChange}
              placeholder="Dejame tu mensaje..."
            />
          </div>
          <p style={{ fontSize: "15px", color: "red" }}>{errors.message}</p>
          <button
            // disabled={errors.name || errors.email || errors.message || !userMessage.name
            //     || !userMessage.email || !userMessage.message ? true : false}
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

const validate = (form) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let errors = {};
    if(!form.name) errors.name = "Ingrese un nombre de usuario";
    if(!form.email) errors.email = "Ingrese su email"
    if(!form.message) errors.message = "Ingrese su mensaje"
    if(!regexEmail.test(form.email)) errors.email = "Ingrese un email válido"
    if(form.name.length < 3 || form.name.length > 40) errors.name = "Tu nombre de usuario debe tener entre 3 y 40 caracteres";
    if(form.message.length < 6) errors.message = "Tu mensaje debe contener al menos 6 caracteres"

    return errors;
};

export default validate;
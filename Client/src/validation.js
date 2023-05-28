export function validation(userdata) {
  const errors = {};

  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (!regexEmail.test(userdata.email)) {
    errors.e1 = "Debe ser un correo electrónico";
  }
  if (!userdata.email) {
    errors.e2 = "Se requiere un correo electrónico";
  }
  if (userdata.email.length > 35) {
    errors.e3 = "Se exceden los 35 caracteres";
  }
  if (!/\d+/.test(userdata.password)) {
    errors.p1 = "Password debe tener al menos un número";
  }
  if (userdata.password.length < 6 || userdata.password.length > 10) {
    errors.p2 = "Password debe tener entre 6 y 10 caracteres";
  }

  return errors;
}

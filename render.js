const usuarios = [];

const validateUser = (usuario) => {
    return usuario.match(
        /^[a-z0-9_-]{3,16}$/
    );
};

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateDate = (fecha) => {
    return fecha.match(
        /^\d{4}-\d{2}-\d{2}$/
    );
};

const validatePassWord = (clave) => {
    return clave.match(
        /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
    );
};

var form = document.getElementById('formRegistro');

var nombres = document.getElementById('iNombres');
var errNombres = document.getElementById('divErrNombres');


var fecha = document.getElementById('iFecha');
var errfecha = document.getElementById('divErrFecha');

var correo = document.getElementById('iCorreo');
var errCorreo = document.getElementById('divErrMail');

var contraseña = document.getElementById('iPassword');
var errContraseña = document.getElementById('divErrPassword');

var contraseña2 = document.getElementById('iPassword2');
var errContraseña2 = document.getElementById('divErrPassword2');


form.addEventListener('submit', (event) => {
    event.preventDefault()


    if (!validateUser(nombres.value)) {
        nombres.className = "form-control is-invalid"
        errNombres.className = "invalid-feedback d-block"
        return false;
    } else {
        nombres.className = "form-control is-valid"
        errNombres.className = "invalid-feedback"
    }


    if (!validateDate(fecha.value)) {
        fecha.className = "form-control is-invalid"
        errfecha.className = "invalid-feedback d-block"
        return false;
    } else {
        fecha.className = "form-control is-valid"
        errfecha.className = "invalid-feedback"
    }

    var ToDate = new Date();

    if (new Date(fecha.value).getTime() > ToDate.getTime()) {
        fecha.className = "form-control is-invalid"
        errfecha.innerHTML = "";
        errfecha.innerHTML = "La fecha ingresada no puede ser mayor a la fecha de hoy"
        errfecha.className = "invalid-feedback d-block"
        return false;
    }

    if (!validateEmail(correo.value)) {
        correo.className = "form-control is-invalid"
        divErrMail.className = "invalid-feedback d-block"
        return false;
    } else {
        correo.className = "form-control is-valid"
        divErrMail.className = "invalid-feedback"
    }

    if (!validatePassWord(contraseña.value)) {
        contraseña.className = "form-control is-invalid"
        errContraseña.className = "invalid-feedback d-block"
        return false;
    } else {

        contraseña.className = "form-control is-valid"
        errContraseña.className = "invalid-feedback"

    }

    if (!validatePassWord(contraseña2.value)) {
        contraseña2.className = "form-control is-invalid"
        errContraseña2.className = "invalid-feedback d-block"
        return false;
    } else {
        contraseña2.className = "form-control is-valid"
        errContraseña2.className = "invalid-feedback"
    }

    if (contraseña.value != contraseña2.value) {
        contraseña.className = "form-control is-invalid"
        errContraseña.className = "invalid-feedback"
        contraseña.value = "";
        contraseña2.className = "form-control is-invalid"
        errContraseña2.className = "invalid-feedback"
        contraseña2.value = "";
        alert('Las contraseñas no coinciden');
        return false;
    }


    const result = usuarios.filter((item) => item == nombres.value)

    if (result.length == 0) {
        usuarios.push(nombres.value);
        console.log(usuarios);
    } else {
        errNombres.innerHTML = "";
        errNombres.innerHTML = "Usuario ya ingresado";
        nombres.className = "form-control is-invalid"
        errNombres.className = "invalid-feedback d-block"
        return false;
    }



});
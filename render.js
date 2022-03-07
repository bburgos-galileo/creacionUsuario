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
    } else {
        nombres.className = "form-control is-valid"
        errNombres.className = "invalid-feedback"  
    }


    if (!validateDate(fecha.value)) {
        fecha.className = "form-control is-invalid"
        errfecha.className = "invalid-feedback d-block"
    } else {
        fecha.className = "form-control is-valid"
        errfecha.className = "invalid-feedback"
    }

    if (!validateEmail(correo.value)) {
        correo.className = "form-control is-invalid"
        divErrMail.className = "invalid-feedback d-block"
    } else {
        correo.className = "form-control is-valid"
        divErrMail.className = "invalid-feedback"
    }

    var validoClaves = 0;

    if (!validatePassWord(contraseña.value)) {
        contraseña.className = "form-control is-invalid"
        errContraseña.className = "invalid-feedback d-block"
    } else {

        contraseña.className = "form-control is-valid"
        errContraseña.className = "invalid-feedback"

        validoClaves = 1;

    }

    if (!validatePassWord(contraseña2.value)) {
        contraseña2.className = "form-control is-invalid"
        errContraseña2.className = "invalid-feedback d-block"
    } else {
        contraseña2.className = "form-control is-valid"
        errContraseña2.className = "invalid-feedback"

        validoClaves = 2;

    }

    if (validoClaves == 2) {
        if (contraseña.value != contraseña2.value) {
            contraseña.className = "form-control is-invalid"
            errContraseña.className = "invalid-feedback"
            contraseña.value = "";
            contraseña2.className = "form-control is-invalid"
            errContraseña2.className = "invalid-feedback"
            contraseña2.value = "";
            alert('Las contraseñas no coinciden');
        }
    }

});
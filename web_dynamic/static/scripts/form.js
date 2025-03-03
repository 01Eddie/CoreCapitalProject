const form = document.getElementById('form');
const username = document.getElementById('username');
const userlastname = document.getElementById('userlastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

// Show input error message
function showError (input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// jShow success outline
function showSuccess (input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail (input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, '* Email is not valid');
  }
}

// check required fields
function checkRequired (inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `* ${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check input length
function checkLength (input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `* ${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `* ${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords matche
function checkPasswordsMatch (input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, '* Password do not match');
  }
}

// Get fieldname
function getFieldName (input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// event listeners
form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, userlastname, email, phone]);
  // checkLength(username, 3, 15);
  // checkLength(password, 6, 20);
  checkEmail(email);
  // checkPasswordsMatch(password, password_confirmation);

  form.submit();

  // $.ajax({
  //      type: 'POST',
  //      url: './models.html',
  //      data: { nom: pnom, pass: ppass } // Datos que se envían
  //      }).done(function( msg ) {  // Función que se ejecuta si todo ha ido bien
  //       $("#consola").html(msg);  // Escribimos en el div consola el mensaje devuelto
  //      }).fail(function (jqXHR, textStatus, errorThrown){ // Función que se ejecuta si algo ha ido mal
  //      // Mostramos en consola el mensaje con el error que se ha producido
  //      $("#consola").html("The following error occured: "+ textStatus +" "+ errorThrown);
  //     });
});

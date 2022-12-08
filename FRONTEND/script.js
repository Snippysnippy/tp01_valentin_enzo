$("#validation").submit(function( event ) {
    event.preventDefault();

    let password = $("#password").val()
    let confirmationPwd = $("#confirmationPassword").val()

    if(password === confirmationPwd) {
        if(containsNumbers(password)) {
            alert("Le mot de passe et sa confirmation correspondent");
        }
        else {
            alert("Le mot de passe et sa confirmation correspondent, mais votre mot de passe ne remplit pas certains critères : aucun nombre");
        }
    }
    else {
        alert("Le mot de passe et sa confirmation ne correspondent pas");
    }
  });

  function containsNumbers(str) {
    return /\d/.test(str);
  }
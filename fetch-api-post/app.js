var formulario = document.getElementById('formulario');
var alerta = document.getElementById('respuesta');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    var datos = new FormData(formulario);

    console.log(datos.get('usuario'));


    fetch('post.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if (res === 'error') {
                alerta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Debe llenar todos los campos!
                </div>
                `
            } else {
                alerta.innerHTML = `<div class="alert alert-primary" role="alert">
                ${res}
            </div>`
            }

        })
});
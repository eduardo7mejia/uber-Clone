console.log("Iniciando...");
fetch("https://randomuser.me/api/?results=12")
    .then((resp) => resp.json())
    .then((data) => {
        let contenedorUsuarios = document.getElementById("contenedorUsuarios");
        let usuarios = data.results;
        console.log(contenedorUsuarios);
        // console.log(usuarios);
        // console.log("---");
        // for (let i = 0; i < usuarios.length; i++) {
        //     console.log(usuarios[i]);
        // }
        // console.log("---");
        // console.log("++");
        // for (const key in usuarios) {
        //     console.log(usuarios[key])
        // }
        contenedorUsuarios.innerHTML = "";
        //  elementos DOM
        let buscarUsuarios = document.getElementById("buscarUsuarios");
        function filtrar() {
            contenedorUsuarios.innerHTML = "";
            let termino = buscarUsuarios.value.toLowerCase();
            usuarios.forEach((usuario, indice) => {
                let name = usuario.name.first.toLowerCase();
                if (name.indexOf(termino) !== -1) {
                    contenedorUsuarios.innerHTML += `<div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                    <div class="card mb-3 shadow text-uppercase">
                        <img src="${usuario.picture.large}" class="card-img-top" alt="cover-${indice + 1}">
                        <div class="card-body">
                            <h5 class="card-title">${usuario.name.title}. ${usuario.name.first} ${usuario.name.last} </h5>
                            <p class="card-text">Ciudad: ${usuario.location.city}</p>
                            <a href="#" class="btn btn-primary ">ver Perfil</a>
                        </div>
                    </div>
                </div>`;
                }
            });
        }
        buscarUsuarios.addEventListener("keyup", filtrar);
        filtrar();
    })
    .catch((error) => console.error(error));

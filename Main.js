var boton = document.getElementById("boton");

function traer(){
    var dni= document.getElementById("dni").value;
    fetch(
        "https://apiperu.dev/api/dni/" +
        dni +
        "?api_token=39d0aece32bb7787bef6335fa3b80582846430698ff51195b9de9268b521f85f"
    )
    .then((res) => res.json())
    .then((data) =>{
        document.getElementById("doc").value = data.data.numero;
        document.getElementById("nombre").value = data.data.nombres;
        document.getElementById("apellido").value = data.data.apellido_paterno + " " + data.data.apellido_materno;
        document.getElementById("cui").value = data.cui;
    });
}
boton.addEventListener("click", traer);
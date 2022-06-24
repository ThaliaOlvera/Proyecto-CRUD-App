

const formulario = document.getElementById('formulario');

const inputDestino= document.getElementById('inputDestino');
const inputActividades= document.getElementById('inputActividades');
const inputPresupuesto= document.getElementById('inputPresupuesto');
const bodyTabla = document.getElementById('body-tabla');
let datos = [];

function agregarDatos (destino, actividades, presupuesto){
       datos.push({
        destino,
        actividades: actividades,
        presupuesto: presupuesto,
       })
}





function eliminarDatos (indice) {
            datos.splice(indice, 1)
            mostrarDatos ();
}




function mostrarDatos (){
    bodyTabla.innerHTML = '';
    datos.forEach(function (dato, indice){
        bodyTabla.innerHTML += `<tr>
        <th scope="row"> ${indice + 1} </th>
       <td> ${dato.destino } </td>
       <td> ${dato.actividades } </td>
       <td> ${dato.presupuesto } </td>
       <td>
       
       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick= "editarDatos(${indice})">editar</button> 
       <button class="btn btn-danger" onclick= "eliminarDatos(${indice})">eliminar</button>  
       </td>
     </tr>`
    })
    guardarDatosStorage ();
}





function editarDatos(indice){
    datos[indice].destino = prompt('Ingresa Destino.');
    datos[indice].actividades = prompt('Ingresa Actividades.');
    datos[indice].presupuesto = prompt('Ingresa Presupuesto.');
    mostrarDatos();
}






formulario.addEventListener('submit', function(Event){
    Event.preventDefault();
    
    if (inputDestino.value.trim !== '' && inputActividades.value.trim !== '' && inputPresupuesto.value !== '')
   {
       bodyTabla.innerHTML= '';

       agregarDatos(inputDestino.value, inputActividades.value, inputPresupuesto.value );

       mostrarDatos (); 

       
       Event.target.reset();
    } else {
        alert('Los 3 campos son obligatorios');
    }
    
});


  mostrarDatos();
  
  



  function guardarDatosStorage (){
      const datosGuardar = JSON.stringify (datos);
      localStorage.setItem ('datos', datosGuardar);
  }



  function obtenerDatosStorage () {
    const datosStorage = localStorage.getItem('datos');
 
    datos = datosStorage == null? [] : JSON.parse (datosStorage);
  }




  obtenerDatosStorage();
  mostrarDatos ();

  

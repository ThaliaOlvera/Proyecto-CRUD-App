

const formulario = document.getElementById('formulario');

const inputDestino= document.getElementById('inputDestino');
const inputActividades= document.getElementById('inputActividades');
const inputPresupuesto= document.getElementById('inputPresupuesto');
const inputNumeroDePersona= document.getElementById('inputNumeroDePersona');
const inputEdoDelPresupuesto= document.getElementById('inputEdoDelPresupuesto');
const inputFecha= document.getElementById('inputFecha');

const bodyTabla = document.getElementById('body-tabla');
let datos = [];

function agregarDatos (destino, actividades, presupuesto, numeroDePersonas, edoDelPresupuesto, fecha ){
       datos.push({
        destino,
        actividades: actividades,
        presupuesto: presupuesto,
        numeroDePersonas: numeroDePersonas,
        edoDelPresupuesto: edoDelPresupuesto,
        fecha:fecha
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
       <td> ${dato.numeroDePersonas } </td>
       <td> ${dato.edoDelPresupuesto } </td>
       <td> ${dato.fecha } </td>
       <td>
       
       <button type="button" class="btn btn-primary" onclick= "editarDatos(${indice})">editar</button> 
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

/* pendiente añadir un formulario de edicion*/




formulario.addEventListener('submit', function(Event){
    Event.preventDefault();
    
    if (inputDestino.value.trim !== '' && inputActividades.value.trim !== '' && inputPresupuesto.value !== ' ' && inputNumeroDePersonas.value !== '' && inputEdoDelPresupuesto.value !== ''&& inputFecha.value !=='')
   {
       bodyTabla.innerHTML= '';

       agregarDatos(inputDestino.value, inputActividades.value, inputPresupuesto.value, inputNumeroDePersonas.value, inputEdoDelPresupuesto.value, inputFecha.value );

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

  

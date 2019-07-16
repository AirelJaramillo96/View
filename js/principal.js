var app = new Vue({
    el: '#app', /*identificador */
    data : { /*variables*/
        lista : [
            
        ],
        nombre: '',
        promedio: '',

    },
    methods: {
        agregarNota: function (){ /*funcion para guardar los datos de los promedios si el promedio, que 
            recogimos en el index es mayor a 12.5 entonces esta aprobado. Esta funcion se activa al presionar
            el boton "Guardar" */
            estadoA=false;
            if(this.promedio>=12.5){
                estadoA=true;
            }
            if(this.nombre!="" && this.promedio!=""){ /**Proceso en el que se guardan los valores en la lista
                 */
                this.lista.push({nombre:this.nombre, promedio:this.promedio, estado:estadoA});
                this.nombre="";
                this.promedio="";
            }
            else{
                alert("Ingrese el nombre y promedio del estudiante") /*Comprobamos que no haya espacios en 
                blanco */
            }
        }
    },
})
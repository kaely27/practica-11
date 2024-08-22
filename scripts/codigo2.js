class CuentaFb{
    constructor(nombreUsuario){
        let usuario = nombreUsuario; //propiedad privada 

        this.getUsuario = function(){
            return usuario;
        }

        this.setUsuario = function(nombreNuevo){
            usuario = nombreNuevo;
            
        }
    }
   
}
const miCuenta = new CuentaFb("kaely"); 
console.log(miCuenta.getUsuario());
miCuenta.setUsuario("Paquito");
console.log(miCuenta.getUsuario());

//agregar pripiedad cumpleaños, contraseña, lista de amigos, getter y setter de todas las propiedades 
//para la lista de amigos solo el metodo getter pero el setter no.
//metodo agregar nuevo amigo
//(metodos pop y push). 
// metodo de eliminar amigo por nombre +1 
// clase y metodo constructor (5 propiedades getter y stters 3 funcionalidades) +1

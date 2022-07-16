let bienvenida = alert("Bienvenidos a IPdreams, estamos para cumplir tus sueños!");



//Registro

function registroUsuario() {
    return prompt("Cree un nombre de usuario para poder continuar:")
}

function registroContraseña() {
    return prompt("Ingrese una contraseña para finalizar:")
}

let usuarioRegistrado = registroUsuario();
let contraseñaRegistrada = registroContraseña();
alert("Bienvenido/a " + usuarioRegistrado + " usted se ha registrado correctamente!")

//Inicio de sesion

function login(usuarioRegistrado, contraseñaRegistrada) {
    let usuario = prompt("Inicie sesion ingresando su nombre de usuario:")
    let contraseña = prompt("Ingrese su contraseña:")

    while(usuario !== usuarioRegistrado || contraseña !== contraseñaRegistrada) {
        alert("Usted ha ingresado un usuario y/o contraseña invalida, por favor, intente nuevamente.")
        login();
    }
    alert("Hola! que tengas una linda experiencia " + usuarioRegistrado)
}

login(usuarioRegistrado, contraseñaRegistrada)



//Pasajes

const pasajes = [ 
    {id: 1, nombre: "Barcelona", precio: 150000},
    {id: 2, nombre: "Londres", precio: 195000},
    {id: 3, nombre: "Bariloche", precio: 90000},
    {id: 4, nombre: "Dubai", precio: 250000},
    {id: 5, nombre: "Seul", precio: 265000},
    {id: 6, nombre: "Tokyo", precio: 265000},
    {id: 7, nombre: "Madrid", precio: 90000},
    {id: 8, nombre: "New York", precio: 110000},
    {id: 9, nombre: "Cancun", precio: 120000}
   ]

//Hospedajes

const hospedajes = [ 
    {id: 1, nombre: "Queen Hotel (Barcelona)", precio: 15000},
    {id: 2, nombre: "Tea Tree Hotel (Londres)", precio: 18000},
    {id: 3, nombre: "Hotel Realeza (Bariloche)", precio: 8000},
    {id: 4, nombre: "Passarela Hotel (Dubai)", precio: 28000},
    {id: 5, nombre: "Oz Resort (Seul)", precio: 20000},
    {id: 6, nombre: "Candel Resort (Tokyo)", precio: 15000},
    {id: 7, nombre: "Hotel el Bosque (Madrid)", precio: 15000},
    {id: 8, nombre: "Glamho Hotel (New York)", precio: 22000},
    {id: 9, nombre: "La Reina Hotel (Cancun)", precio: 24000}
   ]


//armar paquete con pasajes y hospedajes 

const paquete = [];

function acumulacionPasajesHospedajes() {
    let entrada = prompt("A continuación, selecciona tu pasaje y arma tu paquete!  \n 1 - Barcelona - 150000 ARS \n 2 - Londres - 195000 ARS \n 3 - Bariloche - 90000 ARS \n 4 - Dubai - 250000 ARS \n 5 - Seul - 265000 ARS \n 6 - Tokyo - 265000 ARS \n 7 - Madrid -90000 ARS \n 8 - New York - 110000 ARS \n 9 - Cancun - 120000 ARS"); 

        switch(entrada) {
            case "1": 
                paquete.push(pasajes[0]) 
                let hospedaje = prompt("¿Desea agregar hospedaje Queen Hotel(Barcelona) a su paquete? \n 1 - Si \n 2 - No o simplemente continuar") 
                
                    if(hospedaje === 1) {
                        paquete.push(hospedajes[0])
                        abonarCompra(); 
                    } else {
                        abonarCompra();
                    }
            break;        
            case "2":
                paquete.push(pasajes[1]) 
                let hospedaje2 = prompt("¿Desea agregar hospedaje Tea Tree Hotel(Londres) a su paquete? \n 1 - Si \n 2 - No o simplemente continuar")
               
                    if(hospedaje2 === 1) {
                        paquete.push(hospedajes[1])
                        abonarCompra(); 
                    } else {
                        abonarCompra();
                    }
            break;            
            case "3":
                paquete.push(pasajes[2])
                let hospedaje3 = prompt("¿Desea agregar hospedaje Hotel Realeza(Bariloche) a su paquete? \n 1 - Si \n 2 - No o simplemente continuar") 
                if(hospedaje3 === 1) {
                    paquete.push(hospedajes[2])
                    abonarCompra(); 
                } else {
                    abonarCompra();
                }
                
            break;

            case "4":
                paquete.push(pasajes[3])
                let hospedaje4 = prompt("¿Desea agregar hospedaje Passarela Hotel(Dubai) a su paquete? \n 1 - Si \n 2 - No o simplemente continuar") 
                if(hospedaje4 === 1) {
                    paquete.push(hospedajes[3])
                    abonarCompra(); 
                } else {
                    abonarCompra();
                }
            break; 

            case "5":
                paquete.push(pasajes[4])
                let hospedaje5 = prompt("¿Desea agregar hospedaje Oz Resort(Seul) a su paquete? \n 1 - Si \n 2 - No o simplemente continuar")
                if(hospedaje5 === 1) {
                    paquete.push(hospedajes[4])
                    abonarCompra(); 
                } else {
                    abonarCompra();
                }
            break; 

            case "6":
                paquete.push(pasajes[5])
                let hospedaje6 = prompt("¿Desea agregar hospedaje Candel Resort(Tokyo) a su paquete? \n 1 - Si \n 2 - No o simplemente continuar")
                if(hospedaje6 === 1) {
                    paquete.push(hospedajes[5])
                    abonarCompra(); 
                } else {
                    abonarCompra();
                }
            break;  

            case "7":
                paquete.push(pasajes[6])
                let hospedaje7 = prompt("¿Desea agregar hospedaje Hotel el Bosque(Madrid) a su paquete? \n 1 - Si \n 2 - No o simplemente continuar")
                if(hospedaje7 === 1) {
                    paquete.push(hospedajes[6])
                    abonarCompra(); 
                } else {
                    abonarCompra();
                }
            break;

            case "8":
                paquete.push(pasajes[7])
                let hospedaje8 = prompt("¿Desea agregar hospedaje Glamho Hotel(New York) a su paquete? \n 1 - Si \n 2 - No o simplemente continuar")
                if(hospedaje8 === 1) {
                    paquete.push(hospedajes[7])
                    abonarCompra(); 
                } else {
                    abonarCompra();
                }
            break; 

            case "9":
                paquete.push(pasajes[8])
                let hospedaje9 = prompt("¿Desea agregar hospedaje La Reina Hotel(Cancun) a su paquete? \n 1 - Si \n 2 - No o simplemente continuar")
                if(hospedaje9 === 1) {
                    paquete.push(hospedajes[8])
                    abonarCompra(); 
                } else {
                    abonarCompra();
                }
            break;

            default:
                alert("Opcion invalida");
            break;          
        }
}    

    acumulacionPasajesHospedajes();

//suma de pasaje + hospedaje 

function abonarCompra() {
    let total = paquete.reduce((acumulador,item) => acumulador + item.precio,0);
    let pagar = prompt("¿Como desea abonar? \n 1- Tarjeta de Credito \n 2- Transferencia o Efectivo(Descuento del 10%)")

    switch(pagar) {
        case "1": {
            alert("El monto total es de " + total + " gracias por su compra! A continuacion le imprimiremos su pasaje")
        }break;
        case "2": {
            total = total * 0.90;
            alert("El monto total es de " + total + " gracias por su compra! A continuacion le imprimiremos su pasaje")
        }break;
        default: {
          alert("Opcion invalida")
        }
    }

    for(let item of paquete) {
        alert("Pasaje a: \n" + item.nombre + "\n" + total)
    }

    let consulta = prompt("¿Desea agregar otro viaje a su paquete de compras? \n 1- Si \n 2- No o continuar")
    if(consulta === 1) {
        acumulacionPasajesHospedajes();
    } else {
        alert("Proceso de compra finalizado, muchas gracias! :)")
    }
}

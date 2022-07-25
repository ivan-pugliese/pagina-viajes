//Evento de Incio de sesion

let login = document.getElementById('iniciar-sesion');

login.addEventListener('click', loggear) 

function loggear() {
    document.querySelector('#formulario-login-contenedor').style.display = 'flex';
}

//Evento de Registro

let registro = document.getElementById('registrarse');

registro.addEventListener('click', registrar) 

function registrar() {
    document.querySelector('#formulario-registro-contenedor').style.display = 'flex';
}


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

function pasajeBarcelona() {

    paquete.push(pasajes[0])

    let entrada = prompt("Usted a seleccionado pasaje a Barcelona (ida y vuelta), desea agregar hospedaje Queen Hotel (Barcelona) a su paquete? \n 1 - Si \n 2 - No ")

        if(entrada === "1") {
        paquete.push(hospedajes[0])
        abonarCompra() 
        } else if(entrada === "2") {
        alert("Usted a seleccionado unicamente los pasajes!")
        abonarCompra() 
        } else {
        alert("Opcion invalida")
        }
}
//Evento de alert para armar pasaje

let barcelona = document.getElementById('pasaje-barcelona');

barcelona.addEventListener('click', pasajeBarcelona);





function pasajeLondres() {

    paquete.push(pasajes[1])

    let entrada = prompt("Usted a seleccionado pasaje a Londres (ida y vuelta), desea agregar hospedaje Tea Tree Hotel (Londres) a su paquete? \n 1 - Si \n 2 - No ")
   
       if(entrada === "1") {
       paquete.push(hospedajes[1])
       abonarCompra() 
       } else if(entrada === "2") {
       alert("Usted a seleccionado unicamente los pasajes!")
       abonarCompra() 
       } else {
       alert("Opcion invalida")
       }
}
//Evento de alert para armar pasaje

let londres = document.getElementById('pasaje-londres');

londres.addEventListener('click',  pasajeLondres)





function pasajeBariloche() {

    paquete.push(pasajes[2])

    let entrada = prompt("Usted a seleccionado pasaje a Bariloche (ida y vuelta), desea agregar hospedaje Hotel Realeza (Bariloche) a su paquete? \n 1 - Si \n 2 - No ")
   
       if(entrada === "1") {
       paquete.push(hospedajes[2])
       abonarCompra() 
       } else if(entrada === "2") {
       alert("Usted a seleccionado unicamente los pasajes!")
       abonarCompra() 
       } else {
       alert("Opcion invalida")
       }
}
//Evento de alert para armar pasaje

let bariloche = document.getElementById('pasaje-bariloche');

bariloche.addEventListener('click',  pasajeBariloche)





function pasajeDubai() {

    paquete.push(pasajes[3])

    let entrada = prompt("Usted a seleccionado pasaje a Dubai (ida y vuelta), desea agregar hospedaje Passarela Hotel (Dubai) a su paquete? \n 1 - Si \n 2 - No ")
   
       if(entrada === "1") {
       paquete.push(hospedajes[3])
       abonarCompra() 
       } else if(entrada === "2") {
       alert("Usted a seleccionado unicamente los pasajes!")
       abonarCompra() 
       } else {
       alert("Opcion invalida")
       }
}

//Evento de alert para armar pasaje

let dubai = document.getElementById('pasaje-dubai');

dubai.addEventListener('click',  pasajeDubai)



   
function pasajeSeul() {

    paquete.push(pasajes[4])

    let entrada = prompt("Usted a seleccionado pasaje a Seul (ida y vuelta), desea agregar hospedaje Oz Resort (Seul) a su paquete? \n 1 - Si \n 2 - No ")
   
       if(entrada === "1") {
       paquete.push(hospedajes[4])
       abonarCompra() 
       } else if(entrada === "2") {
       alert("Usted a seleccionado unicamente los pasajes!")
       abonarCompra() 
       } else {
       alert("Opcion invalida")
       }
}

//Evento de alert para armar pasaje

let seul = document.getElementById('pasaje-seul');

seul.addEventListener('click',  pasajeSeul)





function pasajeTokyo() {

    paquete.push(pasajes[5])

    let entrada = prompt("Usted a seleccionado pasaje a Tokyo (ida y vuelta), desea agregar hospedaje Candel Resort (Tokyo) a su paquete? \n 1 - Si \n 2 - No ")
   
       if(entrada === "1") {
       paquete.push(hospedajes[5])
       abonarCompra() 
       } else if(entrada === "2") {
       alert("Usted a seleccionado unicamente los pasajes!")
       abonarCompra() 
       } else {
       alert("Opcion invalida")
       }
}

//Evento de alert para armar pasaje

let tokyo = document.getElementById('pasaje-tokyo');

tokyo.addEventListener('click',  pasajeTokyo)





function pasajeMadrid() {

    paquete.push(pasajes[6])

    let entrada = prompt("Usted a seleccionado pasaje a Madrid (ida y vuelta), desea agregar hospedaje Hotel el Bosque (Madrid) a su paquete? \n 1 - Si \n 2 - No ")
   
       if(entrada === "1") {
       paquete.push(hospedajes[6])
       abonarCompra() 
       } else if(entrada === "2") {
       alert("Usted a seleccionado unicamente los pasajes!")
       abonarCompra() 
       } else {
       alert("Opcion invalida")
       }
}

//Evento de alert para armar pasaje

let madrid = document.getElementById('pasaje-madrid');

madrid.addEventListener('click',  pasajeMadrid)





function pasajeNewYork() {

    paquete.push(pasajes[7])

    let entrada = prompt("Usted a seleccionado pasaje a New York (ida y vuelta), desea agregar hospedaje Gramho Hotel (New York) a su paquete? \n 1 - Si \n 2 - No ")
   
       if(entrada === "1") {
       paquete.push(hospedajes[7])
       abonarCompra() 
       } else if(entrada === "2") {
       alert("Usted a seleccionado unicamente los pasajes!")
       abonarCompra() 
       } else {
       alert("Opcion invalida")
       }
}

//Evento de alert para armar pasaje

let newYork = document.getElementById('pasaje-newyork');

newYork.addEventListener('click',  pasajeNewYork)





function pasajeCancun() {

    paquete.push(pasajes[8])

    let entrada = prompt("Usted a seleccionado pasaje a Cancun (ida y vuelta), desea agregar hospedaje La Reina Hotel (Cancún) a su paquete? \n 1 - Si \n 2 - No ")
   
       if(entrada === "1") {
       paquete.push(hospedajes[8])
       abonarCompra() 
       } else if(entrada === "2") {
       alert("Usted a seleccionado unicamente los pasajes!")
       abonarCompra() 
       } else {
       alert("Opcion invalida")
       }
}

//Evento de alert para armar pasaje

let cancun = document.getElementById('pasaje-cancun');

cancun.addEventListener('click',  pasajeCancun)





//suma de pasaje + hospedaje  

function abonarCompra() {
    let total = paquete.reduce((acumulador,item) => acumulador + item.precio,0);
    let pagar = prompt("¿Como desea abonar? \n 1- Tarjeta de Credito \n 2- Transferencia o Efectivo(Descuento del 10%)")

    switch(pagar) {
        case "1": 
            total = total * 1.21;
            alert("El monto total es de " + total + " con impuestos IVA incluidos, gracias por su compra! A continuacion le imprimiremos su pasaje")
            break;
        case "2": 
            total = total * 0.90;
            alert("El monto total es de " + total + " con impuestos IVA incluidos, gracias por su compra! A continuacion le imprimiremos su pasaje")
            break;
        default: 
          alert("Opcion invalida")
    }

    for(let item of paquete) {
        alert("Pasaje a: \n" + item.nombre + "\n" + total)
    }

    consultaFinal();
}



function consultaFinal() {
    let consulta = prompt("¿Desea agregar otro viaje a su paquete de compras? \n 1- Si \n 2- No o continuar")
    if(consulta === "1") {
        acumulacionPasajesHospedajes();
    } else if(consulta === "2"){
        alert("Proceso de compra finalizado, muchas gracias! :)")
    } else {
        alert("Opcion invalida")
    }
}  












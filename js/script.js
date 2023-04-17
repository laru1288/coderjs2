let productos = [];
productos.push (new Producto("1","Cafe colombiano 1k","1500","cafe","4", "./img/cafecolombiano.webp", "Cafe colombiano de primera calidad. Presentación 1 kilo."));
productos.push (new Producto("2","Cafe colombiano 1/2k","800","cafe","2", "./img/cafecolombiano.webp","Cafe colombiano de primera calidad. Presentación 1/2 kilo."));
productos.push (new Producto("3","Cafe italiano 1k","1600","cafe","2", "./img/cafeitaliano.webp","Cafe italiano de primera calidad. Presentación 1 kilo."));
productos.push (new Producto("4","Cafe italiano 1/2k","900","cafe","3", "./img/cafeitaliano.webp","Cafe italiano de primera calidad. Presentación 1/2 kilo."));
productos.push (new Producto("5","Blend cafe 1k","2000","cafe","1", "./img/cafeblend.webp","El mas exquisito blend de cafe. Presentacion 1 kilo"));
productos.push (new Producto("6","Blend cafe 1/2k","1200","cafe","3", "./img/cafeblend.webp","El mas exquisito blend de cafe. Presentacion 1/2 kilo"));
productos.push (new Producto("7","Taza especial","2500","accesorios","1", "./img/taza.webp", "Taza especial, la taza mas linda que vas a ver en tu vida, capacidad: 300ml."));
productos.push (new Producto("8","Azucar en cubos","500","extras","2", "./img/azucar.webp", "Cubos de azucar, presentacion ideal para usar la medida justa y ademas son re instagrameables! Presentacion de 1/2 kilo."));
productos.push (new Producto("9","Cuchara fancy","600","accesorios","2", "./img/cuchara.webp", "Ningun cafe esta completo sin esta cuchara."));
productos.push (new Producto("10","Amarettis","400","extras","3", "./img/amaretti.webp", "Mini galletitas de almendra, las mas ricas para acompañar tu cafe. Presentacion de 250gm."));

let carrito = [];

/*
function listar (prods){
    return prods.map(prods => {
        return `Id: ${prods.id}, nombre: ${prods.nombre}, precio: ${prods.precio}, categoria: ${prods.categoria}, cantidad: ${prods.cant}`
    }).join("\n");
};

function agregar (prods, carrito){
    let idProd;
    let buscado; 
    let otro;
    do{
        idProd = prompt (listar(prods) +"\nIngrese el id del producto que desea agregar");
        buscado = prods.find(producto => producto.id === idProd);
        if (buscado) {
            carrito.push (buscado);
            alert ("Agregado con exito!");
        }else{
            alert("El id ingresado no existe");
        }
    
        otro = prompt("Desea agregar otro producto al carrito? S/N");
    } while (otro == "s" || otro == "S");

};


function filtrar (prods){
    let cat = prompt("Ingrese la categoria:").toLowerCase();
    let filtrado = prods.filter(prods => prods.categoria === cat);

    if (filtrado.length >0){
        alert(listar(filtrado));
    }else{
        alert("No vendemos "+ cat);
    }
};

function ordenar (prods){
    let orden = prompt("Ingrese A para ordenar de manera ascendente y D para ordenar de manera descendente");
    if (orden == "a" || orden == "A"){
        prods.sort((a,b)=>a.precio-b.precio);
        alert(listar(prods));
    }else {if (orden == "d" || orden == "D"){
        prods.sort((a,b)=>b.precio-a.precio);
        alert(listar(prods));
    }else{
        alert("Opcion no valida");
    }}
};

function azar(prods){
    let cual = Math.round(Math.random()*10);
    let este = prods.filter((p)=> p.id==cual);
    alert(listar(este));
};

let menu = "Ingrese la opcion deseada: \n1-Ver productos\n2-Agregar productos al carrito\n3-Filtrar por categoria\n4-Ver mi carrito \n5-Ordenar productos por precio \n6-Quiero ver un producto al azar!!!\n0-Salir";
let opcion;

do{
    opcion = Number(prompt(menu));
    
    switch (opcion) {
        case 1:
            alert(listar(productos));
            break;
        case 2:
            agregar(productos, carrito); 
            break;
        case 3:
            filtrar(productos);
            break;
        case 4:
            alert(listar(carrito));
            break;
        case 5:
            ordenar(productos);
            break;
        case 6:
            azar(productos);
            break;
        default:
             if (opcion != 0){
                alert("opcion invalida");
             }
            break;
    }

}while (opcion != 0);
*/




function cargarProd (productos){
let contenedor = document.getElementById("contenedorProds");
contenedor.innerHTML = "";
productos.forEach(producto=>{
    let carProd = document.createElement("div");
    carProd.className = "cardProd card col-lg-3 col-md-6 col-12";
    

    carProd.innerHTML = `
        <div class="card-body">
        <h3 class="card-title">${producto.nombre}</h3>
        <img src=${producto.img} class="card-img-top">
        <p>${producto.categoria}</p>
        <p class="card-text">${producto.desc}</p>
        <h4>Precio: $${producto.precio}</h4>
        <button id=${producto.id}>Agregar al carrito</button>
        </div>
    `

    contenedor.appendChild(carProd);
    let btnAgregar=document.getElementById(producto.id);
    btnAgregar.addEventListener("click", agregar);
})
}


function filtrar(){
    let aFiltrado = productos.filter(producto => producto.nombre.toLowerCase().includes(buscar.value.toLowerCase()));
    cargarProd(aFiltrado);
}


function agregar(e) {
    let buscado = productos.find(producto => producto.id === Number(e.target.id));
    if (carrito.some(producto => producto.id == buscado.id)) {
        let pos = carrito.findIndex(producto => producto.id == buscado.id);
        carrito[pos].cant++;
        carrito[pos].subtotal = carrito[pos].precio * carrito[pos].cant;
        alert("otro agregado");
    }else{
    carrito.push({
        id: buscado.id,
        nombre: buscado.nombre,
        precio: buscado.precio,
        unidades: 1,
        subtotal: buscado.precio
    }
    );
    alert("agregado");
}

localStorage.setItem("carrito", JSON.stringify(carrito));
cargarCarrito(carrito);
}

function cargarCarrito(aProds) {
    carritoDOM.innerHTML = "";
    aProds.forEach(producto => {
        carritoDOM.innerHTML += `<h3>${producto.nombre} ${producto.precio} ${producto.unidades} ${producto.subtotal} </h3>`
    })
}

function comprar() {
    alert("Compra finalizada con exito!");
    localStorage.removeItem("carrito");
    carrito = [];
    cargarCarrito(carrito);
}
 
let carritoDOM = document.getElementById("carrito");
let btnComprar = document.getElementById("comprar");
btnComprar.addEventListener("click", comprar);

if(localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage,getItem("carrito"));
    cargarCarrito(carrito);
}

cargarProd(productos);

let buscar =document.getElementById("buscar");
buscar.addEventListener("input", filtrar);
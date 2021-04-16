let carrito = []
let listaProductos = document.getElementById("listaProductos");
let listaCompras = document.getElementById("listaCompras");
let btnCompra = document.getElementById("btnCompra");

//Cambiar la primera letra de cada producto a mayuscula
productos = productos.map(element => {
    return {
        nombre: element.nombre.charAt(0).toUpperCase() + element.nombre.slice(1),
        precio: element.precio
    }
});

//Creamos lista de productos
productos.forEach( unItem => {
    let li = document.createElement("li");
    li.textContent = unItem.nombre + " " + unItem.precio + "$";
    listaProductos.appendChild(li);
    li.className = "li-item";
})

//Guardamos los productos de la lista
let listItem = document.querySelectorAll(".li-item");

//Agregamos cada producto al carrito al clickear en el
listItem.forEach( element => {
    element.addEventListener("click", () => {
        carrito.push(element.innerHTML);
        element.remove();

        //Creamos lista de compras cada vez que se clickea un producto.
        let li = document.createElement("li");
        li.textContent = element.innerHTML
        listaCompras.appendChild(li);
    })
})

//Calcular total de la compra y mostrarlo
btnCompra.addEventListener("click", () => {
    let total = 0;
    for (let i = 0; i < carrito.length; i++)
    {
        for (let j = 0; j < productos.length; j++)
        {
            if (carrito[i] == productos[j].nombre)
            {
                total = total + productos[j].precio;
            }
        }
    }
    
    //Agregar h1 con el precio final de la compra
    let precioFinal = document.createElement("h1");
    precioFinal.innerText = "Total de la compra: " + total + "$";
    document.body.appendChild(precioFinal);

    //Elimino lista de productos y boton
    listItem.forEach(element => {
        element.remove();
    })

    btnCompra.remove();

});
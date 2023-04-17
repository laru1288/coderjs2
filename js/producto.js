class Producto {
    constructor (id, nombre, precio, categoria, cant, img, desc) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
        this.cant = parseInt(cant);
        this.img = img;
        this.desc = desc;
    }

}
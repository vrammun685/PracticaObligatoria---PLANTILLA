class Producto {
    #idProducto;
    #nombreProducto;
    #precioUnidad;
    #idCategoria;

    constructor(idProducto, nombreProducto, precioUnidad, idCategoria) {
        this.#idProducto = idProducto;
        this.#nombreProducto = nombreProducto;
        this.#precioUnidad = precioUnidad;
        this.#idCategoria = idCategoria;
    }

    /* idProducto */
    get idProducto() {
        return this.#idProducto;
    }
    set idProducto(value) {
        this.#idProducto = value;
    }

    /* nombreProducto */
    get nombreProducto() {
        return this.#nombreProducto;
    }
    set nombreProducto(value) {
        this.#nombreProducto = value;
    }

    /* precioUnidad */
    get precioUnidad() {
        return this.#precioUnidad;
    }
    set precioUnidad(value) {
        this.#precioUnidad = value;
    }

    /* idCategoria */
    get idCategoria() {
        return this.#idCategoria;
    }
    set idCategoria(value) {
        this.#idCategoria = value;
    }
}

class Catalogo {
    #productos;

    constructor() {
        this.#productos = [];
    }

    /* productos*/
    get productos() {
        return this.#productos;
    }
    set productos(value) {
        this.#productos = value;
    }

    addProducto(idProducto, nombreProducto, precioUnidad, idCategoria) {
        const productoExistente = this.#productos.find(producto => producto.idProducto === idProducto);
    
        if (productoExistente) {
            return "Producto ya añadido";
        }
    
        const p1 = new Producto(idProducto, nombreProducto, precioUnidad, idCategoria);
        this.#productos.push(p1);
        return "Producto añadido correctamente";
    }
    
}


class LineaCuenta {
    #unidades;
    #idProducto;

    constructor(unidades, idProducto) {
        this.#idProducto = idProducto;
        this.#unidades = unidades;
    }

    /* idProducto */
    get idProducto() {
        return this.#idProducto;
    }
    set idProducto(value) {
        this.#idProducto = value;
    }

    /* unidades */
    get unidades() {
        return this.#unidades;
    }
    set unidades(value) {
        this.#unidades = value;
    }
}


class Cuenta{
    #mesa;
    #lineasDeCuentas;
    #pagada;

    constructor (mesa, pagada){
        this.#mesa= mesa
        this.#lineasDeCuentas = []
        this.#pagada = pagada
    }

    get pagada() {
        return this.#pagada;
    }
    set pagada(value) {
        this.#pagada = value;
    }
    get lineasDeCuentas() {
        return this.#lineasDeCuentas;
    }
    set lineasDeCuentas(value) {
        this.#lineasDeCuentas = value;
    }
    
    get mesa() {
        return this.#mesa;
    }
    set mesa(value) {
        this.#mesa = value;
    } 
}

class Gestor{
    #cuentas;
    #mesaActual;

    constructor(){
        this.#mesaActual =  1;
        this.#cuentas = [];
    }

    get cuentas() {
        return this.#cuentas;
    }
    set cuentas(value) {
        this.#cuentas = value;
    }
    
    get mesaActual() {
        return this.#mesaActual;
    }
    set mesaActual(value) {
        this.#mesaActual = value;
    }
}
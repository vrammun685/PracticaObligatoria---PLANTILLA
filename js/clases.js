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
        for (let producto of this.#productos) {
            if (producto.idProducto === idProducto) {
                return "Producto ya añadido";
            }
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
    _mesa;
    _lineasDeCuentas;
    _pagada;
    
}

class Gestor{
    
}
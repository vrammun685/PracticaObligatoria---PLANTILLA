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
    _mesa;
    _lineasDeCuentas;
    _pagada;

    constructor (mesa, lineasDeCuentas, pagada){
        this.mesa= mesa
        this.lineasDeCuentas =lineasDeCuentas
        this.pagada = pagada
    }

    get pagada() {
        return this._pagada;
    }
    set pagada(value) {
        this._pagada = value;
    }
    get lineasDeCuentas() {
        return this._lineasDeCuentas;
    }
    set lineasDeCuentas(value) {
        this._lineasDeCuentas = value;
    }
    
    get mesa_1() {
        return this._mesa;
    }
    set mesa_1(value) {
        this._mesa = value;
    } 
}

class Gestor{
    _cuentas;
    _mesaActual;

    constructor(){
        this.mesaActual =  1
    }

    get cuentas() {
        return this._cuentas;
    }
    set cuentas(value) {
        this._cuentas = value;
    }
    
    get mesaActual() {
        return this._mesaActual;
    }
    set mesaActual(value) {
        this._mesaActual = value;
    }
}
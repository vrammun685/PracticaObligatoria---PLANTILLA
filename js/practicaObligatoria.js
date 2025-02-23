/*
 Sugerencia de categorias y productos/**/
const catalogo = new Catalogo();

categorias = ["Bebidas", "Tostadas", "Bollería"];

catalogo.addProducto(1, "Café con leche", 0.95, 0);
catalogo.addProducto(2, "Té", 1.05, 0);
catalogo.addProducto(3, "Cola-cao", 1.35, 0);
catalogo.addProducto(4, "Chocolate a la taza", 1.95, 0);
catalogo.addProducto(5, "Media con aceite", 1.25, 1);
catalogo.addProducto(6, "Entera con aceite", 1.95, 1);
catalogo.addProducto(7, "Media con aceite y jamón", 1.95, 1);
catalogo.addProducto(8, "Entera con aceite y jamón", 2.85, 1);
catalogo.addProducto(9, "Media con mantequilla", 1.15, 1);
catalogo.addProducto(10, "Entera con mantequilla", 1.75, 1);
catalogo.addProducto(11, "Media con manteca colorá", 1.45, 1);
catalogo.addProducto(12, "Entera con manteca colorá", 2.15, 1);
catalogo.addProducto(13, "Croissant", 0.95, 2);
catalogo.addProducto(14, "Napolitana de chocolate", 1.45, 2);
catalogo.addProducto(15, "Caracola de crema", 1.65, 2);
catalogo.addProducto(16, "Caña de chocolate", 1.35, 2);


/*Al iniciar*/
const gestor= new Gestor();
const panel_cuenta = document.getElementById('cuenta');
const selecCategorias = document.getElementsByName('categorias')[0];
const selecProductos = document.getElementsByName('productos')[0];
const mesas = document.getElementsByClassName('mesa');
const teclas = document.getElementsByClassName('tecla')

document.addEventListener("DOMContentLoaded", function() {
  
  dar_libre();
  dar_Categorias();
  cambiaProducto(0);
  pintar_Panel()

});

function dar_libre(){
  for (let mesa of mesas) {
    mesa.classList.add('libre');
    mesa.addEventListener('click', function() {
      mesapulsar(mesa.textContent);
    });
  }
}
function dar_Categorias(){
  for(let categoria of categorias){
    const opcion = document.createElement('option');
    opcion.value = categoria;
    opcion.innerText = categoria;
    selecCategorias.appendChild(opcion);
  }
}

function pintar_Panel(){
  
  const titulo = document.createElement('h1');
  titulo.innerText = "Cuenta";
  const tituloMesa = document.createElement('h2');
  tituloMesa.innerText = "";
  tituloMesa.id="titulo-mesa";
  const tituloTotal = document.createElement('h3');
  tituloTotal.innerHTML = "";
  tituloTotal.id="titulo-total";

  const botonPagar = document.createElement('button');
  botonPagar.innerHTML = "PAGAR Y LIBERAR MESA";
  botonPagar.style.display = 'none';
  botonPagar.id = 'botonazo'
  botonPagar.classList.add('boton')
  botonPagar.addEventListener('click', pagar)

  const table = document.createElement('table');
  table.id = 'table';
  const thead = document.createElement('thead');
  thead.id = 'thead';
  const th1 = document.createElement('th');
  th1.id = 'th1';
  th1.innerHTML = "Modificar";
  const th2 = document.createElement('th');
  th2.id = 'th2';
  th2.innerHTML = "Uds";
  const th3 = document.createElement('th');
  th3.id = 'th3';
  th3.innerHTML = "Id";
  const th4 = document.createElement('th');
  th4.id = 'th4';
  th4.innerHTML = "Producto";
  const th5 = document.createElement('th');
  th5.id = 'th5';
  th5.innerHTML = "Precio";
  const tbody = document.createElement('tbody')

  thead.appendChild(th1);
  thead.appendChild(th2);
  thead.appendChild(th3);
  thead.appendChild(th4);
  thead.appendChild(th5);

  table.appendChild(thead);
  table.appendChild(tbody);
  table.style.display = 'none';

  panel_cuenta.appendChild(titulo);
  panel_cuenta.appendChild(tituloMesa);
  panel_cuenta.appendChild(tituloTotal);
  panel_cuenta.appendChild(botonPagar);
  panel_cuenta.appendChild(table);
  
}
/*Al iniciar*/

/*Cambiar Productos*/
selecCategorias.addEventListener("change" , () => seleccionaCategoria)

function seleccionaCategoria(){
  if (selecCategorias.value == 'Tostadas'){
    cambiaProducto(1)
  }
  else if (selecCategorias.value == 'Bebidas'){
    cambiaProducto(0)
  }
  else {
    cambiaProducto(2)
  }
}

function cambiaProducto(selecionado){
  selecProductos.innerHTML = '';
  for(let producto of catalogo.productos){
    if (producto.idCategoria == selecionado){
      const opcion = document.createElement('option');
      opcion.value = producto.nombreProducto;
      opcion.innerText = producto.nombreProducto;
      selecProductos.appendChild(opcion);
    }
  }
}
/*Cambiar Productos*/

function mesapulsar(mesa){
  gestor.mesaActual = mesa;
  tituloMesa = document.getElementById('titulo-mesa');
  tituloMesa.innerHTML = "Mesa "+mesa.textContent;

  const tituloTotal = document.getElementById('titulo-total');

  const boton = document.getElementById('botonazo');

  const table = document.getElementById('table');

  const tbody = document.getElementById('tbody')

  const cuenta = gestor.cuentas.find(cuenta => cuenta.mesa == gestor.mesaActual && !cuenta.pagada);
  if(cuenta != null){
    tbody.innerHTML = '';
    for(let lineaCuenta of cuenta.lineasDeCuenta){
      let producto = catalogo.productos.find(producto => producto.idProducto == lineaCuenta.idProducto);
      total += lineaCuenta.unidades*producto.precioUnidad;

      const tr = document.createElement('tr');
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      const td3 = document.createElement('td');
      const td4 = document.createElement('td');
      const td5 = document.createElement('td');

      const botonMas = document.createElement('button');
      const botonMenos = document.createElement('button');
      
      botonMas.id = 'botonMas';
      botonMenos.id = 'botonMenos';
      
      botonMas.addEventListener('click', () => sumarUnidad(lineaCuenta));
      botonMenos.addEventListener('click', () => restarUnidad(lineaCuenta));

      td1.appendChild(botonMas);
      td1.appendChild(botonMenos);

      td2.innerHTML = lineaCuenta.unidades;
      td3.innerHTML = lineaCuenta.idProducto;
      td4.innerHTML = producto.nombreProducto+'('+producto.precioUnidad+')';
      td5.innerHTML = lineaCuenta.unidades*producto.precioUnidad;

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);

      tbody.appendChild(tr);

    }
    tituloTotal.innerHTML = 'Total: '+total;
    table.style.display = '';
    boton.style.display = '';
  }
  else{
    tbody.innerHTML = '';
    tituloTotal.innerHTML = '';
    table.style.display = 'none';
    boton.style.display = 'none';
  }
}



function restarUnidad(lineaCuenta){
  lineaCuenta.unidades-=1;
  if(lineaCuenta.unidades < 0){
    mesapulsar(gestor.mesaActual);
  }
  else{
    let pregunta=confirm('¿Quieres eliminar el producto?');
    if (pregunta){
      let cuenta = gestor.cuentas.find(cuenta => cuenta.mesa == gestor.mesaActual && !cuenta.pagada);
      for(let lineaCuentagestor of cuenta.lineasDeCuenta){
        if(lineaCuentagestor == lineaCuenta){
          cuenta.slice(lineaCuentagestor, 1);
        }
      }
    mesapulsar(gestor.mesaActual);
    }
    else{
      lineaCuenta.unidades+=1;
    }
  }
}

function sumarUnidad(lineaCuenta){
  lineaCuenta.unidades+=1;
  mesapulsar(gestor.mesaActual);
}



function pagar(){
  let cuenta = gestor.cuentas.find(cuenta => cuenta.mesa == gestor.mesaActual && !cuenta.pagada);
  cuenta.pagada = true;
  let mesa = mesas[gestor.mesaActual-1];
  mesa.classList.remove('ocupada');
  mesa.classList.add('libre');
  const table = document.getElementById('table');
  table.style.display = 'none';
}
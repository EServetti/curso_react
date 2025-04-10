# Proyecto final curso React
## Descripción 
En este proyecto cree un e-commerce basado en una tienda de juegos en formato fisico online, usando React con una base de datos de Firestore para guardar y manejar los juegos y los recibos de compras, aqui una breve descripción de cada pagina/componente:
## NavBar
Un navbar destinado a manejar las rutas de la pagina y tambien algunos filtros.
## ItemListContainer
Aqui podras ver los juegos disponibles, filtrarlos por género, nombre y por estado (en oferta o más comprados), ademas presionando sobre un juego podras acceder a la pantalla de detalles del mismo.
## ItemDetails
En esta pagina podras ver los detalles del juego cuyo id es igual al pasado como parametro de la ruta, se mostrara una imagen del mismo, su nombre, precio y descripción, ademas contará con un boton para agregarlo al carrito.
## Cart
Esta pagina contendrá los juegos que agreguemos al carrito, en caso de no tener ningun juego mostrará un mensaje que lo diga, ademas si tenemos juegos mostrará el precio total a pagar y la cantidad de juegos, ademas contará con un boton para finalizar la comra.
## FinalizePurchase
Este componente nos permitirá terminar la compra ingresando nuestros datos personales, al terminarla creará un recibo en la base de datos y nos mostrará el id del mismo en un mensaje.

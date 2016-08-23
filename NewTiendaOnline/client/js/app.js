//creamos el modulo y le inyectamos el modulo ngRoute y el modulo cart que hemos creado
var app = angular.module("app", ['ngRoute', 'ng-Shop']);
//
////las rutas que vamos a utilizar para nuestro ejemplo


app.config(function($routeProvider)
{
	$routeProvider.when("/", {
		templateUrl : "home.html",
		controller : "homeController"
	})
	.when("/pay", {
		templateUrl : "pay.html",
		controller : "homeController"
	})
	.otherwise({ reditrectTo : "/" });
});
//


app.controller("homeController", function($scope, $shop)
{
	
	/**
	* @desc - añade x cantidad de un producto al carrito
	* @return - object - si es nueva inserción devuelve insert, en otro caso update
	*/
	$scope.add = function(producto)
	{
		//alert(producto.total); return;
		var product = {};
		product.id = producto.id;
		product.price = producto.price;
		product.name = producto.name;
		product.category = producto.category;
		product.qty = parseInt(producto.total || 1,10);
		$shop.add(product);
	}

	/**
	* @desc - añade x cantidad de un producto al carrito
	* @return - object - si es nueva inserción devuelve insert, en otro caso update
	*/
	$scope.addCupon = function(Cupon)
	{

		$shop.addCupon(Cupon);
	}

	/**
	* @desc - elimina un producto del carrito por su id
	*/
	$scope.remove = function(id)
	{
		if($shop.remove(id))
		{
			alert("Producto eliminado correctamente");
			return;
		}
		else
		{
			alert("Ha ocurrido un error eliminando el producto, seguramente porqué no existe");
			return;
		}
	}
	
	/**
	* @desc - elimina el contenido del carrito
	*/
	$scope.destroy = function()
	{
		$shop.destroy();
	}

    /**
	* @desc - Resumen del carrito
	*/
	$scope.total = function()
	{
		$shop.total();
	}

	/**
	* @desc - redondea el precio que le pasemos con dos decimales
	*/
	$scope.roundCurrency = function(total)
	{
		return total.toFixed(2);
	}

	/**
	* @desc - array de objetos con productos para el ejemplo
	*/
	$scope.productosTienda = 
	[
	{"id": 1, "category": "Detalles", "name": "Campanas", "price": 1000, "picture": "imgs/campanas.jpg"},
	{"id": 2, "category": "Detalles", "name": "Carrito", "price": 2000, "picture": "imgs/carrito.jpg"},
	{"id": 3, "category": "Detalles", "name": "Carrito con chupetes", "price": 3000, "picture": "imgs/carrito_chupetes.jpg"},
	{"id": 4, "category": "Detalles", "name": "Cesta", "price": 4000, "picture": "imgs/cesta.jpg"},
	{"id": 5, "category": "Detalles", "name": "Mini cesta", "price": 5000, "picture": "imgs/cestita.jpg"},
	{"id": 6, "category": "Detalles", "name": "Enfermera", "price": 6000, "picture": "imgs/enfermera.jpg"},
	{"id": 7, "category": "Detalles", "name": "Gatitos", "price": 7000, "picture": "imgs/gatitos.jpg"},
	{"id": 8, "category": "Detalles", "name": "Perritos", "price": 8000, "picture": "imgs/perritos.jpg"},
	{"id": 9, "category": "Detalles", "name": "Profesoras", "price": 9000, "picture": "imgs/profesora.jpg"},
	{"id": 10, "category": "Detalles", "name": "Vestido", "price": 10000, "picture": "imgs/vestido.jpg"},
	{"id": 11, "category": "Detalles", "name": "Otros", "price": 11000, "picture": "imgs/otros.jpg"}
	];
    
    
    /**
	* @desc - array de cupones para el ejemplo
	*/
	$scope.CuponesTienda = 
	[
	{"codigo":"ABC", "descuento": 10},
    {"codigo":"A11", "descuento": 50},
    {"codigo":"A22", "descuento": 80}
	];
});


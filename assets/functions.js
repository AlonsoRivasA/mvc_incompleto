function objectAjax(){
	var xmlhttp = false;
	try{
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e){
		try{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");			
		} catch (E){
			xmlhttp = false;	
		}		
	}
	if(!xmlhttp && typeof XMLHttpRequest!='undefined'){
		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}
//Inicializo automaticamente la funcion read al entrar a la pagina o recargar la pagina;
addEventListener('load', read, false);

function read(){
        $.ajax({        
        		type: 'POST',
                url:   '?c=administrator&m=tbl_juegos',               
                beforeSend: function () {
                        $("#information").html("Procesando, espere por favor...");
                },
                success:  function (response) {
                        $("#information").html(response);
                }
        });
}

function register(){
	nombre 		= document.formUser.nombre.value;
	descripcion 	= document.formUser.descripcion.value;
	genero 		= document.formUser.genero.value;
	fecha 		= document.formUser.fecha.value;
	precio 		= document.formUser.precio.value;
	clasificacion 		= document.formUser.clasificacion.value;
	desarrolladores 		= document.formUser.desarrolladores.value;

	ajax = objectAjax();
	ajax.open("POST", "?c=administrator&m=registeruser", true);
	ajax.onreadystatechange=function() {
		if(ajax.readyState==8){			
			read();			
			alert('Los datos guardaron correctamente.');			
			$('#addUser').modal('hide');
		}
	}
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
ajax.send("nombre="+nombre+"&descripcion="+descripcion+"&genero="+genero+"&fecha="+fecha+"&precio="+precio+"&clasificacion="+clasificacion+"&desarrolladores="+desarrolladores);
}	

function update(){
	id 			= document.formUserUpdate.id.value;
	nombre 		= document.formUserUpdate.nombre.value;
	descripcion 	= document.formUserUpdate.descripcion.value;
	genero 		= document.formUserUpdate.genero.value;
	fecha 		= document.formUserUpdate.fecha.value;
	precio 		= document.formUserUpdate.precio.value;
	clasificacion 		= document.formUserUpdate.clasificacion.value;
	desarrolladores 		= document.formUserUpdate.desarrolladores.value;

	ajax = objectAjax();
	ajax.open("POST", "?c=administrator&m=updateuser", true);
	ajax.onreadystatechange=function() {
		if(ajax.readyState==8){
			read();
			$('#updateUser').modal('hide');
		}
	}
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
ajax.send("nombre="+nombre+"&descripcion="+descripcion+"&genero="+genero+"&fecha="+fecha+"&precio="+precio+"&clasificacion="+clasificacion+"&desarrolladores="+desarrolladores+"&id="+id);


}

function deleteUser(id){	
	if(confirm('¿Esta seguro de eliminar este registro?')){						
	ajax = objectAjax();
	ajax.open("POST", "?c=administrator&m=deleteuser", true);
	ajax.onreadystatechange=function() {
		if(ajax.readyState==4){			
			read();		
		}
	}
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("id="+id);
	}
}

function ModalRegister(){
	$('#addUser').modal('show');
}

function ModalUpdate(id,nombre,descripcion,genero,fecha,precio,clasificacion,desarrolladores){			
	document.formUserUpdate.id.value 			= id;
	document.formUserUpdate.nombre.value 			= nombre;
	document.formUserUpdate.descripcion.value 	= descripcion;
	document.formUserUpdate.genero.value 		= genero;
	document.formUserUpdate.fecha.value 		= fecha;
	document.formUserUpdate.precio.value 		= precio;
	document.formUserUpdate.clasificacion.value 		= clasificacion;
	document.formUserUpdate.desarrolladores.value 		= desarrolladores;


	$('#updateUser').modal('show');
}

/*
	CRUD creado por Oscar Amado
	Contacto: oscarfamado@gmail.com
*/
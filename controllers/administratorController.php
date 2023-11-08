<?php
/*
	CRUD creado por Oscar Amado
	Contacto: oscarfamado@gmail.com
*/
class administratorController extends Administrator{

	function index(){
		require_once('views/all/header.php');
		require_once('views/all/nav.php');
		require_once('views/index/index.php');
		require_once('views/index/modals.php');
		require_once('views/all/footer.php');
	}

	function table_users(){
		?>
		<table class="table table-bordered">
			<thead>
				<tr>
				<th>#</th>
				<th>Nombre</th>
				<th>Descripcion</th>
				<th>Genero</th>
				<th>Fecha</th>
				<th>Precio</th>
				<th>Clasificacion</th>
				<th>Desarrolladores</th>
				</tr>
			</thead>
			<tbody >		
		<?php
		foreach (parent::get_view_users()	as $data) {
		?>
		<tr>
			<td><?php echo $data->id; ?> </td>
			<td><?php echo $data->nombre; ?> </td>
			<td><?php echo $data->descripcion; ?> </td>
			<td><?php echo $data->genero; ?> </td>
			<td><?php echo $data->fecha; ?> </td>
			<td><?php echo $data->precio; ?> </td>
			<td><?php echo $data->clasificacion; ?> </td>
			<td><?php echo $data->desarrolladores; ?> </td>

			<td>
			  <div class="btn-group">
			    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
			    Seleccionar <span class="caret"></span></button>
			    <ul class="dropdown-menu" role="menu">
			      <li><a href="#" onclick="ModalUpdate('<?php echo $data->id; ?>','<?php echo $data->nombre; ?>','<?php echo $data->descripcion; ?>','<?php echo $data->genero; ?>','<?php echo $data->fecha; ?>','<?php echo $data->precio; ?>','<?php echo $data->clasificacion; ?>','<?php echo $data->desarrolladores; ?> ');">Actualizar</a></li>
			      <li><a href="#" onclick="deleteUser('<?php echo $data->id; ?>');">Borrar</a></li>
			    </ul>
			  </div>
			</td>
		</tr>
		<?php
		}
		?>
			</tbody>
		</table>	
	<?php	
    }
    
	function deleteuser(){		
			parent::set_delete_user($_REQUEST['id']);		
    }

	function registeruser(){
		$data = array(
					'id'		=> $_REQUEST['id'],
					'nombre' 		=> $_REQUEST['nombre'],
					'descripcion' => $_REQUEST['descripcion'],
					'genero'		=> $_REQUEST['genero'],
					'fecha'		=> $_REQUEST['fecha'],
					'precio'		=> $_REQUEST['precio'],
					'clasificacion'		=> $_REQUEST['clasificacion'],
					'desarrolladores'		=> $_REQUEST['desarrolladores']
					);		
					parent::set_register_user($data);		
    }    
    
	function updateuser(){
		$data = array(
					'id'		=> $_REQUEST['id'],
					'nombre' 		=> $_REQUEST['nombre'],
					'descripcion' => $_REQUEST['descripcion'],
					'genero'		=> $_REQUEST['genero'],
					'fecha'		=> $_REQUEST['fecha'],
					'precio'		=> $_REQUEST['precio'],
					'clasificacion'		=> $_REQUEST['clasificacion'],
					'desarrolladores'		=> $_REQUEST['desarrolladores']
					);		
			parent::set_update_user($data);		
	}    
    
}


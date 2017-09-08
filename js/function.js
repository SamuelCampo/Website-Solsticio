$(document).ready(function(){
	$("#Ir").on("click", function(e){
		e.preventDefault;
		$("html,body").animate({ scrollTop : $('#section-secundaria').offset().top },1500);
	});

	//Validación de los formularios //

	var user 	= $('#user').val();
	var costo 	= $('#costo').val();
	var telefono= $('#telefono').val();
	var correo  = $('#correo').val();

	$('#btn-form1').click(function(event) {
		alert('hola');
	});
alert('hola')
});
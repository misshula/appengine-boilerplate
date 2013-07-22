$(document).ready( function(){

	var param = document.URL.split('#')[1];
	if(param){
		//direct to param if passed in
		console.log(param);		
	}

	$('#home').show();
   
   	$('#simcoe').click(function(){
		$('.content').hide();
		$('#home').show();
	});

	$('#bikes-nav').click(function(){
		$('.content').hide();
		$('#bikes').show();
	});

	$('#catalogue-nav').click(function(){
		$('.content').hide();
		$('#catalogue').show();
	});

})

//$('.carousel').carousel();


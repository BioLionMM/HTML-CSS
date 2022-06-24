$(document).ready(function(){
  $('.elementmenu').hover(
    function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    }
  );
  /*$('#listeformations').accordion();*/
  $('.formation').each(function(){
	  $(this).hover(function(){
		$(this).next('.stages').slideToggle('slow');
		});
	  });
  
});
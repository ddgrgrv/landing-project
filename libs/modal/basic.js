$(document).ready(function(){

	$(".modal").on("click", function(){
		$(".basic-modal-content").css(
			"display" ,"flex",)
		$('.simplemodal-overlay').css(
			"display" ,"flex",)
	})

	$(".modal-form__close").on('click', function(){
		$(".basic-modal-content").css(
			"display" ,"none",)
		$('.simplemodal-overlay').css(
			"display" ,"none",)
	})
	

	$('.simplemodal-overlay').on('click', function(){
		$(".basic-modal-content").css(
			"display" ,"none",)
		$('.simplemodal-overlay').css(
			"display" ,"none",)
	})
	
	$(document).on('click', '.simplemodal-overlay', function () {
			$('#body').toggleClass('scroll'); 
		});
	
	$('.modal-form__close').on("click", function() {
		$('#body').toggleClass('scroll');
	});
	
	$('.modal').on("click", function() {
		$('#body').toggleClass('scroll');
	});
});

$(document).ready( function() {
	$('.carousel').carousel({
        interval: 5000 //changes the speed
    
	});
	
	$('.navbar-toggle').click( function(e) {
		$('.navbar').toggleClass( 'in' );
	});
	
	$('.app_download').hover( 
		function() {
			$(this).html('App Coming soon...');
		}, 
		function() {
			$(this).html('Download The App');	
		}
		).click( function(e) {
			e.preventDefault();
		});
	
	$(document).scroll(function() {
		if ( $(this).scrollTop() > 0 ) {
			$('#header').addClass('scroll');	
		} else {
			$('#header').removeClass('scroll');	
		}
	});
	
	$('#newsletter form button').click( function(e) {
		$('#newsletter form').submit();
	});
	$('#newsletter form').submit( function(e) {
		e.preventDefault();
		$('#newsletter form button').prop( 'disabled', true );
		
		var data = $(this).serializeArray();
		$.post( '/ajax/form-submit.php', data, function( response ) {
			console.log( response );
			if( response == '1' ) {
				$('#newsletter form').html('<h2>Thank you for signing up.</h2>');
			} else {
				$('#newsletter form').after('<p>There was an error, please try again.</p>').prop( 'disabled', false );
			}
		});
	});
	
	$('#contact_form button').click( function(e) {
		$('#contact_form').submit();
	});
	$('#contact_form').submit( function(e) {
		e.preventDefault();
		$('#contact_form button').prop( 'disabled', true );
		
		var data = $(this).serializeArray();
		$.post( '/ajax/contact-form.php', data, function( response ) {
			console.log( response );
			if( response == '1' ) {
				$('#contact_form').html('<h2>Thank\'s for getting in touch!</h2>');
			} else {
				$('#contact_form').after('<p>There was an error, please try again.</p>').prop( 'disabled', false );
			}
		});
	});
	
});
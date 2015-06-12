<?php
	$to = 'info@foneboxltd.com, dan@tailored.im';
	$from = 'website@foneboxltd.com';
	$subject = 'New website enquiry';
	
	$body = "A new enquiry has arrived, here is the output\r\n\r\n";
	
	foreach( $_POST as $key=>$value ) {
		$body .= "$key: ".nl2br($value)."\r\n";	
	}
	
	if( mail( $to, $subject, $body, "From:$from") ) {
		echo 1;
	} else {
		echo 0;	
	}
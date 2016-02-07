// force an https redirect
if (window.location.protocol != "https:")
    window.location.protocol = "https";

// move from one section to another
var toggleSections = function(){
	$('.about-me').toggleClass('move-n-hide');
    $(this).removeClass('inactive').addClass("active");
    $(this).siblings().addClass('inactive').removeClass('active');
};

// get active section on reload
var section = location.hash;
if (section == '#contact'){
	toggleSections();
	$('#contact').removeClass('inactive').addClass("active");
    $('#about').addClass('inactive').removeClass('active');
}


// once everything is setup then display content
$('.all-wrap').css('opacity', '1');

// functionality for navigation items
$('nav').delegate('.inactive', 'click', toggleSections);


// use for pagination
$('#contact').click(function(){
	location.hash = 'contact';
});


$('#about').click(function(){
	location.hash = 'about';
});
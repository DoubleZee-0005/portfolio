$(document).ready(function(){

	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
    });

    $("#nav-icon3").click(function(){
        $(".menu").slideToggle();})
       
    $('#nav-icon3').hover(function () {
            $('#nav-icon3 span:nth-child(2)').css('width', '110%');
            $('#nav-icon3 span:nth-child(3)').css('width', '110%');
            
            
        }, function () {
            $('#nav-icon3 span:nth-child(2)').css('width', '60%');
            $('#nav-icon3 span:nth-child(3)').css('width', '60%');
           
        });   
    
});


$(document).mousemove(function(e) {
    $('selector').offset({
        left: e.pageX,
        top: e.pageY + 20
    });
});


$(document).ready(function()
{
    window.onbeforeunload = function () 
    {
        window.scrollTo(0,0);
    }
    $(window).resize();
    $('.titleIndex').fadeIn(1000);
    $('.titleIndex2').fadeIn(1500);
    $('.fTextIntro').fadeIn(2000);
    $('.sTextIntro').fadeIn(2500);
    $('.arrowdiv').fadeIn(3000);
    $('.menu').hide();
    $('.menuImg').click(function(){
        $('.menu').slideToggle();
    });
	$(".arrowbtn").click
            (function() 
                {
                    $('html, body').animate
                    (
                        {
                            scrollTop: $(".sc1bg").offset().top
                        }, 750
                    );
                }
            );

            for( var i = 0; i < $('.scrollTo').length; i++)
            {
                var elm = $('.scrollTo')[i];

                if( $(document).scrollTop() >= $(elm).offset().top )
                {
                    currentPos = i;
                }
            }

            $(document).bind('DOMMouseScroll', function(e)
            {
                if(e.originalEvent.detail > 0) 
                {
                    scrollDown();
                }
                else 
                {
                    scrollUp();   
                }
                return false;
            });

            $(document).bind('mousewheel', function(e)
            {
                if(e.originalEvent.wheelDelta < 0) 
                {
                    scrollDown();
                }
                else 
                {
                    scrollUp();     
                }
                return false;
            });
});

$(window).scroll(function () 
{
    if($(window).scrollTop() <= 600)
    {
        $("#tim").addClass("activated");
        $("#exc").removeClass("activated");
    }
    if ($(window).scrollTop() > 600 && $(window).scrollTop() <= 1200) 
    {
    	$(".sc1img").fadeIn(2000);
    	$(".sc1Side").fadeIn(2500);
    	$(".sc1Btn").fadeIn(3000);
        $("#tim").removeClass("activated");
        $("#exc").addClass("activated");
        $("#trav").removeClass("activated");
    }
    if ($(window).scrollTop() > 1200 && $(window).scrollTop() <= 2000)
    {
    	$(".sc2img").fadeIn(2000);
    	$(".sc2Side").fadeIn(2500);
    	$(".sc2Btn").fadeIn(3000);
        $("#trav").addClass("activated");
        $("#exc").removeClass("activated");
        $("#pn").removeClass("activated");
    }
    if ($(window).scrollTop() > 2000 && $(window).scrollTop() <= 3000)
    {
        $(".sc3img").fadeIn(2000);
        $(".sc3Side").fadeIn(2500);
        $(".sc3Btn").fadeIn(3000);
        $("#trav").removeClass("activated");
        $("#pn").addClass("activated");
        $("#cv").removeClass("activated");
    }
    if ($(window).scrollTop() > 3000 && $(window).scrollTop() <= 3900)
    {
        $(".cvDiv").fadeIn(3000);
        $("#cv").addClass("activated");
        $("#pn").removeClass("activated");
        $("#con").removeClass("activated");
    }
    if ($(window).scrollTop() > 3900)
    {
        $(".contactComment").fadeIn(2000);
        $(".locationContact").fadeIn(2200);
        $(".emailContact").fadeIn(2400);
        $(".linkedinContact").fadeIn(2600);
        $(".additionContact").fadeIn(3000);
        $("#con").addClass("activated");
        $("#cv").removeClass("activated");
    }
});

var scrolling = false;
var currentPos = 0;

    function scrollUp()
    {
        if(!scrolling && currentPos > 0 )
        {
            scrolling=true;
            currentPos --;
            var scrollToElement = $('.scrollTo')[currentPos];

            $('html, body').animate({
                scrollTop: $(scrollToElement).offset().top
            }, 750, function(){
                scrolling = false;
            });      
        }
    }   

    function scrollDown()
    {   
        if(!scrolling && currentPos < $('.scrollTo').length-1  )
        {
            scrolling=true;
            currentPos ++;
            var scrollToElement = $('.scrollTo')[currentPos];

            $('html, body').animate({
                scrollTop: $(scrollToElement).offset().top
            }, 750,function(){
                scrolling = false;
            }); 
        }
    }
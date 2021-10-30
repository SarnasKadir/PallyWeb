$(document).ready(function () {
    /* Dark and Light mode, then this function clicked the background turn to dark */
    $(".darkBTN").click(function () {
        localStorage.setItem("darkModeSet", "darkModeNow");
        $("body").removeClass("light_Mode");
        $("body").addClass("dark_Mode");
    });

    /* Dark and Light mode, when this function clicked the background turn to dark */
    $(".lightBTN").click(function () {
        localStorage.removeItem("darkModeSet");
        $("body").removeClass("dark_Mode");
        $("body").addClass("light_Mode");
    });

    /* Dark and Light mode, this function will keep the choice of dark and light mode when the page is refreshed or reloaded */
    if (localStorage.getItem("darkModeSet") == "darkModeNow") {
        $("body").removeClass("light_Mode");
        $("body").addClass("dark_Mode");
    }

   

    // if the window size is bigger than 800px do stuff!
    if ($(window).width() >= 800) {
        $(".expandArticleArea").click(function () {
            $("main").removeClass("main-class");
            $("main").addClass("main-classB");
            $(this).hide();
            $(".showSideBar").show();
        });

        $(".showSideBar").click(function () {
            $("main").removeClass("main-classB");
            $("main").addClass("main-class");
            $(this).hide();
            $(".expandArticleArea").show();
        });
    }

    // top banner menu
    $(".menu-button-holder, .menu-button-holderB").click(function () {
        $(this).toggleClass("menu-button-holder, menu-button-holderB");
        $(".top-banner").toggleClass("top-bannerShowMenu");
        $("nav").toggle();
    });
	
//----------------------------------------------	
 
	
   
window.onscroll = function () {
	if ($(window).width() >= 1000) {pwStickyBanner(); }
	pwToTop();
};
		

 
 
 /* this function Vanilla javascript is, this function make the nav buttons stick on the top of the page when srolled */		
	var navbar = document.getElementById("bodyId");
	var sticky = document.getElementById("navbar").offsetTop;
	function pwStickyBanner() {
	if (window.pageYOffset >= sticky) {
	navbar.classList.add("bodyClass");
	} else {
	navbar.classList.remove("bodyClass");
	}
	}

 


    
/* this function Vanilla javascript is, to top page function */	 	
var wpTotop = document.getElementById("toTop");
var wpToTopShow = document.getElementById("webpage-wrapper").offsetTop;
	function pwToTop() {
		
		if (window.pageYOffset >= wpToTopShow) {
			wpTotop.style.visibility = 'visible'
		} else {
			wpTotop.style.visibility = 'hidden'
		}
			
		}
	
	
	
	
	
	
	
	
	
// Document ready ends 	
});


$(document).ready(function(){
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        items:1,
        smartSpeed:1000,
        responsive:{
            0:{
                nav:false 
            },
            768:{
                nav:true
            },
            // 600:{
                 
            // },
            // 1000:{
                
            // }
        }
    })
});




$('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    margin:24,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        768:{
            items:2, 
        },
        1140:{
            items:2,
            center:true,
        }
        
    }
});


$('#owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    items:1,
    smartSpeed:800,
     
});


/* jQuery carousel*/
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', '' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});

/* scroll function*/
let anchors = document.querySelectorAll('header a[href*="#"')

for (anchor of anchors) {
    if (anchor) {
        anchor.addEventListener('click', function (e){
            e.preventDefault();
            anchorId = this.getAttribute('href');
            document.querySelector(anchorId).scrollIntoView({
                behavior: "smooth", block: "start"
            })
        })
    }
}

let likeToStockEmail = document.getElementById('like_to_stock_email')

likeToStockEmail.onclick = function () {
    confirm("Are you sure you want to continue?")
};

let likeToStockNumber = document.getElementById('like_to_stock_number')

likeToStockNumber.onclick = function () {
    confirm("Are you sure you want to continue?")
};


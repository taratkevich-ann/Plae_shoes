'use strict';

// /* scroll function*/
// function createSmoothScroll() {
//     console.log("entrance");
//     let anchors = document.querySelectorAll('header a[href*="#"');
//     for(let i = 0; i < anchors.length-1; i++) {
//         let anchor = anchors[i];
//         if (anchor) {
//             anchor.addEventListener('click', function (e){
//                 e.preventDefault();
//                 let anchorId = this.getAttribute('href');
//                 document.querySelector(anchorId).scrollIntoView({
//                     behavior: "smooth", block: "start"
//                 })
//             })
//         }
//     }
// }
// createSmoothScroll();

/* active anchor*/
function emitActiveAnchor() {
    let activeAnchor = document.getElementsByClassName("nav-link");

    for (let i = 0; i < activeAnchor.length; i++) {
        activeAnchor[i].onclick = function () {
            let acAn = activeAnchor[0];
            while (acAn) {
                acAn.classList.remove("active");
                acAn = acAn.nextElementSibling;
            }
            this.classList.add("active");
        }
    }
}

emitActiveAnchor();

/*scroll active anchor*/
window.onscroll = function()
{
    let position = window.pageYOffset;
    let scroll_section = document.querySelectorAll('.active_section');
    let nav_a =document.querySelectorAll('nav a');
    let indent = document.querySelector('nav').offsetHeight;

    for (let i = 0; i < scroll_section.length; i++)
    {
        let top = scroll_section[i].offsetTop;

        if (position+indent>top)
        {
            for (let j =0 ; j <nav_a.length; j++)
            {
                if (nav_a[j].classList.contains('active'))
                {
                    nav_a[j].classList.remove('active');
                }
            }

            document.querySelectorAll('nav li')[i].querySelector('a').classList.add('active');
        }
    }
};
/* slider */
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider_content");
    let dots = document.getElementsByClassName("switching_slider");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/* modal windows*/
document.getElementById('like_to_stock_email').onclick = function () {
    event.preventDefault();
    confirm("Are you sure you want to continue?")
};

document.getElementById('like_to_stock_number').onclick = function () {
    event.preventDefault();
    confirm("Are you sure you want to continue?");
};



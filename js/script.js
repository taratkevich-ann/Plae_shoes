'use strict';
// /* scroll function*/
// function createSmoothScroll(){
//     let anchors = document.querySelectorAll('header a[href*="#"');
//     for (anchor of anchors) {
//         if (anchor) {
//             anchor.addEventListener('click', function (e){
//                 e.preventDefault();
//                 anchorId = this.getAttribute('href');
//                 document.querySelector(anchorId).scrollIntoView({
//                     behavior: "smooth", block: "start"
//                 })
//             })
//         }
//     }
// }
// createSmoothScroll();
// // console.log(createSmoothScroll());

// /* scroll function*/
function createSmoothScroll() {
    console.log("entrance");
    let anchors = document.querySelectorAll('header a[href*="#"');
    for(let i = 0; i < anchors.length-1; i++) {
        let anchor = anchors[i];
        if (anchor) {
            anchor.addEventListener('click', function (e){
                e.preventDefault();
                let anchorId = this.getAttribute('href');
                document.querySelector(anchorId).scrollIntoView({
                    behavior: "smooth", block: "start"
                })
            })
        }
    }
}
createSmoothScroll();

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

window.onscroll = function()
{
    let position = window.pageYOffset;
    let scroll_section = document.querySelectorAll('.section');
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
/* modal windows*/
document.getElementById('like_to_stock_email').onclick = function () {
    event.preventDefault();
    confirm("Are you sure you want to continue?")
};

document.getElementById('like_to_stock_number').onclick = function () {
    event.preventDefault();
    confirm("Are you sure you want to continue?");
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

/*lazy loading for bg-img*/
document.addEventListener("DOMContentLoaded", function () {
    let lazyloadImages;

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        let imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let image = entry.target;
                    image.classList.remove("lazy");
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyloadImages.forEach(function (image) {
            imageObserver.observe(image);
        });
    } else {
        let lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".lazy");

        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function () {
                let scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function (img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
                if (lazyloadImages.length == 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }
});

// document.addEventListener("DOMContentLoaded", function () {
//     let lazyloadImages;
//
//     if ("IntersectionObserver" in window) {
//         lazyloadImages = document.querySelectorAll(".lazy");
//         let imageObserver = new IntersectionObserver(function (entries, observer)
//         {
//             for (let  i = 0; i <entries.length; i++) {
//                 if (entries[i].isIntersecting) {
//                     let image = entry[i].target;
//                     image.classList.remove("lazy");
//                     imageObserver.unobserve(image);
//                 }
//             }
//
//
//         });
//         for (let  j = 0; j <lazyloadImages.length; j++)
//         {
//             imageObserver.observe(lazyloadImages[j]);
//         }
//     } else {
//         let lazyloadThrottleTimeout;
//         lazyloadImages = document.querySelectorAll(".lazy");
//
//         function lazyload() {
//             if (lazyloadThrottleTimeout) {
//                 clearTimeout(lazyloadThrottleTimeout);
//             }
//
//             lazyloadThrottleTimeout = setTimeout(function () {
//                 let scrollTop = window.pageYOffset;
//                 for (let  k= 0; k <lazyloadImages.length; k++)
//                 {
//
//                     if (lazyloadImages[k].offsetTop < (window.innerHeight + scrollTop))
//                     {
//                         lazyloadImages[k].src = img.dataset.src;
//                         lazyloadImages[k].classList.remove('lazy');
//                     }
//                 }
//
//                 if (lazyloadImages.length == 0) {
//                     document.removeEventListener("scroll", lazyload);
//                     window.removeEventListener("resize", lazyload);
//                     window.removeEventListener("orientationChange", lazyload);
//                 }
//             }, 20);
//         }
//
//         document.addEventListener("scroll", lazyload);
//         window.addEventListener("resize", lazyload);
//         window.addEventListener("orientationChange", lazyload);
//     }
// });
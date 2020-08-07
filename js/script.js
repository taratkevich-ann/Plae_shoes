/* scroll function*/
function createSmoothScroll(){
    let anchors = document.querySelectorAll('header a[href*="#"');
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
}
createSmoothScroll();

/* active anchor*/
function emitActiveAnchor(){
    let activeAnchor = document.getElementsByClassName("nav-link");

    for (let i = 0; i < activeAnchor.length; i++){
        activeAnchor[i].onclick = function () {
            let acAn = activeAnchor[0];
            while(acAn){
                acAn.classList.remove("active");
                acAn = acAn.nextElementSibling;
            }
            this.classList.add("active");
        }
    }
}
emitActiveAnchor();


/* modal windows*/
document.getElementById('like_to_stock_email').onclick = function () {
    event.preventDefault();
    confirm("Are you sure you want to continue?")
};

document.getElementById('like_to_stock_number').onclick = function () {
    event.preventDefault();
    confirm("Are you sure you want to continue?")
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


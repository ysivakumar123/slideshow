let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    slideIndex = n;
    let images = document.getElementsByClassName('myslides');
    let dots = document.getElementsByClassName('dot');
    if(slideIndex >= images.length) slideIndex = 0;
    // slideIndex = slideIndex%images.length;
    // if(slideIndex < 0) slideIndex += images.length;
    if(slideIndex < 0) slideIndex = images.length - 1;
    for(let i = 0; i < images.length ; i++){
        images[i].style.display = "none";
    }
    for(let i = 0; i < images.length ; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    images[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}
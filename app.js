let button = document.querySelector(".arrow"),
    links = document.querySelector(".nav-links")


    button.addEventListener("click",() =>{
        links.classList.toggle("display"); /*Toggle is Add and Remove the Display class*/
        button.children[0].classList.toggle("toggle0");
        button.children[1].classList.toggle("toggle1"); 
        button.children[2].classList.toggle("toggle2");
    })


// Start of the Sliding images

    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }
    
   
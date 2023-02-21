let button = document.querySelector(".arrow"),
    links = document.querySelector(".nav-links")


    button.addEventListener("click",() =>{
        links.classList.toggle("display"); /*Toggle is Add and Remove the Display class*/
        button.children[0].classList.toggle("toggle0");
        button.children[1].classList.toggle("toggle1"); 
        button.children[2].classList.toggle("toggle2");
    })

   
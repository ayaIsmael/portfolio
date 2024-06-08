window.onscroll=function(){

    let navbar=document.querySelector('.navbar');
    let links=document.querySelectorAll('.nav-link');
    let sections=document.querySelectorAll('.section');
    if(window.scrollY != 0){
        navbar.classList.add('shrink');
    }else{
        navbar.classList.remove('shrink');
    }

    sections.forEach(section => {
        if(window.scrollY >= section.offsetTop - 100){
            links.forEach(link => {link.classList.remove('active')});
            let link=document.getElementById(section.dataset.link);
            link.classList.add('active');
        }
    });
    
    let about=document.getElementById('about');
    let images=document.querySelectorAll('.zoom');
    if(window.scrollY >= about.offsetTop - 200){
        images.forEach(image => {
            image.style.animationName="zoomIn";
        });
    }
   
}
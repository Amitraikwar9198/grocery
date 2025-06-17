
let seachForm = document.querySelector('.search-form');


document.querySelector('#search-btn').onclick = () =>
    {
        seachForm.classList.toggle('active');
       
        shoppingCard.classList.remove('active');
        loginForm.classList.remove('active');
        Navbar.classList.remove('active');
    
    }


    let shoppingCard = document.querySelector('.shopping-card');
document.querySelector('#card-btn').onclick = () =>
    {
        shoppingCard.classList.toggle('active');
        seachForm.classList.remove('active');
        
        loginForm.classList.remove('active');
        Navbar.classList.remove('active');
    }


    let  loginForm= document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
    {
        loginForm.classList.toggle('active');
        seachForm.classList.remove('active');
        shoppingCard.classList.remove('active');
       
        Navbar.classList.remove('active');
    }


    let  Navbar= document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
    {
        Navbar.classList.toggle('active');
        seachForm.classList.remove('active');
        shoppingCard.classList.remove('active');
        loginForm.classList.remove('active');
      
    }



window.onscroll = () =>
    {
        seachForm.classList.remove('active');
        shoppingCard.classList.remove('active');
        loginForm.classList.remove('active');
        Navbar.classList.remove('active');
    }
    var swiper = new Swiper(".products-slider", {
        loop:true,
        spaceBetween: 20,
        autoplay: {
delay: 7500,
disableOnInteraction: false,
        },
         breakpoints: {
          0: {
            slidesPerView: 1,
            
          },
          768: {
            slidesPerView: 2,
           
          },
          1020: {
            slidesPerView: 3,
      
          },
         },
      });

const openNav = () => {
    if(document.getElementById("mobile-nav").style.width === ""){
        document.getElementById("mobile-nav").style.width = "250px"
    } else{
        document.getElementById("mobile-nav").style.width = ""
    }
   
}

const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
  loop: true,
  speed: 1500,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
})
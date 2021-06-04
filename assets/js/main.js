$(document).ready(function () {
  // Window scroll event
  window.addEventListener("scroll",function(){
    if(scrollY>=80){
      gsap.to(".navBTT",{
        duration:0.1,
        ease: "power2",
        marginTop:"0px",
        maxWidth:"500px",
        stagger: 0.05,
      })
    }else{
      gsap.to(".navBTT",{
        duration:0.1,
        ease: "power2",
        marginTop:"",
        maxWidth:"",
        stagger: 0.05,
      })
    }
  })
  // 
});

function a (){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#pages"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#pages", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#pages").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}

a();


// gsap.from("#bottle1",{
//     opacity:0,
//     duraion:0.6,
// },"-=0.4")

gsap.to("#bottle1",{
    scrollTrigger:{
        trigger:"#bottle1",
        scroller:"#pages",
        // markers:true,
        pin:true,
        start:"top 10%",
        end:"top -450%",
        scrub:2
    },
    rotate:-15,
})
gsap.to("#bottle1",{
  scrollTrigger:{
    trigger:"#bottle1",
    scroller:"#pages",
    // markers:true,
    start:"top 9%",
    scrub:2,
    end:"top -5%"
  },
  scale:".5",
})




gsap.to(
    ".dp-intro__logo",
    {
        x: "100vw",
        scrollTrigger: {
            trigger: ".dp-intro__logo",
            start: 'top center-=100',
            end: "bottom bottom",
            markers: true,
            toggleActions: "play none reverse none",
            duration: 0.5,
            stagger: 0.05,
        },
    });
gsap.to(".dp-intro__content", {
    x: "-100vw",
    scrollTrigger: {
        trigger: ".dp-intro__content",
        start: "top center-=1",
        end: "bottom bottom",
        markers: true,
        toggleActions: "play none reverse none",
        stagger: 0.05,
    },
});
gsap.set('#top-svg', { scale: 1 })
gsap.fromTo(
    '#top-svg',
    {
        scale: 2,
        rotation: 1140,
    },
    {
        scrollTrigger: {
            trigger: '#top-svg',
            start: "top center-=1",
            end: "bottom bottom",
            scrub: 1,
        },
        scale: 1.5,

    }
);
gsap.fromTo(".dp-vision-title__I", {
   // skewY: 20,
    scale: 1,
    xPercent: 200,
}, {
    scrollTrigger: {
        trigger: ".dp-vision-title__I",
        start: "top center",
        markers: "true",
        toggleActions: "play none none reverse",
    },
   // skewY: 0,
    xPercent: 0,
    transformOrigin: "0% 100%",
    ease: "power4",
    duration: 2,
});
gsap.fromTo(".dp-vision-title__II     ", {
    // skewY: 20,
     scale: 1,
     xPercent: -200,
 }, {
     scrollTrigger: {
         trigger: ".dp-vision-title__I",
         start: "top center",
         markers: "true",
         toggleActions: "play none none reverse",
     },
    // skewY: 0,
     xPercent: 0,
     transformOrigin: "0% 100%",
     ease: "power4",
     duration: 1,
 });

 gsap.fromTo(
    ".dp-vision__content",
    { 
      y: 100,
      opacity: 0
    },
    {
        scrollTrigger: {
            trigger: ".dp-vision-title__I",
            start: "top center+=900",
            markers: "true",
            toggleActions: "play none none reverse",
        },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 3,
      ease: 'power4.out',
    }
  )

  gsap.fromTo(
    ".dp-portfolio-inner",
    { 
      y: 100,
      opacity: 0
    },
    {
        scrollTrigger: {
            trigger: ".dp-portfolio-inner",
            start: "top center",
            markers: "true",
            toggleActions: "play none none reverse",
        },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 2,
      ease: 'power4.out',
    }
  )
 



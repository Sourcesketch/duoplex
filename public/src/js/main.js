gsap.fromTo(".dp-intro__logo svg", {
    // skewY: 20,
    scale: 1,
    xPercent: 300,
}, {
    scrollTrigger: {
        trigger: ".dp-intro-wrapper",
        start: "top center",
       // markers: "true",
        toggleActions: "play none none reverse",
    },
    // skewY: 0,
    xPercent: 0,
    transformOrigin: "0% 100%",
    ease: "power4",
    duration: 2,
});

gsap.fromTo(".dp-intro__content", {
    // skewY: 20,
    scale: 1,
    xPercent: -300,
}, {
    scrollTrigger: {
        trigger: ".dp-intro-wrapper",
        start: "top center",
      //  markers: "true",
        toggleActions: "play none none reverse",
    },
    // skewY: 0,
    xPercent: 0,
    transformOrigin: "0% 100%",
    ease: "power4",
    duration: 2,
});

gsap.fromTo(".dp-intro-wrapper", {
  skewY: 20,
  transformOrigin: "50% 0%",
}, {
    scrollTrigger: {
        trigger: ".dp-intro-wrapper",
        start: "top center",
      //  markers: "true",
        toggleActions: "play none none reverse",
    },
    skewY: 0,
    scaleY:1,
    transformOrigin: "0% 100%",
    ease: "power4",
    duration:   1,
});

gsap.fromTo(".dp-vision-title__I", {
    // skewY: 20,
    scale: 1,
    xPercent: 300,
}, {
    scrollTrigger: {
        trigger: ".dp-vision-title__I",
        start: "top center",
     //   markers: "true",
        toggleActions: "play none none reverse",
    },
    // skewY: 0,
    xPercent: 0,
    transformOrigin: "0% 100%",
    ease: "power4",
    duration: 1,
});
gsap.fromTo(".dp-vision-title__II     ", {
    // skewY: 20,
    scale: 1,
    xPercent: -300,
}, {
    scrollTrigger: {
        trigger: ".dp-vision-title__I",
        start: "top center",
       // markers: "true",
        toggleActions: "play none none reverse",
    },
    // skewY: 0,
    xPercent: 0,
    transformOrigin: "0% 100%",
    ease: "power4",
    duration: 1,
});

gsap.fromTo(
    ".dp-vision__content", {
        y: 100,
        opacity: 0
    }, {
        scrollTrigger: {
            trigger: ".dp-vision__content",
            start: "top center+=900",
        //    markers: "true",
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
    ".dp-portfolio__left", {
        scale: 1,
        xPercent: -200,
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: ".dp-portfolio",
            start: "top center",
           // markers: "true",
            toggleActions: "play none none reverse",
        },
        y: 0,
        xPercent: 0,
        opacity: 1,
        transformOrigin: "0% 100%",
        ease: "power4",
        duration: 1,
    }
)

gsap.fromTo(
    ".box1", {
        scale: 1,
        y: -100,
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: ".dp-portfolio",
            start: "top center",
        //    markers: "true",
            toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        // xPercent: 0,
        transformOrigin: "0% 100%",
        ease: "power4",
        duration: 2,
    }
)


gsap.fromTo(
    ".box2,.box3,.box4,.box5,.box6", {
        scale: 1,
        y: 300,
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: ".dp-portfolio",
            start: "top center",
         //   markers: "true",
            toggleActions: "play none none reverse",
        },
        y: 0,
        // xPercent: 0,
        opacity: 1,
        transformOrigin: "0% 100%",
        ease: "power4",
        duration: 3,
    }
)

gsap.fromTo(
    ".dp-about__leftContent", {
        scale: 1,
        xPercent: -200,
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: ".dp-about",
            start: "top center",
          //  markers: "true",
            toggleActions: "play none none reverse",
        },
        y: 0,
        xPercent: 0,
        opacity: 1,
        transformOrigin: "0% 100%",
        ease: "power4",
        duration: 1,
    }
)
gsap.fromTo(".dp-about__rightContent", {
    // skewY: 20,
    scale: 1,
    xPercent: 200,
}, {
    scrollTrigger: {
        trigger: ".dp-about",
        start: "top center",
      //  markers: "true",
        toggleActions: "play none none reverse",
    },
    // skewY: 0,
    xPercent: 0,
    transformOrigin: "0% 100%",
    ease: "power4",
    duration: 1,
});
gsap.fromTo(
    ".dp-about__topContent", {
        scale: 1,
        y: -100,
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: ".dp-about",
            start: "top center",
           // markers: "true",
            toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        // xPercent: 0,
        transformOrigin: "0% 100%",
        ease: "power4",
        duration: 1,
    }
)
// gsap.fromTo(
//     ".dp-about__topContent h2", {
//         scale: 1,
//         y: 0,
//     }, {
//         scrollTrigger: {
//             trigger: ".dp-about",
//             start: "top+=100",
//             markers: "true",
//             toggleActions: "play none none reverse",
//         },
//         y: -10,
//         fontSize: 96,
//         xPercent: 0,

//         transformOrigin: "0% 100%",
//         ease: "power4",
//         duration: 1,
//     }
// )
// gsap.fromTo(
//     ".dp-about__topContent p", {
//         scale: 1,
//         y: 0,
//     }, {
//         scrollTrigger: {
//             trigger: ".dp-about",
//             start: "top+=100",
//             markers: "true",
//             toggleActions: "play none none reverse",
//         },
//         y: -90,
//         fontSize: 18,
//         xPercent: 0,

//         transformOrigin: "0% 100%",
//         ease: "power4",
//         duration: 1,

//     }
// )

// gsap.fromTo(
//     ".dp-about__detail", {
//         scale: 1,
//         y: 0,
//         display: 'none',
//     }, {
//         scrollTrigger: {
//             trigger: ".dp-about",
//             start: "top+=200",
//             markers: "true",
//             toggleActions: "play none none reverse",
//         },
//         y: -70,
//         fontSize: 18,
//         xPercent: 0,
//         display: 'flex',
//         transformOrigin: "0% 100%",
//         ease: "power4",
//         duration: 2,

//     }
// )

gsap.fromTo(".dp-excelence h2", {
    // skewY: 20,
    scale: 1,
    xPercent: 200,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: ".dp-excelence",
        start: "top center",
       // markers: "true",
        toggleActions: "play none none reverse",
    },
    // skewY: 0,
    xPercent: 0,
    opacity: 1,
    transformOrigin: "0% 100%",
    ease: "power4",
    duration: 2,
});

gsap.fromTo(".dp-excelence h3", {
    // skewY: 20,
    scale: 1,
    xPercent: -200,
    opacity: 0,
}, {
    scrollTrigger: {
        trigger: ".dp-excelence",
        start: "top center",
     //   markers: "true",
        toggleActions: "play none none reverse",
    },
    // skewY: 0,
    xPercent: 0,
    opacity: 1,
    transformOrigin: "0% 100%",
    ease: "power4",
    duration: 1,
});

gsap.fromTo(
    ".dp-excelence button", {
        scale: 1,
        y: -100,
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: ".dp-excelence",
            start: "top center",
          //  markers: "true",
            toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        // xPercent: 0,
        transformOrigin: "0% 100%",
        ease: "power4",
        duration: 2,
    }
)
gsap.fromTo(
    ".dp-contact", {
        scale: 1,
        y: -100,
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: ".dp-contact",
            start: "top center",
         //   markers: "true",
            toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        // xPercent: 0,
        transformOrigin: "0% 100%",
        ease: "power4",
        duration: 2,
    }
)

gsap.fromTo(
    ".dp-expertise__list", {
        scale: 1,
        y: 300,
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: ".dp-expertise",
            start: "top center",
         //   markers: "true",
            toggleActions: "play none none reverse",
        },
        y: 0,
        // xPercent: 0,
        opacity: 1,
        transformOrigin: "0% 100%",
        ease: "power4",
        duration: 2,
    }
)


gsap.fromTo(
    ".dp-expertise_title", {
        scale: 1,
        xPercent: -200,
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: ".dp-expertise",
            start: "top center",
          //  markers: "true",
            toggleActions: "play none none reverse",
        },
        y: 0,
        xPercent: 0,
        opacity: 1,
        transformOrigin: "0% 100%",
        ease: "power4",
        duration: 1,
    }
)

gsap.fromTo(
    ".dp-catalog-inner", {
        scale: 1,
        y: 300,
        opacity: 0,
    }, {
        scrollTrigger: {
            trigger: ".dp-catalog",
            start: "top center",
         //   markers: "true",
            toggleActions: "play none none reverse",
        },
        y: 0,
        // xPercent: 0,
        opacity: 1,
        transformOrigin: "0% 100%",
        ease: "power4",
        duration: 2,
    }
)

gsap.fromTo(
    ".cont", {
        scale: 0,
        opacity: 0.2,
    }, {
        scrollTrigger: {
            trigger: ".dp-expertise",
            start: "top center",
         //   markers: "true",
            toggleActions: "play none none reverse",
        },
        scale: 1,
        opacity: 1,
        transformOrigin: "50% 50%",
        ease: "power4",
        duration: 2,
    }
)
// expertise section

const cont = document.querySelector('.cont')
const col1 = document.querySelectorAll('.col-1')
const col2 = document.querySelectorAll('.col-2')
const col3 = document.querySelectorAll('.col-3')
let tl1 = gsap.timeline({ repeat: -1 })
let tl2 = gsap.timeline({ repeat: -1 })
let tl3 = gsap.timeline({ repeat: -1 })
const easing = "none"
const time = 2.5
const time2 = 2.75

tl1.fromTo(col1, { yPercent: -23.5, duration: time, ease: easing }, { yPercent: 26.5, duration: time, ease: easing })

tl2.fromTo(col2, { yPercent: -33.5, duration: time2, ease: easing }, { yPercent: 16.5, duration: time2, ease: easing })

tl3.fromTo(col3, { yPercent: -40.5, duration: time, ease: easing }, { yPercent: 9.5, duration: time, ease: easing })

const slowDown = gsap.to(tl2, {
    duration: 0.75,
    timeScale: 0.1,
    // ease: "expo.out",
    paused: true
})


cont.addEventListener('mouseenter', function() {
    slowDown.play();
})

cont.addEventListener('mouseleave', function() {
    slowDown.reverse();
})

//lenis

const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 500)
})

gsap.ticker.lagSmoothing(0)
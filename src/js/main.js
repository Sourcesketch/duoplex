gsap.to('.dp-top-img svg', { 

    scrollTrigger: {
        trigger: '.dp-top-img',
        scrub: 1,
        start: 'top center-=100',
        end: "bottom bottom",
        rotation: 90,
        markers: true,
        toggleActions: 'play none reverse none',
       duration: 0.5,
        stagger: 0.075,
    }
}, 0);
gsap.to('.dp-intro__logo', { x: '100vw',
    scrollTrigger: {
        trigger: '.dp-intro__logo',
        start: 'top center-=10',
        end: "bottom bottom",
        markers: true,
        toggleActions: 'play none reverse none',
        duration: 0.5
    }
}, 0);
gsap.to('.dp-intro__content', { x: '-100vw',
    scrollTrigger: {
        trigger: '.dp-intro__content',
        start: 'top center-=1',
        end: "bottom bottom",
        markers: true,
        toggleActions: 'play none reverse none',
        
    }
});
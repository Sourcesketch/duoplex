gsap.fromTo('.dp-top-img',{transform: 'scaleX(0.9)', opacity: '0.1'}, {transform: 'scale(1)',
    scrollTrigger: {
        trigger: '.dp-top-img',
        start: 'top center-=70',
        end: "bottom bottom",
        markers: true,
        toggleActions: 'play none reverse none'
    }
});
gsap.to('.dp-intro__logo', { x: '-100vw',
    scrollTrigger: {
        trigger: '.dp-intro__logo',
        start: 'top center-=10',
        end: "bottom bottom",
        markers: true,
        toggleActions: 'play none reverse none'
    }
});
gsap.to('.dp-intro__content', { x: '100vw',
    scrollTrigger: {
        trigger: '.dp-intro__content',
        start: 'top center-=1',
        end: "bottom bottom",
        markers: true,
        toggleActions: 'play none reverse none',
        
    }
});
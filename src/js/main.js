


gsap.to(
  ".dp-intro__logo",
  {
    x: "100vw",
    scrollTrigger: {
      trigger: ".dp-intro__logo",
      start: "top-=10",
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

gsap.to(section, {
  opacity: 1,
  stagger: 0.2,
});

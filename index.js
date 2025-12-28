gsap.from("#logo", {
    x: -800,
    opacity: 0,
    duration: 1,
   
});

gsap.from(".h li", {
    y: -40,
    opacity: 0,
    duration: 1,
    delay:1,
    stagger: 0.15
});

gsap.from("#index", {
    x: -1000,
    opacity: 0,
    duration: 1.5,
    delay:2,
    stagger: 0.3
});



gsap.utils.toArray(["#About", "#Skills", "#Projects", "#Contact"]).forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 90%",
              end:"top 80%",
             markers:false,
             scrub:2,
        },
        x:-500,
        opacity: 0,
       
    });
});



(function ($) {
    "use strict";


    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);

    //Smooth Scroll
    gsap.config({
        nullTargetWarn: false,
    });
    let smoother = ScrollSmoother.create({
        smooth: 2,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
    });


    // Text Invert With Scroll 
    const split = new SplitText(".bw-split-text", {
        type: "lines"
    });
    split.lines.forEach((target) => {
        gsap.to(target, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: 'top 90%',
                end: "bottom center"
            }
        });
    });

    // Text Up Scroll 
    if ($('.text-splite-up').length > 0) {
        let splitTitleLines = gsap.utils.toArray(".text-splite-up");
        splitTitleLines.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 80%',
                    scrub: 1,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "words, lines"
            });
            gsap.set(splitTextLine, {
                perspective: 400
            });
            itemSplitted.split({
                type: "lines"
            })
            tl.from(itemSplitted.lines, {
                duration: 1,
                delay: 0.3,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1
            });
        });
    }

    // Hero Banner Content
    if ($('.hero-banner-one__content, .tp-play-up').length > 0) {
        let splitTextLines = gsap.utils.toArray(".hero-banner-one__content, .tp-play-up");

        splitTextLines.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    duration: 2,
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "lines"
            });
            gsap.set(splitTextLine, {
                perspective: 400
            });
            itemSplitted.split({
                type: "lines"
            })
            tl.from(itemSplitted.lines, {
                duration: 1,
                delay: 0.7,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1
            });
        });
    }
    // Hero Circle Btn
    if ($('.tp-btn-trigger').length > 0) {
        gsap.set(".tp-btn-bounce", {
            y: -150,
            opacity: 0
        });
        var mybtn = gsap.utils.toArray(".tp-btn-bounce");
        mybtn.forEach((btn) => {
            var $this = $(btn);
            gsap.to(btn, {
                scrollTrigger: {
                    trigger: $this.closest('.tp-btn-trigger'),
                    start: "top center",
                    markers: false
                },
                duration: 1.5,
                delay: 1,
                ease: "bounce.out",
                y: 0,
                opacity: 1,
            })
        });

    }

    // Draw Border
    let borderDraw = document.querySelectorAll('.bw-draw-border');
    borderDraw.forEach((line, index) => {
        gsap.set(line, {
            width: 0
        });
        gsap.to(line, {
            scrollTrigger: {
                trigger: '.bw-draw-border',
                start: 'top 90%',
                end: "bottom 80%",
                scrub: 1,
                markers: false,
            },
            width: "100%",
            delay: 5,
            duration: 3
        });
    });

    // Image reveal animation
    function revealAnimation(selector, axis, percent, scale) {
        gsap.utils.toArray(selector).forEach(function (revealItem) {
            // Check if the revealItem contains an image
            var image = revealItem.querySelector("img");
            if (!image) {
                console.warn("No image found in", revealItem);
                return;
            }

            var tl = gsap.timeline({
                scrollTrigger: {
                    trigger: revealItem,
                    toggleActions: "play none none reverse",
                },
            });

            // Set initial state
            tl.set(revealItem, {
                    autoAlpha: 1
                })
                .from(revealItem, {
                    duration: 1.5, // Specify duration directly
                    [axis + "Percent"]: -percent, // Use axis + "Percent" for dynamic property names
                    ease: "power2.out", // Use string for ease function
                })
                .from(image, {
                    duration: 1.5, // Specify duration directly
                    [axis + "Percent"]: percent, // Use axis + "Percent" for dynamic property names
                    scale: scale,
                    delay: -1.5, // Delay for image animation
                    ease: "power2.out", // Use string for ease function
                });
        });
    }
    // Call the function with your selectors
    revealAnimation(".reveal-right", "x", -100, 1.3);
    revealAnimation(".reveal-left", "x", 100, 1.3);
    revealAnimation(".reveal-bottom", "y", -100, 1.3);

    // hover reveal start
    const hoverItem = document.querySelectorAll(".bw-hover-image");

    function moveImage(e, hoverItem, index) {
        const item = hoverItem.getBoundingClientRect();
        const x = e.clientX - item.x;
        const y = e.clientY - item.y;
        if (hoverItem.children[index]) {
            hoverItem.children[index].style.transform = `translate(${x}px, ${y}px)`;
        }
    }
    hoverItem.forEach((item, i) => {
        item.addEventListener("mousemove", (e) => {
            setInterval(moveImage(e, item, 1), 50);
        });
    });
    $("[data-background").each(function () {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });
    // hover reveal end

})(jQuery);
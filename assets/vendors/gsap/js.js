/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Common Js
04. Menu Controls JS
05. Offcanvas Js
06. Search Js
07. cartmini Js
08. filter
09. Body overlay Js
10. Sticky Header Js
11. Theme Settings Js
12. Nice Select Js
13. Smooth Scroll Js
14. Slider Activation Area Start
15. Masonary Js
16. Wow Js
17. Counter Js
18. InHover Active Js
19. Line Animation Js
20. Video Play Js
21. Password Toggle Js
****************************************************/


(function ($) {
    "use strict";

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);

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


    // button hover animation
    $('.tp-hover-btn').on('mouseenter', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('.tp-btn-circle-dot').css({
            top: y,
            left: x
        });
    });

    $('.tp-hover-btn').on('mouseout', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        $(this).find('.tp-btn-circle-dot').css({
            top: y,
            left: x
        });
    });


    var hoverBtns = gsap.utils.toArray(".tp-hover-btn-wrapper");

    const hoverBtnItem = gsap.utils.toArray(".tp-hover-btn-item");
    hoverBtns.forEach((btn, i) => {
        $(btn).mousemove(function (e) {
            callParallax(e);
        });

        function callParallax(e) {
            parallaxIt(e, hoverBtnItem[i], 80);
        }

        function parallaxIt(e, target, movement) {
            var $this = $(btn);
            var relX = e.pageX - $this.offset().left;
            var relY = e.pageY - $this.offset().top;

            gsap.to(target, 0.5, {
                x: ((relX - $this.width() / 2) / $this.width()) * movement,
                y: ((relY - $this.height() / 2) / $this.height()) * movement,
                ease: Power2.easeOut,
            });
        }
        $(btn).mouseleave(function (e) {
            gsap.to(hoverBtnItem[i], 0.5, {
                x: 0,
                y: 0,
                ease: Power2.easeOut,
            });
        });
    });

    // button hover end


    // hover reveal start
    const hoverItem = document.querySelectorAll(".tp-hover-reveal-item");

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
    // hover reveal end


    // hover reveal start
    const hoverText = document.querySelectorAll(".tp-hover-reveal-text");

    function moveText(e, hoverText) {
        const item = hoverText.getBoundingClientRect();
        const x = e.clientX - item.x;
        const y = e.clientY - item.y;
        if (hoverText.children[0].children[2]) {
            hoverText.children[0].children[2].style.transform = `translate(${x}px, ${y}px)`;
        }
    }

    hoverText.forEach((item, i) => {
        item.addEventListener("mousemove", (e) => {
            setInterval(moveText(e, item), 100);
        });
    });
    // hover reveal end

    // home 1 animation started

    /* hero animation here */
    gsap.set('.tp-hero-bottom-texts', {
        x: window.innerWidth / 10
    });

    gsap.timeline({
            scrollTrigger: {
                trigger: '.tp-hero-bottom-text-animation',
                start: '30% 10%',
                end: 'bottom -10%',
                scrub: true,
                invalidateOnRefresh: true
            }
        })
        .to('.tp-hero-bottom-texts', {
            x: () => -window.innerWidth / 10
        });


    /* services animation start */
    gsap.set('.tp-services-bg-text', {
        x: window.innerWidth / 4
    });

    gsap.timeline({
            scrollTrigger: {
                trigger: '.tp-services-bg-text-animation',
                start: '0% 0%',
                end: 'bottom -10%',
                scrub: true,
                invalidateOnRefresh: true
            }
        })
        .to('.tp-services-bg-text', {
            x: () => -window.innerWidth / 10
        });

    /* portfolio animation start */
    gsap.set('.tp-portfolio-bg-text', {
        x: '25%'
    });

    gsap.timeline({
            scrollTrigger: {
                trigger: '.tp-portfolio-bg-text-animation',
                start: '-500 0%',
                end: 'bottom -10%',
                scrub: true,
                invalidateOnRefresh: true
            }
        })
        .to('.tp-portfolio-bg-text', {
            x: '-80%'
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '.portfolio-list-scroll-text-animation',
                start: '-500 0%',
                end: 'bottom -10%',
                scrub: true,
                invalidateOnRefresh: true
            }
        })
        .to('.portfolio-list-scroll-text', {
            x: '-80%'
        });



    function mediaSize() {

        if ($(window).width() > 1199) {
            console.log('hi')
            if ($('#pagepiling').length > 0) {

                $('#pagepiling').pagepiling({
                    menu: '#onePageMenu',
                    anchors: ['cases', 'about', 'services', 'projects', 'skills', 'testimonial', 'contact'],
                    navigation: {
                        'position': 'right',
                        'tooltips': ['Cases', 'About', 'Services', 'Projects', 'Testimonial', 'Contact']
                    },
                    afterRender: function () {
                        $('#pp-nav').addClass('custom');
                        pageScrollIndecator();
                    },
                    onLeave: function () {
                        pageScrollIndecator();
                    },
                    afterLoad: function (anchorLink, index) {
                        if (index > 1) {
                            $('#pp-nav').removeClass('custom');
                        } else {
                            $('#pp-nav').addClass('custom');
                        }

                    }
                });

                function pageScrollIndecator() {
                    var allSection = $('#pagepiling .section');
                    var sectionCount = parseInt(allSection.length);

                    var activeSection = $('#pagepiling').children('.section.active');
                    var activeCount = allSection.index(activeSection);

                    var activeIndex = parseInt(activeCount) + 1;
                    var scale = (activeIndex / sectionCount).toFixed(3);

                    $('.pagescroll-indication span').css({
                        'transform': 'scaleY(' + scale + ')'
                    });
                }

            }

        };

        if (window.matchMedia('(min-width: 768px)').matches) {
            const panels = document.querySelectorAll('.col-custom')
            panels.forEach(panel => {
                panel.addEventListener('mouseenter', () => {
                    removeActiveClasses()
                    panel.classList.add('active')
                })
            })

            function removeActiveClasses() {
                panels.forEach(panel => {
                    panel.classList.remove('active')
                })
            }
        } else {
            $(".col-custom ").addClass("active");
        }
    }
    mediaSize();
    window.addEventListener('resize', mediaSize, false);


    // button effect
    var mouse = {
        x: 0,
        y: 0
    };
    var pos = {
        x: 0,
        y: 0
    };
    var ratio = 0.65;
    var active = false;

    var allParalax = document.querySelectorAll('.parallax-wrap');

    allParalax.forEach(function (e) {
        e.addEventListener("mousemove", mouseMoveBtn);
    })

    function mouseMoveBtn(e) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        mouse.x = e.pageX;
        mouse.y = e.pageY - scrollTop;

    }
    gsap.ticker.add(updatePosition);

    $(".parallax-wrap").mouseenter(function (e) {
        gsap.to(this, {
            duration: 0.3,
            scale: 2
        });
        gsap.to($(this).children(), {
            duration: 0.3,
            scale: 0.5
        });
        active = true;
    });

    $(".parallax-wrap").mouseleave(function (e) {
        gsap.to(this, {
            duration: 0.3,
            scale: 1
        });
        gsap.to($(this).children(), {
            duration: 0.3,
            scale: 1,
            x: 0,
            y: 0
        });
        active = false;
    });

    function updatePosition() {
        pos.x += (mouse.x - pos.x) * ratio;
        pos.y += (mouse.y - pos.y) * ratio;

    }


    $(".parallax-wrap").mousemove(function (e) {
        parallaxCursorBtn(e, this, 2);
        callParallaxBtn(e, this);
    });

    function callParallaxBtn(e, parent) {
        parallaxItBtn(e, parent, parent.querySelector(".parallax-element"), 20);
    }

    function parallaxItBtn(e, parent, target, movement) {
        var boundingRect = parent.getBoundingClientRect();
        var relX = e.pageX - boundingRect.left;
        var relY = e.pageY - boundingRect.top;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        gsap.to(target, {
            duration: 0.3,
            x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
            y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.height * movement,
            ease: Power2.easeOut
        });
    }

    function parallaxCursorBtn(e, parent, movement) {
        var rect = parent.getBoundingClientRect();
        var relX = e.pageX - rect.left;
        var relY = e.pageY - rect.top;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
        pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2 - scrollTop) / movement;
    }


    var moveSection = $(".tp-mouse-move-section");
    var moveSectionElements = $(".tp-mouse-move-element");

    if (moveSection && moveSectionElements) {
        moveSection.on("mousemove", function (e) {
            var x = e.clientX
            var y = e.clientY
            let viewportWidth = window.innerWidth;
            let viewportHeight = window.innerHeight;
            let center = viewportWidth / 2
            let centerHeight = innerHeight / 2

            if (x > center) {
                gsap.to(moveSectionElements, {
                    x: 20,
                    duration: 2,
                    ease: "power4.out"
                })
            } else {
                gsap.to(moveSectionElements, {
                    x: -20,
                    scale: 1.1,
                    duration: 2,
                    ease: "power4.out"
                })
            }
            if (y > centerHeight) {
                gsap.to(moveSectionElements, {
                    y: 5,
                    duration: 2,
                    ease: "power4.out"
                })
            } else {
                gsap.to(moveSectionElements, {
                    y: -5,
                    duration: 2,
                    ease: "power4.out"
                })
            }
        });
    }


    // footer btn move

    var footerBtnSection = $('.tp-mouse-move-btn-section');
    var footerBtn = $('.tp-mouse-move-btn');

    footerBtnSection.on("mousemove", function (e) {

        var x = e.clientX
        var y = e.clientY
        let viewportWidth = window.innerWidth;
        let viewportHeight = window.innerHeight;
        let center = viewportWidth / 2
        let centerHeight = innerHeight / 2

        if (x > center) {
            gsap.to(footerBtn, {
                x: 100,
                duration: 2,
                ease: "power4.out"
            })
        } else {
            gsap.to(footerBtn, {
                x: -100,
                duration: 2,
                ease: "power4.out"
            })
        }
        if (y > centerHeight) {
            gsap.to(footerBtn, {
                y: 100,
                duration: 2,
                ease: "power4.out"
            })
        } else {
            gsap.to(footerBtn, {
                y: -100,
                duration: 2,
                ease: "power4.out"
            })
        }

    })

    // cursor
    if (!$('body').hasClass("hide-magic-cursor")) {
        var mouse = {
            x: 0,
            y: 0
        };
        var pos = {
            x: 0,
            y: 0
        };
        var ratio = 0.65;

        var magicCursor = document.getElementById("awesome-cursor-circle");

        gsap.set(magicCursor, {
            xPercent: -50,
            yPercent: -50,
            scale: 0.5,
            borderWidth: '4px'
        });

        document.addEventListener("mousemove", mousemoveHandler);

        function mousemoveHandler(e) {

            let tl = gsap.timeline({
                defaults: {
                    x: e.clientX,
                    y: e.clientY,
                }
            })

            tl.to(magicCursor, {
                ease: "power2.out"
            })
        }

        $(".parallax-wrap").mouseenter(function (e) {
            gsap.to(this, {
                duration: 0.3,
                scale: 2
            });
            gsap.to(magicCursor, {
                duration: 0.3,
                scale: 0.9,
                borderWidth: '2px',
                opacity: 1
            });
            gsap.to($(this).children(), {
                duration: 0.3,
                scale: 0.5
            });
            active = true;
        });

        $(".parallax-wrap").mouseleave(function (e) {
            gsap.to(magicCursor, {
                duration: 0.3,
                scale: 0.5,
                borderWidth: '4px',
                opacity: 1,
                borderColor: 'rgba(255,255,255,.5)'
            });
            active = false;
        });

        $(".parallax-wrap").mousemove(function (e) {
            parallaxCursor(e, this, 2);
            callParallax(e, this);
        });

        function callParallax(e, parent) {
            parallaxIt(e, parent, parent.querySelector(".parallax-element"), 20);
        }

        function parallaxIt(e, parent, target, movement) {
            var boundingRect = parent.getBoundingClientRect();
            var relX = e.pageX - boundingRect.left;
            var relY = e.pageY - boundingRect.top;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            gsap.to(target, {
                duration: 0.3,
                x: (relX - boundingRect.width / 2) / boundingRect.width * movement,
                y: (relY - boundingRect.height / 2 - scrollTop) / boundingRect.height * movement,
                ease: Power2.easeOut
            });
        }

        function parallaxCursor(e, parent, movement) {
            var rect = parent.getBoundingClientRect();
            var relX = e.pageX - rect.left;
            var relY = e.pageY - rect.top;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
            pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2 - scrollTop) / movement;
            gsap.to(magicCursor, {
                duration: 0.3,
                x: pos.x,
                y: pos.y
            });
        }
    }

    $('.tp-text-hover-effect nav ul li a').each(function () {
        var innerText = $(this).text();
        var elements = innerText.split('');

        var $div = $('<div class="tp-text-hover-effect-word">');

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var divElement = $("<div class='char-wrapper'></div>");
            var divElement2 = $("<div class='single-char'></div>");


            if (' ' === elements[i]) {
                var $span = $('<span clas="hi">').html('&nbsp;').attr('data-hover', ' ');
            } else {
                var $span = $('<span>').text(element).attr('data-hover', element);
            }

            divElement2.append($span);
            divElement.append(divElement2)
            $div.append(divElement);
        }

        $(this).html($div);
    });

    $('.tp-3dbtn-hover-effect a').each(function () {
        var innerText = $(this).text();
        var elementsWord = innerText.split(' ');
        var $div = $('<div class="tp-3dtext-hover-effect-word d-flex">');

        for (let i = 0; i < elementsWord.length; i++) {
            const elements = elementsWord[i].split('');

            for (let index = 0; index < elements.length + 1; index++) {
                var element = elements[index];

                var divElement = $("<div class='char-wrapper'></div>");
                var divElement2 = $("<div class='single-char'></div>");

                if (index == elements.length) {
                    var $span = $('<span clas="hi">').html('&nbsp;').attr('data-hover', ' sfas');
                } else {
                    var $span = $('<span>').text(element).attr('data-hover', element);

                }

                divElement2.append($span);
                divElement.append(divElement2)
                $div.append(divElement);
            }

        }
        $(this).html($div);
    });

    let tl = gsap.timeline();

    let servicesSpanels = document.querySelectorAll('.services-panel')

    servicesSpanels.forEach((section, index) => {
        tl.to(section, {
            scrollTrigger: {
                trigger: section,
                pin: section,
                scrub: 1,
                start: 'top 10%',
                end: "bottom 67%",
                endTrigger: '.services-panel-area',
                pinSpacing: false,
                markers: false,
            },
        })
    })


    if ($('.tp-service-3__area').length > 0) {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 991px)", () => {
            gsap.to('.services-panel-pin', {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.tp-service-3__area',
                    scrub: 1,
                    start: 'top -7%',
                    end: "bottom 63%",
                    pin: '.services-panel-pin',
                    markers: false,
                }
            })
        })
    }

    if ($('.tp_title_anim').length > 0) {
        let splitTitleLines = gsap.utils.toArray(".tp_title_anim");
        splitTitleLines.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    scrub: false,
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


    if ($('.tp_text_anim p').length > 0) {
        let splitTextLines = gsap.utils.toArray(".tp_text_anim p");

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

    // portfolio panel
    let otherSections = document.querySelectorAll('.portfolio-panel')

    otherSections.forEach((section, index) => {

        gsap.set(otherSections, {
            scale: 1
        });

        tl.to(section, {
            scale: .8,
            scrollTrigger: {
                trigger: section,
                pin: section,
                scrub: 1,
                start: 'top 10%',
                end: "bottom 60%",
                endTrigger: '.tp-project-3__area',
                pinSpacing: false,
                markers: false,
            },
        })
    })




    if ($('.tp-personal-info-pin-section').length > 0) {
        let mm = gsap.matchMedia();
        mm.add("(min-width:991px)", () => {
            gsap.to('.tp-personal-info-pin', {
                opacity: 1,
                scrollTrigger: {
                    trigger: '.tp-personal-info-pin-section',
                    end: "bottom bottom",
                    scrub: 1,
                    start: 'top 10%',
                    pin: '.tp-personal-info-pin',
                    markers: false
                }
            })
        })
    }


    // blog sticky

    let mm = gsap.matchMedia();
    mm.add("(min-width:991px)", () => {
        gsap.to('.tp-blog-sidebar-sticky', {
            scrollTrigger: {
                trigger: '.tp-blog-sidebar-sticky-area',
                scrub: 1,
                start: 'top 8%',
                end: "bottom 115%",
                pin: '.tp-blog-sidebar-sticky',
                markers: false
            }
        })

    })

    if ($('.tp-blog-social-sticky').length > 0) {

        let mm = gsap.matchMedia();
        mm.add("(min-width:991px)", () => {
            gsap.to('.tp-blog-social-sticky', {
                scrollTrigger: {
                    trigger: '.tp-blog-social-sticky-area',
                    scrub: 1,
                    start: 'top 10%',
                    end: "bottom bottom",
                    pin: '.tp-blog-social-sticky',
                    markers: false
                }
            })

        })
    }


    //home 1 line styles start

    // for brand
    let allHorizontalLine = document.querySelectorAll('.tp-brand-border');

    allHorizontalLine.forEach((line, index) => {
        gsap.set(line, {
            width: 0
        });
        gsap.to(line, {
            scrollTrigger: {
                trigger: line,
                start: 'top 80%',
                end: "bottom 80%",
                markers: false,
            },
            width: "100%"
        });
    });

    let allVerticalLine = document.querySelectorAll('.tp-brand-inner-border');

    allVerticalLine.forEach((line, index) => {
        gsap.set(line, {
            height: 0
        });
        gsap.to(line, {
            scrollTrigger: {
                trigger: line,
                start: 'top 80%',
                end: "bottom 80%",
            },
            height: "100%"
        });
    });

    // for services
    let allServicesHorizontalBorder = document.querySelectorAll('.tp-services-inner-border');

    allServicesHorizontalBorder.forEach((line, index) => {
        gsap.set(line, {
            height: 0
        });
        gsap.to(line, {
            scrollTrigger: {
                trigger: line,
                start: 'top 60%',
                end: "bottom 80%",
            },
            height: "100%"
        });
    });

    // services accordion
    let allServicesAccordion = document.querySelectorAll('.tp-services-accordion-border');

    allServicesAccordion.forEach((line, index) => {
        gsap.set(line, {
            height: 0
        });
        gsap.to(line, {
            scrollTrigger: {
                trigger: line,
                start: 'top 60%',
                end: "bottom 80%",
            },
            height: "100%"
        });
    });


    // services accordion
    let allServicesAccordionItem = document.querySelectorAll('.accordion-item-border');

    allServicesAccordionItem.forEach((line, index) => {
        gsap.set(line, {
            width: 0
        });
        gsap.to(line, {
            scrollTrigger: {
                trigger: '.tp-services-accordion',
                start: 'top 40%',
                end: "bottom 80%",
            },
            width: "100%"
        });
    });


    // services accordion
    let aboutLine = document.querySelectorAll('.tp-about-inner-border');

    aboutLine.forEach((line, index) => {
        gsap.set(line, {
            width: 0
        });
        gsap.to(line, {
            scrollTrigger: {
                trigger: '.tp-about-inner',
                start: 'top 40%',
                end: "bottom 80%",
                markers: false,
            },
            width: "100%"
        });
    });


    // services accordion
    let awardtLine_2 = document.querySelectorAll('.tp-award-bottom-border');

    awardtLine_2.forEach((line, index) => {
        gsap.set(line, {
            width: 0
        });
        gsap.to(line, {
            scrollTrigger: {
                trigger: '.tp-award-bottom-border',
                start: 'top 90%',
                end: "bottom 80%",
                markers: false,
            },
            width: "100%"
        });
    });


    // services accordion
    let award_tLine_3 = document.querySelectorAll('.tp-award-inner-border');

    award_tLine_3.forEach((line, index) => {
        gsap.set(line, {
            width: 0
        });
        gsap.to(line, {
            scrollTrigger: {
                trigger: '.tp-award-inner-border',
                start: 'top 90%',
                end: "bottom 80%",
                markers: false,
            },
            width: "100%"
        });
    });

    // services accordion
    let testi_Line_1 = document.querySelectorAll('.tp-testimonial-user-border');

    testi_Line_1.forEach((line, index) => {
        gsap.set(line, {
            width: 0
        });
        gsap.to(line, {
            scrollTrigger: {
                trigger: '.tp-testimonial-user-border',
                start: 'top 90%',
                end: "bottom 80%",
                markers: false,
            },
            width: "100%"
        });
    });

    // services accordion
    let footer_Line_1 = document.querySelectorAll('.tp-footer-anim-border');

    footer_Line_1.forEach((line, index) => {
        gsap.set(line, {
            width: 0
        });
        gsap.to(line, {
            scrollTrigger: {
                trigger: '.tp-footer-anim-border',
                start: 'top 90%',
                end: "bottom 80%",
                markers: false,
            },
            width: "100%"
        });
    });


    if ($('.tp-header-area').length > 0) {
        // Testimonial 3 Image Animation
        gsap.set(".tp-header-border", {
            width: 0,
        });

        gsap.to(".tp-header-border", {
            scrollTrigger: {
                trigger: ".tp-header-area",
                start: "center center",
                markers: false
            },
            duration: 1,
            ease: "none",
            width: "100%",
        })

    }


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

    if ($('.tp-btn-trigger-2').length > 0) {

        gsap.set(".tp-btn-bounce-2", {
            y: -100,
            opacity: 0
        });
        var mybtn = gsap.utils.toArray(".tp-btn-bounce-2");
        mybtn.forEach((btn) => {
            var $this = $(btn);
            gsap.to(btn, {
                scrollTrigger: {
                    trigger: $this.closest('.tp-btn-trigger-2'),
                    start: "bottom bottom",
                    markers: false
                },
                duration: 1,
                ease: "bounce.out",
                y: 0,
                opacity: 1,
            })
        });

    }

    if ($('.tp-btn-trigger-3').length > 0) {

        gsap.set(".tp-btn-bounce-3", {
            y: -100,
            opacity: 0
        });
        var mybtn = gsap.utils.toArray(".tp-btn-bounce-3");
        mybtn.forEach((btn) => {
            var $this = $(btn);
            gsap.to(btn, {
                scrollTrigger: {
                    trigger: $this.closest('.tp-btn-trigger-3'),
                    start: "-20% 20%",
                    markers: false
                },
                duration: 1,
                delay: 1.2,
                ease: "bounce.out",
                y: 0,
                opacity: 1,
            })
        });

    }

    if ($('.tp-char-animation').length > 0) {
        // 25. Title Animation
        let char_come = gsap.utils.toArray(".tp-char-animation");
        char_come.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "chars, words"
            });
            gsap.set(splitTextLine, {
                perspective: 300
            });
            itemSplitted.split({
                type: "chars, words"
            })
            tl.from(itemSplitted.chars, {
                duration: 1,
                delay: 0.5,
                x: 100,
                autoAlpha: 0,
                stagger: 0.05
            });
        });
    }

    if ($('.tp-hero-3__title span').length > 0) {

        gsap.set(".tp-hero-3__title span", {
            scale: .5,
            opacity: 0
        });
        gsap.to(".tp-hero-3__title span", {
            scrollTrigger: {
                trigger: ".tp-hero-3__title",
                start: "center center",
                markers: false
            },
            duration: 1.3,
            delay: 1,
            ease: "none",
            scale: 1,
            opacity: 1,
        })

    }

    if ($('.contact-inner__title span').length > 0) {

        gsap.set(".contact-inner__title span", {
            scale: 0,
            opacity: 0
        });
        gsap.to(".contact-inner__title span", {
            scrollTrigger: {
                trigger: ".contact-inner__title",
                start: "center center",
                markers: false
            },
            duration: 1.3,
            delay: 1.2,
            ease: "none",
            scale: 1,
            opacity: 1,
        })

    }


    if ($('.tp_wrap_anim').length > 0) {
        // 25. Title Animation
        let char_come = gsap.utils.toArray(".tp_wrap_anim p");
        char_come.forEach(splitTextLine => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: splitTextLine,
                    start: 'top 90%',
                    end: 'bottom 60%',
                    scrub: false,
                    markers: false,
                    toggleActions: 'play none none none'
                }
            });

            const itemSplitted = new SplitText(splitTextLine, {
                type: "chars, words"
            });
            gsap.set(splitTextLine, {
                perspective: 300
            });
            itemSplitted.split({
                type: "chars, words"
            })
            tl.from(itemSplitted.words, {
                duration: 1,
                delay: 1,
                x: 100,
                autoAlpha: 0,
                stagger: 0.05
            });
        });
    }


    var text_slider_option = document.querySelector(".tp-text-slider-4-active");
    if (text_slider_option) {

        var text_slider_speed = 300000
        var text_slider_autoplay = true
        var loop_value = true
        var data_itemshow = "auto"

        if (text_slider_option.getAttribute("data-sliderSpeed")) {
            text_slider_speed = parseInt(text_slider_option.getAttribute("data-sliderSpeed"));
        }
        if (text_slider_option.getAttribute("data-autoPlay")) {
            text_slider_autoplay = text_slider_option.getAttribute("data-autoPlay")
        }

        if (text_slider_option.getAttribute("data-loop")) {
            loop_value = text_slider_option.getAttribute("data-loop")
        }
        if (text_slider_option.getAttribute("data-itemShow")) {
            data_itemshow = text_slider_option.getAttribute("data-itemShow")
        }


        if (text_slider_autoplay == 'true') {
            var text_slider = new Swiper(".tp-text-slider-4-active", {
                loop: loop_value,
                speed: text_slider_speed,
                allowTouchMove: false,
                slidesPerView: data_itemshow,
                slidesPerGroup: 10,
                spaceBetween: 20,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: true,
                }
            });
        } else {
            var text_slider = new Swiper(".tp-text-slider-4-active", {
                loop: loop_value,
                speed: text_slider_speed,
                allowTouchMove: false,
                slidesPerView: data_itemshow,
                slidesPerGroup: 10,
                spaceBetween: 20,
                autoplay: false,
            });
        }
    };


    var text_slider_option = document.querySelector(".tp-footer-5-slide-active");

    if (text_slider_option) {

        var text_slider_speed = 2000000
        var text_slider_autoplay = true
        var loop_value = true
        var data_itemshow = "auto"

        if (text_slider_option.getAttribute("data-sliderSpeed")) {
            text_slider_speed = parseInt(text_slider_option.getAttribute("data-sliderSpeed"));
        }
        if (text_slider_option.getAttribute("data-autoPlay")) {
            text_slider_autoplay = text_slider_option.getAttribute("data-autoPlay")
        }

        if (text_slider_option.getAttribute("data-loop")) {
            loop_value = text_slider_option.getAttribute("data-loop")
        }
        if (text_slider_option.getAttribute("data-itemShow")) {
            data_itemshow = text_slider_option.getAttribute("data-itemShow")
        }


        if (text_slider_autoplay == 'true') {
            var text_slider = new Swiper(".tp-footer-5-slide-active", {
                loop: loop_value,
                speed: text_slider_speed,
                allowTouchMove: false,
                slidesPerView: data_itemshow,
                slidesPerGroup: 10,
                spaceBetween: 20,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: true,
                }
            });
        } else {
            var text_slider = new Swiper(".tp-footer-5-slide-active", {
                loop: loop_value,
                speed: text_slider_speed,
                allowTouchMove: false,
                slidesPerView: data_itemshow,
                slidesPerGroup: 10,
                spaceBetween: 20,
                autoplay: false,
            });
        }
    };


    $('.tp-project-5-title-wrap .tp-project-5-title-box').on("mouseenter", function () {
        $('#tp-project-5-thumb-wrap').removeClass().addClass($(this).attr('rel'));
        $(this).addClass('active').siblings().removeClass('active');
    });


    if ($('.tp-project-5-2-area').length > 0) {
        let project_text = gsap.timeline({
            scrollTrigger: {
                trigger: ".tp-project-5-2-area",
                start: 'top center-=350',
                end: "bottom 150%",
                pin: ".tp-project-5-2-title",
                markers: false,
                pinSpacing: false,
                scrub: 1,
            }
        })
        project_text.set(".tp-project-5-2-title", {
            scale: .6,
            duration: 2
        })
        project_text.to(".tp-project-5-2-title", {
            scale: 1,
            duration: 2
        })
        project_text.to(".tp-project-5-2-title", {
            scale: 1,
            duration: 2
        }, "+=2")
    }



    if ($('#showcase-slider-main').length > 0) {

        const showcaseSwiper = new Swiper('#showcase-slider', {
            direction: "horizontal",
            loop: true,
            slidesPerView: 'auto',
            touchStartPreventDefault: false,
            speed: 1000,
            effect: 'fade',
            autoplay: {
                delay: 5000
            },
            mousewheel: true,
            simulateTouch: true,
            navigation: {
                clickable: true,
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
            pagination: {
                el: '.tp-slider-dot',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<div class="' + className + '"></div>';
                },
            },
            on: {
                slidePrevTransitionStart: function () {

                    $('.tp-slider-dot').find('.swiper-pagination-bullet').each(function () {
                        if (!$(this).hasClass("swiper-pagination-bullet-active")) {
                            $('#trigger-slides .swiper-slide-active').find('div').first().each(function () {
                                if (!$(this).hasClass("active")) {
                                    $(this).trigger('click');
                                }
                            });

                            $('#trigger-slides .swiper-slide-duplicate-active').find('div').first().each(function () {
                                if (!$(this).hasClass("active")) {
                                    $(this).trigger('click');
                                }
                            });
                        }
                    });

                },
                slideNextTransitionStart: function () {

                    $('.tp-slider-dot').find('.swiper-pagination-bullet').each(function () {
                        if (!$(this).hasClass("swiper-pagination-bullet-active")) {
                            $('#trigger-slides .swiper-slide-active').find('div').first().each(function () {
                                if (!$(this).hasClass("active")) {
                                    $(this).trigger('click');
                                }
                            });

                            $('#trigger-slides .swiper-slide-duplicate-active').find('div').first().each(function () {
                                if (!$(this).hasClass("active")) {
                                    $(this).trigger('click');
                                }
                            });
                        }
                    });

                }
            },
        });

        var vertex = 'varying vec2 vUv; void main() {  vUv = uv;  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );	}';
        var fragment = `
			varying vec2 vUv;
		
			uniform sampler2D currentImage;
			uniform sampler2D nextImage;
			uniform sampler2D disp;
			uniform float dispFactor;
			uniform float effectFactor;
			uniform vec4 resolution;
		
			void main() {
		
				vec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
		
				vec4 disp = texture2D(disp, uv);
				vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
				vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
				vec4 _currentImage = texture2D(currentImage, distortedPosition);
				vec4 _nextImage = texture2D(nextImage, distortedPosition2);
				vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
		
				gl_FragColor = finalTexture; }
		
			`;

        var gl_canvas = new WebGL({
            vertex: vertex,
            fragment: fragment,
        });

        var addEvents = function () {

            var triggerSlide = Array.from(document.getElementById('trigger-slides').querySelectorAll('.slide-wrap'));
            gl_canvas.isRunning = false;

            triggerSlide.forEach((el) => {

                el.addEventListener('click', function () {

                    if (!gl_canvas.isRunning) {

                        gl_canvas.isRunning = true;

                        document.getElementById('trigger-slides').querySelectorAll('.active')[0].className = '';
                        this.className = 'active';

                        var slideId = parseInt(this.dataset.slide, 10);

                        gl_canvas.material.uniforms.nextImage.value = gl_canvas.textures[slideId];
                        gl_canvas.material.uniforms.nextImage.needsUpdate = true;

                        gsap.to(gl_canvas.material.uniforms.dispFactor, {
                            duration: 1,
                            value: 1,
                            ease: 'Sine.easeInOut',
                            onComplete: function () {
                                gl_canvas.material.uniforms.currentImage.value = gl_canvas.textures[slideId];
                                gl_canvas.material.uniforms.currentImage.needsUpdate = true;
                                gl_canvas.material.uniforms.dispFactor.value = 0.0;
                                gl_canvas.isRunning = false;
                            }
                        });

                    }

                });

            });

        };

        addEvents();
    }


    var portfolio_slider = new Swiper('.portfolio-slider-2-active', {
        spaceBetween: 80,
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        mousewheel: true,
        speed: 700,
        centerMode: true,
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            '1400': {
                slidesPerView: 2,
            },
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 1,
                centeredSlides: false,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },
        // scrollbar
        scrollbar: {
            el: ".tp-scrollbar",
            clickable: true,
        },

    });

    var portfolio_slider_2 = new Swiper('.portfolio-slider-3-active', {
        spaceBetween: 30,
        slidesPerView: 4,
        loop: true,
        mousewheel: true,
        speed: 700,
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            '1400': {
                slidesPerView: 4,
            },
            '1200': {
                slidesPerView: 4,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
            '0': {
                slidesPerView: 1,
            },
        },

        // scrollbar
        scrollbar: {
            el: ".tp-scrollbar",
            clickable: true,
        },

    });

    if ($('.tp-port-3-area').length > 0) {
        let mm = gsap.matchMedia();
        mm.add("(min-width: 1199px)", () => {
            ScrollTrigger.create({
                trigger: ".tp-port-3-area",
                start: "top -60%",
                end: "bottom 120%",
                pin: ".tp-port-3-content-left",
                pinSpacing: false,
            });
        })
    }

    // Text Invert With Scroll 
    const split = new SplitText(".tp_text_invert, .tp_text_invert_2", {
        type: "lines"
    });

    split.lines.forEach((target) => {
        gsap.to(target, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: 'top 85%',
                end: "bottom center"
            }
        });
    });


    $('.tp-project-4-2-item').on("mouseenter", function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    $('.tp-project-4-2-item').on("mouseleave", function () {
        $('.tp-project-4-2-item').removeClass('active').addClass('active');
    });

    $(document).ready(function () {
        var st = $(".tp-split-text");
        if (st.length == 0) return;
        gsap.registerPlugin(SplitText);
        st.each(function (index, el) {
            el.split = new SplitText(el, {
                type: "lines,words,chars",
                linesClass: "tp-split-line"
            });
            gsap.set(el, {
                perspective: 400
            });

            if ($(el).hasClass('tp-split-in-right')) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "50",
                    ease: "Back.easeOut",
                });
            }
            if ($(el).hasClass('tp-split-in-left')) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    x: "-50",
                    ease: "circ.out",
                });
            }
            if ($(el).hasClass('tp-split-in-up')) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "80",
                    ease: "circ.out",
                });
            }
            if ($(el).hasClass('tp-split-in-down')) {
                gsap.set(el.split.chars, {
                    opacity: 0,
                    y: "-80",
                    ease: "circ.out",
                });
            }
            el.anim = gsap.to(el.split.chars, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                },
                x: "0",
                y: "0",
                rotateX: "0",
                scale: 1,
                opacity: 1,
                duration: 0.4,
                stagger: 0.02,
            });
        });
    });


    $('.cursor-style').on("mouseenter", function () {
        $('body').addClass('cursor-white')
    });
    $('.cursor-style').on("mouseleave", function () {
        $('body').removeClass('cursor-white')
    });


})(jQuery);
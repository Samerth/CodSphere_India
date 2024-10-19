! function(e) {
    "use strict";

    function s(e) {
        return 10 > Number(e) ? "0" + e : e
    }
    e(document).ready(function() {
        e(".page-header").hasClass("fixed-header") && e(".page-main").css("padding-top", e(".page-header").outerHeight()), e(".mega-menu-link.has-dropdown").on("click", function() {
            e(this).parent("li").hasClass("dropdown-open") ? (e(this).parent("li").removeClass("dropdown-open"), e(this).siblings(".dropdown-menu-items").slideUp()) : (e(".mega-menu-items li").removeClass("dropdown-open"), e(".dropdown-menu-items").slideUp(), e(this).parent("li").addClass("dropdown-open"), e(this).siblings(".dropdown-menu-items").slideDown())
        }), e(".navbar-toggler").on("click", function() {
            e(this).toggleClass("active"), e(".page-header").toggleClass("mega-menu-open"), e("body").toggleClass("dark-screen"), e(this).hasClass("active") && gsap.from(".mega-menu-link", {
                delay: .1,
                opacity: 0,
                rotate: 45,
                duration: .3,
                stagger: .1,
                y: "100%",
                easing: "back"
            })
        });
        let t = 0;

        function r() {
            let r = new Date,
                i = -(r.getTimezoneOffset() / 60),
                a = `${s(r.getHours())}<span class="hour-ticker">:</span>${s(r.getMinutes())} <span class="hour-gmt">(GMT${i>0?"+"+i:"-"+i})</span>`;
            t !== a && (e(".current-hour").html(a), t = a)
        }
        r(), setInterval(() => {
                r()
            }, 5e3), e(".partner-slider").length && new Swiper(".partner-slider", {
                spaceBetween: 30,
                draggable: !0,
                grabCursor: !0,
                loop: !0,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: !1
                },
                breakpoints: {
                    0: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    575: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    992: {
                        slidesPerView: 4
                    },
                    1200: {
                        slidesPerView: 5
                    },
                    1600: {
                        slidesPerView: 6
                    },
                    2e3: {
                        slidesPerView: 7
                    },
                    2400: {
                        slidesPerView: 8
                    },
                    3e3: {
                        slidesPerView: 9
                    },
                    3400: {
                        slidesPerView: 10
                    }
                }
            }), e(".team-slider").length && new Swiper(".team-slider", {
                spaceBetween: 30,
                draggable: !0,
                grabCursor: !0,
                loop: !0,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: !1
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1.18
                    },
                    575: {
                        slidesPerView: 1.1
                    },
                    992: {
                        slidesPerView: 1.3
                    },
                    1200: {
                        slidesPerView: 1.4
                    },
                    1400: {
                        slidesPerView: 1.5
                    },
                    1600: {
                        slidesPerView: 1.6
                    },
                    1800: {
                        slidesPerView: 1.8
                    },
                    2e3: {
                        slidesPerView: 2.2
                    },
                    2400: {
                        slidesPerView: 2.4
                    },
                    3e3: {
                        slidesPerView: 2.6
                    }
                }
            }), ! function s() {
                let t = e(".cursor")[0],
                    r = e(".cursor--normal").html(),
                    i = e(".cursor--link").html(),
                    a = e(".global-cases-img"),
                    o = "NORMALCURSOR",
                    l = "LINKCURSOR",
                    n = null,
                    c = null;
                document.addEventListener("mousemove", function s(d) {
                    let $ = d.target,
                        u = gsap.timeline(),
                        g = gsap.timeline(),
                        m = {
                            x: d.clientX,
                            y: d.clientY,
                            ease: "power2.out"
                        };
                    if ($.closest(".case-item") && $.closest(".case-item").hasAttribute("data-img-src")) {
                        let p = $.closest(".case-item").getAttribute("data-img-src");
                        c !== p && (c = p, a.find("img").attr("src", p)), g.to(a, 0, {
                            ease: m.ease,
                            y: m.y
                        }), $.closest(".case-item").classList.contains("style-2") ? a.addClass("small-img") : a.removeClass("small-img"), a.addClass("active")
                    } else a.removeClass("active");
                    if ($.closest(".link-cursor") || $.classList.contains("link-cursor")) n !== l && (t.innerHTML = i, n = l), u.to(t, 0, {
                        opacity: 1,
                        ...m
                    });
                    else if ($.closest(".has-cursor") || $.classList.contains("has-cursor")) {
                        let h = $.closest(".has-cursor").getAttribute("linked-cursor-id");
                        u.to(t, 0, {
                            opacity: 1,
                            ...m
                        }), h && e("[data-cursor-id=" + h + "]").length ? t.innerHTML = e("[data-cursor-id=" + h + "]")[0].innerHTML : t.innerHTML = r
                    } else $.closest("input") || "input" === $.tagName.toLowerCase() || $.closest("textarea") || "textarea" === $.tagName.toLowerCase() ? u.to(t, 0, {
                        opacity: 0,
                        ...m
                    }) : (n !== o && (t.innerHTML = r, n = o), u.to(t, 0, {
                        opacity: 1,
                        ...m
                    }), $.closest("a") && (!$.closest("a").classList.contains("has-cursor") || !$.closest("a").classList.contains("link-cursor")) || $.closest("button") && (!$.closest("button").classList.contains("has-cursor") || !$.closest("button").classList.contains("link-cursor")) || $.closest("label") && $.closest("label").classList.contains("clickable") ? e(".cursor .normalCursor").addClass("cursor-hover") : e(".cursor .normalCursor").removeClass("cursor-hover"), $.closest("a") && $.closest("a").classList.contains("cursor-dark") || $.closest("button") && $.closest("button").classList.contains("cursor-dark") ? e(".cursor .normalCursor").addClass("cursor-dark") : e(".cursor .normalCursor").removeClass("cursor-dark"))
                }), document.addEventListener("mouseleave", function e() {
                    gsap.to(t, {
                        opacity: 0
                    })
                })
            }(),
            function s() {
                let t = e(".hover-underline");
                for (let r = 0; r < t.length; r++) t.eq(r).find(".link-text").length && t.eq(r).prepend(`<span class="link-text-hidden">${t.eq(r).find(".link-text").html()}</span>`)
            }(), gsap.from(".heading-titles .title", {
                y: 100,
                opacity: 0
            }), gsap.from(".heading-titles .title-sub2", {
                y: 50,
                delay: .3,
                opacity: 0
            }), gsap.from(".heading-titles .title-sub", {
                y: 50,
                delay: .3,
                opacity: 0
            }), gsap.from(".heading-titles .heading-keys", {
                y: 50,
                delay: .3,
                opacity: 0
            }), e(window).width() > 992 && (gsap.to(".blog-main .text, .service-block .text", {
                y: -.1 * ScrollTrigger.maxScroll(window),
                ease: "none",
                scrollTrigger: {
                    start: 0,
                    end: "max",
                    invalidateOnRefresh: !0,
                    scrub: 0
                }
            }), gsap.to(".new-case-item .text", {
                y: -.5 * ScrollTrigger.maxScroll(window),
                ease: "none",
                scrollTrigger: {
                    start: 0,
                    end: "max",
                    invalidateOnRefresh: !0,
                    scrub: 0
                }
            }), gsap.to(".new-case-item .img img", {
                y: .2 * ScrollTrigger.maxScroll(window),
                ease: "none",
                scrollTrigger: {
                    start: 0,
                    end: "max",
                    invalidateOnRefresh: !0,
                    scrub: 0
                }
            }), gsap.fromTo(".video-block", {
                scale: .95
            }, {
                scrollTrigger: {
                    trigger: ".about-video",
                    scrub: !0,
                    start: "top 70%",
                    end: "30% start"
                },
                scale: 1,
                duration: 1
            })), gsap.utils.toArray(".back-animation").forEach(e => {
                gsap.fromTo(e, {
                    width: "100%"
                }, {
                    scrollTrigger: {
                        trigger: e,
                        start: "top 80%"
                    },
                    duration: 1,
                    width: "0"
                })
            }), gsap.utils.toArray(".blog-grid-item").forEach(e => {
                gsap.from(e, {
                    scrollTrigger: {
                        trigger: e,
                        start: "top 80%",
                        end: "bottom end"
                    },
                    y: 200,
                    opacity: 0
                })
            }), gsap.utils.toArray(".section-title-container").forEach(e => {
                gsap.from(e, {
                    y: "100%",
                    scrollTrigger: {
                        trigger: e,
                        start: "top 80%"
                    },
                    ease: "expo",
                    opacity: 0,
                    duration: 1
                })
            }), gsap.utils.toArray(".case-item").forEach(e => {
                gsap.fromTo(e, {
                    y: 100,
                    opacity: 0
                }, {
                    scrollTrigger: {
                        trigger: e,
                        start: "top 90%",
                        end: "bottom 70%",
                        scrub: !0
                    },
                    opacity: 1,
                    y: 0
                })
            }), e(".sticky").parents().css("overflow", "visible")
    }), e(window).on("resize", function() {}), e(window).on("scroll", function() {}), e(window).on("load", function() {})
}(window.jQuery), document.getElementById("form-file").addEventListener("change", function() {
    var e = this.files[0].name;
    document.getElementById("file-name").textContent = e
});
/* ==========================================================
   PEMBIAYAAN PERIBADI-i
   PREMIUM LANDING PAGE
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===========================================
       LOADER
    =========================================== */

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    });

    /* ===========================================
       STICKY NAVBAR
    =========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.classList.add("active");

        } else {

            header.classList.remove("active");

        }

    });

    /* ===========================================
       SCROLL TO TOP
    =========================================== */

    const scrollTop = document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            scrollTop.classList.add("show");

        } else {

            scrollTop.classList.remove("show");

        }

    });

    scrollTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ===========================================
       FAQ ACCORDION
    =========================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            faqItems.forEach(i => {

                if (i !== item) {

                    i.classList.remove("active");

                }

            });

            item.classList.toggle("active");

        });

    });

    /* ===========================================
       SCROLL REVEAL
    =========================================== */

    const revealElements = document.querySelectorAll(

        ".card, .item, .glass-card, .faq-item, .cta-box"

    );

    function reveal() {

        const trigger = window.innerHeight * 0.85;

        revealElements.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if (top < trigger) {

                el.classList.add("active");

                el.classList.add("reveal");

            }

        });

    }

    window.addEventListener("scroll", reveal);

    reveal();

    /* ===========================================
       ACTIVE MENU
    =========================================== */

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;

            const height = section.clientHeight;

            if (pageYOffset >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (

                link.getAttribute("href") === "#" + current

            ) {

                link.classList.add("active");

            }

        });

    });

    /* ===========================================
       MOBILE MENU
    =========================================== */

    const mobileMenu = document.querySelector(".mobile-menu");

    const nav = document.querySelector("nav");

    mobileMenu.addEventListener("click", () => {

        nav.classList.toggle("show");

    });

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("show");

        });

    });

    /* ===========================================
       FORM SUBMIT
    =========================================== */

    const form = document.getElementById("leadForm");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const nama = document.getElementById("nama").value.trim();

        const umur = document.getElementById("umur").value.trim();

        const sektor = document.getElementById("sektor").value;

        if (nama === "") {

            alert("Sila masukkan nama.");

            return;

        }

        if (umur === "") {

            alert("Sila masukkan umur.");

            return;

        }

        if (sektor === "") {

            alert("Sila pilih sektor pekerjaan.");

            return;

        }

        /* =======================================
           AUTO WHATSAPP
        ======================================= */

        const phone = "601140023811"; // Tukar jika perlu

        const message =
`Assalamualaikum.

Saya ingin membuat semakan awal Pembiayaan Peribadi-i.

Nama : ${nama}

Umur : ${umur}

Sektor : ${sektor}`;

        window.open(

            "https://wa.me/" +

            phone +

            "?text=" +

            encodeURIComponent(message),

            "_blank"

        );

    });

       /* ===========================================
       FLOATING WHATSAPP
    =========================================== */

    const floatingWhatsapp = document.getElementById("whatsappButton");

    if (floatingWhatsapp) {

        floatingWhatsapp.addEventListener("click", function (e) {

            e.preventDefault();

            window.open(
                "https://wa.me/601140023811",
                "_blank"
            );

        });

    }

    /* ===========================================
       BUTTON RIPPLE EFFECT
    =========================================== */

    const buttons = document.querySelectorAll(

        ".primary-btn, .submit-btn, .nav-btn"

    );

    buttons.forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            const rect = this.getBoundingClientRect();

            ripple.style.left = (e.clientX - rect.left) + "px";
            ripple.style.top = (e.clientY - rect.top) + "px";

            ripple.classList.add("ripple");

            this.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        });

    });

    /* ===========================================
       HERO FADE ANIMATION
    =========================================== */

    const hero = document.querySelector(".hero");

    if (hero) {

        hero.animate(

            [

                {
                    opacity: 0,
                    transform: "translateY(40px)"
                },

                {
                    opacity: 1,
                    transform: "translateY(0)"
                }

            ],

            {

                duration: 1200,

                easing: "ease-out"

            }

        );

    }

    /* ===========================================
       PARALLAX EFFECT
    =========================================== */

    window.addEventListener("scroll", () => {

        const value = window.scrollY;

        if (hero) {

            hero.style.backgroundPositionY = value * 0.25 + "px";

        }

    });

    /* ===========================================
       DISABLE DOUBLE SUBMIT
    =========================================== */

    if (form) {

        form.addEventListener("submit", () => {

            const submitButton = document.querySelector(".submit-btn");

            submitButton.disabled = true;

            submitButton.innerHTML =

                "SEDANG MEMBUKA WHATSAPP...";

            setTimeout(() => {

                submitButton.disabled = false;

                submitButton.innerHTML =

                    "SEMAK KELAYAKAN";

            }, 2500);

        });

    }

    /* ===========================================
       COPYRIGHT YEAR
    =========================================== */

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        const year = new Date().getFullYear();

        copyright.innerHTML =

            `© ${year} Pembiayaan Peribadi-i. Hak Cipta Terpelihara.`;

    }

    /* ===========================================
       END
    =========================================== */

});                       

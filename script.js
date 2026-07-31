/* =====================================================
   PREMIUM LANDING PAGE V2.0
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       LOADER
    ========================================== */

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        if(loader){

            loader.classList.add("hidden");

        }

    });

    /* ==========================================
       STICKY HEADER EFFECT
    ========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 60){

            header.style.background = "rgba(255,255,255,.97)";
            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

        }else{

            header.style.background = "rgba(255,255,255,.92)";
            header.style.boxShadow = "0 5px 18px rgba(0,0,0,.05)";

        }

    });

    /* ==========================================
       COUNTER
    ========================================== */

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        const target = Number(counter.dataset.target);

        let current = 0;

        const speed = target / 80;

        function update(){

            current += speed;

            if(current < target){

                counter.textContent = Math.floor(current);

                requestAnimationFrame(update);

            }else{

                counter.textContent = target;

            }

        }

        update();

    });

    /* ==========================================
       FAQ
    ========================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item=>{

        const question = item.querySelector(".faq-question");

        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click",()=>{

            faqItems.forEach(other=>{

                if(other !== item){

                    other.classList.remove("active");

                    other.querySelector(".faq-answer").style.maxHeight = null;

                }

            });

            item.classList.toggle("active");

            if(item.classList.contains("active")){

                answer.style.maxHeight = answer.scrollHeight + "px";

            }else{

                answer.style.maxHeight = null;

            }

        });

    });

});

/* ==========================================
   WHATSAPP + SCROLL + ANIMATION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ===============================
       WHATSAPP NUMBER
       Tukar kepada nombor anda
    =============================== */

    const phone = "601140023811";

    const form = document.getElementById("leadForm");
    const floatingWA = document.getElementById("whatsappButton");

    function buildWhatsappMessage() {

        const nama = document.getElementById("nama").value.trim();
        const umur = document.getElementById("umur").value.trim();
        const sektor = document.getElementById("sektor").value;

        if (!nama || !umur || !sektor) {
            alert("Sila lengkapkan Nama, Umur dan Sektor Pekerjaan.");
            return null;
        }

        const message =
`Assalamualaikum.

Saya ingin membuat semakan awal Pembiayaan Peribadi-i.

Nama : ${nama}
Umur : ${umur}
Sektor : ${sektor}

Mohon staf Bank Islam menghubungi saya untuk semakan lanjut.

Terima kasih.`;

        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    }

    /* Submit Form */

    if (form) {

        form.addEventListener("submit", function(e) {

            e.preventDefault();

            const url = buildWhatsappMessage();

            if (url) {

                window.open(url, "_blank");

            }

        });

    }

    /* Floating WhatsApp */

    if (floatingWA) {

        floatingWA.addEventListener("click", function(e) {

            e.preventDefault();

            const nama = document.getElementById("nama")?.value.trim();
            const umur = document.getElementById("umur")?.value.trim();
            const sektor = document.getElementById("sektor")?.value;

            if (nama && umur && sektor) {

                const url = buildWhatsappMessage();

                if (url) {

                    window.open(url, "_blank");

                }

            } else {

                window.location.href = "#apply";

            }

        });

    }

    /* ===============================
       SCROLL TO TOP
    =============================== */

    const scrollBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollBtn.classList.add("show");

        } else {

            scrollBtn.classList.remove("show");

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ===============================
       SCROLL REVEAL
    =============================== */

    const revealElements = document.querySelectorAll(
        ".stat-card,.benefit-card,.process-card,.eligibility-card,.faq-item,.trust-item"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.15

    });

    revealElements.forEach(el => {

        el.classList.add("fade-up");

        observer.observe(el);

    });

});


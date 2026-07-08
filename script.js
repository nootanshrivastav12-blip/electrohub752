// =========================
// ELECTROHUB SCRIPT.JS
// =========================

// Navbar shadow on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(2,6,23,0.95)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";
    } else {
        header.style.background = "rgba(15,23,42,.85)";
        header.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });
});

// Reveal Animation
const reveals = document.querySelectorAll("section");

function revealSection(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }

    });

}

reveals.forEach(section=>{

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealSection);
revealSection();

// Product Hover Effect
const products = document.querySelectorAll(".product");

products.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = "translateY(0) scale(1)";

    });

});

// Category Hover Effect
const categories = document.querySelectorAll(".card");

categories.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) rotate(-1deg)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) rotate(0deg)";

    });

});

// Button Ripple Effect
document.querySelectorAll(".btn, button").forEach(btn=>{

    btn.addEventListener("click",function(e){

        const circle=document.createElement("span");

        const size=Math.max(this.clientWidth,this.clientHeight);

        circle.style.width=size+"px";
        circle.style.height=size+"px";

        circle.style.position="absolute";
        circle.style.borderRadius="50%";
        circle.style.background="rgba(255,255,255,.35)";
        circle.style.transform="scale(0)";
        circle.style.animation="ripple .6s linear";
        circle.style.pointerEvents="none";

        const rect=this.getBoundingClientRect();

        circle.style.left=(e.clientX-rect.left-size/2)+"px";
        circle.style.top=(e.clientY-rect.top-size/2)+"px";

        this.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});

// Button Position Fix
document.querySelectorAll(".btn, button").forEach(btn=>{

    btn.style.position="relative";
    btn.style.overflow="hidden";

});

// Ripple Animation
const style=document.createElement("style");

style.innerHTML=`
@keyframes ripple{

from{

transform:scale(0);
opacity:1;

}

to{

transform:scale(4);
opacity:0;

}

}
`;

document.head.appendChild(style);

// Loading Animation
window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="opacity .8s ease";
        document.body.style.opacity="1";

    },100);

});

console.log("🚀 ElectroHub Loaded Successfully");

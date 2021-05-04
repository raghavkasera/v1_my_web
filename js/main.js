//navigation menu



(() => {
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        if(event.target.classList.contains("tab-item") &&
        !event.target.classList.contains("active")) {
            const target = event.target.getAttribute("data-target");
            tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
            
            event.target.classList.add("active", "outer-shadow");

            aboutSection.querySelector(".tab-content.active").classList.remove("active")

            aboutSection.querySelector(target).classList.add("active")
        }
    })
})();

function bodyScrollingToggle(){
    document.body.classList.toggle("hidden-scrolling");
}
/*
(() => {
    
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
        if(!section.classList.contains("active")) {
            section.classList.add("hide")
        }
    })

})();*/

window.addEventListener("load", () => {
    document.querySelector(".preloader").classList.add("fade-out")
    setTimeout(() => {
        document.querySelector(".preloader").style.display="none";
    }, 600)
})
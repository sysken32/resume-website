import './style.css'

let homeBtn = document.querySelector(".home"); 
let aboutBtn = document.querySelector(".about");
let projectsBtn = document.querySelector(".projects");
let contactBtn = document.querySelector(".contact");
let myProjectsBtn = document.querySelector(".myProjects");

document.addEventListener("DOMContentLoaded", ()=>{ //All click events when pressed will jump to the related section
    myProjectsBtn?.addEventListener("click", () =>{
        let projectsSection = document.querySelector(".projects-page");
        projectsSection?.scrollIntoView({behavior: "smooth", block: "start"});
    });

    homeBtn?.addEventListener("click", () =>{
        let homeSection = document.querySelector(".home-page");
        homeSection?.scrollIntoView({behavior: "smooth", block: "start"});
    })
    aboutBtn?.addEventListener("click", () =>{
        let aboutSection = document.querySelector(".about-page");
        aboutSection?.scrollIntoView({behavior: "smooth", block: "start"});
    })

    projectsBtn?.addEventListener("click", ()=>{
        let projectsSection = document.querySelector(".projects-page");
        projectsSection?.scrollIntoView({behavior: "smooth", block: "start"});
    })

    contactBtn?.addEventListener("click", ()=>{
        let contactSection = document.querySelector(".contact-page");
        contactSection?.scrollIntoView({behavior: "smooth", block: "start"});
    })
});



window.onload = function (){ 
    const bars = document.getElementById("bars");
    const nav = document.getElementById("navbar");
    const toggleIMG = document.getElementById("toggleIMG");
    bars.addEventListener("click",() => {
        console.log(nav);
        nav.classList.toggle("hidden");
        toggleIMG.classList.toggle("hidden");
    })
};
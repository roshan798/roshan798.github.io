
function toggleNavbar() {
    const nav = document.getElementById("navbar");
    const toggleIMG = document.getElementById("toggleIMG");
    if(nav.style.display == "none"){
        nav.style.display = "block";
        toggleIMG.style.display = "none";
    }
    else{ 
        nav.style.display = "none";
        toggleIMG.style.display = "block";
    }

}

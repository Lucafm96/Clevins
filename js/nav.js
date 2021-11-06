const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="./index.html"><h2 class="brand-logo">Clevins</h2></a>
            <div class="nav-items">
                <div class="menu-item"></div>
                <div class="menu-item"></div>
                <div class="menu-item" id="menu-btn"></div>
            </div>  
            
        </div>
        <div class="links-container">
            <a href="./index.html" class="link">Inicio</a>
            <a href="./collection.html" class="link">Coleccion</a>
            <a href="./accessories.html" class="link">Accesorios</a>
        </div>
    `;
}

createNav();

const menuBtn = document.querySelector("#menu-btn");
const navigation = document.querySelector(".links-container");
const navigation_items = document.querySelectorAll(".links-container a");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigation_items.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    })
})
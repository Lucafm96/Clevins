const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="./index.html"><h2 class="brand-logo">Clevins</h2></a>
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="busca nuestros productos">
                    <button class="search-btn">Buscar</button>
                </div>
                <a href="#"><img src="img/cart.png"></a>
            </div>  
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="./index.html" class="link">Inicio</a></li>
            <li class="link-item"><a href="#" class="link">Hombre</a></li>
            <li class="link-item"><a href="#" class="link">Accesorios</a></li>
        </ul>
    `;
}

createNav();
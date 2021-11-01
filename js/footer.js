
const createFooter = () => {
    let footer = document.querySelector('footer');
    
    footer.innerHTML = `
        <div class="footer-content">
            <h2 class="logo">Clevins</h2>
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Ropa</li>
                    <li><a href="#" class="footer-link">Camisetas</a></li>
                    <li><a href="#" class="footer-link">Camisas</a></li>
                    <li><a href="#" class="footer-link">Pantalones</a></li>
                    <li><a href="#" class="footer-link">Bermudas</a></li>
                    <li><a href="#" class="footer-link">Sudaderas</a></li>
                    <li><a href="#" class="footer-link">Cazadoras</a></li>
                    <li><a href="#" class="footer-link">Calzado</a></li>
                    <li><a href="#" class="footer-link">Accesorios</a></li>
                    <li><a href="#" class="footer-link">Mas</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Accesorios</li>
                    <li><a href="#" class="footer-link">Gorras</a></li>
                    <li><a href="#" class="footer-link">Anillos</a></li>
                    <li><a href="#" class="footer-link">Pendientes</a></li>
                    <li><a href="#" class="footer-link">Colgantes</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">Nosotros</p>
        <p class="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla blanditiis 
            laboriosam eum assumenda corrupti quia dolorum ipsum, est facere sapiente 
            odio maiores in dolores, nihil officiis exercitationem error mollitia aut.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, commodi 
            amet voluptas nihil nesciunt voluptate quaerat! Aliquid tempore provident, 
            repellendus velit aspernatur, earum ab, perspiciatis amet vitae quibusdam 
            possimus dolor!
        </p>
        <p class="info">contacto - clevins@info.com</p>
        <p class="info">telefono - 463849825</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terminos y condiciones</a>
            </div>
            <div>
                <a href="#" class="social-link">instagram</a>
                <a href="#" class="social-link">facebook</a>
                <a href="#" class="social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit">Clevins, mejor tienda online de moda</p>
    `;
}

createFooter();
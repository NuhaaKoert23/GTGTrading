const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = '
            <div class="nav">
                <img src="img/GTG Trading logo.png" class="brand-logo" alt="">
                <div class="nav-items">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="search brand, product">
                        <button class="search-btn">search</button>
                    </div>
                    <a href="#"><img src="img/user.png" alt=""></a>
                    <a href="#"><img src="img/shopping-cart.png" alt=""></a>
                </div>
            </div>
            <ul class="links-container">
                <li class="link-item"><a href=" " class="link">Beds</a></li>
                <li class="link-item"><a href=" " class="link">Living</a></li>
                <li class="link-item"><a href=" " class="link">Kitchen</a></li>
                <li class="link-item"><a href=" " class="link">Laundry</a></li>
            </ul>
    ';
}

createNav ();

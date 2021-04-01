var btnMenu = document.querySelector('.fm-menu-icon-button');
var btnProduct = document.querySelector('#product');
var btnCompany = document.querySelector('#company');
var btnConnect = document.querySelector('#connect')

btnMenu.addEventListener('click', function(){
    var boxMenu = document.querySelector('.fm-menu-mobile');

    boxMenu.classList.toggle('fm-is-open')
    boxMenu.classList.toggle('fm-slideMenu')
})

btnProduct.addEventListener('click', function () {
    var boxSubMenuProduct = document.querySelector('#ProductSub');

    boxSubMenuProduct.classList.toggle('fm-is-open')
    boxSubMenuProduct.classList.toggle('fm-slideSubMenu')
})

btnCompany.addEventListener('click', function() {
    var boxSubMenuCompany = document.querySelector('#CompanySub');

    boxSubMenuCompany.classList.toggle('fm-is-open')
    boxSubMenuCompany.classList.toggle('fm-slideSubMenu')
})

btnConnect.addEventListener('click', function() {
    var boxSubMenuConnect = document.querySelector('#ConnectSub');

    boxSubMenuConnect.classList.toggle('fm-is-open')
    boxSubMenuConnect.classList.toggle('fm-slideSubMenu')
})

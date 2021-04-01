var btnMenu = document.querySelector('.fm-menu-icon-button');
var btnProduct = document.querySelector('#product');
var btnCompany = document.querySelector('#company');
var btnConnect = document.querySelector('#connect')

btnMenu.addEventListener('click', function(){
    var boxMenu = document.querySelector('.fm-menu-mobile');

    boxMenu.classList.toggle('fm-is-open')
})

btnProduct.addEventListener('click', function () {
    var boxSubMenuProduct = document.querySelector('#ProductSub');

    boxSubMenuProduct.classList.toggle('fm-is-open')
})

btnCompany.addEventListener('click', function() {
    var boxSubMenuCompany = document.querySelector('#CompanySub');

    boxSubMenuCompany.classList.toggle('fm-is-open')
})

btnConnect.addEventListener('click', function() {
    var boxSubMenuConnect = document.querySelector('#ConnectSub');

    boxSubMenuConnect.classList.toggle('fm-is-open')
})

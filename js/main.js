const prods = [
    {
        id: '1p2w',
        name: 'Product 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        size: ['s', 'l'],
        price: 29,
        url: 'https://64.media.tumblr.com/26589a8059a4ea3f4162e16d70719e2c/tumblr_ovfknb7wtR1slhhf0o1_1280.jpg'
    },
    {
        id: '2g4qq',
        name: 'Product 2',
        description: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        size: ['s', 'm', 'l'],
        price: 35,
        url: 'https://64.media.tumblr.com/7918ca72d8cb3566a37fbd627dcb24ac/tumblr_oupo142eEs1slhhf0o1_1280.jpg'
    },
    {
        id: '43gl88',
        name: 'Product 3',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        size: [],
        price: 35,
        url: 'https://64.media.tumblr.com/4b5e14b48ae5129f5fd9d6eb8406cb50/tumblr_otdi8010Sf1slhhf0o1_1280.jpg'
    },
    {
        id: '87cxL3',
        name: 'Product 4',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
        size: ['m', 'xl'],
        price: 35,
        url: 'https://64.media.tumblr.com/7bed8273f621486faecdd407969aef51/tumblr_otfcxeacdO1slhhf0o1_1280.jpg'
    },
]


// HEADER START
const header = document.createElement('header');
document.querySelector('body').appendChild(header);
header.classList.add('header');


const container = document.createElement('div');
document.querySelector('.header').appendChild(container);
container.classList.add('container');

const div_header__inner = document.createElement('div');
document.querySelector('.container').appendChild(div_header__inner);
div_header__inner.classList.add('header__inner');


const div_header__cart = document.createElement('div');
document.querySelector('.header__inner').appendChild(div_header__cart);
div_header__cart.classList.add('header__cart');


const a_header__cart_image = document.createElement('a');
document.querySelector('.header__cart').appendChild(a_header__cart_image);
a_header__cart_image.classList.add('header__cart-image');
a_header__cart_image.setAttribute("href", "#");


const img_header__cart_img = document.createElement('img');
document.querySelector('.header__cart-image').appendChild(img_header__cart_img);
img_header__cart_img.classList.add('header__cart-img');
img_header__cart_img.setAttribute("src", "images/cart.svg");
img_header__cart_img.setAttribute("alt", "cart icon");


const div_header__cart_namber = document.createElement('div');
document.querySelector('.header__cart-image').appendChild(div_header__cart_namber);
div_header__cart_namber.classList.add('header__cart-namber');
div_header__cart_namber.innerText = "7";

//HEADER FINISH




const sectionCards = document.createElement('section');
document.querySelector('body').appendChild(sectionCards);
sectionCards.classList.add('cards');


const containerCards = document.createElement('div');
document.querySelector('.cards').appendChild(containerCards);
containerCards.classList.add('container-cards');


const cardsInner = document.createElement('div');
document.querySelector('.container-cards').appendChild(cardsInner);
cardsInner.classList.add('cards__inner');


newCard(1, 'cards__inner', "https://64.media.tumblr.com/26589a8059a4ea3f4162e16d70719e2c/tumblr_ovfknb7wtR1slhhf0o1_1280.jpg", "Product 1");
newCard(2, 'cards__inner', "https://64.media.tumblr.com/7918ca72d8cb3566a37fbd627dcb24ac/tumblr_oupo142eEs1slhhf0o1_1280.jpg", "Product 2");
newCard(3, 'cards__inner', "https://64.media.tumblr.com/4b5e14b48ae5129f5fd9d6eb8406cb50/tumblr_otdi8010Sf1slhhf0o1_1280.jpg", "Product 3");
newCard(4, 'cards__inner', "https://64.media.tumblr.com/7bed8273f621486faecdd407969aef51/tumblr_otfcxeacdO1slhhf0o1_1280.jpg", "Product 4");





function newCard(number, where, urlImg, productName) {
    let a = `cardsCard${number}`;
    a = document.createElement('div');
    document.querySelector(`.${where}`).appendChild(a);
    a.classList.add('cards__card');
    a.classList.add(`cards__card${number}`);



    let b = `cardsCardContent${number}`;
    b = document.createElement('div');
    document.querySelector(`.cards__card${number}`).appendChild(b);
    b.classList.add(`cards__card-content`);
    b.classList.add(`cards__card-content${number}`);


    let c = `cardsCardImage${number}`;
    c = document.createElement('div');
    document.querySelector(`.cards__card-content${number}`).appendChild(c);
    c.classList.add(`cards__card-image`);
    c.classList.add(`cards__card-image${number}`);


    let d = `cardsCardImg${number}`;
    d = document.createElement('img');
    document.querySelector(`.cards__card-image${number}`).appendChild(d);
    d.classList.add(`cards__card-img`);
    d.classList.add(`cards__card-img${number}`);
    d.setAttribute("src", `${urlImg}`);
    d.setAttribute("alt", "producte image");


    let e = `cardsCardName${number}`;
    e = document.createElement('div');
    document.querySelector(`.cards__card-content${number}`).appendChild(e);
    e.classList.add(`cards__card-name`);
    e.classList.add(`cards__card-name${number}`);
    e.innerHTML = `${productName}`;



    let f = `cardsCardSize${number}`;
    f = document.createElement('div');
    document.querySelector(`.cards__card-content${number}`).appendChild(f);
    f.classList.add(`cards__card-size`);
    f.classList.add(`cards__card-size${number}`);




    let g = `cardsSizeTitle${number}`;
    g = document.createElement('div');
    document.querySelector(`.cards__card-size${number}`).appendChild(g);
    g.classList.add(`cards__size-title`);
    g.classList.add(`cards__size-title${number}`);
    g.innerHTML = "Size:";



    let h = `cardsSizeValueOne${number}`;
    h = document.createElement('div');
    document.querySelector(`.cards__card-size${number}`).appendChild(h);
    h.classList.add(`cards__size-value`);
    h.classList.add(`cards__size-value${number}`);
    h.innerHTML = "s";




    let i = `cardsSizeValueTwo${number}`;
    i = document.createElement('div');
    document.querySelector(`.cards__card-size${number}`).appendChild(i);
    i.classList.add(`cards__size-value`);
    i.classList.add(`cards__size-value${number}`);
    i.style.fontFamily = "Lexend, sans-serif";
    i.innerHTML = "m";



    let j = `cardsSizeValueThree${number}`;
    j = document.createElement('div');
    document.querySelector(`.cards__card-size${number}`).appendChild(j);
    j.classList.add(`cards__size-value`);
    j.classList.add(`cards__size-value${number}`);
    j.style.fontFamily = "Lexend, sans-serif";
    j.innerHTML = "l";


    let k = `cardsCardMore${number}`;
    k = document.createElement('button');
    document.querySelector(`.cards__card-content${number}`).appendChild(k);
    k.classList.add(`cards__card-more`);
    k.classList.add(`cards__card-more${number}`);
    k.innerHTML = "Read more"


    let l = `cardsCardPrice${number}`;
    l = document.createElement('div');
    document.querySelector(`.cards__card-content${number}`).appendChild(l);
    l.classList.add(`cards__card-price`);
    l.classList.add(`cards__card-price${number}`);
    l.style.fontFamily = "Lexend, sans-serif";
    l.innerHTML = "20";


    let m = `cardsAddToCart${number}`;
    m = document.createElement('button');
    document.querySelector(`.cards__card-content${number}`).appendChild(m);
    m.classList.add(`cards__card-more`);
    m.classList.add(`cards__card-more${number}`);
    m.innerHTML = "Add to cart"
};




// POPUP START
const popup = document.createElement('div');
document.querySelector('body').appendChild(popup);
popup.classList.add('popup');
popup.style.position = 'fixed';
popup.style.zIndex = '10';
popup.style.top = '0';
popup.style.left = '0';
popup.style.left = '0';
popup.style.width = '100%';
popup.style.height = '100%';
popup.style.backgroundColor = 'rgba(0, 0, 0, 0.386)';
popup.style.visibility = 'hidden';
// popup.style.visibility = 'visible';


const popupBody = document.createElement('div');
document.querySelector('.popup').appendChild(popupBody);
popupBody.classList.add('popup__body');
popupBody.style.minHeight = '100%';
popupBody.style.display = 'flex';
popupBody.style.justifyContent = 'center';
popupBody.style.alignItems = 'center';
popupBody.style.padding = '30px 10px';





const popupContentBox = document.createElement('div');
document.querySelector('.popup__body').appendChild(popupContentBox);
popupContentBox.classList.add('popup__content-box');
popupContentBox.style.position = 'relative';
popupContentBox.style.width = '700px';
popupContentBox.style.height = 'auto';
popupContentBox.style.backgroundColor = '#fff';


const popupCloseBackground = document.createElement('div');
document.querySelector('.popup__content-box').appendChild(popupCloseBackground);
popupCloseBackground.classList.add('popup__close-background');
popupCloseBackground.style.position = 'absolute';
popupCloseBackground.style.top = '14px';
popupCloseBackground.style.right = '5px';
popupCloseBackground.style.width = '20px';
popupCloseBackground.style.height = '20px';
popupCloseBackground.style.cursor = 'pointer';
popupCloseBackground.style.backgroundColor = 'transparent';

popupCloseBackground.style.transition = 'all 0.2s';

popupCloseBackground.onmouseenter = function () {
    popupCloseBackground.style.transform = 'scale(0.9)';
}

popupCloseBackground.onmouseleave = function () {
    popupCloseBackground.style.transform = 'scale(1)';
}



const popupCloseOne = document.createElement('div');
document.querySelector('.popup__close-background').appendChild(popupCloseOne);
popupCloseOne.classList.add('popup__close-one');
popupCloseOne.style.position = 'absolute';
popupCloseOne.style.top = '0';
popupCloseOne.style.width = '20px';
popupCloseOne.style.height = '2px';
popupCloseOne.style.backgroundColor = 'rgb(96, 95, 95)';
popupCloseOne.style.transform = 'rotate(45deg)';
popupCloseOne.style.borderRadius = '2px';




const popupCloseTwo = document.createElement('div');
document.querySelector('.popup__close-background').appendChild(popupCloseTwo);
popupCloseTwo.classList.add('popup__close-two');
popupCloseTwo.style.position = 'absolute';
popupCloseTwo.style.width = '20px';
popupCloseTwo.style.height = '2px';
popupCloseTwo.style.backgroundColor = 'rgb(96, 95, 95)';
popupCloseTwo.style.transform = 'rotate(-45deg)';
popupCloseTwo.style.borderRadius = '2px';


const popupContentBoxInner = document.createElement('div');
document.querySelector('.popup__content-box').appendChild(popupContentBoxInner);
popupContentBoxInner.classList.add('popup__content-box-inner');
popupContentBoxInner.style.position = 'relative';
popupContentBoxInner.style.width = '99%';
popupContentBoxInner.style.height = '100%';
popupContentBoxInner.style.backgroundColor = '#fff';
popupContentBoxInner.style.margin = '30px 0 0 0';

// POPUP FINISH




// CART START
const cart = document.createElement('div');
document.querySelector('.popup__content-box-inner').appendChild(cart);
cart.classList.add('cart');
cart.style.position = 'relative';
cart.style.maxWidth = '700px';
cart.style.height = '500px';
// cart.style.display = 'none';
cart.style.display = 'block';



const cartCost = document.createElement('div');
document.querySelector('.cart').appendChild(cartCost);
cartCost.classList.add('cart-cost');
cartCost.style.fontFamily = "Lexend, sans-serif";
cartCost.style.fontWeight = "700";
cartCost.style.fontSize = "30px";
cartCost.style.lineHeight = "28px";
cartCost.style.color = "#000";
cartCost.style.position = "absolute";
cartCost.style.bottom = "20px";
cartCost.style.right = "20px";
cartCost.style.padding = "10px 10px 10px 10px";
cartCost.style.borderRadius = "4px";
cartCost.style.boxShadow = "1px 1px 5px #000";
cartCost.style.backgroundColor = " #0df";
cartCost.innerHTML = `${2000000} $`;


const cartBtnInner = document.createElement('div');
document.querySelector('.cart').appendChild(cartBtnInner);
cartBtnInner.classList.add('cart-btn-inner');
cartBtnInner.innerHTML = "Buy"
cartBtnInner.style.fontFamily = "Lexend, sans-serif";
cartBtnInner.style.fontWeight = "700";
cartBtnInner.style.fontSize = "30px";
cartBtnInner.style.lineHeight = "28px";
cartBtnInner.style.color = "rgb(249, 1, 1)";
cartBtnInner.style.margin = "5px auto";
cartBtnInner.style.display = "block";
cartBtnInner.style.cursor = "pointer";
cartBtnInner.style.position = "absolute";
cartBtnInner.style.bottom = "20px";
cartBtnInner.style.left = "28px";
cartBtnInner.style.padding = "6px 10px 10px 10px";
cartBtnInner.style.borderRadius = "4px";
cartBtnInner.style.boxShadow = "1px 1px 5px #000";
cartBtnInner.style.backgroundColor = " #0df";


cartBtnInner.onmouseenter = function () {
    cartBtnInner.style.transform = 'scale(0.99)';
}

cartBtnInner.onmouseleave = function () {
    cartBtnInner.style.transform = 'scale(1)';
}


const cartBtn = document.createElement('button');
document.querySelector('.cart-btn-inner').appendChild(cartBtn);
cartBtn.classList.add('cart-btn');
cartBtn.innerHTML = "Buy"
cartBtn.style.position = "absolute";
cartBtn.style.bottom = "0px";
cartBtn.style.left = "0px";
cartBtn.style.width = "100%";
cartBtn.style.height = "100%";
cartBtn.style.zIndex = "2";
cartBtn.style.cursor = "pointer";
cartBtn.style.opacity = "0";


const cartBoxInner = document.createElement('div');
document.querySelector('.cart').appendChild(cartBoxInner);
cartBoxInner.classList.add('cart-box-inner');
cartBoxInner.style.position = 'relative';
cartBoxInner.style.width = '100%';
cartBoxInner.style.height = '82%';
cartBoxInner.style.backgroundColor = '#fff';
cartBoxInner.style.overflowY = 'auto';



cartProduktCard(1, 'https://64.media.tumblr.com/26589a8059a4ea3f4162e16d70719e2c/tumblr_ovfknb7wtR1slhhf0o1_1280.jpg', '2', 's', 'm', 'l', '20');
cartProduktCard(2, 'https://64.media.tumblr.com/26589a8059a4ea3f4162e16d70719e2c/tumblr_ovfknb7wtR1slhhf0o1_1280.jpg', '2', 's', 'm', 'l', '20');
cartProduktCard(3, 'https://64.media.tumblr.com/26589a8059a4ea3f4162e16d70719e2c/tumblr_ovfknb7wtR1slhhf0o1_1280.jpg', '2', 's', 'm', 'l', '20');
cartProduktCard(4, 'https://64.media.tumblr.com/26589a8059a4ea3f4162e16d70719e2c/tumblr_ovfknb7wtR1slhhf0o1_1280.jpg', '2', 's', 'm', 'l', '20');


function cartProduktCard(number, urlImg, numberQuantity, sizeOne, sizeTwo, sizeThree, price) {
    let a = `cartCard${number}`;
    a = document.createElement('div');
    document.querySelector('.cart-box-inner').appendChild(a);
    a.classList.add(`cart-card${number}`);
    a.style.width = '86%';
    a.style.height = 'auto';
    a.style.backgroundColor = 'rgba(194, 207, 74, 0.57)';
    a.style.boxShadow = '1px 1px 5px rgba(58, 62, 23, 0.57)';
    a.style.padding = '0px 0px 0px 0px';
    a.style.display = 'flex';
    a.style.justifyContent = 'space-between';
    a.style.margin = '10px auto';
    a.style.padding = '10px 10px';




    let b = `cartCardImage${number}`;
    b = document.createElement('div');
    document.querySelector(`.cart-card${number}`).appendChild(b);
    b.classList.add(`cart-card-image${number}`);
    b.style.width = '120px';
    b.style.height = '79px';
    b.style.margin = 'auto 0';


    let c = `cartCardImg${number}`;
    c = document.createElement('img');
    document.querySelector(`.cart-card-image${number}`).appendChild(c);
    c.classList.add(`cart-produkt-card-img${number}`);
    c.setAttribute('src', `${urlImg}`);
    c.style.width = '100%';
    c.style.height = 'auto';
    c.style.display = 'block';
    c.style.margin = 'auto 0';


    let d = `cartCardCenter${number}`;
    d = document.createElement('div');
    document.querySelector(`.cart-card${number}`).appendChild(d);
    d.classList.add(`cart-card-center${number}`);
    d.style.width = '60%';



    let quantity = `cartCardCenterQuantity${number}`;
    quantity = document.createElement('div');
    document.querySelector(`.cart-card-center${number}`).appendChild(quantity);
    quantity.classList.add(`cart-card-center-quantity${number}`);
    quantity.style.display = 'flex';
    quantity.style.justifyContent = 'center';
    quantity.style.alignItems = 'center';



    let e = `cartCardCenterPlusInner${number}`;
    e = document.createElement('div');
    document.querySelector(`.cart-card-center-quantity${number}`).appendChild(e);
    e.classList.add(`cart-card-center-btn-plus-inner${number}`);
    e.style.position = 'relative';
    e.style.width = '20px';
    e.style.height = '20px';
    e.style.zIndex = '1';
    e.style.cursor = 'pointer';
    e.style.opasity = '0';
    e.style.transition = 'all 0.2s';

    e.onmouseenter = function () {
        e.style.transform = 'scale(0.9)';
    }

    e.onmouseleave = function () {
        e.style.transform = 'scale(1)';
    }


    let f = `cartCardCenterPlus${number}`;
    f = document.createElement('span');
    document.querySelector(`.cart-card-center-btn-plus-inner${number}`).appendChild(f);
    f.classList.add(`cart-card-center-plus${number}`);
    f.style.position = 'absolute';
    f.style.top = '14px';
    f.style.right = '5px';
    f.style.width = '20px';
    f.style.height = '20px';
    f.style.cursor = 'pointer';
    f.style.backgroundColor = 'transparent';
    f.style.zIndex = '0';



    let g = `cartPlusOne${number}`;
    g = document.createElement('span');
    document.querySelector(`.cart-card-center-plus${number}`).appendChild(g);
    g.classList.add(`cart-plus-one${number}`);
    g.style.position = 'absolute';
    g.style.top = '-5px';
    g.style.left = '5px';
    g.style.width = '20px';
    g.style.height = '2px';
    g.style.backgroundColor = 'rgb(96, 95, 95)';
    g.style.borderRadius = '2px';


    leth = `cartPlusTwo${number}`;
    h = document.createElement('div');
    document.querySelector(`.cart-card-center-plus${number}`).appendChild(h);
    h.classList.add(`cart-plus-two${number}`);
    h.style.position = 'absolute';
    h.style.top = '-14px';
    h.style.left = '14px';
    h.style.width = '2px';
    h.style.height = '20px';
    h.style.backgroundColor = 'rgb(96, 95, 95)';
    h.style.borderRadius = '2px';


    let i = `cartCardCenterBtnPlus${number}`;
    i = document.createElement('button');
    document.querySelector(`.cart-card-center-btn-plus-inner${number}`).appendChild(i);
    i.classList.add(`cart-card-center-btn-plus${number}`);
    i.style.position = 'relative';
    i.style.width = '20px';
    i.style.height = '20px';
    i.style.zIndex = '1';
    i.style.cursor = 'pointer';
    i.style.opacity = '0';





    let quantityNumber = `cartCardCenterQuantityNumber${number}`;
    quantityNumber = document.createElement('div');
    document.querySelector(`.cart-card-center-quantity${number}`).appendChild(quantityNumber);
    quantityNumber.classList.add(`cart-card-center-quantity-number${number}`);
    quantityNumber.style.minWidth = '30px';
    quantityNumber.style.minHeight = '30px';
    quantityNumber.style.borderRadius = '4px';
    quantityNumber.style.border = '1px solid #000';
    quantityNumber.style.fontFamily = "Lexend, sans-serif";
    quantityNumber.style.fontWeight = "700";
    quantityNumber.style.fontSize = "25px";
    quantityNumber.style.lineHeight = "28px";
    quantityNumber.style.color = "#000";
    quantityNumber.style.textAlign = "center";
    quantityNumber.style.padding = "5px";
    quantityNumber.style.display = "inline-block";
    quantityNumber.style.margin = "10px";
    quantityNumber.innerHTML = `${numberQuantity}`;

    let j = `cartCardCenterMinusInner${number}`;
    j = document.createElement('div');
    document.querySelector(`.cart-card-center-quantity${number}`).appendChild(j);
    j.classList.add(`cart-card-center-btn-minus-inner${number}`);
    j.style.position = 'relative';
    j.style.width = '20px';
    j.style.height = '20px';
    j.style.zIndex = '1';
    j.style.cursor = 'pointer';
    j.style.opasity = '0';
    j.style.transition = 'all 0.2s';

    j.onmouseenter = function () {
        j.style.transform = 'scale(0.9)';
    }

    j.onmouseleave = function () {
        j.style.transform = 'scale(1)';
    }


    let k = `cartCardCenterMinus${number}`;
    k = document.createElement('span');
    document.querySelector(`.cart-card-center-btn-minus-inner${number}`).appendChild(k);
    k.classList.add(`cart-card-center-minus${number}`);
    k.style.position = 'absolute';
    k.style.top = '14px';
    k.style.right = '5px';
    k.style.width = '20px';
    k.style.height = '20px';
    k.style.cursor = 'pointer';
    k.style.backgroundColor = 'transparent';
    k.style.zIndex = '0';



    let l = `cartMinusOne${number}`;
    l = document.createElement('span');
    document.querySelector(`.cart-card-center-minus${number}`).appendChild(l);
    l.classList.add(`cart-minus-one${number}`);
    l.style.position = 'absolute';
    l.style.top = '-5px';
    l.style.left = '5px';
    l.style.width = '20px';
    l.style.height = '2px';
    l.style.backgroundColor = 'rgb(96, 95, 95)';
    l.style.borderRadius = '2px';



    let m = `cartCardCenterBtnMinus${number}`;
    m = document.createElement('button');
    document.querySelector(`.cart-card-center-btn-minus-inner${number}`).appendChild(m);
    m.classList.add(`cart-card-center-btn-minus${number}`);
    m.style.position = 'relative';
    m.style.width = '20px';
    m.style.height = '20px';
    m.style.zIndex = '1';
    m.style.cursor = 'pointer';
    m.style.opacity = '0';




    let size = `cartCardCenterSize${number}`;
    size = document.createElement('div');
    document.querySelector(`.cart-card-center${number}`).appendChild(size);
    size.classList.add(`cart-card-center-size${number}`);
    size.style.fontFamily = "Lexend, sans-serif";
    size.style.display = "flex";
    size.style.justifyContent = "center";



    let sizeTitle = `cartCardCenterSizeTitle${number}`;
    sizeTitle = document.createElement('div');
    document.querySelector(`.cart-card-center-size${number}`).appendChild(sizeTitle);
    sizeTitle.classList.add(`cart-card-center-size-title${number}`);
    sizeTitle.style.fontFamily = "Lexend, sans-serif";
    sizeTitle.innerHTML = "Size:";
    sizeTitle.style.fontWeight = "700";
    sizeTitle.style.fontSize = "18px";
    sizeTitle.style.lineHeight = "28px";
    sizeTitle.style.color = "#000";
    sizeTitle.style.margin = "5px 0 5px 0";
    sizeTitle.style.textAlign = "center";


    let sizeValueOne = `cartCardCenterSizeValueOne${number}`;
    sizeValueOne = document.createElement('div');
    document.querySelector(`.cart-card-center-size${number}`).appendChild(sizeValueOne);
    sizeValueOne.classList.add(`cart-card-center-size-value-one${number}`);
    sizeValueOne.style.fontFamily = "Lexend, sans-serif";
    sizeValueOne.innerHTML = `${sizeOne}`;
    sizeValueOne.style.fontWeight = "700";
    sizeValueOne.style.fontSize = "18px";
    sizeValueOne.style.lineHeight = "28px";
    sizeValueOne.style.color = "#000";
    sizeValueOne.style.margin = "5px 0px 5px 10px";
    sizeValueOne.style.textAlign = "center";
    sizeValueOne.style.cursor = "pointer";
    sizeValueOne.style.transition = "all 0.3s";


    sizeValueOne.onmouseenter = function () {
        sizeValueOne.style.transform = "scale(1.2)";
    }

    sizeValueOne.onmouseleave = function () {
        sizeValueOne.style.transform = "scale(1)";
    }



    let SizeValueTwo = `cartCardCenterSizeValueTwo${number}`;
    SizeValueTwo = document.createElement('div');
    document.querySelector(`.cart-card-center-size${number}`).appendChild(SizeValueTwo);
    SizeValueTwo.classList.add(`cart-card-center-size-value-two${number}`);
    SizeValueTwo.style.fontFamily = "Lexend, sans-serif";
    SizeValueTwo.innerHTML = `${sizeTwo}`;
    SizeValueTwo.style.fontWeight = "700";
    SizeValueTwo.style.fontSize = "18px";
    SizeValueTwo.style.lineHeight = "28px";
    SizeValueTwo.style.color = "#000";
    SizeValueTwo.style.margin = "5px 0px 5px 10px";
    SizeValueTwo.style.textAlign = "center";
    SizeValueTwo.style.cursor = "pointer";
    SizeValueTwo.style.transition = "all 0.3s";

    SizeValueTwo.onmouseenter = function () {
        SizeValueTwo.style.transform = "scale(1.2)";
    }

    SizeValueTwo.onmouseleave = function () {
        SizeValueTwo.style.transform = "scale(1)";
    }



    let sizeValueThree = `cartCardCenterSizeValueThree${number}`;
    sizeValueThree = document.createElement('div');
    document.querySelector(`.cart-card-center-size${number}`).appendChild(sizeValueThree);
    sizeValueThree.classList.add(`cart-card-center-size-value-three${number}`);
    sizeValueThree.style.fontFamily = "Lexend, sans-serif";
    sizeValueThree.innerHTML = `${sizeThree}`;
    sizeValueThree.style.fontWeight = "700";
    sizeValueThree.style.fontSize = "18px";
    sizeValueThree.style.lineHeight = "28px";
    sizeValueThree.style.color = "#000";
    sizeValueThree.style.margin = "5px 0px 5px 10px";
    sizeValueThree.style.textAlign = "center";
    sizeValueThree.style.cursor = "pointer";
    sizeValueThree.style.transition = "all 0.3s";

    sizeValueThree.onmouseenter = function () {
        sizeValueThree.style.transform = "scale(1.2)";
    }

    sizeValueThree.onmouseleave = function () {
        sizeValueThree.style.transform = "scale(1)";
    }


    let cardRight = `cartCardRight${number}`;
    cardRight = document.createElement('div');
    document.querySelector(`.cart-card${number}`).appendChild(cardRight);
    cardRight.classList.add(`cart-card-right${number}`);
    cardRight.style.display = 'flex';
    cardRight.style.flexDirection = 'column';
    cardRight.style.justifyContent = 'space-between';
    cardRight.style.alignItems = 'flex-end';







    let productRemove = `cartCardRightProductRemoveInner${number}`;
    productRemove = document.createElement('div');
    document.querySelector(`.cart-card-right${number}`).appendChild(productRemove);
    productRemove.classList.add(`cart-card-right-btn-remove-inner${number}`);
    productRemove.style.position = 'relative';
    productRemove.style.width = '20px';
    productRemove.style.height = '20px';
    productRemove.style.zIndex = '1';
    productRemove.style.cursor = 'pointer';
    productRemove.style.opasity = '0';
    productRemove.style.transition = 'all 0.2s';

    productRemove.onmouseenter = function () {
        productRemove.style.transform = 'scale(0.9)';
    }

    productRemove.onmouseleave = function () {
        productRemove.style.transform = 'scale(1)';
    }


    let rightRemove = `cartCardRightRemove${number}`;
    rightRemove = document.createElement('span');
    document.querySelector(`.cart-card-right-btn-remove-inner${number}`).appendChild(rightRemove);
    rightRemove.classList.add(`cart-card-right-remove${number}`);
    rightRemove.style.position = 'absolute';
    rightRemove.style.top = '0px';
    rightRemove.style.right = '0px';
    rightRemove.style.width = '20px';
    rightRemove.style.height = '20px';
    rightRemove.style.cursor = 'pointer';
    rightRemove.style.backgroundColor = 'transparent';
    rightRemove.style.zIndex = '0';



    let cartRemoveOne = `cartRemoveOne${number}`;
    cartRemoveOne = document.createElement('span');
    document.querySelector(`.cart-card-right-remove${number}`).appendChild(cartRemoveOne);
    cartRemoveOne.classList.add(`cart-remove-one${number}`);
    cartRemoveOne.style.position = 'absolute';
    cartRemoveOne.style.top = '9px';
    cartRemoveOne.style.left = '0px';
    cartRemoveOne.style.width = '20px';
    cartRemoveOne.style.height = '2px';
    cartRemoveOne.style.backgroundColor = 'rgb(96, 95, 95)';
    cartRemoveOne.style.borderRadius = '2px';
    cartRemoveOne.style.transform = 'rotate(45deg)';


    let cartRemoveTwo = `cartRemoveTwo${number}`;
    cartRemoveTwo = document.createElement('span');
    document.querySelector(`.cart-card-right-remove${number}`).appendChild(cartRemoveTwo);
    cartRemoveTwo.classList.add(`cart-remove-two${number}`);
    cartRemoveTwo.style.position = 'absolute';
    cartRemoveTwo.style.top = '0px';
    cartRemoveTwo.style.left = '9px';
    cartRemoveTwo.style.width = '2px';
    cartRemoveTwo.style.height = '20px';
    cartRemoveTwo.style.backgroundColor = 'rgb(96, 95, 95)';
    cartRemoveTwo.style.borderRadius = '2px';
    cartRemoveTwo.style.transform = 'rotate(45deg)';

    let BtnRemove = `cartCardRightBtnRemove${number}`;
    BtnRemove = document.createElement('button');
    document.querySelector(`.cart-card-right-btn-remove-inner${number}`).appendChild(BtnRemove);
    BtnRemove.classList.add(`cart-card-right-btn-remove${number}`);
    BtnRemove.style.position = 'relative';
    BtnRemove.style.width = '20px';
    BtnRemove.style.height = '20px';
    BtnRemove.style.zIndex = '1';
    BtnRemove.style.cursor = 'pointer';
    BtnRemove.style.opacity = '0';


    let cardRightPrice = `cardRightPrice${number}`;
    cardRightPrice = document.createElement('div');
    document.querySelector(`.cart-card-right${number}`).appendChild(cardRightPrice);
    cardRightPrice.classList.add(`cart-card-right-price${number}`);
    cardRightPrice.style.fontFamily = "Lexend, sans-serif";
    cardRightPrice.style.fontWeight = "700";
    cardRightPrice.style.fontSize = "30px";
    cardRightPrice.style.lineHeight = "28px";
    cardRightPrice.style.color = "#000";
    cardRightPrice.innerHTML = `${price} $`;
}

//CART FINISH


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


// CARDS START

const sectionCards = document.createElement('section');
document.querySelector('body').appendChild(sectionCards);
sectionCards.classList.add('cards');


const containerCards = document.createElement('div');
document.querySelector('.cards').appendChild(containerCards);
containerCards.classList.add('container-cards');


const cardsInner = document.createElement('div');
document.querySelector('.container-cards').appendChild(cardsInner);
cardsInner.classList.add('cards__inner');


addDataIntoCard();
function addDataIntoCard() {
    for (let i = 0; i < prods.length; i++) {
        if (i >= 0) {

            newCard(prods[i].id, 'cards__inner', prods[i].url, prods[i].name, prods[i].price);
            dataSize(prods[i].size, prods[i].id);

        }
    }
}

function dataSize(item, itemId) {
    for (let i = 0; i < item.length; i++) {
        if (i >= 0) {

            addNewSize(itemId, item[i], 'cards__size-value', 'cards__card-size');

        }
    }
}

function addNewSize(id, valueSize, classNeme, classParentNeme) {
    let size = `cardsSizeValue${valueSize}${id}`;
    size = document.createElement('div');
    document.querySelector(`.${classParentNeme}${id}`).appendChild(size);
    size.classList.add(`${classNeme}`);
    size.classList.add(`${classNeme}${valueSize}${id}`);
    size.innerHTML = `${valueSize}`;
}




function newCard(id, where, url, name, price) {
    let a = `cardsCard${id}`;
    a = document.createElement('div');
    document.querySelector(`.${where}`).appendChild(a);
    a.classList.add('cards__card');
    a.classList.add(`cards__card${id}`);
    a.setAttribute("id", `${id}`);



    let b = `cardsCardContent${id}`;
    b = document.createElement('div');
    document.querySelector(`.cards__card${id}`).appendChild(b);
    b.classList.add(`cards__card-content`);
    b.classList.add(`cards__card-content${id}`);


    let c = `cardsCardImage${id}`;
    c = document.createElement('div');
    document.querySelector(`.cards__card-content${id}`).appendChild(c);
    c.classList.add(`cards__card-image`);
    c.classList.add(`cards__card-image${id}`);


    let d = `cardsCardImg${id}`;
    d = document.createElement('img');
    document.querySelector(`.cards__card-image${id}`).appendChild(d);
    d.classList.add(`cards__card-img`);
    d.classList.add(`cards__card-img${id}`);
    d.setAttribute("src", `${url}`);
    d.setAttribute("alt", "producte image");


    let e = `cardsCardName${id}`;
    e = document.createElement('div');
    document.querySelector(`.cards__card-content${id}`).appendChild(e);
    e.classList.add(`cards__card-name`);
    e.classList.add(`cards__card-name${id}`);
    e.innerHTML = `${name}`;



    let f = `cardsCardSize${id}`;
    f = document.createElement('div');
    document.querySelector(`.cards__card-content${id}`).appendChild(f);
    f.classList.add(`cards__card-size`);
    f.classList.add(`cards__card-size${id}`);




    let g = `cardsSizeTitle${id}`;
    g = document.createElement('div');
    document.querySelector(`.cards__card-size${id}`).appendChild(g);
    g.classList.add(`cards__size-title`);
    g.classList.add(`cards__size-title${id}`);
    g.innerHTML = "Size:";


    let k = `cardsCardMore${id}`;
    k = document.createElement('button');
    document.querySelector(`.cards__card-content${id}`).appendChild(k);
    k.classList.add(`cards__card-more`);
    k.classList.add(`cards__card-more${id}`);
    k.innerHTML = "Read more"


    let l = `cardsCardPrice${id}`;
    l = document.createElement('div');
    document.querySelector(`.cards__card-content${id}`).appendChild(l);
    l.classList.add(`cards__card-price`);
    l.classList.add(`cards__card-price${id}`);
    l.style.fontFamily = "Lexend, sans-serif";
    l.innerHTML = `${price} $`;


    let m = `cardsAddToCart${id}`;
    m = document.createElement('button');
    document.querySelector(`.cards__card-content${id}`).appendChild(m);
    m.classList.add(`cards__card-more`);
    m.classList.add(`cards__card-more${id}`);
    m.innerHTML = "Add to cart"
};

// sizi active start
const sizeValue = document.querySelectorAll('.cards__size-value');

sizeValue.forEach(function (div) {
    div.addEventListener('click', sizeActive);
});

function sizeActive() {
    let parent = this.parentNode;
    sizeVelueCurrentCard = parent.querySelectorAll('.cards__size-value');
    sizeVelueCurrentCard.forEach(function (value) {
        value.classList.remove('active');
    });

    this.classList.add('active');

};


// sizi active finish





// set id card to local storage start
const addToCart = document.querySelectorAll('.cards__card-more');


addToCart.forEach(function (btn) {
    btn.addEventListener('click', setIdCardLocalStorage);
});


function setIdCardLocalStorage() {

    if (localStorage.getItem('cardData') == null) {
        localStorage.setItem('cardData', JSON.stringify(newDateForLocalStorage(faindIdCurrentCard(this, `cards__card`), faindSizeCurrentCard(this, 'cards__size-value.active'))));
        return true
    }

    if (filters(getArrayFromLocalStorage('cardData'), `${faindIdCurrentCard(this, `cards__card`)}${faindSizeCurrentCard(this, 'cards__size-value.active')}`) == true) {
    }

    else {
        let mergedDataForLocalStorege = getArrayFromLocalStorage('cardData').concat(newDateForLocalStorage(faindIdCurrentCard(this, `cards__card`), faindSizeCurrentCard(this, 'cards__size-value.active', `cards__card`)));
        localStorage.setItem('cardData', JSON.stringify(mergedDataForLocalStorege));
    }
}


function getArrayFromLocalStorage(key) {
    let getLocalStorage = localStorage.getItem(key);
    let cardDataFromLocalStorage = JSON.parse(getLocalStorage);
    return cardDataFromLocalStorage
}


function faindIdCurrentCard(item, classElem) {
    let parentCard = item.closest(`.${classElem}`);
    let idParent = parentCard.getAttribute("id");
    return idParent
}


function faindSizeCurrentCard(item, classElem) {
    let parentContent = item.parentNode;
    let findClassActive = parentContent.querySelector(`.${classElem}`);
    if (findClassActive !== null) {
        let sizeActive = findClassActive.innerHTML;
        return sizeActive
    }
    else {
        sizeActive = 'not';
        return sizeActive
    }
}

function filters(array, filterValue) {
    let newArray = array.filter(function (item) {
        return item.hash == filterValue;
    });

    if (newArray.length >= 1) {
        return true
    }
    return false
};

function newDateForLocalStorage(id, size) {
    let quantity = '1';
    let hash = `${id}${size}`
    let DateForLocalStorage = [{ id: `${id}`, size: `${size}`, quantity: `${quantity}`, hash: `${hash}` }];
    return DateForLocalStorage
}

// set id card to local storage finish




// CARDS FINISH















// POPUP START
const popup = document.createElement('div');
document.querySelector('body').appendChild(popup);
popup.classList.add('popup');


const popupBody = document.createElement('div');
document.querySelector('.popup').appendChild(popupBody);
popupBody.classList.add('popup__body');


const popupContentBox = document.createElement('div');
document.querySelector('.popup__body').appendChild(popupContentBox);
popupContentBox.classList.add('popup__content-box');


const popupCloseBackground = document.createElement('div');
document.querySelector('.popup__content-box').appendChild(popupCloseBackground);
popupCloseBackground.classList.add('popup__close-background');


const popupCloseOne = document.createElement('div');
document.querySelector('.popup__close-background').appendChild(popupCloseOne);
popupCloseOne.classList.add('popup__close-one');


const popupCloseTwo = document.createElement('div');
document.querySelector('.popup__close-background').appendChild(popupCloseTwo);
popupCloseTwo.classList.add('popup__close-two');


const popupContentBoxInner = document.createElement('div');
document.querySelector('.popup__content-box').appendChild(popupContentBoxInner);
popupContentBoxInner.classList.add('popup__content-box-inner');





// open popup start
document.addEventListener('click', togglePopup);

function togglePopup(event) {
    if (popup.classList.contains('active')) {
        if (!event.target.closest('.popup__content-box')) {
            cart.classList.remove('active');
            popup.classList.remove('active');
        }

        if (event.target.closest('.popup__close-background')) {
            cart.classList.remove('active');
            popup.classList.remove('active');
        }
    }

    if (event.target.closest('.header__cart')) {
        popup.classList.add('active');
        openCart();
    }
}

// open popup finish
// POPUP FINISH




// CART START
const cart = document.createElement('div');
document.querySelector('.popup__content-box-inner').appendChild(cart);
cart.classList.add('cart');


const cartCost = document.createElement('div');
document.querySelector('.cart').appendChild(cartCost);
cartCost.classList.add('cart-cost');
cartCost.innerHTML = `${2000000} $`;


const cartBtnInner = document.createElement('div');
document.querySelector('.cart').appendChild(cartBtnInner);
cartBtnInner.classList.add('cart-btn-inner');
cartBtnInner.innerHTML = "Buy"


const cartBtn = document.createElement('button');
document.querySelector('.cart-btn-inner').appendChild(cartBtn);
cartBtn.classList.add('cart-btn');
cartBtn.innerHTML = "Buy"


const cartBoxInner = document.createElement('div');
document.querySelector('.cart').appendChild(cartBoxInner);
cartBoxInner.classList.add('cart-box-inner');


function openCart() {
    cart.classList.add('active');
    addcartProduktCard();
}

function addcartProduktCard() {
    for (let i = 0; i < prods.length; i++) {
        if (i >= 0) {
            cartProduktCard(prods[i].id, prods[i].url, '2', prods[i].price);
            dataSizeCart(prods[i].size, prods[i].id);
        }
    }
}

function dataSizeCart(item, itemId) {
    for (let i = 0; i < item.length; i++) {
        if (i >= 0) {
            addNewSize(itemId, item[i], 'cart-card-center-size-value', 'cart-card-center-size');
        }
    }
}





function cartProduktCard(id, urlImg, numberQuantity, price) {
    let a = `cartCard${id}`;
    a = document.createElement('div');
    document.querySelector('.cart-box-inner').appendChild(a);
    a.classList.add(`cart-card`);
    a.classList.add(`cart-card${id}`);



    let b = `cartCardImage${id}`;
    b = document.createElement('div');
    document.querySelector(`.cart-card${id}`).appendChild(b);
    b.classList.add(`cart-card-image`);
    b.classList.add(`cart-card-image${id}`);

    let c = `cartCardImg${id}`;
    c = document.createElement('img');
    document.querySelector(`.cart-card-image${id}`).appendChild(c);
    c.classList.add(`cart-produkt-card-img`);
    c.classList.add(`cart-produkt-card-img${id}`);
    c.setAttribute('src', `${urlImg}`);


    let d = `cartCardCenter${id}`;
    d = document.createElement('div');
    document.querySelector(`.cart-card${id}`).appendChild(d);
    d.classList.add(`cart-card-center`);
    d.classList.add(`cart-card-center${id}`);


    let quantity = `cartCardCenterQuantity${id}`;
    quantity = document.createElement('div');
    document.querySelector(`.cart-card-center${id}`).appendChild(quantity);
    quantity.classList.add(`cart-card-center-quantity`);
    quantity.classList.add(`cart-card-center-quantity${id}`);


    let e = `cartCardCenterPlusInner${id}`;
    e = document.createElement('div');
    document.querySelector(`.cart-card-center-quantity${id}`).appendChild(e);
    e.classList.add(`cart-card-center-btn-plus-inner`);
    e.classList.add(`cart-card-center-btn-plus-inner${id}`);


    let f = `cartCardCenterPlus${id}`;
    f = document.createElement('span');
    document.querySelector(`.cart-card-center-btn-plus-inner${id}`).appendChild(f);
    f.classList.add(`cart-card-center-plus`);
    f.classList.add(`cart-card-center-plus${id}`);


    let g = `cartPlusOne${id}`;
    g = document.createElement('span');
    document.querySelector(`.cart-card-center-plus${id}`).appendChild(g);
    g.classList.add(`cart-plus-one`);
    g.classList.add(`cart-plus-one${id}`);


    leth = `cartPlusTwo${id}`;
    h = document.createElement('div');
    document.querySelector(`.cart-card-center-plus${id}`).appendChild(h);
    h.classList.add(`cart-plus-two`);
    h.classList.add(`cart-plus-two${id}`);


    let i = `cartCardCenterBtnPlus${id}`;
    i = document.createElement('button');
    document.querySelector(`.cart-card-center-btn-plus-inner${id}`).appendChild(i);
    i.classList.add(`cart-card-center-btn-plus`);
    i.classList.add(`cart-card-center-btn-plus${id}`);


    let quantityNumber = `cartCardCenterQuantityNumber${id}`;
    quantityNumber = document.createElement('div');
    document.querySelector(`.cart-card-center-quantity${id}`).appendChild(quantityNumber);
    quantityNumber.classList.add(`cart-card-center-quantity-number`);
    quantityNumber.classList.add(`cart-card-center-quantity-number${id}`);
    quantityNumber.innerHTML = `${numberQuantity}`;


    let j = `cartCardCenterMinusInner${id}`;
    j = document.createElement('div');
    document.querySelector(`.cart-card-center-quantity${id}`).appendChild(j);
    j.classList.add(`cart-card-center-btn-minus-inner`);
    j.classList.add(`cart-card-center-btn-minus-inner${id}`);


    let k = `cartCardCenterMinus${id}`;
    k = document.createElement('span');
    document.querySelector(`.cart-card-center-btn-minus-inner${id}`).appendChild(k);
    k.classList.add(`cart-card-center-minus`);
    k.classList.add(`cart-card-center-minus${id}`);


    let l = `cartMinusOne${id}`;
    l = document.createElement('span');
    document.querySelector(`.cart-card-center-minus${id}`).appendChild(l);
    l.classList.add(`cart-minus-one`);
    l.classList.add(`cart-minus-one${id}`);


    let m = `cartCardCenterBtnMinus${id}`;
    m = document.createElement('button');
    document.querySelector(`.cart-card-center-btn-minus-inner${id}`).appendChild(m);
    m.classList.add(`cart-card-center-btn-minus`);
    m.classList.add(`cart-card-center-btn-minus${id}`);


    let size = `cartCardCenterSize${id}`;
    size = document.createElement('div');
    document.querySelector(`.cart-card-center${id}`).appendChild(size);
    size.classList.add(`cart-card-center-size`);
    size.classList.add(`cart-card-center-size${id}`);




    let sizeTitle = `cartCardCenterSizeTitle${id}`;
    sizeTitle = document.createElement('div');
    document.querySelector(`.cart-card-center-size${id}`).appendChild(sizeTitle);
    sizeTitle.classList.add(`cart-card-center-size-title`);
    sizeTitle.classList.add(`cart-card-center-size-title${id}`);
    sizeTitle.innerHTML = "Size:";


    let cardRight = `cartCardRight${id}`;
    cardRight = document.createElement('div');
    document.querySelector(`.cart-card${id}`).appendChild(cardRight);
    cardRight.classList.add(`cart-card-right`);
    cardRight.classList.add(`cart-card-right${id}`);


    let productRemove = `cartCardRightProductRemoveInner${id}`;
    productRemove = document.createElement('div');
    document.querySelector(`.cart-card-right${id}`).appendChild(productRemove);
    productRemove.classList.add(`cart-card-right-btn-remove-inner`);
    productRemove.classList.add(`cart-card-right-btn-remove-inner${id}`);


    let rightRemove = `cartCardRightRemove${id}`;
    rightRemove = document.createElement('span');
    document.querySelector(`.cart-card-right-btn-remove-inner${id}`).appendChild(rightRemove);
    rightRemove.classList.add(`cart-card-right-remove`);
    rightRemove.classList.add(`cart-card-right-remove${id}`);



    let cartRemoveOne = `cartRemoveOne${id}`;
    cartRemoveOne = document.createElement('span');
    document.querySelector(`.cart-card-right-remove${id}`).appendChild(cartRemoveOne);
    cartRemoveOne.classList.add(`cart-remove-one`);
    cartRemoveOne.classList.add(`cart-remove-one${id}`);


    let cartRemoveTwo = `cartRemoveTwo${id}`;
    cartRemoveTwo = document.createElement('span');
    document.querySelector(`.cart-card-right-remove${id}`).appendChild(cartRemoveTwo);
    cartRemoveTwo.classList.add(`cart-remove-two`);
    cartRemoveTwo.classList.add(`cart-remove-two${id}`);


    let btnRemove = `cartCardRightBtnRemove${id}`;
    btnRemove = document.createElement('button');
    document.querySelector(`.cart-card-right-btn-remove-inner${id}`).appendChild(btnRemove);
    btnRemove.classList.add(`cart-card-right-btn-remove`);
    btnRemove.classList.add(`cart-card-right-btn-remove${id}`);


    let cardRightPrice = `cardRightPrice${id}`;
    cardRightPrice = document.createElement('div');
    document.querySelector(`.cart-card-right${id}`).appendChild(cardRightPrice);
    cardRightPrice.classList.add(`cart-card-right-price`);
    cardRightPrice.classList.add(`cart-card-right-price${id}`);
    cardRightPrice.innerHTML = `${price} $`;
}

//CART FINISH


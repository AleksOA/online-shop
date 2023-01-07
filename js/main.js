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
div_header__cart_namber.innerText = updateCartNamber(getArrayFromLocalStorage('cardData'));





function updateCartNamber(ArrayFromLocalStorage) {
    if (localStorage.getItem('cardData') == null) {
        div_header__cart_namber.innerText = "0";
        return '0'
    }
    let quantity = ArrayFromLocalStorage.length
    return quantity
}


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
            dataSize(prods[i].size, prods[i].id, 'cards__size-value', 'cards__card-size');
        }
    }
}

function dataSize(item, itemId, classNeme, classParentNeme) {
    if (item.length == 0) {
        addNewSize(itemId, `oversized`, `${classNeme}`, `${classParentNeme}`);
    }

    for (let i = 0; i < item.length; i++) {
        if (i >= 0) {
            addNewSize(itemId, item[i], `${classNeme}`, `${classParentNeme}`);
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
    m.classList.add(`cards__add-cart`);
    m.classList.add(`cards__add-cart${id}`);
    m.innerHTML = "Add to cart"
};

// size active start
sizeActiveClick('cards__size-value');

function sizeActiveClick(classSize) {
    let sizeValue = document.querySelectorAll(`.${classSize}`);

    sizeValue.forEach(function (div) {
        div.addEventListener('click', sizeActive);
    });

    function sizeActive() {
        let parent = this.parentNode;
        sizeVelueCurrentCard = parent.querySelectorAll(`.${classSize}`);
        sizeVelueCurrentCard.forEach(function (value) {
            value.classList.remove('active');
        });

        this.classList.add('active');
        if (parent.classList.contains('cards__card-size')) {
            parent.querySelector('.cards__size-title').style.backgroundColor = 'transparent';
        }
        if (parent.classList.contains('cart-card-center-size')) {
            parent.querySelector('.cart-card-center-size-title').style.backgroundColor = 'transparent';
        }

    };
}

function sizeActiveFromArray(arr, classElem) {
    arr.forEach(function dfg(elem) {

        sizeVelueCurrentCard = document.querySelector(`.${classElem}${elem.hash}`);
        if (sizeVelueCurrentCard == null) {
        }
        else {
            let parent = sizeVelueCurrentCard.parentNode;
            sizeVelueCurrent = parent.querySelectorAll(`.${classElem}`);
            sizeVelueCurrent.forEach(function (value) {
                value.classList.remove('active');
            });

            sizeVelueCurrentCard.classList.add('active');

        }
    })


}
// size active finish




// set id card to local storage start
const addToCart = document.querySelectorAll('.cards__add-cart');


addToCart.forEach(function (btn) {
    btn.addEventListener('click', setArrAddToCardToLocalStorede);
});
function setArrAddToCardToLocalStorede() {
    setIdCardLocalStorage(this, `cards__card`, `cards__size-value`);
    div_header__cart_namber.innerText = updateCartNamber(getArrayFromLocalStorage('cardData'));
}
function setIdCardLocalStorage(parentThis, classItem, classItemSize) {

    if (localStorage.getItem('cardData') == null) {
        localStorage.setItem('cardData', JSON.stringify(newDateForLocalStorage(faindIdCurrentCard(parentThis, classItem), faindSizeCurrentCard(parentThis, classItemSize))));
        return true
    }

    if (filters(getArrayFromLocalStorage('cardData'), faindIdCurrentCard(parentThis, classItem)) == true) {
        let arrayLocallSt = getArrayFromLocalStorage('cardData');

        let indexCurrentElem = arrayLocallSt.findIndex(item => {
            if (item.id == faindIdCurrentCard(parentThis, classItem)) {
                return true
            }
        });

        arrayLocallSt.splice(indexCurrentElem, 1, (newDateForLocalStorage(faindIdCurrentCard(parentThis, classItem), faindSizeCurrentCard(parentThis, `${classItemSize}.active`)))[0]);
        let mergedDataForLocalStorege = arrayLocallSt;
        localStorage.setItem('cardData', JSON.stringify(mergedDataForLocalStorege));
    }

    else {
        let mergedDataForLocalStorege = getArrayFromLocalStorage('cardData').concat(newDateForLocalStorage(faindIdCurrentCard(parentThis, classItem), faindSizeCurrentCard(parentThis, `${classItemSize}.active`)));
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
        sizeActive = 'not_selected';
        return sizeActive
    }
}

function filters(array, filterValue) {
    let newArray = array.filter(function (item) {
        return item.id == filterValue;
    });

    if (newArray.length >= 1) {
        return true
    }
    return false
};

function newDateForLocalStorage(id, size) {
    let quantity = '1';
    let hash = `${size}${id}`

    let arr = prods.filter(item => {
        return item.id == id;
    });

    let urlImg = arr[0].url;
    let price = arr[0].price;
    let allSize = arr[0].size;
    let DateForLocalStorage = [{ id: `${id}`, size: `${size}`, quantity: `${quantity}`, url: `${urlImg}`, price: `${price}`, allSize: allSize, hash: `${hash}` }];
    return DateForLocalStorage
}

function dataFromCartToLocalStorage() {

    let dateForLocalStorage = [];

    let cardInCart = document.querySelectorAll('.cart-card');

    cardInCart.forEach(function (item) {
        let quantity = item.querySelector('.cart-card-center-quantity-number').innerHTML;
        let id = item.getAttribute('id');
        let findClassActive = item.querySelector('.cart-card-center-size-value.active');
        let size = '';
        if (findClassActive !== null) {
            size = findClassActive.innerHTML;
        }
        else {
            size = 'not_selected';
        }

        let hash = `${size}${id}`;
        let urlImg = item.querySelector('.cart-produkt-card-img').getAttribute('src');

        let priceCurrent = item.querySelector('.cart-card-right-price').innerHTML;
        let a = priceCurrent.split('');
        let b = a.length - 2;
        let c = a.splice(b);
        let price = a.join('');

        let allSize = [];
        let currentAllSize = item.querySelectorAll('.cart-card-center-size-value');
        currentAllSize.forEach(function (size) {
            let a = size.innerHTML;
            allSize.push(a);
        });

        let dataCard = { id: `${id}`, size: `${size}`, quantity: `${quantity}`, url: `${urlImg}`, price: `${price}`, allSize: allSize, hash: `${hash}` };

        dateForLocalStorage.push(dataCard);

    })

    localStorage.setItem('cardData', JSON.stringify(dateForLocalStorage));

}

function plusMinusQuantityBuy() {
    let btnPlus = document.querySelectorAll('.cart-card-center-btn-plus');

    let btnMinus = document.querySelectorAll('.cart-card-center-btn-minus');

    let btnClose = document.querySelectorAll('.cart-card-right-btn-remove');

    let btnBuy = document.querySelector('.cart-btn');


    btnPlus.forEach(function (btn) {
        btn.addEventListener('click', plusQuantity);
    })

    btnMinus.forEach(function (btn) {
        btn.addEventListener('click', minusQuantity);
    })

    btnClose.forEach(function (btn) {
        btn.addEventListener('click', closeCard);
    })

    btnBuy.addEventListener('click', buyBtn);


}

function buyBtn() {
    let controlQuantity = 0;
    let controlSize = 0;

    let cardInCart = document.querySelectorAll('.cart-card');

    cardInCart.forEach(function (item) {
        if (!item.classList.contains('none')) {
            let quantity = item.querySelector('.cart-card-center-quantity-number').innerHTML;
            if (quantity == 0) {
                controlQuantity++
            }

            let size = item.querySelectorAll('.cart-card-center-size-value');
            let sizeControl = 0;
            size.forEach(function (elem) {
                if (elem.classList.contains('active')) {
                    sizeControl++
                }
            });

            if (sizeControl > 0) {
                item.querySelector('.cart-card-center-size-title').style.backgroundColor = 'transparent';
            }
            else {
                controlSize++
                item.querySelector('.cart-card-center-size-title').style.backgroundColor = 'red';

            }
        }
    })
    if (controlQuantity == 0 && controlSize == 0) {
        dataForm();
    }

};



function totalCart() {
    let totalCart = 0;

    let cardInCart = document.querySelectorAll('.cart-card');

    cardInCart.forEach(function (item) {
        let quantity = item.querySelector('.cart-card-center-quantity-number').innerHTML;

        let priceCurrent = item.querySelector('.cart-card-right-price').innerHTML;
        let a = priceCurrent.split('');
        let b = a.length - 2;
        let c = a.splice(b);
        let price = a.join('');

        let cardTotal = [+quantity] * [+price];

        totalCart += cardTotal;
    })

    let cartCost = document.querySelector('.cart-cost');
    cartCost.innerHTML = `${totalCart} $`;
};


function plusQuantity(event) {
    let quantity = event.target.closest('.cart-card-center-quantity').querySelector('.cart-card-center-quantity-number');
    quantity.style.backgroundColor = 'transparent';
    quantity = innerHTML = quantity.innerHTML++;
    totalCart();
};

function minusQuantity(event) {
    let quantity = event.target.closest('.cart-card-center-quantity').querySelector('.cart-card-center-quantity-number');
    if (quantity.innerHTML == 1) {
        quantity.style.backgroundColor = 'red';
        quantity = innerHTML = quantity.innerHTML--;
    }

    if (quantity.innerHTML == 0) {
    }

    else {
        quantity = innerHTML = quantity.innerHTML--;
    }
    totalCart();
};

let controlCloseCard = 0;
function closeCard(event) {
    let currentCard = event.target.closest('.cart-card');
    let id = currentCard.getAttribute('id');
    let arr = getArrayFromLocalStorage('cardData');

    let index = arr.findIndex(item => {
        if (item.id == id) {
            return true
        }
    });
    let deletedCard = arr.splice(index, 1);
    localStorage.setItem('cardData', JSON.stringify(arr));
    currentCard.style.display = 'none';
    div_header__cart_namber.innerText = updateCartNamber(getArrayFromLocalStorage('cardData'));
    let currentQuantity = currentCard.querySelector('.cart-card-center-quantity-number');
    currentQuantity.innerHTML = 0;
    currentCard.classList.add('none');

    totalCart();
    controlCloseCard++
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
            if (controlCloseCard == 0) {
                dataFromCartToLocalStorage();
            }
            removeElement('cart');
            popup.classList.remove('active');
            removeElement('read-more');
            sizeActiveFromArray(getArrayFromLocalStorage('cardData'), 'cards__size-value');

        }

        if (event.target.closest('.popup__close-background')) {
            if (controlCloseCard == 0) {
                dataFromCartToLocalStorage();
            }
            removeElement('cart');
            popup.classList.remove('active');
            removeElement('read-more');
            sizeActiveFromArray(getArrayFromLocalStorage('cardData'), 'cards__size-value');

        }
    }

    if (event.target.closest('.header__cart')) {
        popup.classList.add('active');

        cart();
        addProduktCardToCart(getArrayFromLocalStorage('cardData'));
        sizeActiveClick('cart-card-center-size-value');
        sizeActiveFromArray(getArrayFromLocalStorage('cardData'), 'cart-card-center-size-value');
        plusMinusQuantityBuy();
        controlCloseCard = 0;
        totalCart();
        if (popup.querySelector('.customerDataForm__inner') !== null) {
            let cart = document.querySelector('.cart');
            let form = document.querySelector('.customerDataForm__inner');
            if (!form.classList.contains('none')) {
                cart.classList.add('none');
            }
        }

    }

    if (event.target.closest('.cards__card-more')) {
        popup.classList.add('active');

    }
}


function removeElement(classElemet) {
    let elem = document.querySelectorAll(`.${classElemet}`);
    elem.forEach(function (elem) {
        elem.remove();
    });
}

// open popup finish
// POPUP FINISH


//READ MORE START
let arrReadMore = {};
function activCard(parentThis) {
    let cuurentCard = prods.filter(item => {
        return item.id == faindIdCurrentCard(parentThis, `cards__card`);
    });
    let id = cuurentCard[0].id;
    let description = cuurentCard[0].description;
    arrReadMore = { id: id, description: description };
}

function readMoreBody(arr) {
    let id = arr.id;
    let description = arr.description;


    let readMoreInner = `readMoreInner${id}`;
    readMoreInner = document.createElement('div');
    document.querySelector('.popup__content-box-inner').appendChild(readMoreInner);
    readMoreInner.classList.add('read-more');
    readMoreInner.classList.add(`read-more${id}`);


    let readMoreBoxInner = `readMoreBoxInner${id}`;
    readMoreBoxInner = document.createElement('div');
    document.querySelector(`.read-more${id}`).appendChild(readMoreBoxInner);
    readMoreBoxInner.classList.add('read-more-box-inner');
    readMoreBoxInner.classList.add(`read-more-box-inner${id}`);


    let readMoreItem = `readMoreItem${id}`;
    readMoreItem = document.createElement('div');
    document.querySelector(`.read-more-box-inner${id}`).appendChild(readMoreItem);
    readMoreItem.classList.add(`read-more-item`);
    readMoreItem.classList.add(`read-more-item${id}`);
    readMoreItem.innerHTML = `${description}`;

}

const cardMoreBtn = document.querySelectorAll('.cards__card-more');

cardMoreBtn.forEach(function (btn) {
    btn.addEventListener('click', openReadMor);
});

function openReadMor() {
    activCard(this);
    readMoreBody(arrReadMore);
}

//READ MORE FINISH










// CART START
// cart();
function cart() {
    const cart = document.createElement('div');
    document.querySelector('.popup__content-box-inner').appendChild(cart);
    cart.classList.add('cart');


    const cartCost = document.createElement('div');
    document.querySelector('.cart').appendChild(cartCost);
    cartCost.classList.add('cart-cost');
    cartCost.innerHTML = `${0} $`;


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

};



let arrCart = {};
function activCard(parentThis) {
    let cuurentCard = prods.filter(item => {
        return item.id == faindIdCurrentCard(parentThis, `cards__card`);
    });
    let id = cuurentCard[0].id;
    let description = cuurentCard[0].description;
    arrReadMore = { id: id, description: description };
}


function addProduktCardToCart(arr) {
    arr.forEach(function (item) {
        cartProduktCard(item);
    });
}


function cartProduktCard(arr) {

    let id = arr.id;
    let urlImg = arr.url;
    let numberQuantity = arr.quantity;
    let sizeCurrent = arr.size;
    let price = arr.price;



    let a = `cartCard${id}`;
    a = document.createElement('div');
    document.querySelector('.cart-box-inner').appendChild(a);
    a.classList.add(`cart-card`);
    a.classList.add(`cart-card${id}`);
    a.setAttribute('id', id)



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
    if (numberQuantity == 0) {
        quantityNumber.style.backgroundColor = 'red';
    }


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


    dataSize(arr.allSize, arr.id, 'cart-card-center-size-value', 'cart-card-center-size');
}

//CART FINISH


//FORM START


function dataForm() {
    let cart = document.querySelector('.cart');

    let customerDataForm = `
            <form class="customerDataForm__form" action="#">
                <input class="customerDataForm__input customerDataForm__input--first-name" placeholder="You first name" type="text"
                name="firstName">
                <input class="customerDataForm__input customerDataForm__input--last-name" placeholder="You last name" type="text"
                name="lastName">
                <input class="customerDataForm__input customerDataForm__input--phone" placeholder="You phone number" type="text"
                name="phone">
                <input class="customerDataForm__input customerDataForm__input--address" placeholder="You delivery address"
                type="text" name="address">
                <button class="customerDataForm__btn">Go dack</button>
                <input class="customerDataForm__submit" value="Send" type="submit" name="submit">
            </form>
        `;

    cart.classList.add('none');

    if (document.querySelector('.popup__content-box-inner').querySelector('.customerDataForm__inner') == null) {
        const form = document.createElement('div');
        document.querySelector('.popup__content-box-inner').appendChild(form);
        form.classList.add('customerDataForm__inner');
        form.innerHTML = customerDataForm;

        let btnGoBack = document.querySelector('.customerDataForm__btn');
        btnGoBack.addEventListener('click', goBack);

        let btnSend = document.querySelector('.customerDataForm__submit');
        btnSend.addEventListener('click', send);
    }
    else {
        let form = document.querySelector('.customerDataForm__inner');
        form.classList.remove('none');
    }

}

function goBack() {
    let form = document.querySelector('.customerDataForm__inner');
    let cart = document.querySelector('.cart');
    form.classList.add('none');
    cart.classList.remove('none');
}



function send(event) {
    event.preventDefault();
    let error = validateFirstName() + validateLastName() + validatePhone() + validateAddress();

    if (error == 0) {
        let orderData = [];
        orderData.push(getDataFromForm());
        orderData.push(getProductData());

        console.log(orderData)
        document.querySelector('.customerDataForm__form').reset();
        removeElement('cart');
        removeElement('customerDataForm__inner');
        localStorage.clear();
        div_header__cart_namber.innerText = updateCartNamber(getArrayFromLocalStorage('cardData'));

        let sizeCardActive = document.querySelectorAll('.cards__size-value');
        sizeCardActive.forEach(function (value) {
            value.classList.remove('active');
        });

    }

}

function getProductData() {
    let arrayFromLocalStorage = getArrayFromLocalStorage('cardData');
    let arr = [];
    let cost = {};
    let a = document.querySelector('.cart-cost').innerHTML.split('');
    let b = a.length - 2;
    a.splice(b);
    let price = a.join('');
    cost.cost = price;
    arr.push(cost);
    arrayFromLocalStorage.forEach(function (elem) {
        delete elem.allSize
        delete elem.hash
        delete elem.url
        let a = prods.filter(item => {
            return item.id == elem.id
        })
        elem.name = a[0].name;
        arr.push(elem)
    });
    return arr
}

function getDataFromForm() {
    let inputForm = document.querySelectorAll('.customerDataForm__input');
    let arrDataForm = {};
    inputForm.forEach(function (input) {
        let key = input.getAttribute('name');
        let value = input.value;
        arrDataForm[key] = value;
    });
    return arrDataForm
}


function validateFirstName() {
    let reg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
    let input = document.querySelector('.customerDataForm__input--first-name');
    return validate(reg, input);

}

function validateLastName() {
    let reg = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
    let input = document.querySelector('.customerDataForm__input--last-name');
    return validate(reg, input);

}

function validatePhone() {
    let reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    let input = document.querySelector('.customerDataForm__input--phone');
    return validate(reg, input);
}

function validateAddress() {
    let reg = /^[a-zA-Zа-яА-Я0-9,\.\s]+$/;
    let input = document.querySelector('.customerDataForm__input--address');
    return validate(reg, input);

}



function validate(regex, elem) {
    let i = 0;
    if (regex.test(elem.value)) {
        valid(elem);
    }
    else {
        notValid(elem);
        i++;
    }
    return i;
}

function notValid(input) {
    input.classList.add('active');
}

function valid(input) {
    input.classList.remove('active');
}

//FORM FINISH


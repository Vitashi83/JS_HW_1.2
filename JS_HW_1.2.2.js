const goods = {
    1: {
        id: 1,
        name: 'Рубашка',
        description: '',
        sizes: {
            M: 'M', X: 'X', XL: 'XL', XXL: 'XXL',
        },
        price: 1500,
        available: 'available',
    },
    2: {
        id: 2,
        name: 'Брюки',
        description: '',
        sizes: {
            M: 'M', X: 'X', XL: 'XL', XXL: 'XXL',
        },
        price: 2500,
        available: 'available',
    },
    3: {
        id: 3,
        name: 'Джинсы',
        description: '',
        sizes: {
            M: 'M', X: 'X', XL: 'XL', XXL: 'XXL',
        },
        price: 5500,
        available: 'available',
    },
    4: {
        id: 4,
        name: 'Джемпер',
        description: '',
        sizes: {
            M: 'M', X: 'X', XL: 'XL', XXL: 'XXL',
        },
        price: 3600,
        available: 'not_available',
    },
    5: {
        id: 5,
        name: 'Халат',
        description: '',
        sizes: {
            M: 'M', X: 'X', XL: 'XL', XXL: 'XXL',
        },
        price: 1200,
        available: 'available',
    },
};

// const goodIndex = [goods[1], goods[2]];

// goods[id]

const basket = [
    {
        goodId: 2,
        amount: 3,
    },
    {
        goodId: 5,
        amount: 2,
    },
];

function basket_clear() {
    // basket.length = 0;
    basket.splice(0);
    return basket;
}

function basket_add() {
    basket.push({goodId: 2, amount: 3});
    return basket;
}

function basket_clear1() {
    basket.splice(0, 1);
    return basket;
}

const basket_total = [
{
    totalAmount: basket[0].amount + basket[1].amount, //Общее количество товаров в корзине
    totalSumm: goods[basket[0].goodId].price * basket[0].amount + goods[basket[1].goodId].price * basket[1].amount, //Общая стоимость товаров в корзине
},
]

const basket_sum = goods[basket[0].goodId].price * basket[0].amount + goods[basket[1].goodId].price * basket[1].amount


console.log(basket);
// console.log(basket_sum);


console.log(basket_add());
console.log(basket_clear1());
console.log(basket_clear());
console.log(basket_total)
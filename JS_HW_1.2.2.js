const goods = [
    {
        id: 1,
        name: 'Рубашка',
        description: '',
        sizes: {
            M: 'M', X: 'X', XL: 'XL', XXL: 'XXL',
        },
        price: 1500,
        available: 'available',
    },
    {
        id: 2,
        name: 'Брюки',
        description: '',
        sizes: {
            M: 'M', X: 'X', XL: 'XL', XXL: 'XXL',
        },
        price: 2500,
        available: 'available',
    },
    {
        id: 3,
        name: 'Джинсы',
        description: '',
        sizes: {
            M: 'M', X: 'X', XL: 'XL', XXL: 'XXL',
        },
        price: 5500,
        available: 'available',
    },
    {
        id: 4,
        name: 'Джемпер',
        description: '',
        sizes: {
            M: 'M', X: 'X', XL: 'XL', XXL: 'XXL',
        },
        price: 3600,
        available: 'not_available',
    },
    {
        id: 5,
        name: 'Халат',
        description: '',
        sizes: {
            M: 'M', X: 'X', XL: 'XL', XXL: 'XXL',
        },
        price: 1200,
        available: 'available',
    },
];

const basket = [
    {
        good: 2,
        amount: 3,
    },
    {
        good: 3,
        amount: 2,
    },
];

//Полная чистка корзины
function basket_clear() {
    // basket.length = 0;
    basket.splice(0);
    return basket;
}

//Добавление товара в корзину
function basket_add (a, b) {
    basket.push({'goodId': a, 'amount': b});
    return basket;
}

//Удаление одной позиции из корзины
function basket_clear1() {
    basket.pop();
    return basket;
}

function summ() {
    let totalSumm = 0;
  
    for (let i = 0; i < basket.length; i++) {
      for (let n = 0; n < goods.length; n++) {
        if (basket[i].good == goods[n].id) {
          var mySum = basket[i].amount * goods[n].price;
          totalSumm += mySum;
        }
      }
    }
    return totalSumm;
  }
  

const basket_total = [
{
    totalAmount: basket.map(item => item.amount).reduce((prev, curr) => prev + curr), //Общее количество товаров в корзине
    
    totalSumm: summ(), //Общая стоимость товаров в корзине
},
];


console.log(basket);
console.log('Добавление позиции, корзина стала:',basket_add(3, 4));
console.log('Удаление одной позиции:', basket_clear1(1));
console.log('Общее количество и стоимость товаров в корзине:', basket_total);
console.log('Корзина полностью очищена', basket_clear());
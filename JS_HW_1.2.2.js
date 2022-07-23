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
        good: 1,
        amount: 7,
    },
    {
        good: 2,
        amount: 5,
    },
];

//Полная чистка корзины
function basket_clear() {
    // basket.length = 0;
    basket.splice(0);
    return basket;
}

//Добавление товара в корзину
function addGood(goodId, amount) {
    marker = 0;
    for (let i of goods) {
      if (i.id == goodId) {
        for (let n = 0; n < basket.length; n++) {
          if (goodId == basket[n].good) {
            marker = 1;
            basket[n].amount += amount;
          }
        }
  
        if (marker == 0) {
          marker = 2;
          var newObj = {
            good: goodId,
            amount: amount,
          };
          basket.push(newObj);
  
          console.log(`Добавлена позиция: ${i.name},`, `Количество: ${amount}`);
        }
      }
    }
  }


//Удаление одной позиции из корзины
function basket_clear1(goodId) {
    let i = basket.findIndex((good) => good.good == goodId);
        if(i >= 0) {
            basket.splice(i,1);
            }
            console.log('Заданная позиция', goodId,'удалена, корзина стала:', basket)
}

//Подсчет суммы стоимости товаров в корзине
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


// console.log(basket);
addGood(3, 4);
basket_clear1(3);
console.log('Общее количество и стоимость товаров в корзине:', basket_total);
console.log('Корзина полностью очищена', basket_clear());
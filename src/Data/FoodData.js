export function formatPrice(price){
    if (price) {return price.toLocaleString("en-US",
     {style: "currency",
      currency: "USD"});   }
}

export const foodItems = [
    {
        name: 'Cheese Pizza',
        img: '/img/pizza.png',
        section: 'Pizza',
        price: 1
    },
    {
        name: 'Pepperoni Pizza',
        img: '/img/pizza2.jpeg',
        section: 'Pizza',
        price: 1.5
    },
    {
        name: 'Chicken Pizza',
        img: '/img/chicken-pizza.jpeg',
        section: 'Pizza',
        price: 2
    },
    {
        name: 'Veggie Pizza',
        img: '/img/healthy-pizza.jpeg',
        section: 'Pizza',
        price: 3
    },
    {
        name: 'Burger',
        img:'/img/burger.jpeg',
        section: 'Sandwich',
        price: 2
    },
    {
        name:'Gyro',
        img:'/img/gyro.jpeg',
        section: 'Sandwich',
        prie: 4.5
    },
    {
        img: 'img/sandwich.jpeg',
        name: 'Sandwich',
        section: 'Sandwich',
        price: 6
    },
    {
        img: 'img/fries.jpeg',
        name: 'Fries',
        section : 'Sides',
        price: 1
    }
]

export const foods = foodItems.reduce((res, food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});
import {useState} from 'react';

export function useToppings(defaultTopping){
    const [toppings, setToppings] = useState(defaultTopping || getDefaultToppings())

    function checkTopping(index){
        const newToppings = [...toppings];
        newToppings[index].checked = !newToppings[index].checked;
        setToppings(newToppings)
    }
    return {
        checkTopping,
        toppings
    }
}
const toppingList = [
    "Extra Chesse",
    "Pepperoni",
    "Sausage",
    "Onions",
    "Peppers",
    "Ham",
    "Pineapple",
    "Mushrooms",
    "Olives"
];

function getDefaultToppings() {
    return toppingList.map(topping => ({
        name: topping,
        checked: false
    }))
}
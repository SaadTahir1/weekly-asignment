// object with type defined

type PizzaType = {
    Flavour : string;
    toppings : string[];
    isHalal : boolean;
    price : number;
    size : string;
} 

const Pizza: PizzaType = {
    Flavour: 'Barbeque',
    toppings: ['Pepperoni', 'Mozzarella', 'Mushrooms'],
    isHalal: true,
    price: 1250,
    size: 'Large'
}

console.log(Pizza) ;
console.log(Pizza.price) ;
console.log(Pizza.toppings[1]) ;
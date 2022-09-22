//iterate edilebilen yapılara uygulanan fonksiyonlardır.

let cart = [
    {id:1, productName:"Mouse", quantity:3, unitPrice:500},
    {id:2, productName:"Keyboard", quantity:33, unitPrice:590},
    {id:3, productName:"Pencil Case", quantity:13, unitPrice:52},
    {id:4, productName:"Bag", quantity:23, unitPrice:510},
    {id:5, productName:"Notebook", quantity:300, unitPrice:540},
    {id:6, productName:"Laptop", quantity:3000, unitPrice:5000},
]

cart.map(product=>{
    console.log(product.productName + " : " + product.unitPrice*product.quantity)
})
//SPA - single page application

//acc means accumulator which is the first value to start with
let total = cart.reduce((acc,product)=>acc + product.unitPrice * product.quantity,0)

console.log(total)
let quantityOver2 = cart.filter(product=>product.quantity>20)

console.log(quantityOver2)


function refTest(sepet){
    sepet.push({id:7, productName:"Monitor", quantity:73, unitPrice:400})
}

refTest(cart)

console.log(cart)

let sayi = 10

function sayiTopla(number){
    number+=1
}

sayiTopla(sayi)
console.log(sayi)


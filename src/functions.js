function addToCart(productName) {
    console.log("Sepete eklendi : "+ productName)
    
}

addToCart("büşra")
addToCart("enes")
addToCart("furkan")

let firstfunction = ()=>{
    console.log("hello world")
}

firstfunction()

let seconfFunc = function () {
    console.log("second hello world")

}

seconfFunc()

function addToCart2(product) {
    console.log("Ürün: "+product.productName+ " Birim fiyatı: "+product.unitPrice+" Adet: " + product.quantity)
}


let product1 = {
    productName:"Elma",
    quantity:34,
    unitPrice:12
}

addToCart2(product1)

function addToCart3(x) {
    console.log(x)
}

let products = [
    {   
        productName:"Elma",
        quantity:34 ,
        unitPrice:12
    },
    {   
        productName:"Armut",
        quantity:34 ,
        unitPrice:12
    },
    {   
        productName:"Kivi",
        quantity:34 , 
        unitPrice:12
    }
    
]

addToCart3(products)

// rest operatörü 
function add(...numbers){
    let total = 0
    for(let i=0;i < numbers.length; i++){
        total = total+numbers[i]
    }
    console.log(total)
}

add(10)
add(10,40)
add(30,20,60)

//rest operatörü kullanıldıktan sonra parametrede, o parametrenin sonuna başka parametre gelirse hata alırız çünkü temelde
//rest operatörü "ben bundan sonra gelen tüm parametreleri kendime alıyorum " demek. o yüzden de diğer parametre verilecekse ille rest operatörünün önüne alınmalıdır.

//...numbers diyince spread operatörü de oluyo yani bir arrayi bütün haldeyken tek tek elemanlarına ayırır.

 
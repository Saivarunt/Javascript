//asynchronous example
// let pizza
// function orderPizza() {
//     console.log("Order pizza")
//     setTimeout(()=>{
//         pizza ="P"
//         console.log(`${pizza} is ready`)
//     })
//     console.log("Pizza was ordered")
// }
// orderPizza()
// console.log("Call Abhi")
// console.log(`Eat ${pizza}`)

function orderPizza(callback) {
    setTimeout(()=>{
        const pizza ="P"
        callback(pizza)
    },2000)
}
function pizzaReady(pizza){
    console.log(`Eat ${pizza}`)
}
orderPizza(pizzaReady)
console.log("Call Abhi")

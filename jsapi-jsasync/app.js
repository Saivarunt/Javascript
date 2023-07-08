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

// function orderPizza(callback) {
//     setTimeout(()=>{
//         const pizza ="P"
//         callback(pizza)
//     },2000)
// }
// function pizzaReady(pizza){
//     console.log(`Eat ${pizza}`)
// }
// orderPizza(pizzaReady)
// console.log("Call Abhi")

//sync function blocks the next line of code where as async does not

//Promise-pending.resolve,reject
// function getWeather(){
//     return new Promise(function(resolve,reject){
//         // resolve('Sunny')
//         reject('Sunny')
//     })
// }

// const promise=getWeather()
// // console.log(promise)
// promise.then(function(data){
//     console.log(`First param ${data}`)
// },
// function(data){
//     console.log(`Second param ${data}`)
// }
// )

// function getWeather(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             resolve('Sunny')
//             // reject('Sunny')
//         },100)
//     })
// }

// function getWeatherIcon(weather){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             switch(weather){
//                 case "Sunny":
//                     resolve('S')
//                     break
//                 case "Cloudy":
//                     resolve('C')
//                     break
//                 case "Rainy":
//                     resolve('R')
//                     break
//                 default:
//                     reject("NO ICON FOUND")
//             }
//         },100)
//     })
// }


// function onSuccess(data){
//     console.log(`Success ${data}`)
// }
// function onError(error){
//     console.log(`Error ${error}`)
// }
// // getWeather()
// // .then(getWeatherIcon)
// // .then(onSuccess,onError)

// //alternatively to handle errors we can use the catch block
// getWeather()
// .then(getWeatherIcon)
// .then(onSuccess)
// .catch(onError)


// function fun1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("404")
//         },100)
//     })
// }

// function fun2(){
//     console.log("Function 2")
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("S")
//         },100)
//     })
// }

// function onSuccess(data){
//     console.log(`Success: ${data}`)
// }

// function onError(error){
//     console.log(`Error: ${error}`)
// }

// function onFinally(){
//     console.log("Done")
// }

// //If any of the functions fail it directly jumps to the error function
// fun1()
// .then(fun2,onError)//if we catch the error using .then the flow continues and will log undefined for anything preceeding 
// //if we just use .catch then the other functions do not get triggered
// .then(onSuccess)
// .catch(onError)
// .finally(onFinally)


//realworld example
function fetchData(){
    return new Promise(function(resolve,reject){
        fetch('https://api.weather.gov/gridpoints/OKX/35,35/forecast')
        .then(response=>response.json())
        // .then(data=>resolve(data.properties.periods[1].shortForecast))
        .then(data=>reject(data.properties.periods[1].shortForecast))
    })
}

//testing 
function onError(weather){
    console.log(`Error: ${weather}`)
}

function displayData(weather){
    console.log(weather)
}
fetchData()
.then(displayData)
.catch(onError)
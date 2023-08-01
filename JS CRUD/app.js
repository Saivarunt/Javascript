let inp = document.getElementById('inp')
let getbtn = document.getElementById('get')
let postbtn = document.getElementById('post')
let putbtn = document.getElementById('put')
let deletebtn = document.getElementById('delete')
let container = document.querySelector('.container')


getbtn.addEventListener("click",()=>{
    fetch("https://reqres.in/api/users",{
        method:"GET",
        headers:{    
            "Content-Type":"application/json"
        }})
    .then(res=>{
    return res.json()
    })
    .then(data=>{
        let ele = document.createElement('div')
        ele.innerText = data.data[0].email
        container.appendChild(ele)
        console.log(data.data[0])
    })
})

postbtn.addEventListener("click",()=>{
    fetch("https://reqres.in/api/users",{
        method:"POST",
        headers:{    
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email : inp.value
        })
    })
    .then(res=>{
    return res.json()
    })
    .then(data=>{
        let ele = document.createElement('div')
        ele.innerText = data.email
        container.appendChild(ele)
        console.log(data.email)
    })
})

putbtn.addEventListener("click",async()=>{
    await fetch("https://reqres.in/api/users/1",{
        method:"PUT",
        headers:{    
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email : inp.value
        })
    })
    .then(res=>{
    return res.json()
    })
    .then(data=>{
        let ele = document.createElement('div')
        ele.innerText = data.email
        container.appendChild(ele)
        console.log(data.email)
    })

    //get after put
    fetch("https://reqres.in/api/users",{
        method:"GET",
        headers:{    
            "Content-Type":"application/json"
        }})
    .then(res=>{
    return res.json()
    })
    .then(data=>{
        let ele = document.createElement('div')
        ele.innerText = data.data[0].email
        container.appendChild(ele)
        console.log(data.data[0])
    })
})

deletebtn.addEventListener("click",async()=>{
    await fetch("https://reqres.in/api/users/"+inp.value,{
        method:"DELETE"
    })
    .then(res=>{
    return res
    })
    .then(data=>{
        let ele = document.createElement('div')
        ele.innerText = "Status: "+data.status
        container.appendChild(ele)
        console.log(data)
    })

    //get after delete
    fetch("https://reqres.in/api/users",{
        method:"GET",
        headers:{    
            "Content-Type":"application/json"
        }})
    .then(res=>{
    return res.json()
    })
    .then(data=>{
        let ele = document.createElement('div')
        ele.innerText = data.data[0].email
        container.appendChild(ele)
        console.log(data.data[0])
    })
})
window.addEventListener("load", function() {    
    const form = document.getElementById('my-form');
    let name = document.getElementById('name');
    let mail = document.getElementById('mail');
    form.addEventListener("submit", function(e) {
    e.preventDefault()
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
    method: 'POST', 
    mode: 'no-cors',
    headers: {'Access-Control-Allow-Origin': '*',},
    body: data,
    })
    .then(() => {
    alert("Success!");
    name.value="";
    mail.value="";
    })
});
});
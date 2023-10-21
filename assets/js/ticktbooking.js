let name = document.querySelector('#name');
let email = document.querySelector('#email');
let mobile = document.querySelector('#mobile');
let sumbit = document.querySelector('#submitbtn');
let date = document.querySelector('#date');
let adult_ppl = document.querySelector('#adult');
let child512 = document.querySelector('#child512')
let price = document.querySelector('#price');
let child = document.querySelector('#child')
let body = document.querySelector('body');
let form = document.querySelector('form');
let adult_total_price = 0;
let child512_total_price=0;
let audlt_price;
let child512_price;
let child_price;
let people_count;
let ticketprint = document.querySelector('#ticketprint');
let ticketbooking = document.querySelector('.ticketbooking');
adult_ppl.addEventListener('change',function(){
    audlt_price = adult_ppl.value;
    adult_total_price = audlt_price * 100;
    price.value = child512_total_price+ adult_total_price;
    updatePeopleCount()
})
child512.addEventListener('change',function(){
    child512_price = child512.value;
    child512_total_price = child512_price * 50;
    price.value = child512_total_price + adult_total_price;
    updatePeopleCount();
})
child.addEventListener('change',function(){
    child_price = child.value;
    var child_total_price = child_price;
    updatePeopleCount();

})
let emailregex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/
let mobileregex = /^(\+\d{1,3}\s?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
let curent_date = new Date();
function updatePeopleCount() {
    people_count = parseInt(adult_ppl.value) + parseInt(child512.value) + parseInt(child.value);
    price.value = child512_total_price + adult_total_price;
}
//alert(curent_date)
// price.value = child512_total_price + adult_total_price;
sumbit.addEventListener('click',function(){
   if(name.value === "" || name.value.length < 4){
    alert("Name is not acceptable")
   }
   else if(email.value === "" || !email.value.match(emailregex)){
    alert('Email is not acceptable');
   }
   else if(mobile.value === '' || !mobile.value.match(mobileregex) ){
    alert('Mobile is not acceptable');
   }
   else if(date.value ===""){
    alert('enter date');
   }
   else{
    printTicket(); 
    blankform();
   }
});
function blankform(){
    name.value = "";
    email.value = "";
    mobile.value = "";
    adult_ppl.value = "";
    child512.value = "";
    child.value = "";
    price.value="";
    date.value = "";
}
function randomId(){
    return Math.floor(Math.random() * 10000);
}
function printTicket(){
    ticketprint.innerHTML = `
        <h3>Ticket Confirmed</h3>
        <i class="fa-solid fa-check"></i>
        <p>Ticket ID : ${randomId()}</p>
        <p>Name : ${name.value}</p>
        <p>Date of visit : ${date.value}</p>
        <p>No. of people : ${people_count}</p>
        <p>Total Price : ${price.value}</p>
        <button class="okay">Okay</button>
    `
    ticketprint.style.backgroundColor = "white";
    let button = document.querySelector('.okay');
    button.addEventListener('click',function(){
        ticketprint.style.display="none"
    ticketbooking.style.filter = "none";

    })
    ticketbooking.style.filter = "blur(4px)";
    
}
// printTicket(); 

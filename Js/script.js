// Declaring the constants for buttons and paragraph output 
const orderBtn = document.querySelector("#submitOrderBtn");
const outputOrder = document.querySelector("#output");
const studentNo = document.querySelector("#studentNumber");

// Constructor to generate object for pizza order
class Pizza
{
    size;
    crust;
    sauce;
    toppings;
    quantity;
    promocode;
    name;
    email;
    phone;
    constructor(size,crust,sauce,toppings,quantity,promocode,name,email,phone)
    {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = toppings;
        this.quantity = quantity;
        this.promocode = promocode;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    Order()
    {
        return `Order for ${this.name} is ready: ${this.quantity} ${this.size} ${this.crust} pizza with ${this.sauce} and ${this.toppings.join(', ')} toppings.<br> Promo code: ${this.promocode}<br> Contact: ${this.phone}<br> Email: ${this.email}`;
        
    }

}

// adding event listner to pizza order form
orderBtn.addEventListener("click", function(event){
    event.preventDefault();
    let size = document.querySelector("#pizzaSize").value;
    let crust = document.querySelector('input[name="crustType"]:checked');
    let sauce = document.querySelector('input[name="sauce"]:checked');
    let quantity = document.querySelector('#quantity').value;
    let promocode = document.querySelector('#promoCode').value;
    let name = document.querySelector('#name').value;
    let phone = document.querySelector('#phone').value;
    let email = document.querySelector('#email').value;
    let toppings = [];
    // This for each loop will iterate through each check box and add checked values to toopings array
    document.querySelectorAll('input[name="toppings"]').forEach(topping => {
        if(topping.checked)
        {
            toppings.push(topping.value);
        }
    });
    
    if(toppings.length === 0)
    {
        toppings[0] = "No";
    }
    
    if (promocode === "") {
        promocode = "No Code";
    }
    // Checking validation for name, phone and email
    if (validateName(name)) {
        
    }
    else if (validateEmail(email)) {
        
    }
    else if (validatePhone(phone)) {
        
    }
    // validation for crust selection
    else if (crust === null) {
        alert("Select the crust");
    }
    // validation for sauce selection
    else if (sauce === null) {
        alert("Select the sauce");
    }
    // validation for selection
    else if(Number(quantity) <0 || Number(quantity)>50)
    {
        alert("Quantity should be greater than 0 and less than 100");
    }
    else
    {
        // creating object of Pizza using constructor
        let yourOrder = new Pizza(size,crust.value,sauce.value,toppings,quantity,promocode,name,email,phone);
        
        outputOrder.innerHTML = yourOrder.Order();
        studentNo.innerHTML = "Student Number 200552775"
    }   

});

// This function will validate name
function validateName(name)
{
    if (name === "") 
    {
        alert("Name is required");
        return true;
    }  
    return false;
}
// This funtion will validate phone number
function validatePhone(phone)
{
    if(phone === "")
    {
        alert("Phone number is required");
        return true;
    }
    // this matches the regex pattern for phone number
    else if (!phone.match("\\d{10}"))
    {
        alert("Enter valid phone number (10 digits)");
        return true;
    }
    return false;
}
// This function will validate email
function validateEmail(email)
{
    if(email === "")
    {
        alert("email address is required");
        return true;
    }
    else if(!email.match("([A-Za-z_]+@{1}[A-Za-z]+.com{1})$"))
    {
        alert("Enter valid email (e.g. xyz@name.com")
        return true
    }
    return false;
}
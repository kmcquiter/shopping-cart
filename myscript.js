/*Create prompts for the customers
1) Ask the user to input their name
2) Create three prompts for the product names
3) Create three prompts for the prices

Detertime the price for the first product is 0.

if(price === 0) then prompt the user the
price can't be zero. and prompt the user to 
enter a valid price.

Calculate the  subtotal of the items:

subtotal = price1 + price2 + price3;

create a console log to show the subtotal.

Calculate the grand total bt adding a tax of 6.25%

grandTotal = subtotal + 6.25%

Display a message to the customer:

message = "customerName,your grand total is: $grandTotal";

*/

//  Create a prompt to ask for the customer's name
    const customerName = prompt(" Please Enter your name:");
    console.log(customerName);

// create three prompts that let the user to enter three products
    let productName1 = prompt("Enter the first product: ");
    console.log(productName1);
  
    let productName2 = prompt("Enter the second product: ");
    console.log(productName2);

    let productName3 = prompt("Enter the third product: ");
    console.log(productName3);

// Create three prompts for the customer to enter the price for the three products
    let productPrice1 = prompt("Enter the price for the first product: ");
    console.log(productPrice1);

  //  This if statment checks if the customer enters thr first product price with 0, then it 
  // prompts them to enter the price that is not 0.
    if(productPrice1 === "0"){

       productPrice1 = prompt("Price can't be 0, please enter a valid price: ");
       console.log(productPrice1);
     }
     
    let productPrice2 = prompt("Enter the price for the second product: ");
    
    console.log(productPrice2);

    let productPrice3 = prompt("Enter the price for the third product: ");
    console.log(productPrice3);

    // Calculate the subototal by adding all three product prices that are converted from a string to a number.
    let subtotal = Number(productPrice1) + Number(productPrice2) + Number(productPrice3);
    console.log(subtotal);

    // Calculate the grand total by adding the tax which is 6.25%.
    let grandTotal = subtotal + 6.25;
    console.log(grandTotal);

    // Print the message to the user in the console with their name and their grand total.
    let message = customerName + " "+ "your grand total is: $" + " " + grandTotal;
    console.log(message);

    
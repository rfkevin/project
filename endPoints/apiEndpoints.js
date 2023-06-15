import { dbRequest } from "../utils/request";

// registre new client
export async function register(user) {
  const options = {
    method: "POST",
    body: JSON.stringify(user),
  };
  return await dbRequest("/api/register", options);
}


// proccess to payment
export async function paymentCheckOut (cartItems){
  const options = {
    method: "POST",
    body: JSON.stringify(cartItems),
  };
  return await dbRequest("/api/payment", options)
} 

// add new product
export async function addProduct(product){
  const options = {
    method: "POST",
    body: JSON.stringify(product),
  };
  return await dbRequest("/api/product", options);
}

// order

export async function addOrder(order){
  
}
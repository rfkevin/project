import { dbRequest } from "../utils/request";
/* USER */
// registre new client
export async function register(user) {
  const options = {
    method: "POST",
    body: JSON.stringify(user),
  };
  return await dbRequest("/api/register", options);
}

// show a client
export async function getUser(){
  const options = {
    method: "GET",
  };
  return await dbRequest("/api/register", options);
}

// modify a client 
export async function updateUser(user){
  const options = {
    method: "PUT",
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
// remove an user
export async function remUser(user){
  const options = {
    method: "DELETE",
    body: JSON.stringify(user),
  };
  return await dbRequest("/api/register", options);
} 
/* PRODUCTS */

// add new product
export async function addProduct(product){
  console.log(product);
  const options = {
    method: "POST",
    body: JSON.stringify(product),
  };

  return await dbRequest("/api/product", options);
}

//  show a product
export async function getProduct(){
  const options = {
    method: "GET",
  };
  return await dbRequest("/api/product", options);
}

// remove an product
export async function remProduct(product){
  const options = {
    method: "DELETE",
    body: JSON.stringify(product),
  };
  return await dbRequest("/api/product", options);
}
//  update an product
export async function updateProduct(product){
  const options = {
    method: "PUT",
    body: JSON.stringify(product),
  };
  return await dbRequest("/api/product", options);
}
// order
export async function GetOrder(){
  const options = {
    method: "GET"
  };
  return await dbRequest("/api/order", options);
}
"use client"
import React from 'react';
import getStripe from '../../utils/getStripe';
import { paymentCheckOut } from '../../endPoints/apiEndpoints';
const page = () => {
    const product = [{name: "bons", price: 10, quantity: 2}, {name: "city", price: 50, quantity: 4}]
    const handleCheckout = async () => {
        const stripe = await getStripe();
        const response =  await paymentCheckOut(product);
        if(response.statusCode === 500) return;
        const data = response.data
        console.log(data) ;

        stripe.redirectToCheckout({sessionId: data.id})
    }
  return (
    <>
    <div>payment</div>
    <button onClick={handleCheckout}>pay me now </button>
    </>
  )
}

export default page
"use client"
import React from 'react';
import getStripe from '../../utils/getStripe';
import { paymentCheckOut } from '../../endPoints/apiEndpoints';
import { useSession,signOut } from 'next-auth/react';


const Page = () => {
    const { data: session } = useSession();
    const product = [{name: "bons", price: 10, quantity: 2}, {name: "city", price: 50, quantity: 4}]
    const data = {listItems : product, email: session.email}
    const handleCheckout = async () => {
        const stripe = await getStripe();
        const response =  await paymentCheckOut(data);
        if(response.statusCode === 500) return;
        stripe.redirectToCheckout({sessionId: data.id})
    }
  return (
    <>
    <div>payment</div>
    <button onClick={handleCheckout}>pay me now </button>
    </>
  )
}

export default Page
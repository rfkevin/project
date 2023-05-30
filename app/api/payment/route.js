import Stripe from "stripe";

const stripe =new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
    const listItems = await req.json();
    const origin = req.headers.origin || req.headers.referer;
    console.log(req.url)
    try {
        // Create Checkout Sessions from body params.
        const params = {
                line_items: listItems.map((item) => {
                    return {
                        price_data: {
                            currency: 'EUR',
                            product_data: {
                                name: item.name,
                                images: ["https://www.travelguide.amsterdam/wp-content/uploads/2018/06/amsterdam_travelcard-1030x648.jpg"],
                            },
                            unit_amount: item.price * 100,
                        },
                        adjustable_quantity:{
                            enabled: true,
                            minimum: 1
                        },
                        quantity: item.quantity
                    }
                }),
                mode: 'payment',
            submit_type: 'pay',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            success_url: `http://localhost:3000/payment/success`,
            cancel_url: `${req.url}/?canceled=true`,
            shipping_options: [
                { shipping_rate: 'shr_1N8UJdLXsyqJa5uy0D99fV5a' },
                { shipping_rate: 'shr_1N8UKjLXsyqJa5uysmfA7SpI' }
            ]
        }
        const session = await stripe.checkout.sessions.create(params);
        console.log(session);
        const response = new Response(JSON.stringify(session), { status: 200, headers: { 'Content-Type': 'application/json' }});
        return response;
    } catch (err) {
        const body = JSON.stringify({ message: err.message });
        const response = new Response(body, { status: err.statusCode || 500, headers: { 'Content-Type': 'application/json' } });
        return response;
    }
}

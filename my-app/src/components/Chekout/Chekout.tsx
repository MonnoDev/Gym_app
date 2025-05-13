// CheckoutForm.tsx
import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Checkout: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) return;

    // Simulate client-side call only — NO real charge
    const result = await stripe.createToken(cardElement);

    if (result.error) {
      console.error(result.error.message);
    } else {
      console.log("Received Stripe token:", result.token);
      alert("Test payment token created! ✅");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay (Test)</button>
    </form>
  );
};

export default Checkout;

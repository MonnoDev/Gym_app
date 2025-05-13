// CheckoutPage.tsx
import React from "react";
import Checkout from "../../components/Chekout/Chekout";
import StripeProvider from "../../context/StripeProvider";

const CheckoutPage: React.FC = () => (
  <StripeProvider>
    <h1>Checkout</h1>
    <Checkout />
  </StripeProvider>
);

export default CheckoutPage;

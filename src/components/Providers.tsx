"use client"; // <--- Esto es lo más importante

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test", // "test" evita que explote si no hay ID
        currency: "MXN" // El sitio cotiza y cobra en Pesos Mexicanos (igual que Stripe)
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
}
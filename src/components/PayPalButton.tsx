"use client";
import { PayPalButtons } from "@paypal/react-paypal-js";

interface Props {
  amount: number;
  libroId: string;
}

export const PaypalButton = ({ amount, libroId }: Props) => {
  return (
    <div className="w-full min-h-[50px] mt-4">
      <PayPalButtons
        style={{ layout: "horizontal", color: "gold", shape: "rect", label: "pay" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [{
              reference_id: libroId,
              amount: { currency_code: "USD", value: amount.toString() },
            }],
          });
        }}
        onApprove={async (data, actions) => {
          const details = await actions.order?.capture();
          if (details?.status === "COMPLETED") {
            window.location.href = "/success";
          }
        }}
      />
    </div>
  );
};
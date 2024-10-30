import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { checkoutSession } = useParams(); // Get session ID from URL
  const [message, setMessage] = useState("Processing your payment...");

  useEffect(() => {
    const completePayment = async () => {
      try {
        const response = await fetch(
          `http://localhost:5175/api/payments/complete-auction/${checkoutSession}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          setMessage("Your payment was successful! Thank you for choosing us.");
        } else {
          setMessage(
            "Payment could not be completed. Please try again or contact support."
          );
        }
      } catch (error) {
        console.error("Error completing payment:", error);
        setMessage("An error occurred. Please try again or contact support.");
      }
    };

    completePayment();
  }, [checkoutSession]);

  return (
    <div className="container mx-auto p-4 text-center">
      <div className="bg-green-100 border border-green-300 rounded-lg p-6">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          🎉 Thank You!
        </h1>
        <p className="text-xl text-gray-700 mb-4">{message}</p>
        <p className="text-gray-600">
          We’re delighted to have your trust. You’ll receive a confirmation
          email shortly.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition"
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;

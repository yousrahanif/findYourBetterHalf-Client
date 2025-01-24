import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button, Label, TextInput } from "flowbite-react";
import Swal from "sweetalert2";

const Checkout = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const cardNumber = e.target.cardNumber.value;
    const email = user?.email; 
    const biodataId = data?.bioId;  
  
    const isValidCardNumber = /^\d{13,19}$/.test(cardNumber);
  
    if (isValidCardNumber) {
      setIsSubmitting(true);
  
      try {
        const response = await fetch("http://localhost:5000/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cardNumber,
            email, 
            biodataId, 
          }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          Swal.fire({
            title: "Success!",
            text: `Payment successful!`,
            icon: "success",
            confirmButtonText: "OK",
          });
  
          e.target.reset();
        } else {
          Swal.fire({
            title: "Error!",
            text: data.message || "Something went wrong!",
            icon: "error",
            confirmButtonText: "Try Again",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "An error occurred. Please try again.",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please enter a valid card number.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };
  

  return (
    <div>
      <Helmet>
        <title>LoveForever || Checkout</title>
      </Helmet>
      <div className="flex items-center justify-center mt-10 p-10">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Checkout Form</h2>
          <form
            className="flex max-w-md flex-col gap-4 justify-center border-2 p-4"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="biodataId" value="Biodata ID" />
              </div>
              <TextInput
                id="biodataId1"
                type="text"
                name="biodataId"
                placeholder={data?.bioId}
                readOnly
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your Email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                name="email"
                placeholder={user?.email}
                readOnly
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="cardNumber" value="Your Card Number" />
              </div>
              <TextInput
                id="cardNumber"
                type="number"
                name="cardNumber"
                placeholder="Enter card number"
                required
              />
            </div>
            <p className="flex justify-center items-center p-4">
              <Button className="bg-red-500" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

import React, { useEffect, useState } from 'react'

const Checkout = () => {
    const [message, setMessage] = useState("");

    const sendRequest = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/create-checkout-session", {
            method: "POST",
        });
        const data = await response.json();
        console.log(data);
        setMessage(data.message);
    }


    return <section>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
        </div>
      </div>
      <form onSubmit={sendRequest} method="POST">
        <button type="submit">
          Checkout
        </button>
      </form>
    </section>
};

export default Checkout;
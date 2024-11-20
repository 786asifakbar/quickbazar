const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");
const app = express();

const stripe = new Stripe("sk_test_your_secret_key"); // Replace with your Stripe secret key

app.use(cors());
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
  const { items } = req.body;

  const lineItems = items.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: {
        name: item.name,
      },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: lineItems,
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));

const express = require("express");
const cors = require("cors");  // Enable Cross-Origin Resource Sharing (CORS)
const productsRouter = require("./routes/products"); // Import product routes

const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Use the products route for API requests
app.use("/api", productsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

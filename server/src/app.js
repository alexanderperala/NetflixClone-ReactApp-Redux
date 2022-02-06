const express = require('express')
const cors = require("cors");

const app = express();
const port = 8000; 

app.use(express.json());
app.use(cors());

//Routes / Endpoints
// GET /api/products
app.get("/", (req, res) => {
    res.send('<h1>Hello World!</h1>');
  });
  
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
  });
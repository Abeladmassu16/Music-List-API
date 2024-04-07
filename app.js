const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoute = require("./src/routes/api_v1");

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors()); // Allow all origins (not recommended for production)


//routes
app.use("/v1", userRoute);
const port = https://github.com/Abeladmassu16/Music-List-API/blob/main/
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
